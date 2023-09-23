import { FC } from 'react'
import { styled } from 'styled-components'
import { SearchButtonComponent } from './SearchButtonComponent'

const Search = styled.input`
  width: 97%;
  height: 35px;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  font-size: 2rem;
  padding: 5px;
  background-color: white;
`

interface SearchComponentProps {
  searchText: string
  setSearchText: (e: string) => void
  setIsSearching: (e: boolean) => void
  resize: () => void
  searchHandler: () => void
}

export const SearchComponent: FC<SearchComponentProps> = ({
  searchText,
  setSearchText,
  setIsSearching,
  resize,
  searchHandler,
}) => {
  const onSearch = () => {
    if (searchText !== '') {
      resize()
      searchHandler()
    }
  }

  return (
    <div style={{ display: 'flex' }}>
      <Search
        data-testid="input"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.currentTarget.value)
          setIsSearching(true)
        }}
        onKeyUp={(e) => (e.key === 'Enter' ? onSearch() : null)}
      ></Search>
      <SearchButtonComponent onSearch={onSearch}></SearchButtonComponent>
    </div>
  )
}
