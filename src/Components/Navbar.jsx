import React from 'react'
import { CiStopwatch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full h-16 z-100 liquid-bg liquid-glass flex items-center justify-between px-6 mb-10'>
      <div className='flex items-center gap-2'>
        <h1 className='text-white font-poppins font-semibold text-lg tracking-wide'>
          <CiStopwatch size={40} strokeWidth={0.2} className="text-accent" />
        </h1>
      </div>
    </nav>
  )
}

export default Navbar
