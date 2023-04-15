import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/react.svg'
import{ SiChef} from 'react-icons/si'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-3  text-light drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]'>
      <Link to='/' className='flex justify-center gap-2 font-bold text-xl tracking-widest items-center drop-shadow-3xl'><SiChef className='text-6xl  '/>Cookify </Link>

      <div className='flex flex-row justify-center relative rounded-3xl bg-light pe-8 '>
            <BiSearchAlt2 className=' self-center top-1/2  text-darkGreen font-bold text-3xl mx-2 cursor-pointer'/>
            <input type="text" className='bg-light text-dark text-lg focus:outline-0	'  />
      </div>
      <div className='flex flex-row justify-center '>
        <FaUser className='self-center text-3xl cursor-pointer'  />
        <Link to='/login' className='self-end pb-3 text-xl px-3 font-semibold tracking-wide'>Login </Link>
      </div>
    </div>
  )
}

export default Navbar
