import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6";
import { MdLightMode } from "react-icons/md";
// import ThemeTogglePanel from './ToggleColorMode';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemePanel, setShowThemePanel] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-semibold">My Portfolio</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaXmark size={30} /> : <FaBars size={30} />}
        </button>

        {/* Nav Links */}
        <ul
          className={`md:flex md:space-x-6 text-white text-xl font-semibold 
                      absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent 
                      transition-transform duration-300 ease-in-out 
                      ${isOpen ? "block" : "hidden"} md:flex`}
        >
          {["about", "skills", "projects", "contact"].map((section) => (
            <li key={section} className="p-3 md:p-0 text-center">
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
{/*         <div className="relative ml-4">
          <button onClick={() => setShowThemePanel(!showThemePanel)}>
            <MdLightMode size={30} className="text-white cursor-pointer" />
          </button>

          {showThemePanel && (
            <div className="absolute right-0 mt-2 z-50">
              <ThemeTogglePanel />
            </div>
          )}
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
