import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components/index.ts"
import {Home, Team, Event} from "./pages/index.ts"
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./App.css";


import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(()=> {
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
  })

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event" element={<Event />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  );
}

export default App;
