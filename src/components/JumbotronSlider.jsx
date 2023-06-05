import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import veg from "../assets/vegetarian.jpg";
import pastry from "../assets/pastry.jpg";
import bread from "../assets/bread.jpg";
import meat from "../assets/meat.jpg";
import fish from "../assets/fish.jpg";

const JumbotronSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="h-auto bg-light flex  flex-col lg:flex-row ">
      <div className="flex items-center justify-center lg:w-3/5 w-full flex-1">
        <div className="p-10 flex flex-col gap-6">
          <h1 className="md:text-6xl text-3xl font-bold text-white">Discover your new favorite recipes</h1>
          <p className="lg:text-xl text-m font-bold text-white">Best recipes for your type of food</p>
          <Link
            to="/allrecipes"
            className="bg-lightGreen text-white font-bold px-8 py-3 rounded-xl shadow-lg tracking-wider hover:bg-darkGreen hover:text-light transition duration-300 ease-in-out inline-block text-2xl "
            style={{ width: "fit-content" }}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="lg:w-2/5 w-full my-auto lg:mx-auto mx-10 pt-8 pb-12 flex-1 rounded-lg">
        <div className="h-2/3 w-3/4 ">
          <Slider {...settings}>
            <div className="h-full bg-darkGreen ">
              <img className="object-cover h-2/3 w-full rounded-lg  " src={veg} alt="Slider 1" />
            </div>
            <div className="h-full bg-lightGreen">
              <img className="object-cover h-full w-full" src={pastry} alt="Slider 2" />
            </div>
            <div className="h-full bg-green40">
              <img className="object-cover h-full w-full" src={bread} alt="Slider 3" />
            </div>
            <div className="h-full bg-lightGreen">
              <img className="object-cover h-full w-full" src={meat} alt="Slider 4" />
            </div>
            <div className="h-full bg-green40">
              <img className="object-cover h-full w-full" src={fish} alt="Slider 5" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default JumbotronSlider;
