import React from 'react'
import imageTagSlider from '../constants/cuisineTypes'
import { Link, NavLink } from 'react-router-dom'
import '@splidejs/react-splide/css';
import { Splide,SplideSlide } from '@splidejs/react-splide'


const linkProps = `grid place-items-center hover:opacity-80  rounded-full object-fit  mx-2`
/*o
      <SplideSlide><Link to='/' className={linkProps}>Korean</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiBarbecue className='text-2xl'/>Korean</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiBubblingBowl className='text-2xl'/>African</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiHamburger className='text-2xl'/>American</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiCookingPot className='text-2xl'/>French</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiFishBucket className='text-2xl'/>Britsh</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiCroissant className='text-2xl'/>French</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiPotato className='text-2xl'/>German</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiOlive className='text-2xl'/>Greek</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiPizzaSlice className='text-2xl'/>Italian</Link></SplideSlide>
      <SplideSlide><Link to='/' cla
      <SplideSlide><Link to='/' className={linkProps}><GiChiliPepper className='text-2xl'/>Mexican</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiNoodles className='text-2xl'/>Thai</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><GiChickenOven className='text-2xl'/>Indian</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><BiBowlRice className='text-2xl'/>Chinese</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><BiSushi className='text-2xl'/>Japanese</Link></SplideSlide>
      <SplideSlide><Link to='/' className={linkProps}><MdOutlineTapas className='text-2xl'/>Spanish</Link></SplideSlide>*/
const SliderCuisines = () => {
  return (
    <>
    <Splide
    className='flex text-light justify-center h-fit py-4 px-8 '
    options={{

      drag:'free',
      perPage: 8,
       breakpoints: {
        1024: {
			    perPage: 6,
		    },
        640: {
			    perPage: 4,
		    },
        400: {
			    perPage: 3,
		    },
  }}
    }>
      {imageTagSlider.map((data)=>{
        return(
        <SplideSlide key={data.title} className='relative py-5 rounded-full ' >
          <Link to='/' className={linkProps}>
            <img
            src={data.image}
            alt={`dish from ${data.title}`} className=' object-cover h-36 w-36 contrast-50 rounded-full drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]  '/>
            <p className='absolute font-semibold text-xl tracking-wider drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]'>
              {data.title}
            </p>

          </Link>
          </SplideSlide>)
      })}
    </Splide>
    </>
  )
}

export default SliderCuisines
