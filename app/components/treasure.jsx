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
    'Litecoin',
  ];

  // Array of image URLs corresponding to each feature
  const images = [
    '/QIWI.png',
    '/you monry.png',
    '/Sber.png',
    '/Tinkeoff.png',
    '/Visa.png',
    '/Bitcoin.png',
    '/Bitcoin cash.png',
    '/Etheruem.png',
    '/Litecoin.png',
  ];

  // Additional text content to appear on the right side of each box
  const additionalTexts = [
    '563 859 038.09 RUB',
    '563 859 038.09 RUB',
    '563 859 038.09 RUB',
    '36.000 506 890 BCH',
    '21.274 86099 LTC',
    '563 859 038.09 RUB',
    '563 859 038.09 RUB',
    '2.456 800 450 BTC',
    '14.989 256 456 ETH',
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
              <div className="bg-black text-white rounded flex p-4 h-full items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={images[index]}
                    alt={feature}
                    className="w-6 h-6 flex-shrink-0 mr-4"
                  />
                  <span className="title-font font-medium">{feature}</span>
                </div>
                <span className="ml-auto text-gray-400 text-sm">{additionalTexts[index]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
