import React from "react";
import { assets } from "../../assets/asset";
import Lottie from "lottie-react";
import pageer from "../../assets/pageer.json";
import { Link } from "react-router-dom";

const PageErr = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-cover bg-fixed bg-center" style={{ backgroundImage: "url('/path-to-your-background.jpg')" }}>
      {/* Overlay for Parallax Effect */}
      <div className="absolute inset-0 bg-transparent"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-11/12 max-w-5xl bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-lg">
        {/* Left Side - Text & Logo */}
        <div className="flex flex-col items-center text-center w-full md:w-1/2 p-6">
          <img src={assets.logo} alt="Logo" className="w-24 h-auto mb-6" />
          <h1 className="text-4xl font-bold text-red-500">
            404 <span className="text-black">That's an error</span>
          </h1>
          <p className="text-lg mt-4 text-gray-900">
            The requested URL was not found on this server. That's all we know.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>

        {/* Right Side - Lottie Animation */}
        <div className="w-64 md:w-80 mt-8 md:mt-0">
          <Lottie animationData={pageer} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default PageErr;
