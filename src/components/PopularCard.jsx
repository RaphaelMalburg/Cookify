import React from 'react'
import Skeleton from 'react-loading-skeleton'
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from 'react-router-dom'
const PopularCard = ({image, heading, path}) => {
  return (

<div className="w-full bg-white border relative  border-darkGreen scale-75 h-80 rounded-lg shadow dark:bg-darkGreen dark:border-darkGreen ">
    <Link to={path} className='-z-20'>
        <img className="rounded-t-lg w-full h-full object-cover " src={image  || <Skeleton />} alt="" />
    </Link>


    <div className="p-5 backdrop-blur-lg absolute bottom-0 right-0 z-20 h-auto w-full">

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-light dark:text-white truncate drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]">{heading  || <Skeleton />}</h5>

        <Link to={path} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-light text-white bg-darkGreen rounded-lg hover:bg-lightGreen focus:ring-2 focus:outline-none focus:ring-darkGreen dark:bg-darkGreen dark:hover:bg-lightGreen dark:focus:ring-bg-lightGreen">
            See more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
    </div>
</div>

  )
}

export default PopularCard
