import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { ISearchSuggestion } from "../types/SearchSuggestion"
import { IWeatherInfo } from "../types/WeatherInfo"
import useDebounce from "./useDebounce"
import { queryClient } from "../App"

const getFromCache = (key: string) => {
  return queryClient.getQueryData([ key ])
}

export const useForecast = () => {
  const [ isSearching, setIsSearching ] = useState<boolean>(false)
  const [ searchText, setSearchText ] = useState<string>('')
  const [ clickedSuggestion, setClickedSuggestion ] = useState<ISearchSuggestion>(
    {} as ISearchSuggestion
  )
  const [ weatherInfo, setWeatherInfo ] = useState<IWeatherInfo>(
    {} as IWeatherInfo
  )
  const debounceSearch = useDebounce(searchText, 300)

  let { data: searchSuggestions } = useQuery({
    queryKey: [ `search/${debounceSearch}` ],
    queryFn: () => {
      if (debounceSearch !== '') {
        const cache = getFromCache(`search/${debounceSearch}`) // try to access the data from cache
        if (cache) return cache as ISearchSuggestion[]
        return fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${debounceSearch}&limit=5&appid=${process.env.REACT_APP_WEATHER_KEY}`
        ).then((data) => data.json())
      } else {
        return []
      }
    },
  })

  const searchHandler = () => {
    try {
      if (clickedSuggestion.lat && clickedSuggestion.lon) {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${clickedSuggestion.lat}&lon=${clickedSuggestion.lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
        )
          .then((data) => data.json())
          .then((data) => setWeatherInfo(data))
      } if (searchSuggestions.length !== 0) {
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${searchSuggestions[ 0 ].lat}&lon=${searchSuggestions[ 0 ].lon}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
        )
          .then((data) => data.json())
          .then((data) => setWeatherInfo(data))
      }
    } catch (error) {
      console.log('error')
    }
    setIsSearching(false)
  }

  const onOptionSelect = (suggestion: ISearchSuggestion) => {
    setClickedSuggestion(suggestion)
    setSearchText(suggestion.name)
  }


  return {
    searchText,
    setSearchText,
    searchSuggestions,
    onOptionSelect,
    searchHandler,
    weatherInfo,
    isSearching,
    setIsSearching
  }
}