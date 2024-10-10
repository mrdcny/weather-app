import React from 'react'
import { FaSearch } from "react-icons/fa";

type Props = {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
    onSubmit: React.FormEventHandler<HTMLFormElement> | undefined
} 

const SearchBar = (props: Props) => {
  return (
    <div>
        <form onSubmit={props.onSubmit} className="flex items-center justify-center h-10">
            <input value={props.value} onChange={props.onChange} className="border px-4 py-2 w-[230px] rounder-l-md focus:outline-none h-full" 
                type="text" placeholder='Search Location' />
            <button className='px-4 py-[9px] bg-gray-400 focus:outline-none hover:bg-gray-600 h-full rounder-r-md'>
                <FaSearch /> 
            </button>
        </form>
    </div>
  )
}

export default SearchBar