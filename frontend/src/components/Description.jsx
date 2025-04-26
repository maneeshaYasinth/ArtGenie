import React from 'react';
import lion from "../assets/lion.png";

const Description = () => {
  return (
    <div className="w-full flex justify-center mt-20 pl-16 mb-24">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center px-4"> 

        <div className="w-full md:w-1/3 mb-8 md:mb-0 md:mr-8">
          <img
            className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            src={lion}
            alt="Lion AI generated Image"
          />
        </div>

        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Is <span className='text-blue-300'>ARTGENIE?</span></h2>
          <p className="text-lg text-gray-700 leading-relaxed text-justify max-w-lg">
            Art Genie is an AI-powered generative image application designed to bring creative ideas to life with just a few clicks. It allows users to generate stunning visuals across any topic by simply providing prompts or themes, making it accessible to artists, designers, and casual users alike. 
            With a light blue and white themed interface that feels both modern and calming, Art Genie offers a seamless and inspiring experience for anyone looking to create unique artwork, whether for professional projects, personal expression, or pure exploration.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Description;