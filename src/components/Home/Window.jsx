import React, { useState, useEffect } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { assets, windows } from '../../assets/asset'

const Window = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('window-section')
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
                id="window-section"
                className={`
                    mx-2 sm:mx-4 md:mx-4 lg:mx-6 xl:mx-6
                    min-h-screen
                    mt-4 
                    rounded-3xl 
                    flex items-center justify-between 
                    bg-[url('./assets/banner2.jpg')] 
                    bg-no-repeat bg-cover bg-center
                    transition-all duration-700 ease-in-out
                    ${isScrolled ? 'scale-100' : 'scale-[0.85] xs:scale-90 sm:scale-95 md:scale-95'}
                    p-3 xs:p-4 sm:p-6 md:p-8 lg:p-10
                `}
            >
                <div className='flex w-full flex-col md:flex-row gap-4 xs:gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                    <Parallax translateY={[20, -20]} speed={-5} className="w-full md:w-1/2">
                        <div className="w-full flex items-center justify-center">
                            <img 
                                src={assets.wind} 
                                alt="Steel Windows" 
                                className="
                                    object-contain 
                                    rounded-2xl 
                                    shadow-2xl 
                                    w-[95%] xs:w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%]
                                    h-[180px] xs:h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]
                                    transition-all duration-300
                                " 
                            />
                        </div>
                    </Parallax>

                    <Parallax translateY={[20, 20]} speed={-5} className="w-full md:w-1/2">
                        <div className='w-full h-full flex flex-col space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8'>
                            <Parallax translateX={[-10, 20]} speed={-5} className="w-full">
                                <h1 className='text-white uppercase text-center md:text-start font-anton text-4xl md:text-6xl tracking-wider font-bold mb-4 md:mb-8'>
                                    Steel <span className='text-red-600'>Windows</span>
                                </h1>
                                <p className='text-white text-start text-1xl font-semibold w-96'>
                                    {windows.subtitle}
                                </p>
                                <p className='text-white w-96   md:text-start font-extralight text-sm md:text-1xl  px-4 md:px-0 text-justify'>
                                    {windows.description}
                                </p>
                                <div className="flex justify-center md:justify-start mt-4 xs:mt-5 sm:mt-6 md:mt-8">
                                    <button className='bg-red-600 text-white font-light px-4 py-3 mt-6 rounded-2xl hover:bg-blue-900 hover:scale-110 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-500 ease-in-out shadow-md antialiased text-sm md:text-base'>
                                        View Products
                                    </button>
                                </div>
                            </Parallax>
                        </div>
                    </Parallax>
                </div>
            </div>
        </ParallaxProvider>
    )
}

export default Window