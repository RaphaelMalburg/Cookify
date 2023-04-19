import React, { useState } from 'react'
import PopularCard from './PopularCard';
import dish from '../assets/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'



const Popular = () => {
  const [activeTab, setActiveTab] = useState('main');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const activeButton = 'bg-gradient-to-br from-lightGreen to-darkGreen rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:bg-lightGreen hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out font-semibold font tracking-wider text-light text-xl px-4 py-2'
  const buttonSTyle = 'items-center rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:opacity-50  transition duration-300 ease-out font-semibold font tracking-wider text-darkGreen text-xl px-4 py-2 '
  return (

    <div>
      <h1 className='text-6xl flex font-bold tracking-wide justify-center py-4 text-darkGreen drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]'>Popular menus</h1>
      <div className='gap-6 flex justify-center'>
        <button className={buttonSTyle + activeButton}>Main Dish</button>
        <button className={buttonSTyle}>Side Dish</button>
        <button className={buttonSTyle}>Dessert</button>
        <button className={buttonSTyle}>Appetizer</button>
        <button className={buttonSTyle}>Salad</button>
        <button className={buttonSTyle}>Bread</button>
        <button className={buttonSTyle}>Breakfast</button>
        <button className={buttonSTyle}>Soup</button>
        <button className={buttonSTyle}>Sauce</button>
      </div>
      <div className='grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
         <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />
 <PopularCard
          heading={'Pumpkin Ravioli - Seasonal Garnish'}
          time={'30'}
          image={dish}
        />

      </div>


      </div>


  )
}

export default Popular
