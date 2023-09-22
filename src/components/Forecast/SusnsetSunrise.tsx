import { FC } from 'react'
import { IWeatherInfo } from '../../types/WeatherInfo'
import { styled } from 'styled-components'
import Sunrise from '../icons/Sunrise'
import Sunset from '../icons/Sunset'
interface Props {
  data: IWeatherInfo
}

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
const SunsetSunrise: FC<Props> = ({ data }) => {
  return (
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
  )
}

export default SunsetSunrise
