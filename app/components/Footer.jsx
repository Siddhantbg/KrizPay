import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-between items-start">
          <div className='w-24 h-24'>
          <img src="/logo.png" alt="pay" />

          </div>
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold">Krizpay</h1>
            <p className="italic">Pay Crazy!</p>
            <p className="mt-2">© 2024, cryptosale.net</p>
            <p>All rights reserved</p>
          </div>

          {/* Center Section */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Popular directions of exchange:</h3>
            <ul>
              <li>Exchange Bitcoin to Qiwi</li>
              <li>Exchange Sber to Bitcoin</li>
              <li>Exchange Ether to Sber</li>
              <li>Exchange Ether to Tinkoff</li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="flex flex-col md:flex-row gap-8">
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Tariffs</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Rules</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">For partners</a></li>
              <li><a href="#" className="hover:underline">Policy</a></li>
              <li><a href="#" className="hover:underline">Contacts</a></li>
            </ul>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col lg:flex-row lg:space-x-4 mt-4 lg:mt-0 lg:ml-4">
          <button type="button" class="text-black font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>

            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Log in
              </span>
            </button>
           
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
