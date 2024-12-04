import React from "react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text p-4 shadow-lg z-50">
    <div className="container mx-auto flex justify-between">
      <a
        href="/"
        className="font-bold text-xl text-dark-text dark:text-light-text"
      >
        Portfolio
      </a>
      <ul className="flex space-x-6">
        {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-dark-text dark:text-light-text hover:text-light-accent dark:hover:text-light-accent transition-colors"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        onClick={() => document.documentElement.classList.toggle("dark")}
        className="bg-light-accent dark:bg-dark-accent font-bold text-dark-text px-6 py-2 rounded hover:bg-light-accentHover hover:dark:bg-dark-accentHover"
      >
        Toggle Theme
      </button>
    </div>
  </nav>
);

export default Navbar;
