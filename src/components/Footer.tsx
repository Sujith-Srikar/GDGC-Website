import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Footer = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 40;
    const mouseY = (e.clientY - rect.top) * 40;

    const rX = (mouseY / height - 40 / 2) * -1;
    const rY = mouseX / width - 40 / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <footer className="relative min-h-screen w-full bg-white bg-dot-black/[0.2]">
      {/* Main Content Wrapper */}
      <div className="flex flex-col md:relative items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 md:h-[85vh] px-[5vw]">
        {/* Image Section */}
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform,
          } as any}
          className="flex justify-center md:relative md:right-[15%] items-center h-auto w-full sm:w-[70vw] md:w-[40vw]"
        >
          <img
            src="/images/Footer_Illustration.png"
            alt="Footer Illustration"
            className="h-full w-full object-contain"
          />
        </motion.div>

        {/* Socials Section */}
        <div className="socials md:absolute md:left-[54.5%] md:top-[25%] flex flex-col md:items-start items-center w-full md:w-[40vw]">
          <h2 className="font-GSD_Regular text-3xl md:text-[4vw] mb-12 text-center md:text-left border-b-[3.5px] border-black pb-1.5">
            SOCIALS
          </h2>
          <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
            <li>
              <Link
                to="https://github.com"
                className="text-red-500 text-xl md:text-2xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </Link>
            </li>
            <li>
              <Link
                to="https://x.com"
                className="text-blue-500 text-xl md:text-2xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </Link>
            </li>
            <li>
              <Link
                to="https://linkedin.com"
                className="text-green-600 text-xl md:text-2xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </Link>
            </li>
            <li>
              <Link
                to="https://instagram.com"
                className="text-yellow-500 text-xl md:text-2xl hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                INSTAGRAM
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-black w-full bg-white pt-4 px-[5vw] mt-8 md:mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-700 text-sm md:text-base">2024 ©GDGC VIIT</p>
          <div className="flex items-center">
            <img
              src="/images/footer_gdg_logo.svg"
              alt="Google Developer Groups Logo"
              className="h-10 w-auto mr-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;