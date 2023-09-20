import { FC } from 'react'
import { styled } from 'styled-components'

export const SearchButton = styled.button`
  font-size: 2rem;
  padding: 0.23rem;
  cursor: pointer;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: white;
`
interface SearchButtonProps {
  searchHandler: () => void
}
export const SearchButtonComponent: FC<SearchButtonProps> = ({
  searchHandler,
}) => {
  return (
    <SearchButton onClick={searchHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        width={30}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </SearchButton>
  )
}
