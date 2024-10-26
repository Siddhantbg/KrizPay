import React from 'react';

const TeamSection = () => {
  // Team members data
  const teamMembers = [
    { name: 'QIWI RUB', image: '/qiwi2.png' },
    { name: 'YouMoney RUB', image: '/youmoney2.png' },
    { name: 'Sber RUB', image: '/sber2.png' },
    { name: 'Tinkoff RUB', image: '/tinker2.png' },
    { name: 'Bitcoin BTC', image: '/bit2.png' },
    { name: 'Visa/MasterCard RUB', image: '/visa2.png' },
    { name: 'Bitcoin Cash BCH', image: '/bitcoin2.png' },
    { name: 'Ethereum ETH', image: '/eth2.png' },
    { name: 'Litecoin LTC', image: '/litcoin2.png' },
  ];

  return (
    <section className="bg-gradient-to-r from-black via-green-950 to-black text-white p-4 justify-start">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">What is good about the CryptoSale</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed ml-4">
            With our service, you can buy or sell cryptocurrency with a 100% guarantee. Transactions take place
            automatically, we do not store your data for any exchange.
          </p>
        </div>
        <div className="flex flex-wrap -m-2 ">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 lg:w-1/4  md:w-1/2 w-full">
              <div className="h-full flex items-center border-black border p-4 bg-black rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-black object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src={member.image}
                />
                <div className="flex-grow">
                  <h2 className="text-whitetitle-font font-medium">{member.name}</h2>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
