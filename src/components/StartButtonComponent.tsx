import { FC } from 'react'
import { styled } from 'styled-components'

type OpenButtonProps = {
  isdisplayed: number
}
export const OpenButton = styled.button<OpenButtonProps>`
  display: ${(props) => (props.isdisplayed ? 'block' : 'none')};
  font-size: 2rem;
  padding: 0.4rem;
  cursor: pointer;
  border-radius: 10px;
`
interface OpenButtonComponentProps {
  width: number
  changeWidth: () => void
}
export const OpenButtonComponent: FC<OpenButtonComponentProps> = ({
  width,
  changeWidth,
}) => {
  return (
    <OpenButton isdisplayed={width === 0 ? 1 : 0} onClick={changeWidth}>
      Open
    </OpenButton>
  )
}
