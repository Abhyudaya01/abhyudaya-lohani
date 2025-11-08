import React, { useContext, useState } from 'react';
import { Award, ExternalLink, FileText, Code, Users, Eye, X } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import AnimatedSection from './AnimatedSection';

const Certifications = () => {
  const { isDark } = useContext(ThemeContext);
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Oracle AI Vector Search Certified Professional",
      issuer: "Oracle",
      date: "2024",
      icon: Award,
      color: "red",
      pdfLink: "/eCertificate.pdf",
      verifyLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=6004EC2B603DA6223295727A077E79B96FC1971A5CD9CAB48FA779469449F152",
      hasOnlineVerification: true,
      description: "Advanced certification in AI-powered vector search technologies, demonstrating expertise in Oracle's AI Vector Search capabilities for semantic search and retrieval systems.",
      skills: ["AI/ML", "Vector Databases", "Oracle Cloud", "Semantic Search", "RAG Systems"]
    },
    {
      title: "Conference Paper Presentation - ICIOT 2023",
      issuer: "SRM Institute of Science and Technology",
      date: "April 2023",
      icon: FileText,
      color: "blue",
      paper: "Gesture Controlled Mouse Using MediaPipe and OpenCV",
      pdfLink: "/ICIOT_Conference.pdf",
      hasOnlineVerification: false,
      description: "Presented research paper at the Fourth International Conference on Internet of Things (ICIOT'23), organized by the Department of Computing Technologies.",
      skills: ["Computer Vision", "MediaPipe", "OpenCV", "IoT", "Research"]
    },
    {
      title: "Salesforce Developer Virtual Internship",
      issuer: "SmartInternz (AICTE Approved)",
      date: "September 2022",
      icon: Code,
      color: "green",
      pdfLink: "/SmartInternz.pdf",
      verifyLink: "https://smartinternz.com/internships/salesforce_certificates/d01f770d77f135a0762a9b8643607b39",
      certificateId: "SISFVIPAD2022-11684",
      hasOnlineVerification: true,
      description: "Completed 8-week virtual internship covering Salesforce fundamentals, Apex programming, Lightning Web Components, and process automation. Earned Apex Specialist and Process Automation Specialist Super Badges.",
      skills: ["Salesforce", "Apex", "LWC", "Process Automation", "CRM"]
    },
    {
      title: "Web Development Training",
      issuer: "Internshala Trainings",
      date: "April 2022",
      icon: Users,
      color: "purple",
      pdfLink: "/Web_Development_Internshala.pdf",
      verifyLink: "https://trainings.internshala.com/verify_certificate",
      certificateId: "3EF7E712-67E9-84B7-56EC-C732CB7B44CD",
      hasOnlineVerification: true,
      verificationNote: "Enter certificate number to verify",
      description: "Successfully completed comprehensive 8-week online training covering full-stack web development, including frontend technologies, databases, and modern JavaScript frameworks.",
      skills: ["HTML/CSS", "Bootstrap", "JavaScript", "React", "PHP", "DBMS"]
    }
  ];

  const colorClasses = {
    red: {
      bg: isDark ? 'bg-gray-900 border-red-700' : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-200',
      icon: isDark ? 'bg-red-900 border-red-700 text-red-300' : 'bg-red-100 text-red-600',
      title: isDark ? 'text-red-300' : 'text-red-600',
      button: isDark ? 'bg-red-700 hover:bg-red-600' : 'bg-red-600 hover:bg-red-700',
      tag: isDark ? 'bg-red-900 text-red-300 border border-red-700' : 'bg-red-100 text-red-700'
    },
    blue: {
      bg: isDark ? 'bg-gray-900 border-blue-700' : 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200',
      icon: isDark ? 'bg-blue-900 border-blue-700 text-blue-300' : 'bg-blue-100 text-blue-600',
      title: isDark ? 'text-blue-300' : 'text-blue-600',
      button: isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700',
      tag: isDark ? 'bg-blue-900 text-blue-300 border border-blue-700' : 'bg-blue-100 text-blue-700'
    },
    green: {
      bg: isDark ? 'bg-gray-900 border-green-700' : 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200',
      icon: isDark ? 'bg-green-900 border-green-700 text-green-300' : 'bg-green-100 text-green-600',
      title: isDark ? 'text-green-300' : 'text-green-600',
      button: isDark ? 'bg-green-700 hover:bg-green-600' : 'bg-green-600 hover:bg-green-700',
      tag: isDark ? 'bg-green-900 text-green-300 border border-green-700' : 'bg-green-100 text-green-700'
    },
    purple: {
      bg: isDark ? 'bg-gray-900 border-purple-700' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200',
      icon: isDark ? 'bg-purple-900 border-purple-700 text-purple-300' : 'bg-purple-100 text-purple-600',
      title: isDark ? 'text-purple-300' : 'text-purple-600',
      button: isDark ? 'bg-purple-700 hover:bg-purple-600' : 'bg-purple-600 hover:bg-purple-700',
      tag: isDark ? 'bg-purple-900 text-purple-300 border border-purple-700' : 'bg-purple-100 text-purple-700'
    }
  };

  const handleViewCertificate = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section id="certifications" className={`section-padding ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-custom">
        <AnimatedSection>
          <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Certifications & Achievements
          </h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color];
            const Icon = cert.icon;
            
            return (
              <AnimatedSection key={index} delay={0.1 * (index + 1)}>
                <div className={`${colors.bg} border rounded-lg p-6 hover:shadow-xl transition-all`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${colors.icon} border rounded-lg flex-shrink-0`}>
                      <Icon size={32} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                        {cert.title}
                      </h3>
                      
                      {cert.paper && (
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} italic text-sm mb-2`}>
                          Paper: "{cert.paper}"
                        </p>
                      )}
                      
                      <p className={`${colors.title} font-semibold mb-2`}>
                        {cert.issuer} • {cert.date}
                      </p>
                      
                      {cert.certificateId && (
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-sm mb-2`}>
                          Certificate ID: {cert.certificateId}
                        </p>
                      )}
                      
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                        {cert.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className={`px-3 py-1 ${colors.tag} text-sm rounded-full`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {/* View Certificate Button (Opens Modal) */}
                        {cert.pdfLink && (
                          <button
                            onClick={() => handleViewCertificate(cert)}
                            className={`inline-flex items-center gap-2 px-4 py-2 ${colors.button} text-white rounded-lg transition-colors text-sm font-semibold`}
                          >
                            <Eye size={16} />
                            View Certificate
                          </button>
                        )}
                        
                        {/* Online Verification Button */}
                        {cert.hasOnlineVerification && (
                          <a
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 ${isDark ? 'bg-gray-700 hover:bg-gray-600 border border-gray-600' : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'} ${isDark ? 'text-white' : 'text-gray-900'} rounded-lg transition-colors text-sm font-semibold`}
                          >
                            <ExternalLink size={16} />
                            Verify Online
                          </a>
                        )}
                      </div>
                      
                      {/* Verification Note */}
                      {cert.verificationNote && (
                        <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-xs mt-2 italic`}>
                          * {cert.verificationNote}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Stats Summary */}
        
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className={`relative w-full max-w-6xl h-[90vh] ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-2xl overflow-hidden`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
              <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {selectedCert.title}
              </h3>
              <button
                onClick={closeModal}
                className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-200 text-gray-700'} transition-colors`}
              >
                <X size={24} />
              </button>
            </div>

            {/* PDF Viewer */}
            <iframe
              src={selectedCert.pdfLink}
              className="w-full h-[calc(100%-64px)]"
              title={selectedCert.title}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
