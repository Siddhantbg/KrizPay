"use client";

import { useState } from "react";
import Navbar from "./components/Navbar"; // Ensure Footer is used later
import Card from "./components/Card"; // Ensure Footer is used later


export default function Home() {
  // State for left and right card details
  const [leftCard, setLeftCard] = useState({
    token: "ATOM",
    network: "Cosmos Hub",
    value: 15,
    usdValue: 150.6,
    imagePath: "/assets/atom.png", // Image path updated
  });

  const [rightCard, setRightCard] = useState({
    token: "USDC",
    network: "Axelar",
    value: 150.6521,
    usdValue: 150.6521,
    imagePath: "/assets/usdc.png", // Image path updated
  });

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
  const handleLeftItemClick = (token, network, imagePath) => {
    setLeftCard({
      ...leftCard,
      token,
      network,
      imagePath,
    });
    setSelectedLeftItem(`${token} - ${network}`);
    setIsLeftDropdownOpen(false);
  };

  const handleRightItemClick = (token, network, imagePath) => {
    setRightCard({
      ...rightCard,
      token,
      network,
      imagePath,
    });
    setSelectedRightItem(`${token} - ${network}`);
    setIsRightDropdownOpen(false);
  };

  // Toggle function to swap card contents
  const handleSwap = () => {
    const tempCard = leftCard;
    setLeftCard(rightCard);
    setRightCard(tempCard);

    // Swap the dropdown labels
    setSelectedLeftItem(`${rightCard.token} - ${rightCard.network}`);
    setSelectedRightItem(`${leftCard.token} - ${leftCard.network}`);
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
<br />
<br />

          {/* Cards Section */}
          <div className="relative mt-12 flex flex-col md:flex-col lg:flex-row w-full items-start space-y-4 md:space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Left Card */}
            <div className="relative h-37 w-full max-w-sm overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl mt-4 md:mt-0">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#047857_50%,#A7F3D0_100%)]"></span>

              {/* Interior Left Card */}
              <div className="relative h-36 w-full flex flex-col justify-center items-center rounded-xl bg-gray-950 text-white p-2">
                <div className="absolute top-2 left-2 text-white text-sm">
                  <p>From</p>
                </div>
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-gray-700 px-1 py-1 rounded-md text-xs">Max</button>
                  <button className="bg-gray-700 px-1 py-1 rounded-md text-xs">Half</button>
                </div>

                {/* Left Dropdown Toggle */}
                <div className="absolute flex items-center left-2 top-8">
                  <button
                    className="flex items-center bg-transparent focus:outline-none"
                    onClick={toggleLeftDropdown}
                  >
                    <img
                      src={leftCard.imagePath} // Dynamic image path
                      alt={leftCard.token}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="font-bold text-sm">{selectedLeftItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
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
                </div>

                <div className="absolute right-2 top-8 text-sm">
                  <p className="text-lg">{leftCard.value}</p>
                  <p className="text-gray-400">≈ ${leftCard.usdValue}</p>
                </div>

                {/* Left Dropdown Menu */}
                {isLeftDropdownOpen && (
                  <div className="absolute top-16 left-2 mt-2 w-44 rounded-md shadow-lg bg-gray-800 z-10 text-xs">
                    <ul className="py-1">
                      <li
                        className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleLeftItemClick("ATOM", "Cosmos Hub", "/assets/atom.png")}
                      >
                        <img
                          src="/assets/atom.png"
                          alt="ATOM"
                          className="w-5 h-5 mr-2"
                        />
                        <span>ATOM - Cosmos Hub</span>
                      </li>
                      <li
                        className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleLeftItemClick("ETH", "Ethereum", "/assets/eth.png")}
                      >
                        <img
                          src="/assets/eth.png"
                          alt="ETH"
                          className="w-5 h-5 mr-2"
                        />
                        <span>ETH - Ethereum</span>
                      </li>
                      <li
                        className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleLeftItemClick("BTC", "Bitcoin", "/assets/btc.png")}
                      >
                        <img
                          src="/assets/btc.png"
                          alt="BTC"
                          className="w-5 h-5 mr-2"
                        />
                        <span>BTC - Bitcoin</span>
                      </li>
                    </ul>
                  </div>
                )}

                <div className="mt-20">
                  <p className="text-center text-sm font-bold">
                    {selectedLeftItem}
                  </p>
                </div>
              </div>
            </div>

            {/* Swap Button Positioned in the Middle */}
            <div className="lg:mt-0 lg:absolute lg:left-[35.5%] lg:top-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 z-20">
              <div className="h-10 w-10 bg-green-600 rounded-full flex items-center justify-center">
                <button onClick={handleSwap}>
                  <img
                    src="frame.png" // Make sure to use a proper path for the swap icon
                    alt="Swap"
                    className="h-5 w-5"
                  />
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="relative h-37 w-full max-w-sm overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A7F3D0_0%,#047857_50%,#A7F3D0_100%)]"></span>

              {/* Interior Right Card */}
              <div className="relative h-36 w-full flex flex-col justify-center items-center rounded-xl bg-gray-950 text-white p-2">
                <div className="absolute top-2 left-2 text-white text-sm">
                  <p>To</p>
                </div>
                <div className="absolute flex items-center left-2 top-8">
                  <button
                    className="flex items-center bg-transparent focus:outline-none"
                    onClick={toggleRightDropdown}
                  >
                    <img
                      src={rightCard.imagePath} // Dynamic image path
                      alt={rightCard.token}
                      className="w-6 h-6 mr-2"
                    />
                    <span className="font-bold text-sm">{selectedRightItem}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
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
                </div>

                <div className="absolute right-2 top-8 text-sm">
                  <p className="text-lg">{rightCard.value}</p>
                  <p className="text-gray-400">≈ ${rightCard.usdValue}</p>
                </div>

                {/* Right Dropdown Menu */}
                {isRightDropdownOpen && (
                  <div className="absolute top-16 left-2 mt-2 w-44 rounded-md shadow-lg bg-gray-800 z-10 text-xs">
                    <ul className="py-1">
                      <li
                        className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleRightItemClick("ATOM", "Cosmos Hub", "/assets/atom.png")}
                      >
                        <img
                          src="/assets/atom.png"
                          alt="ATOM"
                          className="w-5 h-5 mr-2"
                        />
                        <span>ATOM - Cosmos Hub</span>
                      </li>
                      <li
                        className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleRightItemClick("ETH", "Ethereum", "/assets/eth.png")}
                      >
                        <img
                          src="/assets/eth.png"
                          alt="ETH"
                          className="w-5 h-5 mr-2"
                        />
                        <span>ETH - Ethereum</span>
                      </li>
                      <li
                        className="flex items-center px-2 py-1 hover:bg-gray-700 cursor-pointer"
                        onClick={() => handleRightItemClick("BTC", "Bitcoin", "/assets/btc.png")}
                      >
                        <img
                          src="/assets/btc.png"
                          alt="BTC"
                          className="w-5 h-5 mr-2"
                        />
                        <span>BTC - Bitcoin</span>
                      </li>
                    </ul>
                  </div>
                )}

                <div className="mt-20">
                  <p className="text-center text-sm font-bold">
                    {selectedRightItem}
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
        <Card/>
      </div>
      
    </>
  );
}
