import React, { useContext } from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="about" className={`section-padding ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-custom">
        <AnimatedSection>
          <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <AnimatedSection delay={0.2}>
            <div className="prose max-w-none">
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                I'm a Data Science graduate student at the University of Maryland with a 
                passion for leveraging machine learning and data analytics to solve 
                complex business problems.
              </p>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                With two years of professional experience at Deloitte, I've built 
                enterprise-scale applications serving 60,000+ daily users and developed 
                AI-powered solutions that significantly reduce operational overhead.
              </p>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                My expertise spans full-stack development, cloud technologies, and 
                advanced machine learning implementations. I'm currently seeking 
                opportunities in data science, machine learning engineering, and 
                AI research.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            <AnimatedSection delay={0.3}>
              <div className={`flex gap-4 p-6 ${isDark ? 'bg-gray-900 border border-blue-700' : 'bg-blue-50'} rounded-lg`}>
                <GraduationCap className={`${isDark ? 'text-blue-400' : 'text-blue-600'} flex-shrink-0`} size={32} />
                <div>
                  <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Education</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    <strong>Master of Science in Data Science</strong><br />
                    University of Maryland, College Park<br />
                    Aug 2025 - May 2027
                  </p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-4`}>
                    <strong>B.Tech in Computer Science</strong><br />
                    SRM Institute of Science and Technology<br />
                    GPA: 3.7/4.0
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className={`flex gap-4 p-6 ${isDark ? 'bg-gray-900 border border-green-700' : 'bg-green-50'} rounded-lg`}>
                <Briefcase className={`${isDark ? 'text-green-400' : 'text-green-600'} flex-shrink-0`} size={32} />
                <div>
                  <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Experience</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    2 years at Deloitte as Analyst & Salesforce Developer Intern
                  </p>
                  <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mt-2`}>
                    Research experience in Computer Vision & ML
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className={`flex gap-4 p-6 ${isDark ? 'bg-gray-900 border border-purple-700' : 'bg-purple-50'} rounded-lg`}>
                <Award className={`${isDark ? 'text-purple-400' : 'text-purple-600'} flex-shrink-0`} size={32} />
                <div>
                  <h3 className={`font-semibold text-lg mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Achievements</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    • 75% reduction in loan TAT<br />
                    • 99.95% system uptime<br />
                    • 60K daily disbursements handled
                  </p>
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