import React, { useContext, useState } from "react";
import { Award, ExternalLink, FileText, Code, Users, Eye, X } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";
import AnimatedSection from "./AnimatedSection";

// FAANG Icon Wrapper
const IconWrapper = ({ children }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`p-3 rounded-md border flex items-center justify-center
        ${isDark ? "bg-[#111418] border-[#1f242c]" : "bg-white border-gray-300"}
      `}
    >
      {children}
    </div>
  );
};

const Certifications = () => {
  const { isDark } = useContext(ThemeContext);
  const [selectedCert, setSelectedCert] = useState(null);

  // FAANG-style card baseline
  const cardBase = `
    rounded-xl p-6 border transition-all duration-200
    hover:-translate-y-[2px] hover:shadow-sm
  `;

  const cardSurface = isDark
    ? "bg-[#111418] border-[#1f242c]"
    : "bg-white border-gray-200";

  const tagBase = isDark
    ? "bg-[#1a1f24] border border-[#2a323c] text-gray-300"
    : "bg-gray-100 border border-gray-300 text-gray-700";

  const certifications = [
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "2024",
      icon: Award,
      pdfLink: "/eCertificate.pdf",
      verifyLink:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6004EC2B603DA6223295727A077E79B96FC1971A5CD9CAB48FA779469449F152",
      description:
        "Advanced certification in AI-powered vector search and semantic retrieval systems, showcasing expertise in AI Vector Search on Oracle Cloud.",
      skills: ["AI/ML", "Vector Databases", "Semantic Search", "Oracle Cloud", "RAG Systems"],
      hasOnlineVerification: true,
    },
    {
      title: "Conference Paper Presentation — ICIOT 2023",
      issuer: "SRM Institute of Science and Technology",
      date: "April 2023",
      icon: FileText,
      pdfLink: "/ICIOT_Conference.pdf",
      description:
        "Presented research on 'Gesture Controlled Mouse Using MediaPipe and OpenCV' at the Fourth International Conference on Internet of Things (ICIOT'23).",
      skills: ["Computer Vision", "MediaPipe", "OpenCV", "IoT", "Research"],
    },
    {
      title: "Salesforce Developer Virtual Internship",
      issuer: "SmartInternz (AICTE Approved)",
      date: "September 2022",
      icon: Code,
      pdfLink: "/SmartInternz.pdf",
      verifyLink:
        "https://smartinternz.com/internships/salesforce_certificates/d01f770d77f135a0762a9b8643607b39",
      description:
        "Completed 8-week internship covering Apex, Lightning Web Components, and automation workflows. Earned Apex Specialist + Process Automation badges.",
      skills: ["Salesforce", "Apex", "LWC", "Automation", "CRM"],
      hasOnlineVerification: true,
    },
    {
      title: "Web Development Training",
      issuer: "Internshala Trainings",
      date: "April 2022",
      icon: Users,
      pdfLink: "/Web_Development_Internshala.pdf",
      description:
        "Completed 8-week hands-on web development program covering HTML/CSS, JavaScript, Bootstrap, React, PHP, and DBMS fundamentals.",
      skills: ["HTML/CSS", "JavaScript", "React", "Bootstrap", "PHP", "DBMS"],
      hasOnlineVerification: false,
    },
  ];

  return (
    <section
      id="certifications"
      className={`section-padding ${
        isDark ? "bg-[#0a0a0a]" : "bg-white"
      }`}
    >
      <div className="container-custom">
        
        <AnimatedSection>
          <h2
            className={`text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Certifications & Achievements
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <div className={`${cardBase} ${cardSurface}`}>
                  <div className="flex items-start gap-4">

                    <IconWrapper>
                      <Icon size={24} className={isDark ? "text-gray-300" : "text-gray-600"} />
                    </IconWrapper>

                    <div className="flex-1">
                      <h3
                        className={`text-xl font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {cert.title}
                      </h3>

                      <p className={`mt-1 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {cert.issuer} • {cert.date}
                      </p>

                      <p className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {cert.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className={`${tagBase} px-3 py-1 text-sm rounded-full`}>
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 mt-5">
                        {/* View Certificate */}
                        {cert.pdfLink && (
                          <button
                            onClick={() => setSelectedCert(cert)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
                              ${isDark ? "bg-[#1a1f24] text-white hover:bg-[#2a323c]" : "bg-gray-900 text-white hover:bg-gray-800"}
                            `}
                          >
                            <Eye size={16} className="inline-block mr-2" />
                            View Certificate
                          </button>
                        )}

                        {/* Online Verification */}
                        {cert.hasOnlineVerification && (
                          <a
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition 
                              ${
                                isDark
                                  ? "bg-[#1a1f24] text-white hover:bg-[#2a323c]"
                                  : "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100"
                              }
                            `}
                          >
                            <ExternalLink size={16} className="inline-block mr-2" />
                            Verify Online
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* MODAL — FAANG-Style */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className={`relative w-full max-w-5xl h-[90vh] rounded-xl overflow-hidden border 
              ${isDark ? "bg-[#111418] border-[#1f242c]" : "bg-white border-gray-200"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex items-center justify-between px-4 py-3 border-b 
                ${isDark ? "border-[#1f242c] bg-[#111418]" : "border-gray-200 bg-gray-50"}
              `}
            >
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                {selectedCert.title}
              </h3>

              <button
                className={`p-2 rounded-md transition ${
                  isDark ? "hover:bg-[#1f242c]" : "hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCert(null)}
              >
                <X size={22} className={isDark ? "text-gray-300" : "text-gray-700"} />
              </button>
            </div>

            <iframe src={selectedCert.pdfLink} className="w-full h-full" title="Certificate Viewer" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
