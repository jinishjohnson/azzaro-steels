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

    // Cleanup previous ScrollTrigger instances
    ScrollTrigger.getAll().forEach((st) => st.kill());

    // Optimize by pre-calculating total width
    const totalWidth = sections.length * window.innerWidth;

    const tl = gsap.to(sections, {
      x: () => -totalWidth + window.innerWidth, // Move only what's needed
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        pin: true,
        scrub: 0.5, // Keep it responsive but smooth
        start: "top top",
        end: () => "+=" + totalWidth * 0.75, // Reduce scroll distance for speed
        fastScrollEnd: true, // Optimize animation end
        anticipatePin: 1, // Prepares pinning for smoother start
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
    <div ref={triggerRef} className="w-screen h-screen my-12 overflow-hidden relative">
      <div ref={sectionRef} className="flex h-screen" style={{ width: `${whyus.length * 100}vw` }}>
        {whyus.map((item, index) => (
          <div
            key={index}
            className={`mx-2 sm:mx-4 md:mx-6 rounded-3xl card w-screen h-auto flex flex-col md:flex-row gap-4 md:gap-2 items-center justify-center text-white text-4xl font-bold shadow-lg p-4 md:p-6 transition-colors duration-300 ${
              index === whyus.length - 1
                ? "bg-gradient-to-r from-red-600/30 to-orange-500/30 border border-red-300/30"
                : "bg-gradient-to-r from-blue-500/30 to-indigo-500/30 border border-blue-300/30"
            }`}
            style={{
              // Remove backdrop-filter for performance
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)", // Lighter shadow
              willChange: "transform", // Hint to browser for optimization
            }}
          >
            <div className="flex items-center justify-center w-full md:w-1/2">
              <img
                src={index === whyus.length - 1 ? assets.door : assets.wind}
                className="w-full md:w-8/12 h-auto object-contain"
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

