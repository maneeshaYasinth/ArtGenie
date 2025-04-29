import React from 'react';

const Results = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-white to-zinc-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-center font-['Pixelify_Sans'] text-black mb-12">
        Art Genie
      </h1>

      <div className="w-full max-w-md">
        <label htmlFor="prompt" className="block mb-2 text-lg text-center text-black">
          Input Your Prompt
        </label>
        <input
          id="prompt"
          name="prompt"
          placeholder="Describe your art idea..."
          className="w-full border-2 border-gray-400 rounded-lg p-3 text-black focus:outline-none focus:border-black bg-white"
        />
      </div>
    </div>
  );
};

export default Results;
