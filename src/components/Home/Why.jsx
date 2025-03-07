import React, { useState, useEffect } from 'react'
import { ParallaxBanner, Parallax, useParallax } from 'react-scroll-parallax'
import Card from './Card'
import HorizontalScroll from '../ui-components/horizontal/HorizontalScroll'
import gsap from 'gsap'

const Why = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline();
    setIsLoaded(true);
    
    timeline.fromTo(".why-section", 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.8,
        ease: "power2.inOut"
      }
    );

    return () => {
      setIsLoaded(false);
      timeline.kill();
    };
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="why-section relative overflow-hidden">
      <ParallaxBanner
        layers={[
          { image: './assets/banner.jpg', speed: -20 },
          {
            speed: -15,
            children: ( 
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <h1 className="text-8xl text-white max-sm:text-6xl font-thin font-anton">
                  Why Choose <span className='text-red-600'>US</span>
                </h1>
                <p className='text-white font-thin font-anton text-2xl'>Team of Experts</p>
              </div>
            ),
          },
          { image: './assets/banner2.jpg', speed: -10 },
        ]}
        className="aspect-[2/1]"    
      />
      <div className="overflow-x-hidden">
        <HorizontalScroll /> 
      </div>
    </div>
  );
};
export default Why