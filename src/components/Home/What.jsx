import React from 'react'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax'

const What = () => {
  return (
    <>
      <div className="relative h-[300vh]"> {/* Triple height for 3 pages */}
        {/* Page A */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-10"
            translateY={[-50, 50]}
            speed={-20}
          >
            <div className="h-screen bg-[url('./assets/banner.jpg')] bg-cover bg-center" />
          </Parallax>

          <Parallax 
            className="absolute inset-0 z-20 flex items-center justify-center"
            translateY={[-30, 30]}
            speed={-15}
          >
            <div className="text-center">
              <h1 className="text-8xl text-white font-thin font-anton">
                Section <span className='text-red-600'>A</span>
              </h1>
              <p className='text-white font-thin font-anton'>First Service</p>
            </div>
          </Parallax>
        </div>

        {/* Page B */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-10"
            translateY={[-50, 50]} 
            speed={-20}
          >
            <div className="h-screen bg-[url('./assets/banner2.jpg')] bg-cover bg-center" />
          </Parallax>

          <Parallax
            className="absolute inset-0 z-20 flex items-center justify-center"
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

        {/* Page C */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <Parallax
            className="absolute inset-0 z-10"
            translateY={[-50, 50]}
            speed={-20}
          >
            <div className="h-screen bg-[url('./assets/banner.jpg')] bg-cover bg-center opacity-50" />
          </Parallax>

          <Parallax
            className="absolute inset-0 z-20 flex items-center justify-center"
            translateY={[-30, 30]}
            speed={-15}
          >
            <div className="text-center">
              <h1 className="text-8xl text-white font-thin font-anton">
                Section <span className='text-red-600'>C</span>
              </h1>
              <p className='text-white font-thin font-anton'>Third Service</p>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  )
}

export default What