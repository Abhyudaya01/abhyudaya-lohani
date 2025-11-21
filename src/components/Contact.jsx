import React, { useState, useContext } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/mgvrwvga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus(""), 5000);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Common FAANG surfaces
  const inputSurface = isDark
    ? "bg-[#0f0f0f] border-[#2a2a2a] text-white placeholder-gray-500"
    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500";

  const iconBox = isDark
    ? "bg-[#121212] border-[#2a2a2a]"
    : "bg-white border-gray-300";

  return (
    <section id="contact" className={`section-padding ${isDark ? "bg-black" : "bg-white"}`}>
      <div className="container-custom">
        <h2
          className={`text-4xl font-bold mb-12 text-center ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT SIDE */}
          <div>
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Let's Connect
            </h3>

            <p className={`${isDark ? "text-gray-300" : "text-gray-700"} mb-8`}>
              I'm always open to opportunities in software engineering, frontend
              development, machine learning engineering, and AI-driven systems.
              Whether you're hiring, collaborating, or just saying hello —
              I'd love to connect.
            </p>

            {/* Contact Items */}
            <div className="space-y-4 mb-8">

              <a
                href="mailto:abhyudayalohani@gmail.com"
                className={`flex items-center gap-3 transition-colors ${
                  isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
                }`}
              >
                <div className={`p-2 rounded-md border ${iconBox}`}>
                  <Mail size={20} className={isDark ? "text-gray-300" : "text-gray-700"} />
                </div>
                <span>abhyudayalohani@gmail.com</span>
              </a>

              <a
                href="tel:+12404134861"
                className={`flex items-center gap-3 transition-colors ${
                  isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
                }`}
              >
                <div className={`p-2 rounded-md border ${iconBox}`}>
                  <Phone size={20} className={isDark ? "text-gray-300" : "text-gray-700"} />
                </div>
                <span>+1 (240) 413-4861</span>
              </a>

              <div className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <div className={`p-2 rounded-md border ${iconBox}`}>
                  <MapPin size={20} className={isDark ? "text-gray-300" : "text-gray-700"} />
                </div>
                <span>College Park, Maryland</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/abhyudaya-lohani/"
                target="_blank"
                className={`p-3 rounded-md border transition ${
                  isDark
                    ? "bg-[#111] border-[#2a2a2a] hover:bg-[#1a1a1a]"
                    : "bg-white border-gray-300 hover:bg-gray-100"
                }`}
              >
                <Linkedin size={24} className={isDark ? "text-white" : "text-gray-900"} />
              </a>

              <a
                href="https://github.com/Abhyudaya01"
                target="_blank"
                className={`p-3 rounded-md border transition ${
                  isDark
                    ? "bg-[#111] border-[#2a2a2a] hover:bg-[#1a1a1a]"
                    : "bg-white border-gray-300 hover:bg-gray-100"
                }`}
              >
                <Github size={24} className={isDark ? "text-white" : "text-gray-900"} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 ${inputSurface}`}
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 ${inputSurface}`}
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 font-medium ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border resize-none focus:ring-2 focus:ring-blue-500 ${inputSurface}`}
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all 
                  ${
                    status === "sending"
                      ? "bg-gray-600 cursor-not-allowed"
                      : status === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                {status === "sending" && "Sending..."}
                {status === "success" && (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                )}
                {status === "error" && "Failed — Try Again"}
                {!status && (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center text-sm">
                  Thank you! I’ll get back to you soon.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;