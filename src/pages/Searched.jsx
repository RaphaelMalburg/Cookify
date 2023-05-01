import React, { useEffect, useState } from 'react'
import PopularCard from '../components/PopularCard'
import { useParams } from 'react-router-dom'

const Searched = () => {
    let params = useParams()
    const [searched, setSearched] = useState([])

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '75f97378b7msh9bb3ee169038e3bp189ab5jsn745d67991714',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };


    const getSearched = async (query) => {
      const api = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}`, options)
      const data = await api.json()


      setSearched(data.results)
    }
    useEffect(() => {
        getSearched(params.id)
    },[params.id])
  return (
    <div className='pt-52  flex flex-col'>
        <div className='w-2/3 flex  items-center justify-center flex-col self-center'>
            <h1 className="text-3xl font-bold capitalize">{params.id}</h1>
             <hr className="my-4 w-2/3 border-2 border-gray-400" />
        </div>

        <div className='grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {searched.map((recipe) => (
                <div key={recipe.id}>
                    <PopularCard
                    heading={recipe.title}
                    path={`recipes/${recipe.id}`}
                    image={recipe.image}
                    />
                </div>
                ))}

        </div>
    </div>
  )
}

export default Searched
