import { FC } from 'react'
import styled from 'styled-components'
import { IWeatherInfo } from '../types/WeatherInfo'
import DaysList from './Forecast/DaysList'
import Temperature from './Forecast/Temperature'
import SunsetSunrise from './Forecast/SusnsetSunrise'
import Wind from './Forecast/Wind'
import Humidity from './Forecast/Humidity'
import Pop from './Forecast/Pop'
import Pressure from './Forecast/Pressure'

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
        scale: 0%;
      }
      to {
        scale: 100%;
      }
    }
  `
const Wrapper = styled.div<StyleProps>`
  flex: 0.9;
  width: 80%;
`
const Container = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  display: grid;
  @media (min-width: 300px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'header header'
      'item item'
      'item item'
      'item item';
    gap: 4px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'header header header'
      'item item item'
      'item item item';
    gap: 10px;
  }
  justify-content: center;
`
interface ItemProps {
  delay: number
}
const Header = styled.div`
  background-color: #000000c2;
  grid-area: header;
  animation: widthAnimation 0.5s ease;
  ${widthAnimation}
  border-radius: 0.5rem;
  display: flex;
  align-content: center;
  justify-content: start;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 8px;
`
const Item = styled.div<ItemProps>`
  background-color: #000000c1;
  animation: widthAnimation 0.5s ease;
  animation-delay: ${(props) => props.delay}s;
  ${widthAnimation}
  animation-fill-mode: backwards;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Description = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`

export const degreeIcon = <sup>o</sup>
export const round = (number: number) => {
  return Math.round(number)
}
export const Index = styled.div`
  font-size: 1.5rem;
`
const Forecast: FC<Props> = ({ height, data }) => {
  return (
    <Wrapper hidden={height > 30 ? false : true} height={height}>
      <Container>
        <Header>
          {data.hasOwnProperty('city') && <DaysList data={data} />}
        </Header>
        <Item delay={0}>
          {data.hasOwnProperty('city') && <Temperature data={data} />}
        </Item>
        <Item delay={0.05}>
          {data.hasOwnProperty('city') && <SunsetSunrise data={data} />}
        </Item>
        <Item delay={0.1}>
          {data.hasOwnProperty('city') && <Wind data={data} />}
        </Item>
        <Item delay={0.15}>
          {data.hasOwnProperty('city') && <Humidity data={data} />}
        </Item>
        <Item delay={0.2}>
          {data.hasOwnProperty('city') && <Pop data={data} />}
        </Item>
        <Item delay={0.25}>
          {data.hasOwnProperty('city') && <Pressure data={data} />}
        </Item>
      </Container>
    </Wrapper>
  )
}

export default Forecast
