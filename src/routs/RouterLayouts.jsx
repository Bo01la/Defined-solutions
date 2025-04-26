import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function RouterLayouts() {
  return (
    <>
      <div className="lg:bg-[url('/assets/images/background_design_1.png')] bg-cover">
        <Nav />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
