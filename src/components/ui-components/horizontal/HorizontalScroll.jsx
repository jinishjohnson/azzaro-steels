import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets, whyus } from "../../../assets/asset";    
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".card");

    // Cleanup previous ScrollTrigger instances
    ScrollTrigger.getAll().forEach(st => st.kill());

    const tl = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        // Adjusted end point to ensure full visibility of last card
        end: () => "+=" + window.innerWidth * sections.length,
      },
    });

    // Handle resize events
    const handleResize = () => {
      ScrollTrigger.update();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={triggerRef} className="w-screen h-screen my-12 overflow-hidden relative">
      <div ref={sectionRef} className="flex w-[500vw] h-screen">
        {whyus.map((item, index) => (
          <div
            key={index}
            className={`mx-2 sm:mx-4 md:mx-6 rounded-3xl card w-screen h-auto flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center text-white text-4xl font-bold ${
              index === whyus.length - 1 
                ? 'bg-gradient-to-r from-red-600 to-orange-500'
                : 'bg-gradient-to-r from-blue-500 to-indigo-500'
            } p-4 md:p-6`}
          >
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img 
                src={index === whyus.length - 1 ? assets.door : assets.wind}
                className="w-full md:w-8/12 h-auto object-contain" 
                alt={item.title}
              />
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-start justify-center gap-2 w-full md:w-1/2 px-4">
              <p className="text-2xl md:text-4xl font-normal">{item.title}</p>
              <p className="text-sm md:text-xl font-thin">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
