import Nav from "../components/Nav";
import Footer from "../components/Footer";
import FadeInWrapper from "../components/FadeInWrapper";

import { Outlet, useLocation } from "react-router-dom";
import ScrollTop from "../components/ScrollTop";
import { AnimatePresence } from "framer-motion";

export default function RouterLayouts() {
  const location = useLocation();
  return (
    <>
      <ScrollTop />
      <main>
        <Nav />
        <AnimatePresence mode="sync">
          <FadeInWrapper
            key={location.pathname}
            initialOpacity={0}
            initialY={0}
            opacity={1}
            y={0}
            duration={3.8}
          >
            <Outlet />
          </FadeInWrapper>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
