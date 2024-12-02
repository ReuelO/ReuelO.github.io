import React from "react";

const Home = () => (
  <section
    id="home"
    className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center"
  >
    <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
    <p className="mt-4 text-lg text-gray-400">
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
