import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to light
    return localStorage.getItem("theme") || "light";
  });

  // Auto-detect system theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      localStorage.setItem("theme", systemTheme);
    }
  }, []);

  // Update the theme and persist to localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  // Apply theme class to the HTML element
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
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
                className="text-dark-text dark:text-light-text hover:font-bold transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className="bg-light-background dark:bg-dark-background font-bold p-2 rounded-full"
        >
          {theme == "dark" ? (
            <FaMoon className="text-light-text dark:text-dark-text text-2xl" />
          ) : (
            <FaSun className="text-light-text dark:text-dark-text text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
