"use client";
import { MdPhoneAndroid } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { id: "01", name: "Home", href: "/home" },
    { id: "02", name: "About Us", href: "/about" },
    { id: "03", name: "Resources", href: "/resources" },
    { id: "04", name: "Products", href: "/products" },
    { id: "05", name: "Contact Us", href: "/contact", highlight: true },
  ];

  return (
    <div className={`relative screen transition-all mx-1 sm:mx-4 mt-1 z-50 rounded-3xl duration-500 ${menuOpen ? "backdrop-blur-2xl" : ""}`}>
      {/* Navbar */}
      <div className="relative z-50 flex flex-col sm:flex-row justify-between items-center p-1 sm:p-2 gap-2 sm:gap-4">
        {/* Left Column (Logo + Menu Button) */}
        <div className="relative flex justify-between items-center gap-2 sm:gap-10 bg-slate-400 w-full sm:w-2/5 rounded-2xl h-auto px-3 sm:px-7 py-2 sm:py-5 shadow-lg">
          <Link href="/">
            <img src={assets.logo} alt="logo" className="w-auto h-5 sm:h-8 cursor-pointer" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white flex items-center gap-1 sm:gap-2">
            {menuOpen ? <X size={20} className="sm:w-7 sm:h-7" /> : <Menu size={20} className="sm:w-7 sm:h-7" />}
            <span className="text-sm sm:text-sm font-anton tracking-widest ">Menu</span>
          </button>
        </div>

        {/* Right Column (Buttons) */}
        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-start">
          <Link href="/contact">
            <button className="px-3 sm:px-6 py-1.5 sm:py-4 hover:scale-105 text-xs sm:text-xl font-anton bg-red-600 text-white rounded-full xl:rounded-2xl shadow-xl hover:bg-red-500 transition flex items-center gap-1 sm:gap-2">
              <MdPhoneAndroid className="text-base sm:text-xl" /> Contact Us
            </button>
          </Link>
          <button className="px-3 flex items-center gap-4 hover:scale-105  max-sm:px-6 py-1.5 max-sm:py-4 font-anton text-2xl font-thin  max-sm:text-xl border text-white border-red-600 rounded-2xl hover:bg-white-700 transition">
            <GoBook className="text-3xl sm:text-xl " /> Catalogue
          </button>
        </div>
      </div>

      {/* Fluid Blur Effect */}
      <div
        className={`fixed inset-0 opacity-5 transition-opacity duration-500 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      ></div>

      {/* Glassmorphism Menu */}
      <div
        className={`absolute top-16 sm:top-24 left-1 sm:left-5 w-[97%] sm:w-2/5 bg-slate-400 p-2 rounded-2xl shadow-xl border border-white/20 transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100 scale-105" : "-translate-y-full opacity-0 scale-95"
        }`}
      >
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.href} passHref>
              <div
                className={`p-2 sm:p-4 rounded-xl text-white cursor-pointer shadow-md flex flex-col justify-between 
                  ${item.highlight ? "bg-yellow-400 text-black font-bold" : "bg-gray-800"} 
                  hover:scale-105 transition-transform duration-300`}
              >
                <span className="text-[10px] sm:text-xs text-yellow-500">{item.id}</span>
                <span className="text-sm sm:text-lg">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
