import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="fixed w-full flex justify-between">
        <div className="logo p-6 font-normal">
          <Link
            className="uppercase no-underline text-black text-sm font-normal"
            to="/"
          >
            GDGC VIIT
          </Link>
        </div>

        <div className="nav-links flex">
          <div className="nav-item p-6 font-normal">
            <Link
              className="uppercase no-underline text-black text-sm font-normal"
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="nav-item p-6 font-normal">
            <Link
              className="uppercase no-underline text-black text-sm font-normal"
              to="/team"
            >
              Team
            </Link>
          </div>
          <div className="nav-item p-6 font-normal">
            <Link
              className="uppercase no-underline text-black text-sm font-normal"
              to="/event"
            >
              Event
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;