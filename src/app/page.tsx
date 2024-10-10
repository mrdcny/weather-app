"use client"
import NavBar from "@/app/Components/NavBar";

import { VscLoading } from "react-icons/vsc";
import { useGlobalContext } from "@/app/context/global";
import Temperature from "@/app/Components/Temperature/Temperature";
import HourlyForecast from "@/app/Components/Forecast/HourlyForecast";
import FeelsLikeTemp from "@/app/Components/Temperature/FeelsLikeTemp";
import DailyForecast from "./Components/Forecast/DailyForecast";


export default function Home() {
  const { weather, forecast } = useGlobalContext();
  const activeLocation = weather?.name;

  if (!weather && !forecast) {
    return ( 
      <div className="flex items-center min-h-screen justify-center">
      <p className="animate-spin">
        <VscLoading /> 
      </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
    <NavBar country={activeLocation} />
    <main className="px-3 max-w-7xl mx-auto flex flex-col gap-9 w-full pb-10 pt-4">
      <div className="flex gap-4">
         <Temperature weather={weather} />
         <HourlyForecast forecast={forecast?.list} />
         <FeelsLikeTemp weather={weather} />
      </div>
      <div className="flex gap-4">
         <DailyForecast />
      </div>
    </main>
    </div>
  );
}
