import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faEthereum, faBitcoinCash, faLitecoin, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const CryptoSale = () => {
  return (
    <section className="bg-gradient-to-r from-black via-green-950 to-black text-white p-4 justify-start">
      <h1 className="text-3xl font-semibold mb-4">What is good about the CryptoSale</h1>
      <p className="text-lg mb-10">
        With our service, you can buy or sell cryptocurrency with a 100% guarantee. Transactions take place automatically, we do not store your data for any exchange.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className=" p-6 rounded-lg flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faBitcoin} size="3x" className="text-yellow-400" />
          <span className="mt-4 text-gray-300">Bitcoin BTC</span>
        </div>
        <div className=" p-6 rounded-lg flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faEthereum} size="3x" className="text-purple-500" />
          <span className="mt-4 text-gray-300">Ethereum ETH</span>
        </div>
        <div className=" p-6 rounded-lg flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faBitcoinCash} size="3x" className="text-green-500" />
          <span className="mt-4 text-gray-300">Bitcoin Cash BCH</span>
        </div>
        <div className=" p-6 rounded-lg flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faLitecoin} size="3x" className="text-blue-500" />
          <span className="mt-4 text-gray-300">Litecoin LTC</span>
        </div>
        <div className=" p-6 rounded-lg flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faCcVisa} size="3x" className="text-blue-600" />
          <span className="mt-4 text-gray-300">Visa/MasterCard</span>
        </div>
        <div className=" p-6 rounded-lg flex flex-col items-center justify-center">
          <FontAwesomeIcon icon={faCheckCircle} size="3x" className="text-green-600" />
          <span className="mt-4 text-gray-300">Sber RUB</span>
        </div>
        {/* Add more items as needed */}
      </div>
    </section>
  );
};

export default CryptoSale;
