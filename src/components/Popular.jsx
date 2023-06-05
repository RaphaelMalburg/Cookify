import React, { useEffect, useState } from "react";
import PopularCard from "./PopularCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PopularCardSkeleton from "./PopularCardSkeleton";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [activeButton, setActiveButton] = useState("Main Dish");
  const cuisineTypes = ["Main Dish", "Side Dish", "Dessert", "Appetizer", "Salad", "Bread", "Breakfast", "Soup", "Sauce"];

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  const activeButtonStyle =
    "bg-gradient-to-br from-lightGreen to-darkGreen rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:bg-lightGreen hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out font-semibold font tracking-wider text-light text-xl px-4 py-2";
  const buttonStyle =
    "outline outline-offset-2 outline-1 items-center rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:opacity-50  transition duration-300 ease-out font-semibold font tracking-wider text-darkGreen text-xl px-4 py-2 ";
  const activeButtonStyle2 =
    "bg-gradient-to-br from-lightGreen to-darkGreen rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:bg-lightGreen hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out font-semibold font tracking-wider text-light text-xl px-4 py-2 w-full h-full";
  const buttonStyle2 =
    "outline outline-offset-2 outline-1 items-center rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:opacity-50  transition duration-300 ease-out font-semibold font tracking-wider text-darkGreen text-xl px-4 py-2 h-full w-full";

  const getPopular = async (query) => {
    const api = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${" "}&number=10&type=${query}`, options);
    const data = await api.json();

    localStorage.setItem(query, JSON.stringify(data.results));
    setPopular(data.results);
  };

  const handleButtonClick = (name) => {
    setActiveButton(name);

    const cachedResults = localStorage.getItem(name);
    if (cachedResults) {
      setPopular(JSON.parse(cachedResults));
    } else {
      getPopular(name);
    }
  };

  useEffect(() => {
    const cachedResults = localStorage.getItem(activeButton);
    if (cachedResults) {
      setPopular(JSON.parse(cachedResults));
    } else {
      getPopular(activeButton);
    }
  }, [activeButton]);

  return (
    <div className="bg-light">
      <h1 className="md:text-6xl text-2xl flex font-bold tracking-wide justify-center py-4 pb-10 text-darkGreen drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]">Popular menus</h1>
      <div className="gap-6 lg:flex justify-center hidden">
        {cuisineTypes.map((cuisineType, index) => (
          <button key={index} className={cuisineType === activeButton ? activeButtonStyle : buttonStyle} onClick={() => handleButtonClick(cuisineType)}>
            {cuisineType}
          </button>
        ))}
      </div>
      <Splide
        className="flex gap-6 w-full h-1/2.
         justify-center lg:hidden "
        options={{
          drag: "free",
          perPage: 8,
          breakpoints: {
            1024: {
              perPage: 6,
            },
            640: {
              perPage: 3,
            },
            400: {
              perPage: 2,
            },
          },
        }}>
        {cuisineTypes.map((cuisineType, index) => (
          <SplideSlide key={index} className=" py-5 px-2 w-full h-full rounded-full ">
            <button className={cuisineType === activeButton ? activeButtonStyle2 : buttonStyle2} onClick={() => handleButtonClick(cuisineType)}>
              {cuisineType}
            </button>
          </SplideSlide>
        ))}
      </Splide>

      <div className="grid 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {/* <PopularCardSkeleton cards={10}/>*/}
        {popular.map((recipe) => (
          <div key={recipe.id}>
            <PopularCard heading={recipe.title} path={`recipes/${recipe.id}`} image={recipe.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
