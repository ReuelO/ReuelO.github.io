import React from "react";

const Home = () => (
  <section
    id="home"
    className="h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex flex-col justify-center items-center"
  >
    <h1 className="text-5xl font-bold">ReuelO</h1>
    <p className="mt-4 text-lg text-light-textSecondary dark:text-dark-textSecondary">
      I build creative solutions for the web.
    </p>
    <a
      href="#about"
      className="mt-6 bg-light-accent dark:bg-dark-accent font-bold text-dark-text px-6 py-3 rounded hover:bg-light-accentHover hover:dark:bg-dark-accentHover transition"
    >
      Learn More About Me
    </a>
  </section>
);

export default Home;
