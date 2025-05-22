import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import FadeAnimation from "../components/FadeAnimation";
import ScrollAnimation from "../components/ScrollAnimation";
import Cards from "../components/Cards";

function Home() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: ["-50vw", "3vw", "0vw"],
        transition: {
          duration: 2,
          ease: "linear",
        },
      });
    }
  }, [inView, controls]);
  return (
    <>
      <section className=" bg-[url('/assets/images/background_design_1.png')] lg:bg-cover relative -top-22 z-0 bg-center">
        <div className="flex flex-col gap-6 pt-44 lg:px-35 min-h-screen items-center ">
          <h1 className="pb-2 text-center text-4xl lg:text-5xl font-bold tracking-wide flex flex-col gap-2 ">
            WHO WE ARE <span>We Are A Team Of Top-Notch Service </span>
            <span>Providers</span>
          </h1>
          <FadeAnimation />

          <div className="w-full flex items-center justify-center gap-5 lg:gap-15 lg:mt-6">
            <button className="w-[164px] h-9 flex justify-center items-center rounded-2xl bg-gradient-to-r from-primary to-secondary text-xl font-semibold">
              <Link to={"/services?service=1"} className="w-full">
                SERVICES
              </Link>
            </button>
            <button className="w-[164px] h-9 flex justify-center items-center rounded-2xl text-xl font-semibold border-1 border-primary">
              <Link
                to={"/contact-us"}
                className="w-full text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"
              >
                CONTACT US
              </Link>
            </button>
          </div>
        </div>
        {/* sub nav */}
        <div className="hidden lg:block my-20 px-26">
          <div className="relative">
            <div className="grid grid-cols-4 relative z-10">
              <div className="flex flex-col gap-8 justify-center items-center">
                <ScrollLink
                  to="sec1"
                  smooth={true}
                  duration={1000}
                  className="tracking-wider cursor-pointer"
                >
                  01 OUR PARTNERS
                </ScrollLink>
                <ScrollLink
                  to="sec1"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  <div className="size-5 bg-white rounded-full flex justify-center items-center">
                    <div className="size-3.5 bg-primary rounded-full"></div>
                  </div>
                </ScrollLink>
              </div>
              <div className="flex flex-col gap-8 justify-center items-center">
                <ScrollLink
                  to="sec2"
                  smooth={true}
                  duration={1000}
                  className="tracking-wider cursor-pointer"
                >
                  02 SERVICES
                </ScrollLink>
                <ScrollLink
                  to="sec2"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  <div className="size-5 bg-white rounded-full flex justify-center items-center">
                    <div className="size-3 bg-primary rounded-full"></div>
                  </div>
                </ScrollLink>
              </div>
              <div className="flex flex-col gap-8 justify-center items-center">
                <ScrollLink
                  to="sec3"
                  smooth={true}
                  duration={1000}
                  className="tracking-wider cursor-pointer"
                >
                  03 PROJECTS
                </ScrollLink>
                <ScrollLink
                  to="sec3"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  <div className="size-5 bg-white rounded-full flex justify-center items-center">
                    <div className="size-3 bg-primary rounded-full"></div>
                  </div>
                </ScrollLink>
              </div>
              <div className="flex flex-col gap-8 justify-center items-center">
                <ScrollLink
                  to="sec4"
                  smooth={true}
                  duration={1000}
                  className="tracking-wider cursor-pointer"
                >
                  04 CUSOMERS
                </ScrollLink>
                <ScrollLink
                  to="sec4"
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer"
                >
                  <div className="size-5 bg-white rounded-full flex justify-center items-center">
                    <div className="size-3 bg-primary rounded-full"></div>
                  </div>
                </ScrollLink>
              </div>
            </div>
            <div className="absolute top-16 left-35 h-[2px] w-3/4 bg-[#9c9e9d] z-0 "></div>
          </div>
        </div>
      </section>

      <section id="sec1" className="flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-start lg:gap-4 lg:px-24">
          <img
            src="/assets/images/01.png"
            alt="first section"
            className="w-27 lg:w-[157px] lg:h-[94px]"
          />
          <h2 className="font-black text-2xl lg:text-4xl tracking-wide">
            OUR PARTNERS
          </h2>
        </div>
        <ScrollAnimation />
      </section>
      <section id="sec2" className="relative mt-24 lg:mt-26 ">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <img
            src="/assets/images/02.png"
            alt="second section"
            className="w-27 lg:w-[157px] lg:h-[94px]"
          />
          <h2 className="font-black text-2xl lg:text-4xl tracking-wide">
            SERVICES
          </h2>
        </div>
        <div ref={ref}>
          <motion.div initial={{ x: "-100vw" }} animate={controls}>
            <Cards />
          </motion.div>
        </div>
        <div className="hidden lg:block bg-[url('/assets/images/Ellipse-10.png')] absolute bg-contain bg-no-repeat rotate-180 bg-left  h-[1000px] w-[800px] -top-40 right-0 z-0 "></div>
      </section>
      <section
        id="sec3"
        className=" mt-24 lg:mt-26 flex flex-col lg:flex-row gap-6"
      >
        <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-start lg:gap-4 lg:px-24">
          <img
            src="/assets/images/03.png"
            alt="first section"
            className="w-27 lg:w-[157px] lg:h-[94px]"
          />
          <h2 className="font-black text-2xl lg:text-4xl tracking-wide">
            PROJECTS
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-34">
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
            <img src="/assets/images/total_icon.png" alt="folder icon" />
            <h5 className="tracking-widest text-2xl">Total</h5>
            <p className="text-5xl font-black text-primary">190+</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
            <img src="/assets/images/closed_icon.png" alt="folder icon" />
            <h5 className="tracking-widest text-2xl">Closed</h5>
            <p className="text-5xl font-black text-primary">120+</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
            <img src="/assets/images/running_icon.png" alt="folder icon" />
            <h5 className="tracking-widest text-2xl">Running</h5>
            <p className="text-5xl font-black text-primary">70+</p>
          </div>
        </div>
      </section>
      <section id="sec4" className="mt-24 lg:mt-26 relative">
        <div className="flex flex-col justify-center items-center gap-2 mb-4">
          <img
            src="/assets/images/04.png"
            alt="second section"
            className="w-27 lg:w-[157px] lg:h-[94px]"
          />
          <h2 className="font-black text-2xl lg:text-4xl tracking-wide">
            CUSTOMERS
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 lg:mt-12">
          <div className="flex flex-col gap-2 lg:gap-8 items-center ">
            <h4 className="text-2xl font-semibold tracking-wider">
              Ministries Sector
            </h4>
            <div className="flex flex-col gap-4">
              <p className="tracking-widest text-center text-[15px]">MEWA</p>
              <p className="tracking-widest text-center text-[15px]">MOC</p>
              <p className="tracking-widest text-center text-[15px]">MOH</p>
              <p className="tracking-widest text-center text-[15px]">MISA</p>
              <p className="tracking-widest text-center text-[15px]">MOD</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-8 items-center ">
            <h4 className="text-2xl font-semibold tracking-wider">
              Government Sector
            </h4>
            <div className="flex flex-col gap-4">
              <p className="tracking-widest text-center text-[15px]">SPL</p>
              <p className="tracking-widest text-center text-[15px]">SDAIA</p>
              <p className="tracking-widest text-center text-[15px]">ZATCA</p>
              <p className="tracking-widest text-center text-[15px]">MIC</p>
              <p className="tracking-widest text-center text-[15px]">ELM</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-8 items-center ">
            <h4 className="text-2xl font-semibold tracking-wider">
              Financial & banking sector
            </h4>
            <div className="flex flex-col gap-4">
              <p className="tracking-widest text-center text-[15px]">ARB</p>
              <p className="tracking-widest text-center text-[15px]">QNB</p>
              <p className="tracking-widest text-center text-[15px]">SAIB</p>
              <p className="tracking-widest text-center text-[15px]">AJIL</p>
              <p className="tracking-widest text-center text-[15px]">
                Banque Misr
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-8 items-center ">
            <h4 className="text-2xl font-semibold tracking-wider">
              Healthcare sector
            </h4>
            <div className="flex flex-col gap-4">
              <p className="tracking-widest text-center text-[15px]">KFCHRC</p>
              <p className="tracking-widest text-center text-[15px]">KFMC</p>
              <p className="tracking-widest text-center text-[15px]">
                Fakeeh Hospital
              </p>
              <p className="tracking-widest text-center text-[15px]">KAUH</p>
              <p className="tracking-widest text-center text-[15px]">SPRC</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-8 items-center ">
            <h4 className="text-2xl font-semibold tracking-wider">
              Service provider sector
            </h4>
            <div className="flex flex-col gap-4">
              <p className="tracking-widest text-center text-[15px]">Mobily</p>
              <p className="tracking-widest text-center text-[15px]">STC</p>
              <p className="tracking-widest text-center text-[15px]">ZAIN</p>
              <p className="tracking-widest text-center text-[15px]">
                Salam ITC
              </p>
              <p className="tracking-widest text-center text-[15px]">SPRC</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:gap-8 items-center ">
            <h4 className="text-2xl font-semibold tracking-wider">
              Commercial sector
            </h4>
            <div className="flex flex-col gap-4">
              <p className="tracking-widest text-center text-[15px]">
                Sanibel investment
              </p>
              <p className="tracking-widest text-center text-[15px]">
                Roua Al Madinah
              </p>
              <p className="tracking-widest text-center text-[15px]">
                Industrial Services Company
              </p>
              <p className="tracking-widest text-center text-[15px]">NUPCO</p>
              <p className="tracking-widest text-center text-[15px]">NEOM</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block bg-[url('/assets/images/Ellipse-10.png')] opacity-75 absolute bg-contain bg-no-repeat rotate-180 bg-left  h-[1000px] w-[800px] -top-40 right-0 z-0 "></div>
      </section>
    </>
  );
}

export default Home;
