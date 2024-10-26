import React from 'react';

const Userexp = () => {
  return (
    <>
    <section className="bg-gradient-to-r  body-font from-black via-green-950 to-black text-white p-4 justify-start">
      <div className="container px-5 py-24 mx-auto">
      <h1 className='text-2xl'>User Experience</h1>
      <br />
        <div className="flex flex-wrap -m-4">
          {[
            {
              title: '@NickName77',
              description:
                'Excellent service, everything is translated quickly, well done. Never cheated with commissions',
              likes: '21.09.2021,',
              comments: '12:31',
            },
            {
              title: '_crypto_ghost_',
              description:
                'I am very grateful to this exchange for help and support! We decided everything in the best way) I am new to the market for crepes. Yesterday, from one platform, I tried to make a withdrawal to the map, and as it turned out, that platform',
                likes: '15.08.2021,',
                comments: '08:42',
            },
            {
              title: 'Satrak',
              description:
                'A cool exchanger, even with the first time antentification, everything is simple, understandable and, most importantly, quickly, money is credited almost instantly, I advise it to everyone.',
              likes: '21.09.2021,',
              comments: '18:55',
            },
          ].map((item, index) => (
            <div key={index} className="p-4 lg:w-1/3">
              <div className="h-full bg-lime-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {item.category}
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-green-600 mb-3">
                  {item.title}
                </h1>
                <p className="leading-relaxed mb-3">{item.description}</p>
                
                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                  <span className="text-green-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 ">
                    {item.likes}
                  </span>
                  <span className="text-green-700 inline-flex items-center leading-none text-sm">
                  
                    {item.comments}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    {/* </section> */}
    {/* <section className="bg-gradient-to-r  body-font from-black via-green-950 to-black text-white p-4 justify-start"> */}
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-2xl lg:w-full md:w-3/4 w-full mb-10 md:mb-0">
<img
  className="object-cover object-center rounded w-[1200px]"
  alt="hero"
  src="/security-concept-illustration 1.png"/>
</div>

      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Confidentiality
        </h1>
        <p className="mb-8 leading-relaxed">
        We do not store personal data on our servers and never transfer
        it to third parties
        </p>
        
      </div>
    </div>
  </section>
 </>

  );
};

export default Userexp;

