import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../public/images/Header_Logo.png"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false); // Close menu when location changes
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center relative w-full shadow-md px-[5vw]">
      {/* Logo Section */}
      <div className="flex items-center">
        <button onClick={() => navigate("/")}>
          <img src={Logo} alt="GDG logo" className="h-8 mr-2" />
          
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-lg">
        <button
          className="text-gray-800 hover:text-gray-600 transition"
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          className="text-gray-800 hover:text-gray-600 transition"
          onClick={() => navigate("/events")}
        >
          Events
        </button>
        <button
          className="text-gray-800 hover:text-gray-600 transition"
          onClick={() => navigate("/team")}
        >
          Team
        </button>
        <button
          className="text-gray-800 hover:text-gray-600 transition"
          onClick={() => navigate("/articles")}
        >
          Articles
        </button>
        <button
          className="text-gray-800 hover:text-gray-600 transition"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <AiOutlineClose className="w-6 h-6 text-gray-800" />
          ) : (
            <AiOutlineMenu className="w-6 h-6 text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-100 flex flex-col items-center space-y-4 py-4 z-10">
          <button
            className="text-gray-800 hover:text-gray-600 transition"
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 transition"
            onClick={() => navigate("/events")}
          >
            Events
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 transition"
            onClick={() => navigate("/team")}
          >
            Team
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 transition"
            onClick={() => navigate("/articles")}
          >
            Articles
          </button>
          <button
            className="text-gray-800 hover:text-gray-600 transition"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
