import React from "react";

const Home = () => (
  <section
    id="home"
    className="h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex flex-col justify-center items-center"
  >
    <h1 className="text-5xl font-bold">ReuelO</h1>
    <p className="mt-4 text-lg text-light-accent dark:text-dark-accent">
      I build creative solutions for the web.
    </p>
    <a
      href="#about"
      className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-400 transition"
    >
      Learn More About Me
    </a>
  </section>
);

export default Home;
