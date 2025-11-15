import React, { useContext } from 'react';
import { Github, Linkedin, Mail, Download, Award } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section id="home" className={`min-h-screen flex items-center relative overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`}>
      {/* Animated 3D Blobs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 -left-10 w-72 h-72 ${isDark ? 'bg-blue-600' : 'bg-blue-400'} rounded-full mix-blend-multiply filter blur-xl ${isDark ? 'opacity-10' : 'opacity-20'} animate-blob`}></div>
        <div className={`absolute top-40 -right-10 w-72 h-72 ${isDark ? 'bg-purple-600' : 'bg-purple-400'} rounded-full mix-blend-multiply filter blur-xl ${isDark ? 'opacity-10' : 'opacity-20'} animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-1/3 w-72 h-72 ${isDark ? 'bg-pink-600' : 'bg-pink-400'} rounded-full mix-blend-multiply filter blur-xl ${isDark ? 'opacity-10' : 'opacity-20'} animate-blob animation-delay-4000`}></div>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid md:grid-cols-[1fr,300px] gap-12 items-center max-w-6xl">
          {/* Left Side - Text Content */}
          <div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${isDark ? 'from-blue-400 to-indigo-400' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              Abhyudaya Lohani
            </h1>
            <h2 className={`text-2xl md:text-3xl ${isDark ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
              Data Science Graduate Student & Full-Stack Developer
            </h2>
            <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 max-w-2xl`}>
              Master's student at University of Maryland specializing in Data Science. Former Analyst at Deloitte with 
              expertise in building scalable web applications and data pipelines.
            </p>

            {/* Oracle Certification Badge */}
            <a
              href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=6004EC2B603DA6223295727A077E79B96FC1971A5CD9CAB48FA779469449F152"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 mb-8 px-4 py-2 ${isDark ? 'bg-red-900 border border-red-700 text-red-300 hover:bg-red-800' : 'bg-red-50 border border-red-200 text-red-700 hover:bg-red-100'} rounded-lg transition-colors`}
            >
              <Award size={20} />
              <span className="font-semibold">Oracle AI Vector Search Certified Professional</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
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
              <a 
                href="/Abhyudaya_Lohani_Resume.pdf"
                download="Abhyudaya_Lohani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 ${isDark ? 'bg-indigo-700 hover:bg-indigo-600' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-lg transition-colors`}
              >
                <Download size={20} />
                Resume
              </a>
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

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Gradient Ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              
              {/* Profile Photo */}
              <img 
                src="/profile.jpg" 
                alt="Abhyudaya Lohani"
                className={`relative w-72 h-72 rounded-full object-cover border-4 ${isDark ? 'border-gray-800' : 'border-white'} shadow-2xl`}
              />
              
              {/* Certification Badge Overlay */}
              <div className={`absolute -bottom-4 -right-4 ${isDark ? 'bg-red-900 border-red-700' : 'bg-red-100 border-red-300'} border-2 rounded-full p-3 shadow-lg`}>
                <Award className={`${isDark ? 'text-red-300' : 'text-red-600'}`} size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;