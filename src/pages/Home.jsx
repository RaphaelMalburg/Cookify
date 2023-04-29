import React from 'react'
import SliderCuisines from '../components/SliderCuisines'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Jumbotron  from '../components/JumbotronSlider'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className=' overflow-hidden '>

         <div className='bg-bgImage bg-no-repeat bg-origin-border  bg-cover pt-32'>
        <SliderCuisines />
        <Hero />

      </div>


      <Popular />
      <Jumbotron />

    </main>
  )
}

export default Home
