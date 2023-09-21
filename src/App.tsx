import { useState } from 'react'
import { styled } from 'styled-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SearchComponent } from './components/Search'
import { ListComponent } from './components/List'
import { OpenButtonComponent } from './components/StartButtonComponent'
import Container from './components/Container'
import LoadingSearchElement from './components/LoadingSearch'
import { useForecast } from './hooks/useForecast'
import Forecast from './components/Forecast'

const AppWrapper = styled.div`
  background-color: #003f84;
  background-image: linear-gradient(62deg, #0052ab 0%, #121415 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SearchWrapper = styled.div`
  position: relative;
  width: 50%;
`

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
      cacheTime: 100000,
      refetchOnWindowFocus: false,
    },
  },
})

function AppContainer(): JSX.Element {
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(30)

  const changeWidth = () => {
    setWidth(() => 40)
  }
  const resize = () => {
    setHeight(() => 80)
    setWidth(() => 60)
  }

  const {
    searchText,
    setSearchText,
    searchSuggestions,
    onOptionSelect,
    searchHandler,
    weatherInfo,
    isSearching,
    setIsSearching,
  } = useForecast()

  return (
    <AppWrapper>
      <OpenButtonComponent
        width={width}
        changeWidth={changeWidth}
      ></OpenButtonComponent>
      <Container height={height} width={width}>
        <SearchWrapper>
          <SearchComponent
            searchText={searchText}
            setSearchText={setSearchText}
            setIsSearching={setIsSearching}
            resize={resize}
            searchHandler={searchHandler}
          />
          {isSearching ? (
            <>
              {searchSuggestions !== undefined ? (
                searchSuggestions.length !== 0 && (
                  <ListComponent
                    searchSuggestions={searchSuggestions}
                    onOptionSelect={onOptionSelect}
                  ></ListComponent>
                )
              ) : (
                <LoadingSearchElement />
              )}
              {searchSuggestions !== undefined ? (
                searchSuggestions.length === 0 && searchText !== '' ? (
                  <LoadingSearchElement />
                ) : null
              ) : null}
            </>
          ) : null}
        </SearchWrapper>
        <Forecast data={weatherInfo} height={height}></Forecast>
      </Container>
    </AppWrapper>
  )
}

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContainer />
      </QueryClientProvider>
    </>
  )
}

export default App
