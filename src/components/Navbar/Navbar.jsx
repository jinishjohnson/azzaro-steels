"use client";
import { MdPhoneAndroid } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  // form initial
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cb46bc35-79a6-4f14-bd36-963a96972927");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const menuItems = [
    { id: "01", name: "Home", href: "/home" },
    { id: "02", name: "About Us", href: "/about" },
    { id: "03", name: "Resources", href: "/resources" },
    { id: "04", name: "Products", href: "/products" },
    { id: "05", name: "Contact Us", href: "/contact", highlight: true },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative screen transition-all mx-1 sm:mx-4 mt-1 z-50 rounded-3xl duration-500 ${menuOpen ? "backdrop-blur-2xl" : ""}`}
    >
      {/* Navbar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-50 flex flex-col sm:flex-row justify-between items-center p-1 sm:p-2 gap-2 sm:gap-4"
      >
        {/* Left Column (Logo + Menu Button) */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative flex justify-between items-center gap-2 sm:gap-10 bg-slate-400 w-full sm:w-2/5 rounded-2xl h-auto px-3 sm:px-7 py-2 sm:py-5 shadow-lg"
        >
          <Link to="/">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              src={assets.logo} 
              alt="logo" 
              className="w-auto h-5 sm:h-8 cursor-pointer" 
            />
          </Link>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white flex items-center gap-1 sm:gap-2"
          >
            {menuOpen ? <X size={20} className="sm:w-7 sm:h-7" /> : <Menu size={20} className="sm:w-7 sm:h-7" />}
            <span className="text-sm sm:text-sm font-anton tracking-widest">Menu</span>
          </motion.button>
        </motion.div>

        {/* Right Column (Buttons) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-2 sm:gap-4 w-full sm:w-auto justify-start"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowContactForm(true)}
            className="px-3 sm:px-6 py-1.5 sm:py-4 text-xs sm:text-xl font-anton bg-red-600 text-white rounded-full xl:rounded-2xl shadow-xl hover:bg-red-500 transition flex items-center gap-1 sm:gap-2"
          >
            <MdPhoneAndroid className="text-base sm:text-xl" /> Contact Us
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 sm:px-6 py-1.5 sm:py-4 text-xs sm:text-xl border border-red-600 hover:border-white hover:bg-transparent font-anton bg-transparent text-white rounded-full xl:rounded-2xl shadow-xl hover:bg-red-500 transition flex items-center gap-1 sm:gap-2"
          >
            <GoBook className="text-3xl sm:text-xl" /> Catalogue
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Fluid Blur Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 0.5 : 0 }}
        className={`fixed inset-0 transition-opacity duration-500 ${menuOpen ? "visible" : "invisible"}`}
      ></motion.div>

      {/* Glassmorphism Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-16 sm:top-24 left-1 sm:left-5 w-[97%] sm:w-2/5 bg-slate-400 p-2 rounded-2xl shadow-xl border border-white/20"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {menuItems.map((item) => (
                <Link key={item.id} to={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 sm:p-4 rounded-xl text-white cursor-pointer shadow-md flex flex-col justify-between 
                      ${item.highlight ? "bg-red-600 text-black font-bold" : "bg-gray-800"} 
                      transition-transform duration-300`}
                  >
                    <span className="text-[10px] sm:text-xs text-white">{item.id}</span>
                    <span className="text-sm sm:text-lg">{item.name}</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact form popup */}
      <AnimatePresence>
        {showContactForm && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactForm(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-auto right-2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 shadow-2xl z-50 w-[90%] max-w-md"
            >
              <div className="flex justify-between items-center mx-auto">
                <h2 className="text-2xl font-anton text-red-600 mb-2">Contact Us</h2>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowContactForm(false)} 
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </motion.button>
              </div>
              <form className="space-y-4" onSubmit={onSubmit}>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  ></textarea>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-500 transition font-anton"
                >
                  Send Message
                </motion.button>
                <p>{result}</p>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
