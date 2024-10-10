import { Link } from "react-router-dom";
import footer_logo from "/images/footer_gdg_logo.svg";
import footer_ill from "/images/Footer_Illustration.png";
import React from "react";

function Footer() {
  return (
    <>
      <footer className="relative min-h-screen w-full bg-white bg-dot-black/[0.2] font-GSD_Regular">
        {/* Main Content Wrapper */}
        <div className="flex flex-col md:relative items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-8 md:h-[85vh] px-[5vw]">
          {/* Image Section */}
          <div className="flex justify-center md:relative md:right-[15%] items-center h-auto w-full sm:w-[70vw] md:w-[40vw]">
            <img
              src={footer_ill}
              alt="Footer Illustration"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Socials Section */}
          <div className="socials md:absolute md:left-[54.5%] md:top-[25%] flex flex-col md:items-start items-center w-full md:w-[40vw]">
            <h2 className="font-GSD_Regular text-3xl md:text-[4vw] mb-12 text-center md:text-left border-b-[3.5px] border-black pb-1.5">
              SOCIALS
            </h2>
            <ul className="space-y-4 w-full flex flex-col items-center md:items-start">
              <li>
                <Link
                  to="https://github.com"
                  className="linkWrap style-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    {
                      "--line": "#ea4335",
                      "--color": "#ea4335",
                    } as React.CSSProperties // cast to CSSProperties
                  }
                >
                  <span className="text-red-500">GITHUB</span>
                  <svg viewBox="0 0 13 20">
                    <polyline
                      points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                      fill="none"
                      stroke="#ea4335"
                      strokeWidth="1"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://x.com"
                  className="linkWrap style-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    {
                      "--line": "#4285f4",
                      "--color": "#4285f4",
                    } as React.CSSProperties
                  }
                >
                  <span className="text-blue-500">X</span>
                  <svg viewBox="0 0 13 20">
                    <polyline
                      points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                      fill="none"
                      stroke="#4285f4"
                      strokeWidth="1"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://linkedin.com"
                  className="linkWrap style-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    {
                      "--line": "#34a853",
                      "--color": "#34a853",
                    } as React.CSSProperties
                  }
                >
                  <span className="text-green-500">LINKEDIN</span>
                  <svg viewBox="0 0 13 20">
                    <polyline
                      points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                      fill="none"
                      stroke="#34a853"
                      strokeWidth="1"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  to="https://instagram.com"
                  className="linkWrap style-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={
                    {
                      "--line": "#fbbc04",
                      "--color": "#fbbc04",
                    } as React.CSSProperties
                  }
                >
                  <span className="text-yellow-500">INSTAGRAM</span>
                  <svg viewBox="0 0 13 20">
                    <polyline
                      points="0.5 19.5 3 19.5 12.5 10 3 0.5"
                      fill="none"
                      stroke="#fbbc04"
                      strokeWidth="1"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-black w-full bg-white py-4 px-[5vw] mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-700 text-sm md:text-base">
              2024 ©GDGC VIIT
            </p>
            <div className="flex items-center">
              <img
                src={footer_logo}
                alt="Google Developer Groups Logo"
                className="h-10 w-auto mr-2"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;