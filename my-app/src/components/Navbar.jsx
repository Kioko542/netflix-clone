import React from "react";

const Navbar = () => {
  return (
    <div className="text-[#c9d6df] flex justify-between  w-full absolute items-center px-[30px]   py-5 z-[100]">
      <h1 className="text-gray-200 text-4xl cursor-pointer ">My-flix</h1>
      <div>
        <button className=" mx-3 text-white outline rounded py-2 px-5 hover:outline">
          Log in
        </button>
        <button className="bg-red-600     rounded   py-2 px-5 ">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
