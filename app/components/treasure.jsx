import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin, faEthereum, faBitcoinCash, faLitecoin, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Treasury = () => {
  const treasuryData = [
    { name: 'QIWI', amount: '563 859 038.09', currency: 'RUB', icon: faCheckCircle },
    { name: 'YouMoney', amount: '563 859 038.09', currency: 'RUB', icon: faCheckCircle },
    { name: 'Sber', amount: '563 859 038.09', currency: 'RUB', icon: faCheckCircle },
    { name: 'Tinkoff', amount: '563 859 038.09', currency: 'RUB', icon: faCheckCircle },
    { name: 'Visa/MasterCard', amount: '563 859 038.09', currency: 'RUB', icon: faCcVisa },
    { name: 'Bitcoin', amount: '2.456 800 450', currency: 'BTC', icon: faBitcoin },
    { name: 'Bitcoin Cash', amount: '36.000 506 890', currency: 'BCH', icon: faBitcoinCash },
    { name: 'Ethereum', amount: '14.989 256 456', currency: 'ETH', icon: faEthereum },
    { name: 'Litecoin', amount: '21.274 86099', currency: 'LTC', icon: faLitecoin },
  ];

  return (
    <section className="bg-gray-900 text-white py-12 px-6">
      <h1 className="text-3xl font-semibold mb-8">Treasury</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treasuryData.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg flex items-center justify-between shadow-lg">
            <div className="flex items-center">
              <FontAwesomeIcon icon={item.icon} size="2x" className="text-yellow-400 mr-4" />
              <span className="text-lg font-medium">{item.name}</span>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold">{item.amount}</p>
              <span className="text-sm text-gray-400">{item.currency}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treasury;
