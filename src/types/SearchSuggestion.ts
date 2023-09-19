interface LocalNames {
  en: string
  ua: string
}

export interface SearchSuggestion {
  country: string
  lat: number
  local_names: LocalNames
  lon: number
  name: string
  state: string
}
