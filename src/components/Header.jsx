import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaXmark } from "react-icons/fa6"; // Icons for the hamburger menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-semibold">My Portfolio</h1>

        {/* Hamburger Menu Button - Visible on Small Screens */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaXmark size={30} /> : <FaBars size={30} />}
        </button>

        {/* Navigation Links */}
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
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
