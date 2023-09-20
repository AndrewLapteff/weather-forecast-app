interface LocalNames {
  en: string
  ua: string
}

export interface ISearchSuggestion {
  country: string
  lat: number
  local_names: LocalNames
  lon: number
  name: string
  state: string
}
