import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import Card from '../ui-components/map'

const Test = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f172a] to-[#223f68] mx-6 rounded-3xl my-8">
      <ParallaxBanner
        layers={[
          { 
            image: './assets/banner.jpg', 
            speed: -20,
            opacity: [1, 0.5]
          },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-thin font-anton text-center tracking-wider">
                  Our <span className='text-red-600 inline-block hover:scale-110 transition-transform duration-300'>Franchisee</span>
                </h1>
                <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl text-center">
                  Discover our network of trusted partners across South India
                </p>
              </div>
            )
          }
        ]}
        className="h-[50vh] md:h-[70vh] lg:h-screen relative"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[1, 2, 3, 4].map((item, index) => (
            <div 
              key={index}
              className="transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Test