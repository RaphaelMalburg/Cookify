import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate, useParams } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

const RecipesDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  const getRecipe = async () => {
    const checkSessionStorage = sessionStorage.getItem(id);
    if (checkSessionStorage) {
      setRecipe(JSON.parse(checkSessionStorage));
    } else {
      const api = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`, options);
      const data = await api.json();
      sessionStorage.setItem(id, JSON.stringify(data));
      setRecipe(data);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  function createMarkup(content) {
    return { __html: content };
  }

  return (
    <div className="container mx-auto w-full  -mt-7">
      <div className="flex justify-center pt-10">
        <div className="w-2/3 lg:-pt-20 pt-20">
          <img className="rounded-lg shadow-md" src={recipe.image} alt={recipe.title} />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-2/3 my-8  bg-green20 rounded-lg p-6">
          <h1 className="text-3xl font-bold">{recipe.title}</h1>
          <hr className="my-4 border-2 border-gray-400" />
          <div className="flex flex-wrap justify-center  rounded-xl bg-green20">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
              <h2 className="text-xl font-bold mb-2">Ingredients</h2>
              <hr className="my-2 border-2 border-gray-400" />
              <ul>
                {recipe.extendedIngredients &&
                  recipe.extendedIngredients.map((ingredient, index) => (
                    <li key={index}>
                      <strong>{`${ingredient.amount} ${ingredient.unit}- `}</strong>
                      {`${ingredient.name}  `}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 p-2 ">
              <h2 className="text-xl font-bold mb-2">Instructions</h2>
              <hr className="my-2 border-2 border-gray-400" />
              <p className="text-lg leading-relaxed" dangerouslySetInnerHTML={createMarkup(recipe.instructions) || <Skeleton />}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
