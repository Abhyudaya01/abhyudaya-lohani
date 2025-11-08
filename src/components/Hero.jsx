import React, { useContext } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="home" className={`min-h-screen flex items-center ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${isDark ? 'from-blue-400 to-indigo-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
            Abhyudaya Lohani
          </h1>
          <h2 className={`text-2xl md:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
            Data Science Graduate Student & Full-Stack Developer
          </h2>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 max-w-2xl`}>
            Master's student at University of Maryland specializing in Machine Learning, 
            Data Analytics, and AI-powered solutions. Former Analyst at Deloitte with 
            expertise in building scalable web applications and data pipelines.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://github.com/Abhyudaya01" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 ${isDark ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'} rounded-lg transition-colors`}
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/abhyudaya-lohani/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 ${isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors`}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="mailto:abhyudayalohani@gmail.com"
              className={`flex items-center gap-2 px-6 py-3 ${isDark ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700' : 'bg-white text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white'} border-2 rounded-lg transition-colors`}
            >
              <Mail size={20} />
              Email Me
            </a>
            <button 
              className={`flex items-center gap-2 px-6 py-3 ${isDark ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-lg transition-colors`}
            >
              <Download size={20} />
              Resume
            </button>
          </div>

          <div className={`flex flex-wrap gap-6 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <div>
              <span className="font-semibold">Location:</span> College Park, MD
            </div>
            <div>
              <span className="font-semibold">Status:</span> US Work Authorization
            </div>
            <div>
              <span className="font-semibold">Phone:</span> +1 (240) 413-4861
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
