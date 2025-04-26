import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-4 pt-20 pb-4 flex flex-col gap-6 text-white/90 bg-gradient-to-t from-footer-blue via-footer-gray  to-dark mt-16">
      <div className="flex flex-col gap-6">
        <div className="w-[156px] h-[50px]">
          <img src="/assets/images/logo2.png" alt="logo image" />
        </div>
        <div className="flex flex-col gap-6">
          <Link to={"/"} className="text-lg w-fit tracking-wide ">
            HOME
          </Link>
          <Link to={"/services"} className="text-lg w-fit tracking-wide ">
            SERVICES
          </Link>
          <Link to={"/contact-us"} className=" text-lg w-fit tracking-wide ">
            CONTACT US
          </Link>
        </div>
        <div>
          <p className="text-md font-[500] tracking-widest">
            Info@definedsolutions.com{" "}
          </p>
          <p className="text-md font-[500] tracking-widest">
            4th floor, Hamad Tower, King Fahd Branch Road,Riyadh
          </p>
        </div>
      </div>
      <caption className="text-[12px] text-left text-white/70">
        © 2024 Defined Solutions All Rights Reserved. Designed By Bassam Ayman
      </caption>
    </footer>
  );
}

export default Footer;
