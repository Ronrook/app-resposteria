import React from 'react'

import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="flex flex-col items-center h-16 bg-white text-black relative shadow-sm ">
      <img src={logo} alt="logo" className='w-52' />
      
      <div className="px-4 content-center cursor-pointer lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-60 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;