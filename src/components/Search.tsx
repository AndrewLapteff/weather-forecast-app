import React, { FC } from 'react'
import { styled } from 'styled-components'

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
}

export const SearchComponent: FC<SearchComponentProps> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <Search
      data-testid="input"
      value={searchText}
      onChange={(e) => setSearchText(e.currentTarget.value)}
    ></Search>
  )
}
