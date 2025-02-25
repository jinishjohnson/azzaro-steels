import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { assets } from "../../assets/asset";
import { winosproduct } from "../../assets/asset";
import { motion, AnimatePresence } from "framer-motion";

// Modal Component with Animation and Pop-Out Effect
const Modal = ({ isOpen, onClose, product }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-slate-800 p-4 sm:p-6 rounded-lg w-full max-w-md relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white text-lg sm:text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-white text-2xl sm:text-3xl font-medium font-anton mb-4">
              {product.title}
            </h2>
            <div className="relative overflow-hidden rounded-md mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 sm:h-48 object-cover transition-all duration-300 ease-in-out hover:scale-150 hover:shadow-2xl hover:z-10 cursor-zoom-in"
              />
            </div>
            {/* Additional Information */}
            <p className="text-white text-sm sm:text-base font-thin mb-4">
              {product.extraInfo || "Discover the premium features of this window, crafted with durable steel and modern design."}
            </p>
            <ul className="text-white text-xs sm:text-sm font-thin list-disc list-inside">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={onClose}
              className="mt-4 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 bg-red-600 rounded-full"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Winos = () => {
  // State to manage modal visibility and selected product
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to open modal with product data
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="w-full">
        <ParallaxBanner
          layers={[
            {
              image: assets.sky,
              speed: -30,
            },
            {
              image: assets.doorbg,
              speed: -10,
            },
            {
              speed: 25,
              children: (
                <div className="absolute inset-0 flex flex-col items-start justify-center text-center px-4 sm:mx-12">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-white font-thin font-anton drop-shadow-lg">
                    A <span className="text-red-600 text-4xl sm:text-5xl md:text-7xl lg:text-8xl -mx-2 sm:-mx-6">zz</span> aro Steel Windows
                  </h1>
                </div>
              ),
            },
          ]}
          className="w-full h-screen bg-cover bg-center"
        />
      </div>
      {/* Heading section */}
      <div className="bg-slate-900 py-8">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-medium font-anton drop-shadow-lg mt-6 sm:mt-10 tracking-wide">
            Explore A<span className="text-red-600">zz</span>aro Steel Windows
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl font-thin mt-2 max-w-2xl">
            The Azzaro Steel Windows is a modern and stylish window that is made from high quality steel.
          </p>
        </div>
      </div>
      {/* Window product section */}
      <div className="bg-slate-900 pt-8 pb-10 px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {winosproduct.map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white/10 p-4 sm:p-6 rounded-3xl"
            >
              <div className="w-full h-full">
                <img src={item.image} alt={item.title} className="w-full rounded-md" />
                <h1 className="text-white text-xl sm:text-2xl font-medium font-anton text-center drop-shadow-lg mt-4 sm:mt-6 tracking-wide">
                  {item.title}
                </h1>
                <p className="text-white text-xs sm:text-sm text-wrap mt-2 font-thin text-center">
                  {item.description}
                </p>
                <button
                  onClick={() => openModal(item)}
                  className="text-white text-xs sm:text-[12px] px-3 sm:px-4 py-1 sm:py-2 mt-2 mx-auto font-thin flex justify-center items-center bg-red-600 rounded-full"
                >
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct || {}}
      />
    </>
  );
};

export default Winos;