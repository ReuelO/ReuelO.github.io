import React, { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../api/github";

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
      <div className="flex flex-col items-center justify-center h-full bg-light-background dark:bg-dark-background bg-opacity-70 dark:bg-opacity-50 p-16">
        <h2 className="text-3xl text-light-text dark:text-dark-text font-bold text-center mb-6">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-3 container mx-auto">
          {repos.map((repo, index) => (
            <div
              key={index}
              className="bg-light-surface dark:bg-dark-surface p-6 shadow-lg border rounded hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl text-light-textSecondary dark:text-dark-textSecondary font-semibold mb-2">
                {repo.name}
              </h3>
              <p className="mb-4 text-light-text dark:text-dark-text">
                {repo.description}
              </p>
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-light-accent dark:bg-dark-accent font-bold text-dark-text px-6 py-2 rounded hover:bg-light-accentHover hover:dark:bg-dark-accentHover"
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
