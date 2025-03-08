import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets, whyus } from "../../../assets/asset";
gsap.registerPlugin(ScrollTrigger);
const HorizontalScroll = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const sections = gsap.utils.toArray(".card");
    ScrollTrigger.getAll().forEach((st) => st.kill());
    // Calculate total width based on actual content
    // Adjust total width calculation
    const totalWidth = (sections.length - 1) * window.innerWidth;

    const tl = gsap.to(sections, {
      x: () => -totalWidth,
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => `+=${totalWidth}`,
        fastScrollEnd: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Prevent overscrolling
          if (self.progress >= 1) {
            self.scroll(self.start + self.duration);
          }
        }
      },
    });

    // Debounced resize handler
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100); // Debounce to reduce reflows
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div ref={triggerRef} className="w-screen h-screen overflow-hidden relative">
      <div 
        ref={sectionRef} 
        className="flex h-screen" 
        style={{ width: `${(whyus.length) * 100}vw` }}
      >
        {whyus.map((item, index) => (
          <div
            key={index}
            className={`card w-screen h-auto mx-2 my-3 rounded-3xl flex flex-col md:flex-row gap-4 md:gap-4 items-center justify-center text-white text-4xl font-bold p-4 md:p-6 transition-colors duration-300 ${
              index === whyus.length - 1
                ? "bg-gradient-to-r from-red-600/30 to-orange-500/30 border border-red-300/30 "
                : "bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border border-blue-300/30"
            }`}
            style={{
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
              willChange: "transform",
            }}
          >
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={index === whyus.length - 1 ? assets.door : assets.wind}
                className="w-full h-1/2 md:w-8/12 h-auto object-cover"
                alt={item.title}
                loading="lazy" // Lazy-load images
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

