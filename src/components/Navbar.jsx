import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='flex justify-between max-w-[1240px] mx-auto px-4 pt-2 text-white items-center'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Dwiki Portfolio.</h1>
      <ul className='flex items-start'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar