import { kelvinToCelsius, getFeelsLikeText } from '@/app/utils/misc';
import React from 'react'

type Props = {
 weather: any
}

const FeelsLikeTemp = ({weather}: Props) => {
    const minTemp = weather.main.min_temp;
    const maxTemp = weather.main.max_temp;

    const avgTemp = (minTemp + maxTemp) / 2;

    const feelsLikeTemp = kelvinToCelsius(weather.main.feels_like);
    const feelsLikeText = getFeelsLikeText(weather.main.feels_like, avgTemp);
    return (
        <div className="bg-white flex flex-col gap-4 w-full min-w-[18rem] md:w-[20rem] rounded-lg border pt-6 pb-5 px-4 ">
            <p className="font-bold">Feels like</p>
            <p className="py-6 text-5xl font-bold self-center">{feelsLikeTemp}°</p>
            <p className="">{feelsLikeText}</p>
        </div>
    )
}

export default FeelsLikeTemp