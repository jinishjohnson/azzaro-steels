import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Product/Products";
import Resources from "./components/Resources/Resources";
import Contactus from "./components/Home/contact-us";
import Footer from "./components/Footer/Footer";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import preload from "./assets/preload.svg";
import ScrollProgress from "./components/ScrollProgress";
import Door from "./components/Product/Door";
import Winos from "./components/Product/Winos";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // Reduced duration for mobile
      smoothTouch: false, // Disable smooth scrolling on touch devices
      smooth: true,
      touchMultiplier: 1.5, // Adjusted touch sensitivity
      wheelMultiplier: 1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      normalizeWheel: true,
      infinite: false
    });

    // Optimize scroll handling
    let rafId = null;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Add touch event handling
    const touchHandler = (e) => {
      if (e.touches.length > 1) {
        e.preventDefault(); // Prevent zooming
      }
    };
    
    document.addEventListener('touchmove', touchHandler, { passive: false });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener('touchmove', touchHandler);
    };
  }, []);

  useLayoutEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .set(".page-transition", {
        scaleY: 1,
        opacity: 1,
        transformOrigin: "bottom",
        y: 0,
      })
      .set(".preloader-image", {
        opacity: 1,
        y: 0,
        scale: 1,
      })
      .to(".preloader-image", {
        duration: 0.5,
        scale: 1.2,
        ease: "power2.out",
      })
      .to(".preloader-image", {
        duration: 0.7,
        y: "-100vh",
        scale: 0.8,
        opacity: 0,
        ease: "power2.in",
      }, "-=0.3")
      .to(".page-transition", {
        duration: 1.2,
        scaleY: 0,
        y: "-100%",
        transformOrigin: "top",
        ease: "power3.inOut",
        onUpdate: function () {
          gsap.to(".page-transition", {
            skewY: Math.sin(this.progress() * Math.PI * 2) * 3,
            duration: 0.10,
            ease: "sine.inOut",
          });
        },
      }, "-=0.8");

    return () => timeline.kill();
  }, [location]);

  // Detect if device is mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <>
      <ScrollProgress />
      <ParallaxProvider
        scrollAxis="vertical"
        disabled={isMobile}
      >
        <div className="fixed top-0 left-0 w-full h-screen z-50 pointer-events-none overflow-hidden">
          <div
            className="page-transition absolute top-0 left-0 w-full h-full shadow-lg"
            style={{
              backgroundImage: "radial-gradient(ellipse at top right, #000000, #ffffff, #000000)",
              backgroundSize: "100%",
              backgroundPosition: "0 0, 30px 30px",
            }}
          />
          <img
            src={preload}
            alt="Loading"
            className="preloader-image absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
          />
        </div>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/door" element={<Door />} />
          <Route path="/window" element={<Winos />} />
        </Routes>
        <Footer />
      </ParallaxProvider>
    </>
  );
};

export default App;