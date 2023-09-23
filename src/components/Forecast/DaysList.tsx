import React, { FC } from 'react'
import { IWeatherInfo } from '../../types/WeatherInfo'
import { styled } from 'styled-components'
import { degreeIcon, round } from '../Forecast'
interface Props {
  data: IWeatherInfo
}

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
const DaysList: FC<Props> = ({ data }) => {
  return (
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
                {i === 0 ? 'Now' : new Date(day.dt * 1000).getHours() + ':00'}
              </div>
            </Time>
          </Day>
        )
      })}
      ;
    </>
  )
}

export default DaysList
