import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              I'm a Data Science graduate student at the University of Maryland with a 
              passion for leveraging machine learning and data analytics to solve 
              complex business problems.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With two years of professional experience at Deloitte, I've built 
              enterprise-scale applications serving 60,000+ daily users and developed 
              AI-powered solutions that significantly reduce operational overhead.
            </p>
            <p className="text-lg text-gray-700">
              My expertise spans full-stack development, cloud technologies, and 
              advanced machine learning implementations. I'm currently seeking 
              opportunities in data science, machine learning engineering, and 
              AI research.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 p-6 bg-blue-50 rounded-lg">
              <GraduationCap className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Education</h3>
                <p className="text-gray-700">
                  <strong>Master of Science in Data Science</strong><br />
                  University of Maryland, College Park<br />
                  Aug 2025 - May 2027
                </p>
                <p className="text-gray-700 mt-4">
                  <strong>B.Tech in Computer Science</strong><br />
                  SRM Institute of Science and Technology<br />
                  GPA: 3.7/4.0
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-green-50 rounded-lg">
              <Briefcase className="text-green-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Experience</h3>
                <p className="text-gray-700">
                  2 years at Deloitte as Analyst & Salesforce Developer Intern
                </p>
                <p className="text-gray-700 mt-2">
                  Research experience in Computer Vision & ML
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-purple-50 rounded-lg">
              <Award className="text-purple-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Achievements</h3>
                <p className="text-gray-700">
                  • 75% reduction in loan TAT<br />
                  • 99.95% system uptime<br />
                  • 60K daily disbursements handled
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
