import axios from "axios";
import React, { useEffect, useState } from "react";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_REPO_NAME = GITHUB_USERNAME;

const About = () => {
  const [readme, setReadme] = useState("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${GITHUB_REPO_NAME}/master/README.md`
        );
        setReadme(response.data);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };
    fetchReadme();
  }, []);

  return (
    <section
      id="about"
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/about.jpg')` }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-16">
        <h2 className="text-3xl text-white font-bold mb-6">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">{readme}</p>
      </div>
    </section>
  );
};

export default About;
