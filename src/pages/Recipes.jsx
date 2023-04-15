import React from 'react'
import image from './../assets/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg'

const Recipes = () => {
  return (
    <>
    <div>
    <h1>title of the Meal Types tag used</h1>

      <div className='w-40'>
        <img src={image} alt="" />
      </div>
      <h2>Gnocchi chorizo</h2>
      <h3>author of recipe</h3>
      <p>max REady time with icon watch</p>
      <button>like button when is logged</button>
    </div>
    </>
  )
}

export default Recipes
