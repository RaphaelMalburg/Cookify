import React, { useEffect, useState } from "react";
import imageTagSlider from "../constants/cuisineTypes";
import { Link, NavLink, useParams } from "react-router-dom";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Skeleton from "react-loading-skeleton";

const SliderCuisines = () => {
  return (
    <>
      <Splide
        className="flex text-light justify-center h-fit py-4 px-8 "
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
        {imageTagSlider.map((data) => {
          return (
            <SplideSlide key={data.title} className="relative py-5  rounded-full ">
              <Link to={`cuisinesearch/${data.title}`} className="grid place-items-center hover:opacity-80  rounded-full object-fit  mx-2">
                <img
                  src={data.image || <Skeleton />}
                  alt={`dish from ${data.title}`}
                  className=" object-cover md:h-36 h-24 w-36 contrast-50 rounded-full drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]  "
                />
                <p className="absolute font-semibold md:text-xl text-lg tracking-wider drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)]">{data.title || <Skeleton />}</p>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default SliderCuisines;
