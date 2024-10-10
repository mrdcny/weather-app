import { kelvinToCelsius } from '@/app/utils/misc';
import moment from 'moment';
import React, { useEffect, useState } from 'react'

type Props = {
    weather: {
        main: any,
        timezone: number
    }
}

export default function Temperature({ weather }: Props) {
    const { main } = weather;

    const [localTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");

    const temp = kelvinToCelsius(main.temp);
    const minTemp = kelvinToCelsius(main.temp_min);
    const maxTemp = kelvinToCelsius(main.temp_max);
    const timezone = weather.timezone;

    useEffect(() => {
        const interval = setInterval(() => {
            const localMoment = moment().utcOffset(timezone / 60);
            const formatedTime = localMoment.format("HH:mm:ss");
            const day = localMoment.format("dddd");

            setLocalTime(formatedTime);
            setCurrentDay(day);
        }, 1000);

        return () => clearInterval(interval);
    }, [timezone]);

    return (
        <div className="bg-white flex flex-col gap-4 w-full min-w-[18rem] md:w-[20rem]">
            <div
                className="pt-6 pb-5 px-4 border rounded-lg flex flex-col justify-between">
                <p className="flex justify-between items-center">
                    <span className="font-medium">{currentDay}</span>
                    <span className="font-medium">{localTime}</span>
                </p>

                <p className="py-10 text-7xl font-bold self-center">{temp}°</p>
                <div>
                    <p className="flex items-center gap-2">
                        <span>Low: {minTemp}°</span>
                        <span>High: {maxTemp}°</span>
                    </p>
                </div>
            </div>
        </div>
    )
}


