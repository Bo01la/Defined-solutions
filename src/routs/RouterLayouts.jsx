import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function RouterLayouts() {
  return (
    <>
      <main className="bg-[url('/assets/images/background_design_2.png')] lg:bg-[url('/assets/images/background_design_1.png')] bg-cover">
        <Nav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
