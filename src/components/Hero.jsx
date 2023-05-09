import React from 'react'

import asparguesPlate from './../assets/aspargusdish.png'

const Hero = () => {
  return (
    <main className='flex flex-row overflow-hidden px-14 h-96'>
      <div className='flex md:basis-3/5 flex-col justify-start gap-6'>
        <h1 className='text-6xl font-bold tracking-wide text-darkGreen drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]'>Search for Recipes to Make Your Favorite Meal with Ease </h1>
        <p className='text-xl font-bold text-dark'>Access 1000+ Recipes and Cook Your Favorite Meals with Ease</p>
        <button className='i h-16 w-64 bg-gradient-to-br from-green40 to-darkGreen items-center rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:bg-lightGreen hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out font-bold font tracking-wider text-light text-2xl mt-'>Explore Recipes</button>
      </div>
      <div className='md:basis-1/4 basis-0'>

      </div>


    </main>
  )
}

export default Hero
