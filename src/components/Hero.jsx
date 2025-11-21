import React, { useContext } from "react";
import { Github, Linkedin, Mail, Download, Award } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center ${
        isDark ? "bg-[#0d0d0f]" : "bg-white"
      }`}
    >
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-[1fr,320px] gap-12 items-center max-w-6xl mx-auto">

          {/* LEFT SECTION */}
          <div className="animate-fade-up">
            <h1
              className={`text-5xl md:text-7xl font-bold tracking-tight mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Abhyudaya Lohani
            </h1>

            <h2
              className={`text-2xl md:text-3xl font-semibold mb-6 tracking-tight ${
                isDark ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Full-Stack Developer (Frontend-Focused • React • TypeScript)
            </h2>

            <p
              className={`text-lg max-w-2xl leading-relaxed mb-8 ${
                isDark ? "text-gray-400" : "text-gray-700"
              }`}
            >
              Graduate student at the University of Maryland with experience in
              building highly interactive web applications, scalable Java/Spring
              Boot services, and data-driven platforms. At Deloitte, I engineered
              large-scale digital lending systems used by 60,000+ daily users,
              improved UI/UX workflows, integrated fintech APIs, optimized system
              performance, and maintained 99.95% uptime across India’s banking
              ecosystem. I also build modern frontend interfaces using React,
              TypeScript, Tailwind, and component-driven design principles.
            </p>

            {/* ORACLE BADGE */}
            <a
              href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=6004EC2B603DA6223295727A077E79B96FC1971A5CD9CAB48FA779469449F152"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mb-10 px-4 py-2 rounded-lg border 
                transition-all duration-200 hover:-translate-y-[2px]
              ${
                isDark
                  ? "bg-[#111214] text-gray-200 border-gray-700 hover:bg-[#1a1b1e]"
                  : "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200"
              }`}
            >
              <Award size={18} className="opacity-80" />
              <span className="font-medium">
                Oracle AI Vector Search Certified Professional
              </span>
            </a>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mb-8">

              {/* GitHub */}
              <a
                href="https://github.com/Abhyudaya01"
                target="_blank"
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200 
                  hover:-translate-y-[2px]
                ${
                  isDark
                    ? "bg-[#111214] text-white border border-gray-700 hover:bg-[#1a1b1e]"
                    : "bg-black text-white hover:bg-gray-900"
                }`}
              >
                <Github size={20} /> GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abhyudaya-lohani/"
                target="_blank"
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200
                  hover:-translate-y-[2px]
                ${
                  isDark
                    ? "bg-blue-700 hover:bg-blue-600"
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                <Linkedin size={20} /> LinkedIn
              </a>

              {/* Email */}
              <a
                href="mailto:abhyudayalohani@gmail.com"
                className={`flex items-center gap-2 px-6 py-3 rounded-md border transition-all duration-200
                  hover:-translate-y-[2px]
                ${
                  isDark
                    ? "bg-[#111214] text-white border-gray-700 hover:bg-[#1a1b1e]"
                    : "bg-white text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white"
                }`}
              >
                <Mail size={20} /> Email Me
              </a>

              {/* Resume */}
              <a
                href="/Abhyudaya_Lohani_Resume.pdf"
                download="Abhyudaya_Lohani_Resume.pdf"
                target="_blank"
                className={`flex items-center gap-2 px-6 py-3 rounded-md transition-all duration-200
                  hover:-translate-y-[2px]
                ${
                  isDark
                    ? "bg-indigo-700 hover:bg-indigo-600"
                    : "bg-indigo-600 hover:bg-indigo-700"
                } text-white`}
              >
                <Download size={20} /> Resume
              </a>

            </div>

            {/* INFO ROW */}
            <div
              className={`flex flex-wrap gap-6 text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div><span className="font-medium">Location:</span> College Park, MD</div>
              <div><span className="font-medium">Status:</span> US Work Authorization</div>
              <div><span className="font-medium">Phone:</span> +1 (240) 413-4861</div>
            </div>
          </div>

          {/* RIGHT — PROFILE IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <img
                src="/profile.jpg"
                alt="Abhyudaya Lohani"
                className={`w-72 h-72 rounded-full object-cover border 
                  transition-all duration-300 group-hover:scale-[1.02]
                ${
                  isDark ? "border-gray-700" : "border-gray-300"
                }`}
              />

              {/* Badge */}
              <div
                className={`absolute -bottom-4 -right-4 p-3 rounded-full border shadow-sm
                  transition-all duration-300 group-hover:scale-[1.05]
                ${
                  isDark
                    ? "bg-[#111214] border-gray-700"
                    : "bg-white border-gray-300"
                }`}
              >
                <Award
                  size={26}
                  className={`opacity-80 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
