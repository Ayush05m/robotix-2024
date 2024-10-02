import React, { useEffect, useState } from 'react';
import logoBlack from '../assets/logoBlack.png'
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [user, setUser] = useState(useSelector(state => state));
  const [userLogged, setUserlogged] = useState(null);


  useEffect(() => {
    setUserlogged(localStorage.getItem('token'));
    // console.log(userLogged, user);
  }, [user])

  return (
    <div>
      <nav className="bg-amber-400 shadow">
        <div className="max-w-full mx-auto p-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="items-center">
              <a href="/" className="text-xl font-bold text-gray-800 flex flex-row">
                <img src={logoBlack} alt="Logo" className="w-16 h-16 mx-auto" />
                <div className="m-5" >Robotix Club NITRR</div>
              </a>
            </div>
            <div className="hidden md:flex md:w-[40%] justify-end items-center">
              <a href="/" className="text-gray-700 py-1 px-4  hover:text-gray-950 font-semibold">Home</a>
              <a href="/about" className="text-gray-700 py-1 px-4  hover:text-gray-950 font-semibold">About Us</a>
              <a href="/post" className="text-gray-700 py-1 px-4  hover:text-gray-950 font-semibold">Blog</a>
              {!userLogged &&
                <>
                  <a href="/log-in" className="text-gray-700 border-yellow-900 hover:bg-yellow-600 py-1 px-4 rounded-md hover:text-gray-950 font-semibold">Login</a>
                  <a href="/sign-up" className="text-gray-700 border-yellow-900 hover:bg-yellow-600 py-1 px-4 rounded-md hover:text-gray-950 font-semibold">Register</a>
                </>
              }
            </div>
            <div className="flex md:hidden">
              <button className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" type="button">
                {/* Icon for mobile menu */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;