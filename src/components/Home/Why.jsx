import React, { useState } from 'react'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax'
import Card from './Card'
import HorizontalScroll from '../ui-components/horizontal/HorizontalScroll'
const Why = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <ParallaxBanner
        layers={[
          { image: './assets/banner.jpg', speed: -20 },
          {
            speed: -15,
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-8xl text-white font-thin font-anton">Why Choose <span className='text-red-600'>US</span></h1>
                <p className='text-white font-thin font-anton'>Team of Experts</p>
              </div>
            ),
          },
          { image: './assets/banner2.jpg', speed: -10 },
        ]}
        className="aspect-[2/1]"    
      />
      <HorizontalScroll />
    </>
  )
}

export default Why