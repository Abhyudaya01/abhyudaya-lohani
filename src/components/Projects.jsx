import React, { useContext } from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    {
      title: "Financial Analyst Copilot (AI-Powered RAG System)",
      year: "2025",
      technologies: ["LangChain", "FAISS", "GPT", "RAG", "LLMs"],
      description:
        "Built an SEC-analysis copilot (10-K/10-Q, earnings transcripts) using LangChain + FAISS with GPT-4o Turbo. Added citation-linked answers, prompt-safety filters, and retrieval/faithfulness evaluation—reducing research time by 40% while keeping p95 latency ≤ 2.0s.",
      highlights: [
        "40% research time reduction",
        "p95 latency ≤ 2.0s",
        "Citation-linked answers",
        "Safety & evaluation filters",
      ],
      github: "https://github.com/Abhyudaya01/sec-rag-copilot",
      demo: "https://www.youtube.com/watch?v=hWO0r-JVg6A&t=19s",
    },
    {
      title: "E-Commerce Sales Intelligence Dashboard",
      year: "2025",
      technologies: ["Python", "SQL", "Pandas", "ETL", "Tableau", "Plotly"],
      description:
        "Designed a BI analytics pipeline with Python/SQL ETL across 8 sources and 30+ KPIs (AOV, CAC, LTV). Automated hourly refresh, optimized schema to star design, and reduced manual reporting by 70% while improving promo ROI by 12%.",
      highlights: ["30+ KPIs", "8 integrated sources", "70% faster reporting", "12% ROI improvement"],
      github: "https://github.com/Abhyudaya01/ai-report-generator",
      demo: "https://github.com/Abhyudaya01/ai-report-generator",
    },
    {
      title: "PGLife – Interactive Accommodation Finder",
      year: "2023",
      technologies: ["React.js", "JavaScript", "Bootstrap", "REST APIs"],
      description:
        "Built a React web app with JWTAuth, filters, and interactive map search. Achieved p95 LCP < 2.5s, reduced bounce rate by 18%, onboarded 2,000+ listings, and hit a 95+ Lighthouse performance score.",
      highlights: ["p95 LCP < 2.5s", "18% bounce rate reduction", "2,000+ listings", "Lighthouse 95+"],
      github:
        "https://github.com/Abhyudaya01/PGLife-Interactive-Accommodation-Finder",
      demo:
        "https://github.com/Abhyudaya01/PGLife-Interactive-Accommodation-Finder",
    },
    {
      title: "Sorting Visualizer – Algorithm Efficiency Analyzer",
      year: "2023",
      technologies: ["JavaScript", "React.js", "Data Visualization"],
      description:
        "Optimized a visual algorithm explorer, improving initial load time by 55% with efficient dataset handling while supporting multiple algorithms, interactive steps, and custom datasets.",
      highlights: ["55% faster load time", "Multiple algorithms", "Custom dataset input", "Interactive UI"],
      github: "https://github.com/Abhyudaya01/AlgoSort-Visualizer",
      demo: "https://sorting-visualizer-xi-gules.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className={`section-padding ${
        isDark ? "bg-[#0d0d0f]" : "bg-white"
      }`}
    >
      <div className="container-custom">
        <AnimatedSection>
          <h2
            className={`text-4xl font-bold mb-14 text-center tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Featured Projects
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <AnimatedSection delay={idx * 0.1} key={idx}>
              <div
                className={`
                  border rounded-xl p-8 h-full transition-all duration-200
                  ${isDark ? "border-gray-700 hover:border-gray-500" : "border-gray-200 hover:border-gray-400"}
                  hover:-translate-y-1
                `}
              >
                {/* Title Row */}
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className={`text-xl font-semibold tracking-tight ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`flex items-center gap-1 text-sm ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    <Calendar size={14} /> {project.year}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full border ${
                        isDark
                          ? "border-gray-700 text-gray-300"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-1 mb-6">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 text-sm ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span className="text-blue-500">•</span> {h}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t 
                  ${isDark ? 'border-gray-700' : 'border-gray-200'}"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:opacity-70 transition"
                  >
                    <Github size={16} /> Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm hover:opacity-70 transition"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
