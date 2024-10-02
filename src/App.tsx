import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/index.ts"
import {Home, Team, Event} from "./pages/index.ts"
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./App.css";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(()=> {
    if (location.pathname !== "/team") {
      const lenis = new Lenis();

      lenis.on("scroll", (e) => {
        console.log(e);
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  })

  return (
    <>
      {/* <Navbar /> */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;