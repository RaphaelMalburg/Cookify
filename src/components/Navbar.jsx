import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/react.svg'
import{ SiChef} from 'react-icons/si'
import {BiSearchAlt2} from 'react-icons/bi'
import {FaUser} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  function handleSearch(e){
    e.preventDefault()
    navigate(`searched/${search}`)
    console.log(search)
    setSearch('')
  }


  return (

    <div className='grid grid-cols-2 md:grid-cols-3 px-8 py-4 mt-2 absolute top-0 w-full text-light drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]'>
      <Link to='/' className='flex justify-center gap-2 font-bold text-xl tracking-widest items-center drop-shadow-3xl'>
        <SiChef className='text-6xl  '/>Cookify
      </Link>
      <div className='md:order-last flex flex-row justify-center'>
        <Link to='/login' className='self-end pb-3 text-xl px-3 font-semibold tracking-wide'>
          <FaUser className='self-center text-3xl '  />
        </Link>
      </div>
      <form onSubmit={handleSearch} className='flex flex-row justify-start my-2  md:-my-2 rounded-3xl bg-light md:pe-8 hover:scale-x-110 hover:scale-y-105 max-w-md   pe-4 transition duration-3s00 ease-out md:col-start-2 md:col-end-3'>
        <BiSearchAlt2 onClick={handleSearch} className='self-center text-darkGreen font-bold text-4xl  mx-4 cursor-pointer '/>
        <input type="text" className='bg-light text-dark text-lg focus:outline-0  rounded-3xl w-full' onChange={(e)=>setSearch(e.target.value)} value={search} />
      </form>
    </div>
  )
}

export default Navbar
