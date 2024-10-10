import React from 'react'

import SearchBar from '@/app/components/SearchBar';
import { TiWeatherCloudy } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";


type Props = {};

const NavBar = ({}: Props) => {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
        <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
            <p className='flex items-center justify-center gap-2 text-3xl'>
                Weather App
                <TiWeatherCloudy />
            </p>
            {}
            <section className='flex gap-2 items-center'>
                <FaLocationDot />
                {"AU"}
                <SearchBar />
            </section>
        </div>
    </nav>
  )
}

export default NavBar