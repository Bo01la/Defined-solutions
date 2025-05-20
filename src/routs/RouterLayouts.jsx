import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";

export default function RouterLayouts() {
  return (
    <>
      <ScrollTop />
      <main>
        <Nav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
