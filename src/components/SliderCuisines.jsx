import React, { useEffect, useState } from 'react'
import imageTagSlider from '../constants/cuisineTypes'
import { Link, NavLink, useParams } from 'react-router-dom'
import '@splidejs/react-splide/css';
import { Splide,SplideSlide } from '@splidejs/react-splide'
import Skeleton from 'react-loading-skeleton';



const SliderCuisines = () => {/*
  const [popular, setPopular] = useState([])
  const params = useParams()

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '75f97378b7msh9bb3ee169038e3bp189ab5jsn745d67991714',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  const getPopular = async (query) => {
    const api = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&number=10`, options)
    const data = await api.json()

    localStorage.setItem(query, JSON.stringify(data.results))
    console.log('foi para o cache')
    setPopular(data.results)
  }

  useEffect(() => {
    const cachedResults = localStorage.getItem(popular)
    console.log('puxou info do cache')
    if (cachedResults) {
      setPopular(JSON.parse(cachedResults))
    } else {
      getPopular(params)
    } &cuisine=italian
  }, [])*/
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
          <Link to={`cuisinesearch/${data.title}`} className='grid place-items-center hover:opacity-80  rounded-full object-fit  mx-2'>
            <img
            src={data.image  || <Skeleton />}
            alt={`dish from ${data.title}`} className=' object-cover h-36 w-36 contrast-50 rounded-full drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]  '/>
            <p className='absolute font-semibold text-xl tracking-wider drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]'>
              {data.title || <Skeleton />}
            </p>

          </Link>
          </SplideSlide>)
      })}
    </Splide>
    </>
  )
}

export default SliderCuisines
