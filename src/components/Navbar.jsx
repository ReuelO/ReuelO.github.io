import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 shadow-lg z-50">
    <div className="container mx-auto flex justify-between">
      <span className="font-bold text-xl">Portfolio</span>
      <ul className="flex space-x-6">
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
