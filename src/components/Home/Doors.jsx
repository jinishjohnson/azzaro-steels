import React, { useEffect, useState } from 'react'
import { ParallaxProvider, Parallax} from 'react-scroll-parallax'
import { assets, doors } from '../../assets/asset'
import Button from '../ui-components/Button'

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
          flex items-center 
          bg-[url('./assets/banner.webp')] 
          bg-no-repeat bg-cover bg-center
          transition-all duration-700 ease-in-out
          ${isScrolled ? 'scale-100' : 'scale-95'}
          p-4 sm:p-6 md:p-8
        `}
      >
        <div className='w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-12'>
          {/* Content Section */}
          <div className="w-full md:w-1/2">
            <div className='w-full h-full flex flex-col space-y-4 md:space-y-6 md:justify-center'>
              <div className="w-full">
                <h1 className='text-black uppercase text-start font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wider font-bold'>
                  Steel <span className='text-red-600'>Doors</span>
                </h1>
                <p className='text-black text-start text-base sm:text-lg md:text-xl font-semibold mt-4 max-w-prose'>
                  {doors.subtitle}
                </p>
                <p className='text-black/80 max-w-prose font-normal text-sm sm:text-base md:text-lg mt-3 text-start leading-relaxed'>
                  {doors.description}
                </p>
                <div className="flex justify-start mt-8">
                  <Button title="Shop Now"/>
                 </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <Parallax translateY={[20, -20]} speed={-5} className="w-full md:w-1/2 flex items-center justify-center">
            <img 
              src={assets.door} 
              alt="Azzaro Steel Doors" 
              className="
                object-contain 
                w-full max-w-md
                h-[250px] sm:h-[300px] md:h-[400px]
                transition-all duration-300
              " 
            />
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default Doors