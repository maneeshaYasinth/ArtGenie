import React from 'react'
import AiImg from '../assets/AiImg.jpg'

const Results = () => {
  return (<>
        <h1 className="text-6xl font-bold text-center mt-20 font-Pixelify Sans">Art Genie</h1>
        <div>
            <div className='flex flex-row items-center justify-center mt-8'>
            </div>
            <div className='flex justify-center mt-4'>
                <div className='flex flex-row items-center justify-center max-w-md min-w-sm'>
                  <img src={AiImg} alt="Generated Art" className='rounded-lg' />
                </div>
            </div>
        </div>

        <div className='flex items-center justify-center'>
  <div className='flex flex-col items-center justify-center mt-4'>
    <label htmlFor="Prompt" className='mb-2 text-center'>Input Your Prompt</label>
    <input
      id="Prompt"
      name="Prompt"
      className='max-w-md w-full border-2 border-gray-400 rounded-lg p-2'
    />
  </div>
</div>

        </>
  )
}

export default Results