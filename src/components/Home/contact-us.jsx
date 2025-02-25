import React,{useState} from 'react'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax'
import { banner } from '../../assets/asset'
import Lottie from 'lottie-react'
import contact from '../../assets/contactus.json'

const Contactus = () => {
  // form initial
  const [result, setResult] = useState(""); // Fixed typo in 'const'

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
  return (
    <>
      <ParallaxBanner
        layers={[
          {image: banner, speed: -15},
          {
            speed: -10,
          }
        ]}              
        className='h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen'
      >
        <div className='absolute inset-0 flex items-center justify-center px-4'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl text-white lg:text-8xl text-center font-thin font-anton'>Contact <span className='text-red-600'>Us</span></h1>
          <Lottie animationData={contact} loop={true} className='w-48 max-sm:w-20 max-md:w-48' ></Lottie> 
        </div>
      </ParallaxBanner>

      <div className='flex flex-col items-start mx-4 sm:mx-6 lg:mx-12 justify-start'>
        <Parallax translateY={[50, -50]} speed={-10}>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-thin font-anton animate-[textColor_4s_ease-in-out_infinite]'>
            Lets <span className='text-red-600 animate-[redGlow_4s_ease-in-out_infinite]'>Connect</span>
          </h1>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-4xl font-thin font-anton animate-[textColor_4s_ease-in-out_infinite]'>
            We are here to help you
          </p>
        </Parallax>
        <style jsx>{`
          @keyframes textColor {
            0%, 100% { color: #ffffff; }
            50% { color: #94a3b8; }
          }
          @keyframes redGlow {
            0%, 100% { color: #dc2626; }
            50% { color: #ef4444; }
          }
        `}</style>
      </div>

      {/* contact form */}
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mx-4 sm:mx-6 lg:mx-12 my-16'>
        <Parallax translateY={[20, -20]} speed={-5}>
          <div className='w-full'>
            <form className='flex flex-col gap-4 bg-blue-900 border border-blue-900 text-white p-4 sm:p-6 lg:p-12 rounded-3xl' onSubmit={onSubmit}>
              <input 
                type="text" 
                placeholder='Name' 
                className='w-full p-3 sm:p-4 rounded-3xl bg-white/5 text-red-600 shadow-inner font-anton inset-0 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-red-600 transition-all' 
              />
              <input 
                type="email" 
                placeholder='Email' 
                className='w-full p-3 sm:p-4 rounded-3xl bg-white/5 text-red-600 shadow-inner font-anton inset-0 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-red-600 transition-all' 
              />
              <input 
                type="tel" 
                placeholder='Phone' 
                className='w-full p-3 sm:p-4 rounded-3xl bg-white/5 text-red-600 shadow-inner font-anton inset-0 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-red-600 transition-all' 
              />
              <textarea 
                placeholder='Message' 
                rows="4"
                className='w-full p-3 sm:p-4 rounded-3xl bg-white/5 text-red-600 shadow-inner font-anton inset-0 outline-none placeholder:text-white/50 focus:ring-2 focus:ring-red-600 transition-all resize-none' 
              />
              <button className='w-full sm:w-1/3 md:w-1/4 p-2 sm:p-3 rounded-3xl bg-red-600 hover:bg-red-700 backdrop-blur-md shadow-2xl text-white font-anton transition-all duration-300 hover:scale-105'>
                Submit
              </button>
              <p>{result}</p>
            </form>
          </div>
        </Parallax>

        <Parallax translateY={[-20, 20]} speed={-5}>
          <div className='w-full h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 text-white'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-center font-thin font-anton mb-4'>
              Contact <span className='text-red-600'>Us</span>
            </h1>
            <div className='space-y-4 w-full'>
              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className='text-sm sm:text-base'>info@example.com</p>
              </div>
              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className='text-sm sm:text-base'>+1 234 567 890</p>
              </div>
              <div className='flex items-center gap-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className='text-sm sm:text-base'>123 Street, City, Country</p>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  )
}

export default Contactus