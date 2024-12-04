import React from "react";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

const Footer = () => (
  <footer className="bg-gray-800 text-white text-center p-4">
    <p>
      &copy; {new Date().getFullYear()} Check my profile on{" "}
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
