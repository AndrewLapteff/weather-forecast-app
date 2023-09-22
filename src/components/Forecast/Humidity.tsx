import { FC } from 'react'
import { IWeatherInfo } from '../../types/WeatherInfo'
import { Description, Index } from '../Forecast'
import HumidityIcon from '../icons/Humidity'
import { getHumidityValue } from '../../helpers/getHumidityValue'
interface Props {
  data: IWeatherInfo
}

const Humidity: FC<Props> = ({ data }) => {
  return (
    <>
      <HumidityIcon width={45} height={45} />
      <Index>{data.list[0].main.humidity}%</Index>
      <Description>{getHumidityValue(data.list[0].main.humidity)}</Description>
    </>
  )
}

export default Humidity
