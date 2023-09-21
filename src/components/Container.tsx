import { FC, ReactElement } from 'react'
import { styled } from 'styled-components'
type ContainerProps = {
  height: number
  width: number
  children?: ReactElement[]
}
export const ContainerElement = styled.div<ContainerProps>`
  background-image: url('https://img.favpng.com/23/23/2/blue-sky-cloud-png-favpng-9K6q1q3Gs4QQ2gBNzfqHzGUTA.jpg');
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 2rem;

  opacity: ${(props) => (props.width === 0 ? '0%' : '100%')};
  @media (min-width: 300px) {
    width: ${(props) => (props.width !== 0 ? '85%' : '0%')};
    height: 90%;
  }
  @media (min-width: 900px) {
    width: ${(props) => props.width + '%'};
    height: ${(props) => props.height + '%'};
  }
  transition: all 0.3s ease;
`
const Container: FC<ContainerProps> = ({ height, width, children }) => {
  return (
    <ContainerElement height={height} width={width}>
      {children}
    </ContainerElement>
  )
}

export default Container
