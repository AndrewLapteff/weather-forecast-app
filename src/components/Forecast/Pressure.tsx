import { FC } from 'react'
import { IWeatherInfo } from '../../types/WeatherInfo'
import { Description, Index } from '../Forecast'
import PressureIcon from '../icons/Pressure'
interface Props {
  data: IWeatherInfo
}

const Pressure: FC<Props> = ({ data }) => {
  return (
    <>
      <PressureIcon height={45} width={45} />
      <Index>{data.list[0].main.pressure}%</Index>
      <Description>
        {data.list[0].main.pressure < 1013 ? 'Lower' : 'Higher'} than usually
      </Description>
    </>
  )
}

export default Pressure
