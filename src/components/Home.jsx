import React from "react";

const Home = () => (
  <section
    id="home"
    className="h-screen bg-cover bg-center"
    style={{ backgroundImage: `url('/hero.jpg')` }}
  >
    <div className="flex flex-col items-center justify-center h-full bg-dark-background bg-opacity-50 p-16">
      <h1 className="text-5xl text-dark-text font-bold">ReuelO</h1>
      <p className="mt-4 text-lg text-dark-textSecondary">
        I build creative solutions for the web.
      </p>
      <a
        href="#about"
        className="mt-6 bg-light-accent dark:bg-dark-accent font-bold text-dark-text px-6 py-3 rounded hover:bg-light-accentHover hover:dark:bg-dark-accentHover transition"
      >
        Learn More About Me
      </a>
    </div>
  </section>
);

export default Home;
