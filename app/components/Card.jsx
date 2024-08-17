import React from 'react';

const Card = () => {
  return (
    <>
      <div className="relative w-full h-screen lg:w-96">
        {/* Container Positioned to Top Right */}
        <div className="absolute top-10 right-10 lg:top-20 lg:right-20">
          {/* Rectangle 1 Card */}
          <div className="relative h-80 w-full lg:top-4 lg:h-96 lg:w-96">
            <img src="/Rectangle 1.png" alt="Card Image"  />
          </div>
          
          {/* Group 3 Image Overlapping Rectangle 1 */}
          <div className="absolute top-0 right-0 h-80 w-full lg:h-96 lg:w-96">
            <img src="/Group3new.png" alt="Group 3 Image"  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
