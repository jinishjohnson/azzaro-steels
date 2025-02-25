import React from 'react' 
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-anton text-white">Our <span className="text-red-600">Products</span></h1>
        <p className="text-gray-400 mt-4">Browse through our product categories</p>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        
        {/* Category 1 - Doors */}
        <div className="group relative overflow-hidden rounded-3xl">
          <div className="h-96 bg-[url('/assets/banner.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500">
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300">
              <div className="h-full flex flex-col justify-center items-center">
                <h2 className="text-4xl font-anton text-white mb-4">Steel Doors</h2>
                <p className="text-gray-200 text-center max-w-md px-6">
                  Premium quality steel doors for residential and commercial use
                </p>
                <Link to="/door">

                <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full 
                  hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  View Collection
                  </button>
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category 2 - Windows */}
        <div className="group relative overflow-hidden rounded-3xl">
          <div className="h-96 bg-[url('/assets/banner2.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500">
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40  transition-colors duration-300">
              <div className="h-full flex flex-col justify-center items-center">
                <h2 className="text-4xl font-anton text-white mb-4">Steel Windows</h2>
                <p className="text-gray-200 text-center max-w-md px-6">
                  Modern steel windows with superior durability and style
                </p>
                <Link to="/window">
                <button className="mt-6 px-8 py-3 bg-red-600 text-white rounded-full 
                  hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                  View Collection
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products