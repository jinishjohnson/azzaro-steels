'use client'
import { FaFacebook,FaInstagram, FaTwitter, FaPinterest, FaYoutube ,FaBlenderPhone} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* Page Content (flex-grow pushes the footer to bottom) */}
      <div className="flex-grow"></div>

      {/* Footer */}
      <footer className="w-full min-h-96 text-white p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
          {/* Left Section */}
          <div className="bg-blue-900 p-4 md:p-6 rounded-3xl col-span-1">
            <h2 className="text-white text-2xl md:text-4xl font-black">Why Choose A<span className="text-red-600">zz</span>aro?</h2>
            <p className="text-white text-sm md:text-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            
            <div className="flex gap-2 md:gap-4 mt-4">
              <button className="border border-white hover:bg-red-600 hover:text-white text-white py-1 md:py-2 px-2 md:px-4 rounded text-sm md:text-base">
                Learn More
              </button>
              <button className="border hover:bg-red-600 text-white py-1 md:py-2 px-2 md:px-4 rounded text-sm md:text-base">
                Learn More
              </button>
            </div>
            
            <div className="flex gap-4 md:gap-12 mt-10 md:mt-20 bg-red-600 p-2 md:p-3 rounded-2xl shadow-2xl cursor-pointer overflow-x-auto">
              <FaFacebook className="text-xl md:text-3xl text-white hover:text-blue-900 hover:shadow-2xl hover:scale-125 transition-all duration-300"/>
              <FaInstagram className="text-xl md:text-3xl text-white hover:text-pink-950 hover:shadow-2xl hover:scale-125 transition-all duration-300" />
              <FaTwitter className="text-xl md:text-3xl text-white hover:text-blue-400 hover:shadow-2xl hover:scale-125 transition-all duration-300" />
              <FaPinterest className="text-xl md:text-3xl text-white hover:text-black hover:shadow-2xl hover:scale-125 transition-all duration-300" />
              <FaYoutube className="text-xl md:text-3xl text-white hover:text-red-950 hover:shadow-2xl hover:scale-125 transition-all duration-300"/>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-blue-900 col-span-1 md:col-span-2 rounded-3xl p-4 md:p-6 mt-4 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Services Section */}
              <div className="col-span-1 md:col-span-2">
                <ul className="list-none mt-2 md:mt-4 text-lg md:text-2xl text-white font-medium uppercase gap-2 md:gap-4 cursor-pointer">
                  <li className="border-b-2 border-white hover:border-red-600 transition-all duration-300 py-1">Home</li>
                  <li className="border-b-2 border-white hover:border-red-600 transition-all duration-300 py-1">About</li>
                  <li className="border-b-2 border-white hover:border-red-600 transition-all duration-300 py-1">Service</li>
                  <li className="border-b-2 border-white hover:border-red-600 transition-all duration-300 py-1">Contact</li>
                </ul>
              </div>

              {/* Contact Info & Opening Hours */}
              <div className="mt-4 md:mt-0">
                <h1 className="text-xl md:text-2xl text-white font-extrabold">Contact Info</h1>
                <ul className="text-white mt-2 text-sm md:text-base">
                  <li className="flex gap-1 items-center"><FaBlenderPhone className="w-6 md:w-10" />1300 090 969</li>
                  <li className="flex gap-1 items-center"><MdEmail className="w-6 md:w-10"/>sales@aludoors.com.au</li>
                  <li className="flex gap-1 items-center"><FaLocationDot className="w-6 md:w-10" />491 Church St, Richmond VIC 3121</li>
                </ul>
                <h1 className="text-xl md:text-2xl text-white font-extrabold mt-2">Opening Hours</h1>
                <ul className="mt-2 text-xs md:text-sm">
                  <li className="flex gap-2 text-white ml-2 md:ml-4"><p>MON-FRI</p><span>09:00am-05:00pm</span></li>
                  <li className="flex gap-2 text-white ml-2 md:ml-4"><p>SAT</p><span>10:00am-03:00pm</span></li>
                  <li className="flex gap-2 ml-2 md:ml-4 text-white text-xs md:text-sm mt-1 font-semibold"><p>After Hours Appointment Only</p></li>
                </ul>
              </div>

              {/* Bottom Row */}
              <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row justify-between items-center mt-4">
                <div className="mb-2 md:mb-0">
                  <ul className="flex flex-wrap gap-2 md:gap-4 text-white text-[10px] md:text-xs font-semibold justify-center md:justify-start">
                    <li><p>@2025 ALL RIGHT RESERVED</p></li>
                    <li><p>PRIVACY POLICY</p></li>
                    <li><p>RETURN POLICY</p></li>
                  </ul>
                </div>
                <h1 className="text-white text-[10px] md:text-xs font-semibold text-center md:text-right">DESIGNED AND DEVELOP BY <a href="https://winscreatives.com" className="hover:text-red-600"> Winscreatives</a></h1>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
