import React from "react";
import { Link  } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="text-[#c9d6df] flex justify-between  w-full absolute items-center px-[30px]   py-5 z-[100]">
      <Link to="/">
      <h1 className="text-gray-200 text-4xl cursor-pointer ">My-flix</h1>
      </Link>
      <div>
      <Link to="/login">

        <button className=" mx-3 text-white outline rounded py-2 px-5 hover:outline">
          Log in
        </button>
        </Link>
        <Link to="/signup">

        <button className="bg-red-600     rounded   py-2 px-5 ">
          Sign up
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
