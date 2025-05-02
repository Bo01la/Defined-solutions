import { Link } from "react-router-dom";
import FadeAnimation from "../components/FadeAnimation";
import ScrollAnimation from "../components/ScrollAnimation";
import Cards from "../components/Cards"

function Home() {
  return (
    <>
      <section className=" bg-[url('/assets/images/background_design_1.png')] lg:bg-cover relative -top-24 z-0 bg-center">
        <div className="flex flex-col gap-6 pt-44 lg:px-35 min-h-screen items-center ">
          <h1 className="pb-2 text-center text-4xl lg:text-5xl font-bold tracking-wide flex flex-col gap-2 ">
            WHO WE ARE <span>We Are A Team Of Top-Notch Service </span>
            <span>Providers</span>
          </h1>
          <FadeAnimation />

          <div className="w-full flex items-center justify-center gap-5 lg:gap-15 lg:mt-6">
            <button className="w-[164px] h-9 flex justify-center items-center rounded-2xl bg-gradient-to-r from-primary to-secondary text-xl font-semibold">
              <Link to={"/services"} className="w-full">
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
          <div>{/*section navigator on lg only */}</div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-2 lg:flex-row lg:justify-start lg:gap-4 lg:px-24">
          <img
            src="/assets/images/01.png"
            alt="first section"
            className="w-27 "
          />
          <h2 className="font-black text-2xl tracking-wide">OUR PARTNERS</h2>
        </div>
        <ScrollAnimation />
      </section>
      <section className="mt-24 lg:mt-16">
        <div className="flex flex-col justify-center items-center gap-2">
          <img
            src="/assets/images/02.png"
            alt="second section"
            className="w-27 "
          />
          <h2 className="font-black text-2xl tracking-wide">SERVICES</h2>
        </div>
        <Cards />
      </section>
    </>
  );
}

export default Home;
