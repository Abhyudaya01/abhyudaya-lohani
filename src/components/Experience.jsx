import React, { useContext } from "react";
import { Briefcase, Calendar } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import AnimatedSection from "./AnimatedSection";

const Experience = () => {
  const { isDark } = useContext(ThemeContext);

  const cardBase = `
    rounded-xl p-6 border transition-all duration-200
    hover:-translate-y-[2px] hover:shadow-md
  `;

  // TRUE FAANG-STYLE BLACK THEME
  const cardSurface = isDark
    ? "bg-[#111] border-[#222]"
    : "bg-white border-gray-200";

  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-700";
  const textMuted = isDark ? "text-gray-400" : "text-gray-600";

  const iconBox = isDark
    ? "bg-[#1a1a1a] border-[#333]"
    : "bg-white border-gray-200";

  const experiences = [
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      location: "Chennai, India",
      role: "Analyst – Java-based Web Application Development",
      period: "Sep 2023 – July 2025",
      achievements: [
        "Built a pan-India digital lending platform … enabling 60,000+ daily disbursements with 99.95% uptime.",
        "Designed user-centric interfaces … reducing input errors by 80% and improving NPA-screening accuracy by 12%.",
        "Optimized Java/Spring Boot microservices … reducing p95 latency by 20%.",
        "Integrated Java rule engines … reducing decision TAT by 30%.",
        "Coordinated RCA, production fixes, and stakeholder communication."
      ]
    },
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      location: "Chennai, India",
      role: "Salesforce Developer Intern",
      period: "2023",
      achievements: [
        "Led Salesforce CRM customization and improved lead workflows by 15%."
      ]
    },
    {
      company: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      role: "Undergraduate Researcher",
      period: "Mar 2022 – Jun 2022",
      achievements: [
        "Built a gesture-recognition system using MediaPipe & OpenCV.",
        "Presented implementation roadmap to the university board."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className={`section-padding ${isDark ? "bg-black" : "bg-gray-50"}`}
    >
      <div className="container-custom">

        <AnimatedSection>
          <h2
            className={`text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Experience
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15}>
              <div className={`${cardBase} ${cardSurface}`}>

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">

                  <div className={`p-3 rounded-md border ${iconBox}`}>
                    <Briefcase
                      size={22}
                      className={isDark ? "text-gray-300" : "text-gray-700"}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${textPrimary}`}>
                      {exp.role}
                    </h3>
                    <p className={`text-md font-medium ${textMuted}`}>
                      {exp.company}
                    </p>

                    <div className={`flex items-center gap-4 mt-2 ${textMuted}`}>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 ml-1 md:ml-2">
                  {exp.achievements.map((a, i) => (
                    <li
                      key={i}
                      className={`${textSecondary} flex gap-3 leading-relaxed`}
                    >
                      <span
                        className={`text-sm ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        •
                      </span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
