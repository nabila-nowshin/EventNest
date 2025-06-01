import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
const navLinkClasses = `
  text-gray-300 text-xl font-bold px-4 py-2 rounded-full relative
  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
  after:bg-green-400 after:scale-x-0 after:origin-bottom-left
  after:transition-transform after:duration-300 hover:after:scale-x-100
`;

  return (
    <div className="navbar shadow-md py-4 px-8 max-w-11/12 mx-auto">
        <div className="navbar-start">
            <h1
        className="
            text-4xl 
            font-extrabold 
            tracking-wider 
            bg-gradient-to-r 
            from-pink-500 
            via-teal-400 
            to-cyan-400 
            text-transparent 
            bg-clip-text 
            drop-shadow-lg
            select-none
        "
        >
        EventNest
        </h1>
        </div>
        <div className="navbar-center space-x-6">
        <NavLink className={navLinkClasses}>Home</NavLink>
        <NavLink className={navLinkClasses}>My Profile</NavLink>
        </div>
        <div className="navbar-end flex items-center space-x-4">
            <button className="ml-4 px-5 text-xl py-2 bg-green-400 text-black font-semibold rounded-full hover:bg-[#3db9b3] transition-colors duration-300">
        Login
        </button>
        </div>
</div>

  );
};


export default Navbar;