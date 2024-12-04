import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const About = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch("/README.md");
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error("Error fetching markdown:", error);
      }
    };

    fetchMarkdown();
  }, []);

  return (
    <section
      id="about"
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/me.jpg')` }}
    >
      <div className="flex flex-col items-center justify-center h-full md:w-96 object-none bg-light-background dark:bg-dark-background bg-opacity-50 dark:bg-opacity-50 p-16">
        <h2 className="text-3xl text-light-text dark:text-dark-text font-bold mb-6">
          About Me
        </h2>
        <ReactMarkdown className="prose max-w-3xl mx-auto text-lg text-light-text dark:text-dark-text">
          {markdownContent}
        </ReactMarkdown>
      </div>
    </section>
  );
};

export default About;
