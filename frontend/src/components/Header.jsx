import React from 'react'
import star_icon from "../assets/star_icon.svg"

const Header = () => {
  return (
    <div>
        <div className='mt-20'>
            <h1 className="text-6xl font-bold text-center mt-10 font-Pixelify Sans">Art Genie</h1>
            <div className='flex flex-row items-center justify-center mt-8'>
              <div className=' border-2 border-gray-300 rounded-2xl flex flex-row items-center justify-center bg-cyan-100/50 '>
                <p className="text-center  px-2 text-gray-500 text-sm">Your AI Art Generator</p>
                <img src={star_icon} alt="star icon" className='mt-1 mr-2'/>
                </div>
            </div>
            <div>
              <h1 className='text-5xl text-center mt-8'>Turn Your Text to, Image In Secnds!</h1>
            </div>
        </div>
    </div>
  )
}

export default Header