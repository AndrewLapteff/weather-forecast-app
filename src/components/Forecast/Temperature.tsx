import React, { FC } from 'react'
import { IWeatherInfo } from '../../types/WeatherInfo'
import { styled } from 'styled-components'
import { Description, degreeIcon, round } from '../Forecast'
interface Props {
  data: IWeatherInfo
}

const Title = styled.h3`
  margin: 0;
  padding: 0;
  text-align: center;
`
const TemperatureElement = styled.h1`
  margin: 0;
  padding: 0;
`
const Temperature: FC<Props> = ({ data }) => {
  const makeFirstCharUppercase = (string: string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
  }
  return (
    <>
      <Title data-testid="title">
        {data.city.name}, {data.city.country}
      </Title>
      <TemperatureElement>
        {round(data.list[0].main.temp)}
        {degreeIcon}
      </TemperatureElement>
      <Description>
        {makeFirstCharUppercase(data.list[0].weather[0].description)}
      </Description>
      <div>
        H: {round(data.list[0].main.temp_max)}
        {degreeIcon}, L: {round(data.list[0].main.temp_min)}
        {degreeIcon}
      </div>
    </>
  )
}

export default Temperature
