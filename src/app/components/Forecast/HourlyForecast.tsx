import { kelvinToCelsius } from '@/app/utils/misc';
import moment from 'moment';
import React from 'react'
import { getIcon } from '@/app/utils/misc'

type Props = {
    forecast: any[]
}

export default function HourlyForecast({ forecast }: Props) {
    const today = new Date();
    const todayString = today.toISOString().split("T")[0];

    const todaysForecast = forecast?.filter(
        (forecast: { dt_txt: string; main: { temp: number } }) => {
          return forecast.dt_txt.startsWith(todayString);
        }
      );


  return (
    <div className="bg-white flex gap-10 w-full pt-6 pb-5 px-4 border rounded-lg justify-between overflow-auto min-w-[18rem] md:w-[40rem]">
       {todaysForecast?.map(d => 
        <div className='flex flex-col justify-between items-center font-semibold'> 
            <p>{moment(d.dt_txt).format("HH:mm")}</p>
            <p>{getIcon(d.weather[0].main)} </p>
            <p>{kelvinToCelsius(d.main.temp)}°</p>
        </div>
       )}
    </div>
  )
}