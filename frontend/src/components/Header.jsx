import React from 'react'
import star_icon from "../assets/star_icon.svg"

const Header = () => {
  return (
    <div>
        <div className='mt-20'>
            <h1 className="text-4xl font-bold text-center mt-10 font-Pixelify Sans">Art Genie</h1>
            <div className='flex flex-row items-center justify-center mt-4  '>
                <p className="text-lg text-center mt-4 border-2 border-gray-700 rounded-2xl px-2">Your AI Art Generator</p>
                <img src={star_icon} alt="star icon" className='mt-5 px-2'/>
            </div>
        </div>
    </div>
  )
}

export default Header