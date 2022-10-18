import React from 'react'
import { CgMenuRight } from 'react-icons/cg'

const Navbar = () => {
  return (
    <div className='flex justify-between max-w-[1240px] mx-auto px-4 h-24 text-white items-center'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Dwiki Portfolio.</h1>
      <ul className='flex items-start'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resource</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div>
        <CgMenuRight size={20} />
      </div>
      <div className='fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300]'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Dwiki Portfolio.</h1>
        <ul className='uppercase p-4'>
          <li className='p-4 pt-0'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resource</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar