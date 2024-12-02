import React from "react";

const skills = ["JavaScript", "React", "Node.js", "MongoDB", "TailwindCSS"];

const Skills = () => (
  <section id="skills" className="py-16 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-6">Skills</h2>
    <div className="flex justify-center space-x-4 flex-wrap">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-400 transition"
        >
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
