import { FC } from 'react'
import { styled, keyframes } from 'styled-components'
import { ISearchSuggestion } from '../types/SearchSuggestion'

export const List = styled.ul`
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

const rotate = keyframes`
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
`
export const ListItem = styled.li`
  cursor: pointer;
  padding-left: 7px;
  transition: all;
  animation: ${rotate} 0.2s linear;
  &:hover {
    background-color: gray;
  }
`
export const Hr = styled.hr`
  margin: 4px 0 4px 0;
  width: 90%;
  opacity: 0;
`

interface ListComponentProps {
  searchSuggestions: ISearchSuggestion[]
  onOptionSelect: (onOptionSelect: ISearchSuggestion) => void
}
export const ListComponent: FC<ListComponentProps> = ({
  searchSuggestions,
  onOptionSelect,
}) => {
  return (
    <List>
      {searchSuggestions.map(
        (searchSuggestion: ISearchSuggestion, idx: number) => {
          return (
            <>
              {idx === 0 ? <Hr key={idx} /> : null}
              <ListItem
                onClick={() => {
                  onOptionSelect(searchSuggestion)
                }}
                data-testid="li"
                key={searchSuggestion.name + '_' + idx}
              >
                {searchSuggestion.name}, {searchSuggestion.country}
              </ListItem>
              {idx === searchSuggestions.length - 1 ? <Hr key={idx} /> : null}
            </>
          )
        }
      )}
    </List>
  )
}
