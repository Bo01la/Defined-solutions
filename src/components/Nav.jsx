import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* mobile nav */}
      <nav className=" lg:hidden bg-gradient-to-r from-primary to-secondary text-white fixed w-full flex">
        <div
          onClick={menuToggle}
          className="rounded-full p-5 hover:bg-[#377099] w-fit h-full absolute flex flex-col items-center content-center cursor-pointer"
        >
          <div className="bg-white/90 h-1 w-6 rounded-full "></div>
          <div className="mt-[3px] bg-white/90 h-1 w-6 rounded-full "></div>
          <div className="mt-[3px] bg-white/90 h-1 w-6 rounded-full "></div>
        </div>
        <div className="flex-1 flex justify-center items-center my-2">
          <img src="/assets/images/logo3.png" alt="logo pic" className="h-9" />
        </div>
        {isOpen && (
          <div
            onClick={menuToggle}
            id="modal"
            className="w-screen h-screen bg-black/30 absolute z-0 "
          >
            <aside className="absolute w-[278px] h-screen">
              <div className="absolute bg-gradient-to-r from-primary to-secondary inset-0 opacity-80 z-0 rounded-r-2xl"></div>
              <div className="relative z-10 p-5 h-screen text-white flex flex-col justify-between">
                <ul className="flex flex-col gap-8 mt-3 text-md">
                  <li className="flex gap-6 content-center items-center">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="flex gap-6 content-center items-center">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <Link to="/services">SERVICES</Link>
                  </li>
                  <li className="flex gap-6 content-center items-center">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <Link to="/contact-us">CONTACT US</Link>
                  </li>
                </ul>
                <div>
                  <img
                    src="/assets/images/logo2.png"
                    alt="logo pic"
                    className="h-16"
                  />
                </div>
              </div>
            </aside>
          </div>
        )}
      </nav>
      {/* desktop nav */}
      <nav className="hidden lg:block ">desktop</nav>
    </header>
  );
}

export default Nav;
