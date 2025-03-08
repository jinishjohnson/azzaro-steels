import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import Card from '../ui-components/map'

const Test = () => {
  const franchisees = [
    {
      title: "Kerala Branch",
      description: "Our flagship franchise serving the vibrant market of Kerala"
    },
    {
      title: "Tamil Nadu Hub", 
      description: "Strategic location catering to Tamil Nadu's growing demands"
    },
    {
      title: "Karnataka Center",
      description: "Serving the dynamic market of Karnataka with excellence"
    },
    {
      title: "Andhra Pradesh Unit",
      description: "Expanding our presence in the Andhra Pradesh region"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f172a] to-[#223f68] mx-6 rounded-3xl my-8">
      <ParallaxBanner
        layers={[
          { 
            image: '/assets/banner.jpg', // Fixed image path
            speed: -20,
            opacity: [1, 0.5],
            expanded: false, // Added expanded property
            shouldAlwaysCompleteAnimation: true // Added for smoother animation
          },
          {
            speed: -15,
            expanded: false, // Added expanded property
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
        style={{ overflow: 'hidden' }} // Added overflow control
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {franchisees.map((franchisee, index) => (
            <div 
              key={index}
              className="transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <Card 
                title={franchisee.title}
                description={franchisee.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Test