import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import PopularCard from "../components/PopularCard";
import Skeleton from "react-loading-skeleton";

const AllRecipes = () => {
  const [dataRecipes, setDataRecipes] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  const getQueryData = async (query) => {
    const api = await fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${" "}&number=10&diet=${query}`, options);
    const data = await api.json();
    return data.results;
  };

  useEffect(() => {
    const fetchData = async () => {
      const vegData = await getQueryData("vegetarian");
      const pescData = await getQueryData("pescetarian");
      const paleoData = await getQueryData("paleo");
      const veganData = await getQueryData("vegan");

      setDataRecipes([pescData, paleoData, veganData, vegData]);
    };

    fetchData();
  }, []);
  const h1Style = "md:text-6xl text-4xl flex font-bold tracking-wide justify-center py-4 pb-10 text-darkGreen drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]";
  return (
    <section className="pt-40 mx-2">
      <div>
        <h1 className={h1Style}>Vegetarian</h1>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            snap: true,
            perPage: 6,
            breakpoints: {
              1024: {
                perPage: 4,
              },
              640: {
                perPage: 3,
              },
              400: {
                perPage: 2,
              },
            },
          }}>
          {dataRecipes.length > 0 &&
            dataRecipes[3].map((data) => (
              <SplideSlide key={data.id}>
                <PopularCard heading={data.title} path={`recipes/${data.id}`} image={data.image} />
              </SplideSlide>
            ))}
        </Splide>

        <h1 className={h1Style}>Pescetarian</h1>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            snap: true,
            perPage: 6,
            breakpoints: {
              1024: {
                perPage: 4,
              },
              640: {
                perPage: 3,
              },
              400: {
                perPage: 2,
              },
            },
          }}>
          {dataRecipes.length > 0 &&
            dataRecipes[0].map((data) => (
              <SplideSlide key={data.id}>
                <PopularCard heading={data.title} path={`recipes/${data.id}`} image={data.image} />
              </SplideSlide>
            ))}
        </Splide>

        <h1 className={h1Style}>Paleo</h1>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            snap: true,
            perPage: 6,
            breakpoints: {
              1024: {
                perPage: 4,
              },
              640: {
                perPage: 3,
              },
              400: {
                perPage: 2,
              },
            },
          }}>
          {dataRecipes.length > 1 &&
            dataRecipes[1].map((data) => (
              <SplideSlide key={data.id}>
                <PopularCard heading={data.title} path={`recipes/${data.id}`} image={data.image} />
              </SplideSlide>
            ))}
        </Splide>

        <h1 className={h1Style}>Vegan</h1>
        <Splide
          options={{
            type: "loop",
            drag: "free",
            snap: true,
            perPage: 6,
            breakpoints: {
              1024: {
                perPage: 4,
              },
              640: {
                perPage: 3,
              },
              400: {
                perPage: 2,
              },
            },
          }}>
          {dataRecipes.length > 2 &&
            dataRecipes[2].map((data) => (
              <SplideSlide key={data.id}>
                <PopularCard heading={data.title} path={`recipes/${data.id}`} image={data.image} />
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </section>
  );
};

export default AllRecipes;
