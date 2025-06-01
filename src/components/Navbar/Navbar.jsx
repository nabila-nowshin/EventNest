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
     <div className="navbar bg-base-100 shadow-md py-4 px-4 lg:px-8 max-w-11/12 mx-auto">
      {/* Left - Logo */}
      <div className="navbar-start">
        <h1 className="text-3xl font-extrabold tracking-wider bg-gradient-to-r from-pink-500 via-teal-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-lg select-none">
          EventNest
        </h1>
      </div>

      {/* Mobile Menu Button */}
      <div className="navbar-end lg:hidden md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-gray-400 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round"
              strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
            <li><NavLink to="/" className="hover:text-green-400">Home</NavLink></li>
            <li><NavLink to="/profile" className="hover:text-green-400">My Profile</NavLink></li>
            <li><button className="mt-2 bg-green-400 text-black px-4 py-2 rounded-full hover:bg-[#3db9b3]">Login</button></li>
          </ul>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-center hidden lg:flex md:flex space-x-6">
        <NavLink to="/" className={navLinkClasses}>Home</NavLink>
        <NavLink to="/profile" className={navLinkClasses}>My Profile</NavLink>
      </div>

      {/* Right - Login button */}
      <div className="navbar-end hidden lg:flex md:flex">
        <button className="ml-4 px-5 text-lg py-2 bg-green-400 text-black font-semibold rounded-full hover:bg-[#3db9b3] transition-colors duration-300">
          Login
        </button>
      </div>
    </div>

  );
};


export default Navbar;