import React, { useContext } from "react";
import { Code, Database, Cloud, Wrench, Brain } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import AnimatedSection from "./AnimatedSection";
import SkillsRadar from "./SkillsRadar";

const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  // FAANG card base
  const cardBase =
    "rounded-xl p-6 border transition-all duration-200 hover:-translate-y-[2px] hover:shadow-md";

  const cardSurface = isDark
    ? "bg-[#111418] border-[#1f242c]"
    : "bg-white border-gray-200";

  const chipBase = isDark
    ? "bg-[#1a1f24] border border-[#2a323c] text-gray-300"
    : "bg-gray-100 border border-gray-300 text-gray-800";

  const iconWrapperBase = isDark
    ? "bg-[#1a1f24] border border-[#2a323c] text-gray-300"
    : "bg-white border border-gray-300 text-gray-700";

  // SKILL GROUPS
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        "Python",
        "Java",
        "C++",
        "R",
        "TypeScript / JavaScript",
        "Swift",
        "SQL",
        "MySQL",
        "PySpark",
      ],
    },
    {
      icon: Brain,
      title: "Frameworks & Libraries",
      skills: [
        "React",
        "Node.js",
        "Spring Boot",
        "Flask",
        "NumPy",
        "Pandas",
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Keras",
        "MediaPipe",
        "OpenCV",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Big Data",
      skills: [
        "AWS (S3, EC2, SageMaker)",
        "Databricks",
        "Google BigQuery",
        "Azure Synapse",
        "Red Hat OpenShift",
        "PostgreSQL",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: [
        "Git",
        "Google Analytics",
        "VS Code",
        "Jira",
        "Azure DevOps",
        "PyCharm",
        "IntelliJ",
        "Xcode",
      ],
    },
    {
      icon: Database,
      title: "Core Competencies",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "Data Mining",
        "Neural Networks",
        "Predictive Modeling",
        "ETL / ELT Pipelines",
        "Dashboard Visualizations",
        "LLMs",
        "RAG Systems",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className={`section-padding ${isDark ? "bg-[#0a0a0a]" : "bg-gray-50"}`}
    >
      <div className="container-custom">
        {/* Section Title */}
        <AnimatedSection>
          <h2
            className={`text-4xl font-bold mb-12 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Skills & Technologies
          </h2>
        </AnimatedSection>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className={`${cardBase} ${cardSurface}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-3 rounded-lg ${iconWrapperBase}`}
                    >
                      <Icon size={22} />
                    </div>

                    <h3
                      className={`font-semibold text-lg ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {cat.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${chipBase}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Radar Chart */}
        <div className="max-w-4xl mx-auto mt-20 mb-10">
          <AnimatedSection delay={0.5}>
            <h3
              className={`text-2xl font-semibold text-center mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Technical Proficiency
            </h3>
            <p
              className={`text-center mb-6 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A visual overview of my strengths across technical domains.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <SkillsRadar />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;
