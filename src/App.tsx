import { useState } from 'react'
import styled from 'styled-components'
import { SearchSuggestion } from './types/SearchSuggestion'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import useDebounce from './hooks/useDebounce'

const AppWrapper = styled.div`
  background-color: #003f84;
  background-image: linear-gradient(62deg, #0052ab 0%, #121415 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
type ContainerProps = {
  width: number
}
type StartButtonProps = {
  isdisplayed: number
}
export const StartButton = styled.button<StartButtonProps>`
  display: ${(props) => (props.isdisplayed ? 'block' : 'none')};
  font-size: 2rem;
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 10px;
`
export const Container = styled.div<ContainerProps>`
  background-image: url('https://img.favpng.com/23/23/2/blue-sky-cloud-png-favpng-9K6q1q3Gs4QQ2gBNzfqHzGUTA.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;

  opacity: ${(props) => (props.width === 0 ? '0%' : '100%')};
  @media (min-width: 300px) {
    width: 85%;
    height: 90%;
  }
  @media (min-width: 900px) {
    width: ${(props) => props.width + '%'};
    height: 30%;
  }
  transition: all 0.3s ease;
`
const SearchWrapper = styled.div`
  position: relative;
  width: 50%;
`
const Search = styled.input`
  width: 97%;
  height: 35px;
  border-radius: 1rem;
  font-size: 2rem;
  padding: 5px;
`
const List = styled.ul`
  background-color: white;
  position: absolute;
  list-style-type: none;
  width: 100%;
  font-size: 1.7rem;

  border-radius: 1rem;
  top: 25px;
  border: black 1px solid;
  padding-left: 0px;
`
const ListItem = styled.li`
  cursor: pointer;
  padding-left: 7px;
  /* font-size: 1.5rem; */
  &:hover {
    background-color: gray;
  }
`
const Hr = styled.hr`
  margin: 4px 0 4px 0;
  width: 90%;
  opacity: 0;
`

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      cacheTime: 100000,
      refetchOnWindowFocus: false,
    },
  },
})

const getFromCache = (key: string) => {
  return queryClient.getQueryData([key])
}

function InnerApp(): JSX.Element {
  const [width, setWidth] = useState<number>(0)
  const [searchText, setSearchText] = useState<string>('')
  const changeWidth = () => {
    setWidth((prev) => prev + 40)
  }

  const debounceSearch = useDebounce(searchText, 300)

  const { data } = useQuery({
    queryKey: [`search/${debounceSearch}`],
    queryFn: () => {
      if (debounceSearch !== '') {
        const cache = getFromCache(`search/${debounceSearch}`) // try to access the data from cache
        if (cache) return cache as SearchSuggestion[]
        return fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${debounceSearch}&limit=5&appid=${process.env.REACT_APP_WEATHER_KEY}`
        ).then((data) => data.json())
      } else {
        return []
      }
    },
  })

  const onOptionSelect = (option: SearchSuggestion) => {
    console.log(option)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${option.lat}&lon=${option.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
    )
      .then((data) => data.json())
      .then((data) => console.log(data))
    //
  }

  return (
    <AppWrapper>
      <StartButton isdisplayed={width === 0 ? 1 : 0} onClick={changeWidth}>
        Search
      </StartButton>
      <Container width={width}>
        <SearchWrapper>
          <Search
            data-testid="input"
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value)}
          ></Search>
          {data !== undefined
            ? data.length !== 0 && (
                <List>
                  {data.map((item: SearchSuggestion, idx: number) => {
                    return (
                      <>
                        {idx === 0 ? <Hr /> : null}
                        <ListItem
                          onClick={() => {
                            onOptionSelect(item)
                          }}
                          data-testid="li"
                          key={item.name + '_' + idx}
                        >
                          {item.name}, {item.country}
                        </ListItem>
                        {idx === data.length - 1 ? <Hr /> : null}
                      </>
                    )
                  })}
                </List>
              )
            : null}
        </SearchWrapper>
      </Container>
    </AppWrapper>
  )
}

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <InnerApp />
      </QueryClientProvider>
    </>
  )
}

export default App
