import { FC } from 'react'
import styled from 'styled-components'
import { IWeatherInfo } from '../types/WeatherInfo'

interface StyleProps {
  height: number
}

interface Props {
  height: number
  data: IWeatherInfo
}

const widthAnimation = `
    @keyframes widthAnimation {
      from {
        opacity: 0;
        visibility: hidden;
        scale: 0%;
      }
      to {
        scale: 100%;
        opacity: 1;
        visibility: visible;
      }
    }
  `
const Wrapper = styled.div<StyleProps>`
  flex: 0.9;
  width: 80%;
  animation: opacityTransition 0.4s ease;
  @keyframes opacityTransition {
    from {
      opacity: 0%;
      flex: 0;
    }
    to {
      opacity: 100%;
      flex: 0.9;
    }
  }
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'header header header'
    'item item item'
    'item item item';
  gap: 10px;
  justify-content: center;
  /* align-items: center; */
`
interface ItemProps {
  delay: number
}
const Header = styled.div`
  background-color: #00000087;
  grid-area: header;
  animation: widthAnimation 0.5s ease;
  ${widthAnimation}
  border-radius: 0.5rem;
`
const Item = styled.div<ItemProps>`
  background-color: #00000080;
  animation: widthAnimation 0.5s ease;
  animation-delay: ${(props) => props.delay}s;
  ${widthAnimation}
  animation-fill-mode: backwards;
  border-radius: 0.5rem;
`
const Forecast: FC<Props> = ({ height, data }) => {
  console.log(data)
  return (
    <Wrapper hidden={height > 30 ? false : true} height={height}>
      <Container>
        <Header></Header>
        <Item delay={0} />
        <Item delay={0.05} />
        <Item delay={0.1} />
        <Item delay={0.15} />
        <Item delay={0.2} />
        <Item delay={0.25} />
      </Container>
    </Wrapper>
  )
}

export default Forecast
