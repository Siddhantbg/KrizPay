import React from 'react';

const FeatureSection = () => {
  const features = [
    'QIWI',
    'YouMoney',
    'Sber',
   'Tinkoff',
   'Visa/MasterCard',
    'Bitcoin',
    'Bitcoin Cash',
    'Ethereum',
    'Litecoin'
  ];

  // Array of image URLs corresponding to each feature
  const images = [
    '/QIWI.png', // Image for "QIWI"
    '/you monry.png', // Image for "youmoeny"
    '/Sber.png', // Image for "Sber"
    '/Tinkeoff.png', // Image for "Tinkoff"
    '/Visa.png', // Image for "Visa"
    '/Bitcoin.png',  // Image for "BItcoin"
    '/Bitcoin cash.png',  // Image for "BItcoin cash" 
    '/Etheruem.png',  // Image for "Ethereum" 
    '/Litecoin.png',  // Image for "Litecoin" 

  ];
  return (
    <section className="bg-gradient-to-r from-black via-green-950 to-black text-white p-4 justify-start">
      <div className="container px-5 py-24 mx-auto">
        <div className="mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
            Treasury
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {features.map((feature, index) => (
            <div key={index} className="p-2 sm:w-1/2 w-full">
              <div className="bg-black text-white rounded flex p-4 h-full items-center">
                <img
                  src={images[index]}
                  alt={feature}
                  className="w-6 h-6 flex-shrink-0 mr-4"
                />
                <span className="title-font font-medium">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
