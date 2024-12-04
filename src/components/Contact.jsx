import React, { useEffect, useState } from "react";
import { fetchGitHubProfile } from "../api/github";

const Contact = () => {
  const [profile, setProfile] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await fetchGitHubProfile();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) alert("Message sent successfully!");
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-cover bg-center"
      style={{ backgroundImage: `url('/contact.jpg')` }}
    >
      <div className="flex flex-col items-center justify-center h-full bg-light-background dark:bg-dark-background bg-opacity-70 dark:bg-opacity-50 p-16">
        <h2 className="text-3xl text-light-text dark:text-dark-text font-bold text-center mb-6">
          Contact
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto shadow-lg p-6 bg-light-background dark:bg-dark-background opacity-90 rounded"
        >
          <p className="text-xl text-light-text dark:text-dark-text font-bold text-center mb-6">
            Reach Out
          </p>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-light-accent dark:bg-dark-accent font-bold text-dark-text px-6 py-2 rounded hover:bg-light-accentHover hover:dark:bg-dark-accentHover"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
