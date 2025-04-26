import React from 'react'
import step_icon1 from "../assets/step_icon_1.svg"
import step_icon2 from "../assets/step_icon_2.svg"
import step_icon3 from "../assets/step_icon_3.svg"


const Steps = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-20 px-4">
      <h2 className="text-5xl font-bold mb-4">How it works</h2>
      <p className="text-lg text-gray-600 mb-10">Transform Words Into Stunning Images</p>
      
    
    <div className="w-full max-w-2xl flex flex-col gap-6">
    {/* Step 1 */}
    <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
        <span className="text-2xl"><img src={step_icon1} alt="Step 1 Icon" className="w-8 h-8" /></span> 
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">Describe Your Vision</h3>
        <p className="text-gray-600 text-base">Type a phrase, sentence, or paragraph that describes the image you want to create.</p>
      </div>
    </div>

    {/* Step 2 */}
    <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
        <span className="text-2xl"><img src={step_icon2} alt="Step 2 Icon" className="w-8 h-8" /></span> 
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">Watch the Magic</h3>
        <p className="text-gray-600 text-base">Our AI-powered engine will transform your text into a high-quality, unique image in seconds.</p>
      </div>
    </div>

    {/* Step 3 */}
    <div className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 mb-16">
      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
        <span className="text-2xl"><img src={step_icon3} alt="Step 3 Icon" className="w-8 h-8" /></span> 
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1">Download & Share</h3>
        <p className="text-gray-600 text-base">Instantly download your creation or share it with the world directly from our platform.</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Steps