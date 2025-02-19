import React, { useEffect, useState } from 'react'
import { ParallaxProvider, Parallax} from 'react-scroll-parallax'
import { assets, doors } from '../../assets/asset'

const Doors = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('doors-section')
      if (element) {
        const rect = element.getBoundingClientRect()
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
        setIsScrolled(isVisible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ParallaxProvider>
      <div
        id="doors-section" 
        className={`
          mx-2 sm:mx-4 md:mx-6 
          min-h-screen
          mt-4 
          rounded-3xl 
          flex items-center justify-between 
           bg-[url('./assets/banner2.jpg')] 
          bg-no-repeat bg-cover
          transition-all duration-700 ease-in-out
          ${isScrolled ? 'scale-100' : 'scale-95 sm:scale-90 md:scale-75'}
          p-4 sm:p-6 md:p-8
        `}
      >
        <div className='flex w-full flex-col-reverse md:flex-row gap-8 md:gap-12'>
          <Parallax translateY={[20, 20]} speed={-5} className="w-full md:w-1/2">
            <div className='w-full h-full flex flex-col space-y-4 md:space-y-6'>
              <Parallax translateX={[-10, 20]} speed={-5} className="w-full">
                <h1 className='text-white uppercase text-center md:text-start font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider font-bold'>
                  Steel <span className='text-red-600'>Doors</span>
                </h1>
                <p className='text-white text-start text-sm sm:text-base md:text-lg font-semibold mt-4 max-w-prose'>
                  {doors.subtitle}
                </p>
                <p className='text-white max-w-prose  font-extralight text-xs sm:text-sm md:text-base mt-2 text-justify'>
                  {doors.description}
                </p>
                <div className="flex justify-center md:justify-start mt-6">
                  <button className='
                    bg-red-600 
                    text-white 
                    font-light 
                    px-3 sm:px-4 md:px-6
                    py-2 sm:py-3 md:py-4
                    text-xs sm:text-sm md:text-base
                    rounded-2xl 
                    hover:bg-blue-900 
                    hover:scale-110 
                    hover:shadow-lg 
                    hover:-translate-y-1 
                    transform 
                    transition-all 
                    duration-500 
                    ease-in-out 
                    shadow-md 
                    antialiased
                  '>
                    View Products
                  </button>
                </div>
              </Parallax>
            </div>
          </Parallax>

          <Parallax translateY={[20, -20]} speed={-5} className="w-full md:w-1/2">
            <div className="w-full flex items-center justify-center">
              <img 
                src={assets.door} 
                alt="Doors and Windows" 
                className="
                  object-contain 
                  rounded-2xl 
                  shadow-2xl 
                  w-[90%] sm:w-[85%] md:w-[80%]
                  h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px]
                  transition-all duration-300
                " 
              />
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Doors