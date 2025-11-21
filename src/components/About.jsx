import React, { useContext } from "react";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import AnimatedSection from "./AnimatedSection";

// Minimal FAANG-style Icon Wrapper
const IconWrapper = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={`p-2.5 rounded-md border flex items-center justify-center shrink-0
        ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
    >
      {children}
    </div>
  );
};

const About = () => {
  const { isDark } = useContext(ThemeContext);

  // Card style
  const cardBase = `
    rounded-xl p-6 border transition-all duration-200
    hover:-translate-y-[2px]
  `;

  const cardSurface = isDark
    ? "bg-[#0e0e10] border-gray-700"
    : "bg-white border-gray-200";

  return (
    <section
      id="about"
      className={`section-padding ${
        isDark ? "bg-[#0d0d0f]" : "bg-gray-50"
      }`}
    >
      <div className="container-custom">
        {/* ABOUT TITLE */}
        <AnimatedSection>
          <h2
            className={`text-4xl font-bold mb-14 text-center tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* LEFT SUMMARY CARD */}
          <AnimatedSection delay={0.15}>
            <div className={`${cardBase} ${cardSurface}`}>
              <p
                className={`text-[15px] leading-relaxed mb-5 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I'm a Data Science graduate student at the University of Maryland
                with a passion for leveraging machine learning and data analytics
                to solve complex business problems.
              </p>

              <p
                className={`text-[15px] leading-relaxed mb-5 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                With two years of professional experience at Deloitte, I've built
                enterprise-scale applications serving 60,000+ daily users and
                developed AI-powered solutions that significantly reduce
                operational overhead.
              </p>

              <p
                className={`text-[15px] leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                My expertise spans full-stack development, cloud technologies,
                and advanced machine learning implementations. I'm currently
                seeking opportunities in data science, machine learning
                engineering, and AI research.
              </p>
            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN CARDS */}
          <div className="space-y-6">

            {/* EDUCATION */}
            <AnimatedSection delay={0.25}>
              <div className={`${cardBase} ${cardSurface}`}>
                <div className="flex items-start gap-4">
                  
                  <IconWrapper>
                    <GraduationCap
                      size={20}
                      className={isDark ? "text-gray-300" : "text-gray-700"}
                    />
                  </IconWrapper>

                  <div className="space-y-4">
                    <div>
                      <h3
                        className={`font-semibold text-lg mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Education
                      </h3>
                      <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                        <strong>Master of Science in Data Science</strong>
                        <br />
                        University of Maryland, College Park
                        <br />
                        Aug 2025 - May 2027
                      </p>
                    </div>

                    <div>
                      <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                        <strong>B.Tech in Computer Science</strong>
                        <br />
                        SRM Institute of Science and Technology
                        <br />
                        GPA: 3.7/4.0
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </AnimatedSection>

            {/* EXPERIENCE */}
            <AnimatedSection delay={0.35}>
              <div className={`${cardBase} ${cardSurface}`}>
                <div className="flex items-start gap-4">

                  <IconWrapper>
                    <Briefcase
                      size={20}
                      className={isDark ? "text-gray-300" : "text-gray-700"}
                    />
                  </IconWrapper>

                  <div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Experience
                    </h3>

                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      2 years at Deloitte as Analyst & Salesforce Developer Intern
                    </p>

                    <p
                      className={`mt-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Research experience in Computer Vision & ML
                    </p>
                  </div>

                </div>
              </div>
            </AnimatedSection>

            {/* ACHIEVEMENTS */}
            <AnimatedSection delay={0.45}>
              <div className={`${cardBase} ${cardSurface}`}>
                <div className="flex items-start gap-4">

                  <IconWrapper>
                    <Award
                      size={20}
                      className={isDark ? "text-gray-300" : "text-gray-700"}
                    />
                  </IconWrapper>

                  <div>
                    <h3
                      className={`font-semibold text-lg mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Achievements
                    </h3>

                    <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                      • 75% reduction in loan TAT
                      <br />
                      • 99.95% system uptime
                      <br />
                      • 60K daily disbursements handled
                    </p>
                  </div>

                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
