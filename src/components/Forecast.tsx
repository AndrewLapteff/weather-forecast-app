import { FC } from 'react'
import styled from 'styled-components'
import { IWeatherInfo } from '../types/WeatherInfo'
import Sunset from './icons/Sunset'
import Sunrise from './icons/Sunrise'
import Wind from './icons/Wind'
import { getWindDirection } from '../helpers/getWindDirection'
import Humidity from './icons/Humidity'
import { getHumidityValue } from '../helpers/getHumidityValue'
import Precipitation from './icons/Pop'
import { getPop } from '../helpers/getPop'
import Pressure from './icons/Pressure'

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
  /* animation: opacityTransition 0.5s ease;
  @keyframes opacityTransition {
    from {
      opacity: 0%;
      flex: 0;
    }
    to {
      opacity: 100%;
      flex: 0.9;
    }
  } */
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
const Title = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
`
const Temperature = styled.h1`
  margin: 0;
  padding: 0;
`
const Description = styled.p`
  margin: 0;
  padding: 0;
`
const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
`
const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const SunsetSunriseWrapper = styled.div`
  display: flex;

  @media (min-width: 300px) {
    gap: 4px;
  }
  @media (min-width: 900px) {
    gap: 30px;
  }
`
const SunriseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 1.5rem;
  flex-direction: column;
`
const SunsetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 1.5rem;
  flex-direction: column;
`

const Index = styled.div`
  font-size: 1.5rem;
`
const Forecast: FC<Props> = ({ height, data }) => {
  const makeFirstCharUppercase = (string: string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
  }
  const round = (number: number) => {
    return Math.round(number)
  }
  const degreeIcon = <sup>o</sup>
  return (
    <Wrapper hidden={height > 30 ? false : true} height={height}>
      <Container>
        <Header>
          {data.hasOwnProperty('city') && (
            <>
              {data.list.map((day, i) => {
                return (
                  <Day>
                    <img
                      width={50}
                      height={50}
                      src={
                        'https://openweathermap.org/img/wn/' +
                        day.weather[0].icon +
                        '@2x.png'
                      }
                      alt="icon"
                    />
                    <div
                      style={{
                        fontSize: '1.3rem',
                        marginTop: '-10px',
                        marginRight: '-9px',
                      }}
                    >
                      {round(day.main.temp)}
                      {degreeIcon}
                    </div>
                    <div style={{ fontSize: '0.8rem', margin: '-2px' }}>
                      {day.weather[0].main}
                    </div>
                    <Time>
                      <div style={{ fontSize: '1.5rem', margin: '-2px' }}>
                        {new Date(day.dt * 1000).getDate()}
                      </div>
                      <div style={{ fontSize: '0.8rem', margin: '-2px' }}>
                        {i === 0
                          ? 'Now'
                          : new Date(day.dt * 1000).getHours() + ':00'}
                      </div>
                    </Time>
                  </Day>
                )
              })}
            </>
          )}
        </Header>
        <Item delay={0}>
          {data.hasOwnProperty('city') && (
            <>
              <Title>
                {data.city.name}, {data.city.country}
              </Title>
              <Temperature>
                {round(data.list[0].main.temp)}
                {degreeIcon}
              </Temperature>
              <Description>
                {makeFirstCharUppercase(data.list[0].weather[0].description)}
              </Description>
              <div>
                H: {round(data.list[0].main.temp_max)}
                {degreeIcon}, L: {round(data.list[0].main.temp_min)}
                {degreeIcon}
              </div>
            </>
          )}
        </Item>
        <Item delay={0.05}>
          {data.hasOwnProperty('city') && (
            <SunsetSunriseWrapper>
              <SunriseWrapper>
                <Sunrise width={55} height={55} />
                {new Date(data.city.sunrise * 1000).getHours()}:00
              </SunriseWrapper>
              <SunsetWrapper>
                <Sunset width={55} height={55} />
                {new Date(data.city.sunset * 1000).getHours()}:00
              </SunsetWrapper>
            </SunsetSunriseWrapper>
          )}
        </Item>
        <Item delay={0.1}>
          {data.hasOwnProperty('city') && (
            <>
              <Wind height={40} width={40} />
              <div>{getWindDirection(data.list[0].wind.deg)}</div>
              <Index>{data.list[0].wind.speed.toFixed(1)} km/h</Index>
              <Description>
                Gusts {data.list[0].wind.gust.toFixed(1)} km/h
              </Description>
            </>
          )}
        </Item>
        <Item delay={0.15}>
          {data.hasOwnProperty('city') && (
            <>
              <Humidity width={45} height={45} />
              <Index>{data.list[0].main.humidity}%</Index>
              <Description>
                {getHumidityValue(data.list[0].main.humidity)}
              </Description>
            </>
          )}
        </Item>
        <Item delay={0.2}>
          {data.hasOwnProperty('city') && (
            <>
              <Precipitation height={45} width={45} />
              <Index>{data.list[0].pop}%</Index>
              <Description>{getPop(data.list[0].pop)}</Description>
            </>
          )}
        </Item>
        <Item delay={0.25}>
          {data.hasOwnProperty('city') && (
            <>
              <Pressure height={45} width={45} />
              <Index>{data.list[0].main.pressure}%</Index>
              <Description>
                {data.list[0].main.pressure < 1013 ? 'Lower' : 'Higher'} than
                usually
              </Description>
            </>
          )}
        </Item>
      </Container>
    </Wrapper>
  )
}

export default Forecast
