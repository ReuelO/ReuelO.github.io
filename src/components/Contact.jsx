import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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
    <section id="contact" className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto shadow-lg p-6 bg-gray-50 rounded"
      >
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
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-400"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
