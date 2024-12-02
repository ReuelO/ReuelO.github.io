import React from "react";

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

const Projects = () => (
  <section id="projects" className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
    <div className="grid gap-6 md:grid-cols-3 container mx-auto">
      {projects.map((project, index) => (
        <div
          key={index}
          className="p-6 shadow-lg border rounded hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
          <p className="mb-4 text-gray-600">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
