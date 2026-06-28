import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { whyus } from "../../../assets/asset";
import Card from "../../ui-components/whyCard";
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = (props) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const cardRefs = useRef([]);
  const progressRef = useRef(null);

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
        onUpdate: (self) => {
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`;
          }
        },
      },
    });

    // Setup entrance animations for cards with stagger & 3D feel
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: i % 2 === 0 ? 80 : -80,
          rotateY: 15,
          scale: 0.85,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top center+=100",
            toggleActions: "play none none reverse",
          },
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
    <div
      ref={triggerRef}
      className="w-screen h-screen overflow-hidden relative"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(120,20,20,0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(180,30,30,0.15) 0%, transparent 60%), #0b1120",
      }}
    >
      {/* ── Section heading ── */}
      <div
        style={{
          position: "absolute",
          top: "28px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        {/* <h2
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "clamp(22px, 4vw, 40px)",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            background: "linear-gradient(90deg, #ff4444, #ffffff, #ff4444)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
          }}
        >
          Why Choose Us
        </h2> */}
        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "clamp(12px, 2vw, 15px)",
            letterSpacing: "5px",
            textTransform: "uppercase",
            marginTop: "6px",
          }}
        >
          Scroll to explore →
        </p>
      </div>

      {/* ── Progress bar ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "4px",
          background: "rgba(255,255,255,0.08)",
          zIndex: 30,
        }}
      >
        <div
          ref={progressRef}
          style={{
            height: "100%",
            width: "0%",
            background: "linear-gradient(90deg, #ff0000, #ff6644)",
            borderRadius: "0 2px 2px 0",
            transition: "width 0.05s linear",
          }}
        />
      </div>

      {/* ── Decorative floating orbs ── */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`orb-${i}`}
          style={{
            position: "absolute",
            width: `${60 + i * 40}px`,
            height: `${60 + i * 40}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, rgba(255,${50 + i * 30},${50 + i * 20},0.12) 0%, transparent 70%)`,
            top: `${10 + i * 18}%`,
            left: `${5 + i * 20}%`,
            animation: `floatOrb${i} ${6 + i * 2}s ease-in-out infinite alternate`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      {/* ── Card rows ── */}
      <div
        ref={sectionRef}
        className="flex h-screen items-center"
        style={{
          width: `${Math.ceil(whyus.length / 2) * 100}vw`,
          perspective: "1200px",
        }}
      >
        {cardPairs.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            className="card-row w-screen flex flex-col md:flex-row gap-8 justify-center items-center px-8 py-4"
          >
            {pair.map((item, index) => (
              <div
                key={rowIndex * 2 + index}
                ref={(el) =>
                  (cardRefs.current[rowIndex * 2 + index] = el)
                }
                className="card w-full md:w-[45%] flex flex-col items-center justify-center text-white p-4"
                style={{
                  willChange: "transform, opacity",
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="flex flex-col h-full items-center text-center justify-center gap-2 w-full">
                  <Card title={item.title} para={item.description} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ── Keyframes for floating orbs ── */}
      <style>{`
        @keyframes floatOrb0 { from { transform: translateY(0) scale(1); } to { transform: translateY(-30px) scale(1.1); } }
        @keyframes floatOrb1 { from { transform: translateY(0) scale(1); } to { transform: translateY(25px) scale(0.95); } }
        @keyframes floatOrb2 { from { transform: translateY(0) scale(1); } to { transform: translateY(-20px) scale(1.05); } }
        @keyframes floatOrb3 { from { transform: translateY(0) scale(1); } to { transform: translateY(35px) scale(0.9); } }
        @keyframes floatOrb4 { from { transform: translateY(0) scale(1); } to { transform: translateY(-15px) scale(1.08); } }
      `}</style>
    </div>
  );
};

export default HorizontalScroll;
