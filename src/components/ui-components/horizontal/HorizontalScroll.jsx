import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyus } from "../../../assets/asset";
import Card from "../../ui-components/whyCard";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = (props) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const sections = gsap.utils.toArray(".card-row");
    ScrollTrigger.getAll().forEach((st) => st.kill());
    const totalWidth = Math.ceil(sections.length / 2) * window.innerWidth;

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
      },
    });

    // Setup entrance animations for cards
    cardRefs.current.forEach((card) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 100,
          scale: 0.8,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            toggleActions: "play none none reverse"
          }
        });
      }
    });

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Create pairs of cards
  const cardPairs = [];
  for (let i = 0; i < whyus.length; i += 2) {
    cardPairs.push(whyus.slice(i, i + 2));
  }

  return (
    <div ref={triggerRef} className="w-screen h-screen overflow-hidden relative bg-transparent">
      <div 
        ref={sectionRef} 
        className="flex h-screen" 
        style={{ width: `${Math.ceil(whyus.length / 2) * 100}vw` }}
      >
        {cardPairs.map((pair, rowIndex) => (
          <div key={rowIndex} className="card-row w-screen flex flex-col md:flex-row gap-4 justify-center items-stretch p-4">
            {pair.map((item, index) => (
              <div
                key={rowIndex * 2 + index}
                ref={el => cardRefs.current[rowIndex * 3 + index] = el}
                className={`card w-full md:w-1/2 h-auto rounded-3xl hover:scale-105 flex flex-col items-center justify-center text-white text-4xl font-bold p-4 transition-all duration-500`}
                style={{
                  willChange: "transform",
                }}
              >
                <div className="flex flex-col px-2 h-full items-center text-center justify-center gap-2 w-full">
                  <Card 
                    title={item.title} 
                    para={item.description}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
