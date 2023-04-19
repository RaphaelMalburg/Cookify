import React from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/react.svg'
import{ SiChef} from 'react-icons/si'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import { IconContext } from 'react-icons'

const Navbar = () => {

  return (

    <div className='grid grid-cols-2 md:grid-cols-3 px-8 py-4 mt-2 absolute top-0 w-full text-light drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]'>
      <div className='flex justify-center gap-2 font-bold text-xl tracking-widest items-center drop-shadow-3xl'>
        <SiChef className='text-6xl  '/>Cookify
      </div>
      <div className='md:order-last flex flex-row justify-center'>
        <Link to='/login' className='self-end pb-3 text-xl px-3 font-semibold tracking-wide'>
          <FaUser className='self-center text-3xl '  />
        </Link>
      </div>
      <div className='flex flex-row justify-start my-2  md:-my-2 rounded-3xl bg-light md:pe-8 hover:scale-x-110 hover:scale-y-105 max-w-md   pe-4 transition duration-300 ease-out md:col-start-2 md:col-end-3'>
        <BiSearchAlt2 className='self-center text-darkGreen font-bold text-4xl  mx-4 cursor-pointer '/>
        <input type="text" className='bg-light text-dark text-lg focus:outline-0  rounded-3xl w-4'  />
      </div>
    </div>
  )
}

export default Navbar
