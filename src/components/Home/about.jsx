import React, { useEffect, useState } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { assets, aboutus } from '../../assets/asset'
import Button from "../../components/ui-components/Button"


const about = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about-section')
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
        id="about-section"
        className={`mx-2 h-screen md:mx-6 mt-4 rounded-3xl min-h-screen flex items-center justify-between  transition-all bg-no-repeat duration-700 ease-in-out ${
          isScrolled ? 'scale-100' : 'scale-75'
        }`}
      >
        <div className='flex w-full flex-col md:flex-row justify-between p-4 md:p-8'>
          <Parallax translateY={[20, -20]} speed={-5} className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src={assets.dw} 
                alt="About Azzaro"
                className="object-contain rounded-2xl shadow-2xl w-full md:w-[80%] h-[300px] md:h-[80%]"
              />
            </div>
          </Parallax>

          <Parallax translateY={[20, 20]} speed={-5} className="w-full md:w-1/2">
            <div className='w-full h-full flex flex-col md:mx-9 translate-y-0 md:translate-y-[-10px]'>
              <Parallax translateX={[-10, 20]} speed={-5}>
                <h1 className='text-white uppercase text-center md:text-start font-anton text-4xl md:text-6xl tracking-wider font-bold mb-4 md:mb-8'>
                  About A<span className='text-red-600'>zz</span>aro
                </h1>
                <p className='text-white text-start text-1xl font-semibold w-96'>{aboutus.subtitle}</p>
                <p className='text-white w-96   md:text-start font-extralight text-sm md:text-1xl  px-4 md:px-0 text-justify'>
                  {aboutus.description}
                </p>
                <div className="flex justify-center md:justify-start mt-2">
                  <Button title="explore" />
                </div>
              </Parallax>
            </div>
          </Parallax>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default about