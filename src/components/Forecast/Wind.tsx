import { FC } from 'react'
import { IWeatherInfo } from '../../types/WeatherInfo'
import { Description, Index } from '../Forecast'
import WindIcon from '../icons/Wind'
import { getWindDirection } from '../../helpers/getWindDirection'
interface Props {
  data: IWeatherInfo
}

const Wind: FC<Props> = ({ data }) => {
  return (
    <>
      <WindIcon height={40} width={40} />
      <div>{getWindDirection(data.list[0].wind.deg)}</div>
      <Index>{data.list[0].wind.speed.toFixed(1)} km/h</Index>
      <Description>Gusts {data.list[0].wind.gust.toFixed(1)} km/h</Description>
    </>
  )
}

export default Wind
