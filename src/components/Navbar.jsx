import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/react.svg";
import { SiChef } from "react-icons/si";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`searched/${search}`);
    console.log(search);
    setSearch("");
  }

  return (
    <div className=" fixed grid place-content-center grid-cols-2 md:grid-cols-3 px-8 py-5 z-30  top-0 w-full  text-light drop-shadow-[5px_5px_25px_rgba(255,255,255,0.85)]  ">
      <Link to="/" className="flex justify-center gap-2 font-bold text-xl tracking-widest items-center  text-darkGreen drop-shadow-[5px_5px_25px_rgba(255,255,255,0.85)] ">
        <SiChef className="text-8xl " />
        Cookify
      </Link>
      <div className="md:order-last place-self-center  flex flex-row justify-center ">
        <Link to="/login" className="self-end   text-xl px-3 font-semibold tracking-wide ">
          <FaUser className=" self-center text-3xl drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] " />
        </Link>
      </div>
      <form
        onSubmit={handleSearch}
        className="flex place-self-center bg-light flex-row  justify-start   md:-my-2 rounded-3xl  md:pe-8 hover:scale-x-110 hover:scale-y-105 max-w-md   pe-4 transition duration-3s00 ease-out md:col-start-2 md:col-end-3 col-span-2 lg:h-16 h-10 my-auto drop-shadow-[0_5px_5px_rgba(0,0,0,0.75)] ">
        <BiSearchAlt2 onClick={handleSearch} className="self-center text-dark font-bold text-4xl  mx-4 cursor-pointer " />
        <input type="text" className=" bg-light text-dark text-lg focus:outline-0 rounded-3xl w-full" onChange={(e) => setSearch(e.target.value)} value={search} />
      </form>
    </div>
  );
};

export default Navbar;
