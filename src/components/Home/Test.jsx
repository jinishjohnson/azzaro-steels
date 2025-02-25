import React, { useEffect, useRef } from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'
import gsap from 'gsap'

const Test = () => {

  return (
    <>
      <ParallaxBanner
        layers={[
          { image: './assets/banner.jpg', speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-thin font-anton text-center">
                  Our <span className='text-red-600'>Clients</span>
                </h1>
              </div>
            )
          }
        ]}
        className="h-[50vh] md:h-[70vh] lg:h-screen"
      />
      
      <div className="py-10 md:py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden relative">
            <div className="flex animate-scroll space-x-8 md:space-x-16">
              {/* First set of logos */}
              <div className="flex items-center min-w-full space-x-4 md:space-x-8">
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 1" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 2" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 3" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 4" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 5" className="h-12 md:h-16 lg:h-20 w-auto"/>
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex items-center min-w-full space-x-4 md:space-x-8">
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 1" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 2" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 3" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 4" className="h-12 md:h-16 lg:h-20 w-auto"/>
                <img src="https://cdn.prod.website-files.com/64edb502da5b3bd3d4e3528f/650430142dc3c15cdd2b7fed_google-logo-black.svg" alt="Client 5" className="h-12 md:h-16 lg:h-20 w-auto"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Test