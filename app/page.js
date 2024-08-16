"use client"
import { useState } from "react";
import Footer from "./components/Footer";
export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("ATOM - Cosmos Hub");

// Function to toggle dropdown visibility
const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
};

  // Function to handle item selection
  const handleItemClick = (item) => {
    setSelectedItem(item); // Update selected item
    setIsDropdownOpen(false); // Close dropdown after selection
  };
  return (
    <>
      <div className="bg-gradient-to-r from-black via-green-950 to-black text-white p-4 min-h-screen flex items-start justify-start">
        <div className="text-white p-6 md:p-12 w-full">
          <h1 className="text-4xl md:text-6xl font-bold">
            Zero fee payments
          </h1>
          <div className="flex items-center text-4xl md:text-6xl font-bold mt-2">
            <span>on&nbsp;</span>
            <span className="grad">Z-portal</span>
          </div>
          <p className="text-base md:text-lg mt-4">
            No platform fees, no commissions, no hassle.
          </p>

          {/* Outer Card with Gradient */}
          <div className="mt-12 flex w-full ">
            <div className="relative h-50 w-full max-w-md overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#047857_50%,#A7F3D0_100%)]"></span>

              {/* Interior Card */}
              <div className="relative h-48 w-full flex flex-col justify-center items-center rounded-xl bg-gray-950 text-white p-4">
                <div className="absolute top-4 left-4 text-white">
                  <p>From</p>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-gray-700 px-2 py-1 rounded-md">Max</button>
                  <button className="bg-gray-700 px-2 py-1 rounded-md">Half</button>
                </div>

                {/* Dropdown Toggle */}
                <div className="absolute flex items-center left-4 top-12">
                  <button
                    className="flex items-center bg-transparent focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    <img
                      src="/path/to/atom.png"
                      alt="ATOM"
                      className="w-8 h-8 mr-2"
                    />
                    {/* dropdown front */}
                    <span className="font-bold text-xl">{selectedItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="ml-2">
            <p className="text-gray-400">{selectedItem.split(" - ")[1]}</p>
          </div>
        </div>


                <div className="absolute right-4 top-12">
                  <p className="text-2xl">15</p>
                  <p className="text-gray-400">≈ $150.6</p>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute top-16 left-4 mt-2 w-56 rounded-md shadow-lg bg-gray-800 z-10">
                    <ul className="py-1">
                      <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleItemClick("ATOM - Cosmos Hub")}>
                        <img
                          src="/path/to/atom.png"
                          alt="ATOM"
                          className="w-6 h-6 mr-2"
                        />
                        <span>ATOM - Cosmos Hub</span>
                      </li>
                      <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleItemClick("ETH - Ethereum")}
                      >
                        <img
                          src="/path/to/eth.png"
                          alt="ETH"
                          className="w-6 h-6 mr-2"
                        />
                        <span>ETH - Ethereum</span>
                      </li>
                      <li className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleItemClick("BTC - Bitcoin")}>
                        <img
                          src="/path/to/btc.png"
                          alt="BTC"
                          className="w-6 h-6 mr-2"
                        />
                        <span>BTC - Bitcoin</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Text inside the Card */}
                <div className="mt-24">
          <p className="text-center text-lg font-bold">
            {selectedItem}
          </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
