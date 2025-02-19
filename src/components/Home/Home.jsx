import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { banner } from "../../assets/asset";
import About from "./about";
import Doors from "./Doors";
import Window from "./Window";
import Why from "./Why";
import What from "./What";

const Home = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // Adjust for smoother/slower effect
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
            smooth: true, // Enable smooth scrolling
            smoothTouch: false, // Set to true for smooth touch scrolling
            wheelMultiplier: 1.2, // Adjust speed of scroll with mouse wheel
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
            {/* Section 1 */}
            <div
                data-aos="fade-up"
                className="h-screen bg-[url('assets/banner.jpg')] bg-cover mx-2 md:mx-6 rounded-2xl shadow-2xl"
            >
                <ParallaxProvider>
                    <Parallax
                        translateX={[-10, 10]}
                        speed={-10}
                    >
                        <div className="mx-auto text-start justify-start p-4 max-md:py-10 md:px-6 lg:px-10">
                            <div className="col-span-1 max-w-3xl mt-10">
                                <h1 className="text-white text-1xl max-md:text-1xl mb-2 font-light tracking-wide antialiased">
                                    {banner.subtitle}
                                </h1>
                                <p className="text-white font-anton text-8xl font-black max-md:text-4xl mb-4 tracking-widest uppercase antialiased">
                                    <span className="text-red-600">Steel</span> fabrication at its best
                                </p>
                                <p className="text-white text-1xl max-md:text-xl mb-6 font-light tracking-wide antialiased">
                                    {banner.description}
                                </p>
                                <button className="bg-red-600 text-white font-light px-6 py-4 max-md:px-4 max-md:py-4 rounded-2xl hover:bg-blue-900 hover:scale-110 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-500 ease-in-out shadow-md antialiased">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </Parallax>
                </ParallaxProvider>
            </div>

            {/* Section 2 */}
            <About />   
            <Doors />
            <Window />
            <Why />
            <What/>
          
        </>
    );
};

export default Home;
