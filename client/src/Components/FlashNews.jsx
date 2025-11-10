import React from 'react'

const FlashNews = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 text-center">
      <p className="text-lg font-semibold">
        🚀 Register now for Hackoverflow Hackathon! Limited spots available. 
        <a 
          href="/events/hackoverflow" 
          className="ml-2 underline hover:no-underline font-bold"
        >
          Learn More & Register
        </a>
      </p>
    </div>
  )
}

export default FlashNews