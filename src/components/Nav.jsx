import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const menuToggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  useEffect(
    () =>
      location.pathname === "/"
        ? setIsSelected("home")
        : location.pathname === "/services"
        ? setIsSelected("services")
        : location.pathname === "/contact-us"
        ? setIsSelected("contact")
        : setIsSelected(""),
    [location.pathname]
  );

  const menuSelectHandler = (item) => {
    setIsSelected(item);
  };

  return (
    <header>
      {/* mobile nav */}
      <nav className="lg:hidden bg-gradient-to-r from-primary to-secondary text-white fixed w-full flex z-100">
        <div
          onClick={menuToggleHandler}
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
            onClick={menuToggleHandler}
            id="modal"
            className="w-screen h-screen bg-black/30 absolute z-0 "
          >
            <aside className="absolute w-[278px] h-screen">
              <div className="absolute bg-gradient-to-r from-primary to-secondary inset-0 opacity-80 z-0 rounded-r-2xl"></div>
              <div className="relative z-10 p-5 h-screen text-white flex flex-col justify-between">
                <ul className="flex flex-col gap-8 mt-3 text-md">
                  <li className="flex gap-6 content-center items-center tracking-widest">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="flex gap-6 content-center items-center tracking-widest">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <Link to="/services?service=1">SERVICES</Link>
                  </li>
                  <li className="flex gap-6 content-center items-center tracking-widest">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <Link to={"/contact-us"}>CONTACT US</Link>
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
      <nav className="hidden lg:block relative z-50">
        <div className="relative h-fit px-24 pt-7 flex justify-center items-center">
          <div className="absolute top-8 left-30">
            <Link to={"/"} onClick={() => menuSelectHandler("home")}>
              <img src="/assets/images/logo.png" alt="logo image" />
            </Link>
          </div>
          <div>
            <ul className="flex justify-between items-center bg-white/30 py-4 px-6 rounded-4xl w-[433px]">
              <li
                className="flex justify-betweend items-center gap-2"
                onClick={() => menuSelectHandler("home")}
              >
                {isSelected === "home" ? (
                  <FontAwesomeIcon icon={faCircle} className="text-[10px]" />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[10px] opacity-0"
                  />
                )}
                <Link to={"/"} className="hover:bg-black/5 tracking-widest">
                  HOME
                </Link>
              </li>
              <li
                className="flex justify-betweend items-center gap-2"
                onClick={() => menuSelectHandler("services")}
              >
                {isSelected === "services" ? (
                  <FontAwesomeIcon icon={faCircle} className="text-[10px]" />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[10px] opacity-0"
                  />
                )}
                <Link
                  to={"/services?service=1"}
                  className="hover:bg-black/5 tracking-widest"
                >
                  SERVICES
                </Link>
              </li>
              <li
                className="flex justify-between items-center gap-2 "
                onClick={() => menuSelectHandler("contact")}
              >
                {isSelected === "contact" ? (
                  <FontAwesomeIcon icon={faCircle} className="text-[10px]" />
                ) : (
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-[10px] opacity-0"
                  />
                )}
                <Link
                  to={"/contact-us"}
                  className="hover:bg-black/5 tracking-widest"
                >
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
