import TeamMember from "../components/TeamMember";
import Transition from "../components/Transition";
import MMTImage from "../assets/mmt.png";
import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import { ScrollProvider } from "../context/ScrollContext";

function Team() {
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const outerContainerRef = useRef<HTMLDivElement>(null);
  let outerLenis: Lenis | null = null;
  let innerLenis: Lenis | null = null;

  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    window.matchMedia("(min-width: 768px)").addEventListener('change', handler);

    if (scrollContainerRef.current && outerContainerRef.current) {
      outerLenis = new Lenis({
        wrapper: outerContainerRef.current,
        content: outerContainerRef.current.firstChild as HTMLElement,
        smooth: true,
      });

      innerLenis = new Lenis({
        wrapper: scrollContainerRef.current,
        content: scrollContainerRef.current.firstChild as HTMLElement,
        smooth: true,
        direction: 'vertical',
      });

      function raf(time: number) {
        outerLenis?.raf(time);
        innerLenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    return () => {
      innerLenis?.destroy();
      outerLenis?.destroy();
      window.matchMedia("(min-width: 768px)").removeEventListener('change', handler);
    };
  }, [matches]);

  const handleScroll = (e) => {
    console.log('Scroll event:', e);
  };

  return (
    <ScrollProvider onScroll={handleScroll}>
      <div ref={outerContainerRef} className="md:relative rounded-3xl w-full h-screen bg-[#D8E2F9] px-6 py-12 flex flex-col gap-4 md:gap-0 md:flex-row overflow-auto md:overflow-hidden">
        <div className="md:w-1/2">
          <p className="text-5xl font-bold">MEET OUR TEAM:</p>
          {matches && <img className="absolute left-0 bottom-0 w-[70%]" src={MMTImage} alt="image" />}
        </div>
        <div ref={scrollContainerRef} className={`w-[80%] md:w-1/2 flex flex-col gap-2 md:overflow-y-scroll p-2 ${!matches ? 'pointer-events-none' : ''}`}>
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </div>
      </div>
    </ScrollProvider>
  );
}

export default Transition(Team);
