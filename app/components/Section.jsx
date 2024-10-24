import React from 'react';

const Section = () => {
  return (
    <section className="bg-gradient-to-r  body-font from-black via-green-950 to-black text-white p-4 justify-start">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Why users choose our service
          </h1>
         
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <img src="/Frame 63.png" alt="" />
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Everything is fair
              </h2>
              <p className="leading-relaxed text-sm">
                Fixed currency exchange. <br />
                No hidden fees
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <img src="/Frame 62.png" alt="" />
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Around the clock client <br />
                support
              </h2>
              <p className="leading-relaxed text-sm">
                our support specialists are always
                available and manage requests 24/7
              </p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <img src="/Frame 62 (1).png" alt="" />
              <h2 className="text-lg text-white font-medium title-font mb-2">
                A lot of types of exchange
              </h2>
              <p className="leading-relaxed text-sm">
                we offer our users 8 types
                of exchange and 2000 directions
              </p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <img src="/Frame 62 (2).png" alt="" />
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Fast
              </h2>
              <p className="leading-relaxed text-sm">
                simple and straightforward functionality, <br />
                and we process applications <br />
                within 15 minutes
              </p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <img src="/Frame 62 (3).png" alt="" />
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Safe
              </h2>
              <p className="leading-relaxed text-sm">
                our servers have a multi-level security <br />
                system, and we are constantly working <br />
                to improve and update it <br />
              </p>
            </div>
          </div>

          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <img src="/Frame 62 (4).png" alt="" />
              <h2 className="text-lg text-white font-medium title-font mb-2">
                Confidentially
              </h2>
              <p className="leading-relaxed text-sm">
                we never share user data with third parties
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Section;
