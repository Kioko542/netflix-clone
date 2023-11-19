import React from "react";
import log from "../images/Log.jpg";
const Signup = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={log}
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
    </div>
  );
};

export default Signup;
