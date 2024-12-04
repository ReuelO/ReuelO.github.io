import React from "react";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;

const Footer = () => (
  <footer className="bg-dark-background dark:bg-light-background text-dark-text dark:text-light-text text-center p-4">
    <p>
      &copy; {new Date().getFullYear()} Check my profile on{" "}
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-light-accent dark:text-dark-accent"
      >
        GitHub
      </a>
      .
    </p>
  </footer>
);

export default Footer;
