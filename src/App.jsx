import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "./App.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AOS from "aos";

const App = () => {
  AOS.init();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.1, // Adjust scroll speed
      smooth: true,
      easing: (t) => Math.min(2, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <>
   <ParallaxProvider>
      <Navbar />
      <Home />
      <Footer />
    </ParallaxProvider>
    </>
  );
};

export default App;
