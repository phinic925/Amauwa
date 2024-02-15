import React from 'react';

const MainBanner = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center sm:items-start sm:flex-row-reverse sm:mb-20">
      <div className="max-w-md mx-auto bg-white p-8 shadow-lg" style={{ borderRadius: '20px' }}>
        {/* Content */}
        <h1 className="text-2xl mb-3 text-customGreen" style={{ fontWeight: 'bold' }}>Bringing Nature into Your Space</h1>

        <p className="mb-5">Amauwa offers the best landscaping services in Nairobi. We aim to leave your compound beautiful and with a long-lasting impact.</p>
        <button className="py-2 px-4 bg-customGreen text-white rounded-full hover:bg-green-700 transition duration-300">Get Quote</button>
      </div>
    </div>
  );
};

export default MainBanner;
