import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      {/* mobile nav */}
      <nav className=" lg:hidden bg-gradient-to-r from-primary to-secondary text-white fixed w-full">
        
      </nav>
      {/* desktop nav */}
      <nav className="hidden lg:flex lg:bg-pink-500">desktop</nav>
    </header>
  );
}
