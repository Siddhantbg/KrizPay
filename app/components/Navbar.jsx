"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-50 p-4 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-black/50 backdrop-blur-lg shadow-md border-transparent text-white' : 'bg-gradient-to-r from-black via-green-950 to-black text-white'}`}>
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Krizpay Logo" className="w-10 h-10 mr-3" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Krizpay</span>
              <span className="text-sm text-gray-400">Pay Crazy!</span>
            </div>
          </div>

          {/* Menu Toggle Button for Mobile */}
          <div className="block lg:hidden">
            <button
              className="focus:outline-none text-white"
              onClick={() => document.getElementById('menu').classList.toggle('hidden')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <div id="menu" className="w-full lg:flex lg:w-auto hidden lg:block">
            <ul className="lg:flex lg:space-x-6 lg:ml-auto lg:items-center mt-4 lg:mt-0">
              <li className="text-center">
                <Link href="/" className="hover:text-gray-400 block lg:inline-block py-2">Home</Link>
              </li>
              <li className="text-center">
                <Link href="/tariffs" className="hover:text-gray-400 block lg:inline-block py-2">Tariffs</Link>
              </li>
              <li className="text-center">
                <Link href="/reviews" className="hover:text-gray-400 block lg:inline-block py-2">Reviews</Link>
              </li>
              <li className="text-center">
                <Link href="/rules" className="hover:text-gray-400 block lg:inline-block py-2">Rules</Link>
              </li>
              <li className="text-center">
                <Link href="/faq" className="hover:text-gray-400 block lg:inline-block py-2">FAQ</Link>
              </li>
              <li className="text-center">
                <Link href="/partners" className="hover:text-gray-400 block lg:inline-block py-2">For partners</Link>
              </li>
              <li className="text-center">
                <Link href="/contacts" className="hover:text-gray-400 block lg:inline-block py-2">Contacts</Link>
              </li>
            </ul>
          </div>

          {/* Button Actions */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0 lg:ml-4">
            <button type="button" className="text-black font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>

            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Log in
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
