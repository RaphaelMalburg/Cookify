import React from "react";

import asparguesPlate from "./../assets/aspargusdish.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="flex flex-row overflow-hidden lg:px-14 mx-10 h-auto pb-10">
      <div className="flex md:basis-3/5 flex-col justify-start gap-6">
        <h1 className="md:text-6xl text-3xl lg:-pt-12 pt-12 font-bold tracking-wide text-dark drop-shadow-[0_5px_5px_rgba(0,0,0,0.35)]">
          Search for Recipes to Make Your Favorite Meal with Ease{" "}
        </h1>
        <p className="md:text-xl text-md font-bold text-dark">Access 1000+ Recipes and Cook Your Favorite Meals with Ease</p>

        <Link to="/allrecipes">
          <button className="i md:h-16 lg:w-64 w-44 bg-gradient-to-br from-lightGreen to-darkGreen items-center rounded-xl shadow-2xl  cursor-pointer  overflow-hidden transform hover:bg-lightGreen hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out font-bold font tracking-wider text-light md:text-2xl text-lg  ">
            Explore Recipes
          </button>
        </Link>
      </div>
      <div className="md:basis-1/4 basis-0"></div>
    </main>
  );
};

export default Hero;
