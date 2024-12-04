import React, { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../api/github";

const projects = [
  {
    name: "Project 1",
    description: "A responsive e-commerce application.",
    url: "#",
  },
  {
    name: "Project 2",
    description: "A collaborative task management tool.",
    url: "#",
  },
  {
    name: "Project 3",
    description: "A portfolio builder for developers.",
    url: "#",
  },
];

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await fetchGitHubRepos();
      setRepos(data);
    };
    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/projects.jpg')` }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 p-16">
        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-3 container mx-auto">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg border rounded hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
              <p className="mb-4 text-gray-600">{repo.description}</p>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
