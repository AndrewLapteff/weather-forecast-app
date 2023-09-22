import { FC } from 'react'
import { IWeatherInfo } from '../../types/WeatherInfo'
import { Description, Index } from '../Forecast'
import PopIcon from '../icons/Pop'
import { getPop } from '../../helpers/getPop'
interface Props {
  data: IWeatherInfo
}

const Pop: FC<Props> = ({ data }) => {
  return (
    <>
      <PopIcon height={45} width={45} />
      <Index>{data.list[0].pop}%</Index>
      <Description>{getPop(data.list[0].pop)}</Description>
    </>
  )
}

export default Pop
