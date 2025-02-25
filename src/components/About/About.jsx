import React from "react";
import { Parallax } from "react-parallax";
import Lottie from "lottie-react";
import Team from "../../assets/About.json";
import Emoji from "../../assets/impresions.json";
import { about, stats } from "../../assets/asset";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f172a] to-[#223f68] text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0f172a] to-[#223f68] text-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-4xl sm:text-5xl md:text-6xl font-anton font-bold tracking-widest text-center">
            About<span className="text-red-600 ml-2 sm:ml-5">US</span>
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-center">
            We're redefining the game with bold ideas and purposeful action.
          </p>
        </div>
      </section>

      {/* Parallax Hero Section */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        strength={200} // Reduced for better mobile performance
        className="h-[60vh] sm:h-screen mx-4 sm:mx-6 flex items-center justify-center rounded-2xl mt-2"
      >
        <div className="text-center text-white p-6 sm:p-8 rounded-2xl">
          <p className="text-3xl sm:text-4xl md:text-6xl font-anton font-bold tracking-widest drop-shadow-lg">
            A<span className="text-red-600">ZZ</span>ARO STEEL
          </p>
          <p className="mt-4 text-base sm:text-lg md:text-xl font-light">
            Experience the journey with us.
          </p>
        </div>
      </Parallax>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-transparent">
        {/* Who We Are with Parallax */}
        <Parallax
          strength={150} // Subtle effect for mobile
          className="py-12 sm:py-20 rounded-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto px-4">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-thin text-white font-anton tracking-wide">
                Who We Are
              </h2>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70 leading-relaxed">
                We're Azzaro Steel doors and windows, a forward-thinking crew blending creativity and tech to craft experiences that inspire. Passion drives us—innovation fuels us.
              </p>
            </div>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
              <Lottie animationData={Team} loop={true} />
            </div>
          </div>
        </Parallax>

        {/* Our Vibe */}
        <Parallax
          strength={150}
          className="py-12 sm:py-20 rounded-2xl"
        >
          <div className="mt-8 sm:mt-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-anton tracking-wide font-bold text-white">
              Our Culture
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70 max-w-3xl">
              Clean lines, big dreams, and a no-nonsense approach. We're a team of creators and doers obsessed with pushing boundaries and keeping it real.
            </p>
          </div>
        </Parallax>

        {/* Why We Do It */}
        <div className="mt-8 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {about.map((item, index) => (
            <div
              key={index}
              className="bg-transparent border-2 border-white/20 hover:scale-105 hover:border-white/80 hover:shadow-xl rounded-2xl transition-all duration-500 group relative overflow-hidden min-h-[200px] sm:min-h-[240px] flex items-center justify-center"
            >
              <div className="relative z-10 text-center px-4 py-6 w-full">
                <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-16 text-center">
          <Parallax
            strength={150}
            className="py-12  sm:py-20 rounded-2xl bg-black/20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl flex justify-center items-center mt-8 sm:mt-12 mb-8 sm:mb-12 font-anton tracking-wide font-bold text-red-600">
              Impresions
              <Lottie
                animationData={Emoji}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 ml-2"
                loop={true}
              />
            </h2>
            <div className="mt-6 sm:mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((item, index) => (
                <div key={index}>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-anton tracking-wide font-bold text-white">
                    {item.title}
                  </p>
                  <p className="text-sm sm:text-base text-white/70">{item.description}</p>
                </div>
              ))}
            </div>
          </Parallax>
        </div>
      </section>
    </div>
  );
};

export default About;