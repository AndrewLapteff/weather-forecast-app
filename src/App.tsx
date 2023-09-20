import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ISearchSuggestion } from './types/SearchSuggestion'
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import useDebounce from './hooks/useDebounce'
import { SearchComponent } from './components/Search'
import { ListComponent } from './components/List'
import { OpenButtonComponent } from './components/StartButtonComponent'
import { IWeatherInfo } from './types/WeatherInfo'
import { SearchButtonComponent } from './components/SearchButtonComponent'
import Container from './components/Container'
import LoadingSearchElement from './components/LoadingSearch'
import { useForecast } from './hooks/useForecast'

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
  const changeWidth = () => {
    setWidth((prev) => 40)
  }

  const {
    searchText,
    setSearchText,
    searchSuggestions,
    onOptionSelect,
    searchHandler,
  } = useForecast()

  return (
    <AppWrapper>
      <OpenButtonComponent
        width={width}
        changeWidth={changeWidth}
      ></OpenButtonComponent>
      <Container width={width}>
        <SearchWrapper>
          <SearchComponent
            searchText={searchText}
            setSearchText={setSearchText}
          />
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
        </SearchWrapper>
        <SearchButtonComponent
          searchHandler={searchHandler}
        ></SearchButtonComponent>
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
