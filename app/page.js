"use client";

import { useState } from "react";
import Footer from "./components/Footer";

export default function Home() {
  // Dropdown states for both left and right cards
  const [isLeftDropdownOpen, setIsLeftDropdownOpen] = useState(false);
  const [isRightDropdownOpen, setIsRightDropdownOpen] = useState(false);

  const [selectedLeftItem, setSelectedLeftItem] = useState("ATOM - Cosmos Hub");
  const [selectedRightItem, setSelectedRightItem] = useState("USDC - Axelar");

  // Toggle dropdown visibility for left and right cards
  const toggleLeftDropdown = () => {
    setIsLeftDropdownOpen(!isLeftDropdownOpen);
  };

  const toggleRightDropdown = () => {
    setIsRightDropdownOpen(!isRightDropdownOpen);
  };

  // Handle item selection for both dropdowns
  const handleLeftItemClick = (item) => {
    setSelectedLeftItem(item);
    setIsLeftDropdownOpen(false);
  };

  const handleRightItemClick = (item) => {
    setSelectedRightItem(item);
    setIsRightDropdownOpen(false);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-black via-green-950 to-black text-white p-4 min-h-screen flex items-start justify-start">
        <div className="text-white p-6 md:p-12 w-full">
          <h1 className="text-4xl md:text-6xl font-bold">Zero fee payments</h1>
          <div className="flex items-center text-4xl md:text-6xl font-bold mt-2">
            <span>on&nbsp;</span>
            <span className="grad">Z-portal</span>
          </div>
          <p className="text-base md:text-lg mt-4">
            No platform fees, no commissions, no hassle.
          </p>

          {/* Cards Section */}
          <div className="relative mt-12 flex flex-col md:flex-row w-full justify-center items-center md:justify-start md:space-x-4">

            {/* Left Card */}
            <div className="relative h-50 w-full max-w-md overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl mt-4 md:mt-0">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#047857_50%,#A7F3D0_100%)]"></span>

              {/* Interior Left Card */}
              <div className="relative h-48 w-full flex flex-col justify-center items-center rounded-xl bg-gray-950 text-white p-4">
                <div className="absolute top-4 left-4 text-white">
                  <p>From</p>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="bg-gray-700 px-2 py-1 rounded-md">Max</button>
                  <button className="bg-gray-700 px-2 py-1 rounded-md">Half</button>
                </div>

                {/* Left Dropdown Toggle */}
                <div className="absolute flex items-center left-4 top-12">
                  <button
                    className="flex items-center bg-transparent focus:outline-none"
                    onClick={toggleLeftDropdown}
                  >
                    <img
                      src="/path/to/atom.png"
                      alt="ATOM"
                      className="w-8 h-8 mr-2"
                    />
                    <span className="font-bold text-xl">{selectedLeftItem}</span>
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
                    <p className="text-gray-400">{selectedLeftItem.split(" - ")[1]}</p>
                  </div>
                </div>

                <div className="absolute right-4 top-12">
                  <p className="text-2xl">15</p>
                  <p className="text-gray-400">≈ $150.6</p>
                </div>

                {/* Left Dropdown Menu */}
                {isLeftDropdownOpen && (
                  <div className="absolute top-16 left-4 mt-2 w-56 rounded-md shadow-lg bg-gray-800 z-10">
                    <ul className="py-1">
                      <li
                        className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleLeftItemClick("ATOM - Cosmos Hub")}
                      >
                        <img
                          src="/path/to/atom.png"
                          alt="ATOM"
                          className="w-6 h-6 mr-2"
                        />
                        <span>ATOM - Cosmos Hub</span>
                      </li>
                      <li
                        className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleLeftItemClick("ETH - Ethereum")}
                      >
                        <img
                          src="/path/to/eth.png"
                          alt="ETH"
                          className="w-6 h-6 mr-2"
                        />
                        <span>ETH - Ethereum</span>
                      </li>
                      <li
                        className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleLeftItemClick("BTC - Bitcoin")}
                      >
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

                <div className="mt-24">
                  <p className="text-center text-lg font-bold">
                    {selectedLeftItem}
                  </p>
                </div>
              </div>
            </div>

            {/* Green Circle between Cards */}
            <div className="mt-4 md:mt-0 md:absolute md:left-[32.5%] md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2 z-20">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
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
              </div>
            </div>

            {/* Right Card */}
            <div className="relative h-50 w-full max-w-md overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#047857_50%,#A7F3D0_100%)]"></span>

              {/* Interior Right Card */}
              <div className="relative h-48 w-full flex flex-col justify-center items-center rounded-xl bg-gray-950 text-white p-4">
                <div className="absolute top-4 left-4 text-white">
                  <p>To</p>
                </div>

                {/* Right Dropdown Toggle */}
                <div className="absolute flex items-center left-4 top-12">
                  <button
                    className="flex items-center bg-transparent focus:outline-none"
                    onClick={toggleRightDropdown}
                  >
                    <img
                      src="/path/to/usdc.png"
                      alt="USDC"
                      className="w-8 h-8 mr-2"
                    />
                    <span className="font-bold text-xl">{selectedRightItem}</span>
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
                    <p className="text-gray-400">{selectedRightItem.split(" - ")[1]}</p>
                  </div>
                </div>

                <div className="absolute right-4 top-12">
                  <p className="text-2xl">15</p>
                  <p className="text-gray-400">≈ $150.6</p>
                </div>

                {/* Right Dropdown Menu */}
                {isRightDropdownOpen && (
                  <div className="absolute top-16 left-4 mt-2 w-56 rounded-md shadow-lg bg-gray-800 z-10">
                    <ul className="py-1">
                      <li
                        className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleRightItemClick("USDC - Axelar")}
                      >
                        <img
                          src="/path/to/usdc.png"
                          alt="USDC"
                          className="w-6 h-6 mr-2"
                        />
                        <span>USDC - Axelar</span>
                      </li>
                      <li
                        className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleRightItemClick("USDT - Tether")}
                      >
                        <img
                          src="/path/to/usdt.png"
                          alt="USDT"
                          className="w-6 h-6 mr-2"
                        />
                        <span>USDT - Tether</span>
                      </li>
                      <li
                        className="flex items-center px-4 py-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleRightItemClick("DAI - Dai")}
                      >
                        <img
                          src="/path/to/dai.png"
                          alt="DAI"
                          className="w-6 h-6 mr-2"
                        />
                        <span>DAI - Dai</span>
                      </li>
                    </ul>
                  </div>
                )}

                <div className="mt-24">
                  <p className="text-center text-lg font-bold">
                    {selectedRightItem}
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
