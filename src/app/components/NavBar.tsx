import React from 'react'

import SearchBar from '@/app/Components/SearchBar';
import { TiWeatherCloudy } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";


type Props = {
  country: string | undefined
};

const NavBar = ({ country }: Props) => {
  return (
    <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'>
        <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
            <p className='flex items-center justify-center gap-2 text-3xl'>
                Weather Forcast
                <TiWeatherCloudy />
            </p>
            {}
            <section className='flex gap-2 items-center'>
                <FaLocationDot />
                {country}
                <SearchBar value={''} onChange={undefined} onSubmit={undefined} />
            </section>
        </div>
    </nav>
  )
}

export default NavBar