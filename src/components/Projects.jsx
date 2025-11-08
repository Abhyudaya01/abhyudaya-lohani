import React, { useContext } from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    {
      title: "Financial Analyst Copilot (AI-Powered RAG System)",
      year: "2025",
      technologies: ["LangChain", "FAISS", "GPT", "RAG", "LLMs"],
      description: "Built an SEC-analysis RAG copilot (10-K/10-Q, earnings transcripts) using LangChain + FAISS and GPT-4o turbo, delivering citation-linked insights with retrieval/faithfulness evals and prompt-safety filters, reducing research time by 40% and keeping p95 latency ≤ 2.0s",
      highlights: [
        "40% reduction in research time",
        "p95 latency ≤ 2.0s",
        "Citation-linked insights",
        "Prompt-safety filters"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "E-Commerce Sales Intelligence Dashboard",
      year: "2025",
      technologies: ["Python", "SQL", "Pandas", "ETL", "Tableau", "Plotly"],
      description: "Developed a BI dashboard with Python/SQL ETL into a star schema across 8 sources and 30+ KPIs (AOV, CAC, LTV), refreshed hourly in Tableau/Plotly, cutting manual reporting by 70% and improving promo ROI by 12%",
      highlights: [
        "8 data sources integrated",
        "30+ KPIs tracked",
        "70% reduction in manual reporting",
        "12% improvement in promo ROI"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "PGLife – Interactive Accommodation Finder",
      year: "2023",
      technologies: ["React.js", "JavaScript", "Bootstrap", "REST APIs"],
      description: "Developed a React.js web app with REST APIs, JWT auth, map search, and filters; achieved p95 LCP < 2.5s, reduced bounce rate by 18%, and onboarded 2,000+ listings with Lighthouse score 95+",
      highlights: [
        "p95 LCP < 2.5s",
        "18% bounce rate reduction",
        "2,000+ listings",
        "Lighthouse score 95+"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "Sorting Visualizer – Algorithm Efficiency Analyzer",
      year: "2023",
      technologies: ["JavaScript", "React.js", "Data Visualization"],
      description: "Optimized interactive sorting visualizer, decreasing initial load time by 55% through efficient data handling, resulting in a smoother user experience, and supporting custom dataset inputs",
      highlights: [
        "55% faster load time",
        "Multiple algorithms supported",
        "Custom dataset inputs",
        "Interactive visualizations"
      ],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className={`section-padding ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-custom">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`${isDark ? 'bg-gray-900 border border-gray-700' : 'bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200'} rounded-lg shadow-md hover:shadow-xl transition-all p-6`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} flex-1`}>{project.title}</h3>
                <div className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className={`px-3 py-1 ${isDark ? 'bg-blue-900 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700'} text-sm rounded-full font-medium`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>{project.description}</p>
              
              <div className="mb-4">
                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className={`${isDark ? 'text-gray-300' : 'text-gray-700'} flex gap-2 text-sm`}>
                      <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={`flex gap-3 pt-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <a 
                  href={project.github}
                  className={`flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700 border border-gray-600' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-lg transition-colors text-sm`}
                >
                  <Github size={16} />
                  Code
                </a>
                <a 
                  href={project.demo}
                  className={`flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors text-sm`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
