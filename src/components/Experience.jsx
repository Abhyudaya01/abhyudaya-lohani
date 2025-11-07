import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      location: "Chennai, India",
      role: "Analyst - Java-based Web Application Development",
      period: "Sep 2023 - July 2025",
      achievements: [
        "Built a pan-India digital lending platform for a major public sector bank, automating eligibility with Java-based rules and optimizing e-loan document generation in SQL, doubling processing efficiency, cutting loan TAT by 75%, and enabling 60,000 daily disbursements across remote regions while maintaining 99.95% uptime",
        "Designed user-centric web interfaces in JavaScript and led cross-functional integrations of core banking, LOS/LMS, and KYC systems, boosting engagement and reducing input errors by 80%, improving NPA-screening accuracy by 12%",
        "Streamlined Java/Spring Boot microservices integrating fintech APIs via typed clients and an in-code API registry, normalizing JSON for downstream services and increasing data reliability by 25% while cutting p95 latency by 20%",
        "Integrated Java-based business rules with third-party fintech systems, extracting customer values from JSON payload tags for eligibility and risk checks; standardized field mapping, validation, and error handling to improve rule accuracy and reduce decision TAT by 30% with 99.9% uptime",
        "Provided comprehensive project management support by coordinating with stakeholders for root cause analysis, troubleshooting production issues, and presenting formal status updates to management teams"
      ]
    },
    {
      company: "Deloitte Touche Tohmatsu India LLP",
      location: "Chennai, India",
      role: "Salesforce Developer Intern",
      period: "2023",
      achievements: [
        "Spearheaded Salesforce Cloud CRM implementation for a major offshore client, resulting in streamlined data management and a 15% increase in lead conversion rates within the first quarter"
      ]
    },
    {
      company: "SRM Institute of Science and Technology",
      location: "Chennai, India",
      role: "Undergraduate Researcher",
      period: "Mar 2022 - Jun 2022",
      achievements: [
        "Built a hand-gesture recognition system using MediaPipe and OpenCV, optimizing computational performance during a focused research phase",
        "Presented findings to the academic management team with clear learning objectives and implementation roadmaps"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                  <div className="flex items-center gap-4 text-gray-600 mt-2">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2 ml-16">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-700 flex gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
