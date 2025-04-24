import React from 'react';

const BuyCredits = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">Buy Credits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        
        {/* 100 Coins */}
        <div className="bg-white border-2 border-transparent hover:border-blue-500 shadow-md rounded-xl p-6 flex flex-col items-center transition-all duration-300">
          <div className="text-2xl font-bold text-gray-800 mb-2">Basic</div>
          <p className="text-gray-500 mb-4">Perfect for getting started</p>
          <div className="text-3xl font-bold text-indigo-600 mb-1">$1</div>
          <p className="mb-4 text-sm text-gray-500">100 Coins</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Access to image generation</li>
            <li>✅ Valid for all users</li>
            <li>✅ Great for trying it out</li>
          </ul>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition">
            Buy Now
          </button>
        </div>

        {/* 300 Coins */}
        <div className="bg-white border-2 border-transparent hover:border-blue-500 shadow-md rounded-xl p-6 flex flex-col items-center transition-all duration-300">
          <div className="text-2xl font-bold text-gray-800 mb-2">Pro</div>
          <p className="text-gray-500 mb-4">Best value for regular use</p>
          <div className="text-3xl font-bold text-indigo-600 mb-1">$2</div>
          <p className="mb-4 text-sm text-gray-500">300 Coins</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ More credits for less</li>
            <li>✅ Full feature access</li>
            <li>✅ Recommended for creatives</li>
          </ul>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition">
            Buy Pro
          </button>
        </div>

        {/* 500 Coins */}
        <div className="bg-white border-2 border-transparent hover:border-blue-500 shadow-md rounded-xl p-6 flex flex-col items-center transition-all duration-300">
          <div className="text-2xl font-bold text-gray-800 mb-2">Ultra</div>
          <p className="text-gray-500 mb-4">For power users</p>
          <div className="text-3xl font-bold text-indigo-600 mb-1">$4</div>
          <p className="mb-4 text-sm text-gray-500">500 Coins</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Highest value pack</li>
            <li>✅ Unlimited creativity</li>
            <li>✅ Ideal for frequent use</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition duration-300">
            Go Ultra
          </button>
        </div>


      </div>
    </div>
  );
};

export default BuyCredits;
