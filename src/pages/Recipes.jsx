import React from 'react'
import image from './../assets/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'
import RecipesDetails from '../components/RecipesDetails'
import Navbar from '../components/Navbar'
import Related from '../components/Related'

const Recipes = () => {
  return (
    <>
    <div className='pt-32'>

      <RecipesDetails  />
      <Related />
    </div>
    </>
  )
}

export default Recipes
