import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

const What = () => {
  return (
    <>
    <ParallaxBanner
        layers={[
          { image: './assets/banner.jpg', speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center"> 
                <h1 className="text-8xl text-white font-thin font-anton">
                  Our <span className='text-red-600'>Services</span>
                </h1>
                <p className="text-2xl text-white font-thin font-anton mt-4">
                  Scroll to explore what we offer
                </p>  
              </div>
            )
          }
        ]}
        className="h-screen"
      />  
      <div className="relative h-[600vh]"> {/* Six times height for 6 pages */}
        {/* Page A */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-10"
            translateY={[-50, 50]}
            speed={-20}
          >
            <div className="h-screen  bg-[url('./assets/banner2.jpg')] bg-cover bg-center" />
          </Parallax>

          <Parallax 
            className="absolute inset-0 z-20 flex items-center justify-center"
            translateY={[-30, 30]}
            speed={-15}
          >
            <div className="text-center">
             <div className='bg-red-600 rounded-3xl p-6'>
              <h1 className='text-white font-thin font-anton'>
                Section <span className='text-white'>A</span>
              </h1>
              <p className='text-white font-thin font-anton'>First Service</p>

             </div>
             
            </div>
          </Parallax>
        </div>

        {/* Page B */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-30" // Increased z-index
            translateY={[-50, 50]} 
            speed={-20}
          >
            <div className="h-screen  bg-[url('./assets/banner2.jpg')] bg-cover bg-center" />
          </Parallax>

          <Parallax
            className="absolute inset-0 z-40 flex items-center justify-center" // Increased z-index
            translateY={[-30, 30]}
            speed={-15}
          >
            <div className="text-center">
              <h1 className="text-8xl text-white font-thin font-anton">
                Section <span className='text-red-600'>B</span>
              </h1>
              <p className='text-white font-thin font-anton'>Second Service</p>
            </div>
          </Parallax>
        </div>

       

        {/* Page E */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-70" // Increased z-index
            translateY={[-50, 50]}
            speed={-20}
          >
            <div className="h-screen bg-[url('./assets/banner.jpg')] bg-cover bg-center" />
          </Parallax>

          <Parallax
            className="absolute inset-0 z-80 flex items-center justify-center" // Increased z-index
            translateY={[-30, 30]}
            speed={-15}
          >
            <div className="text-center">
              <h1 className="text-8xl text-white font-thin font-anton">
                Section <span className='text-red-600'>E</span>
              </h1>
              <p className='text-white font-thin font-anton'>Fourth Service</p>
            </div>
          </Parallax>
        </div>

        {/* Page F */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-90" // Increased z-index
            translateY={[-50, 50]}
            speed={-20}
          >
            <div className="h-screen bg-[url('./assets/banner2.jpg')] bg-cover bg-center" />
          </Parallax>

          <Parallax
            className="absolute inset-0 z-100 flex items-center justify-center" // Increased z-index
            translateY={[-30, 30]}
            speed={-15}
          >
            <div className="text-center">
              <h1 className="text-8xl text-white font-thin font-anton">
                Section <span className='text-red-600'>F</span>
              </h1>
              <p className='text-white font-thin font-anton'>Fifth Service</p>
            </div>
          </Parallax>
        </div>

        {/* Page G */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-110" // Increased z-index
            translateY={[-50, 50]}
            speed={-20}
          >
            <div className="h-screen bg-[url('./assets/banner2.jpg')] bg-cover bg-center" />
          </Parallax>

          <Parallax
            className="absolute inset-0 z-120 flex items-center justify-center" // Increased z-index
            translateY={[-30, 30]}
            speed={-15}
          >
            <div className="text-center">
              <h1 className="text-8xl text-white font-thin font-anton">
                Section <span className='text-red-600'>G</span>
              </h1>
              <p className='text-white font-thin font-anton'>Sixth Service</p>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  )
}

export default What