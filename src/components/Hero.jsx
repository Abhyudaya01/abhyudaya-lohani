import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom section-padding">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Abhyudaya Lohani
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
            Data Science Graduate Student & Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Master's student at University of Maryland specializing in Machine Learning, 
            Data Analytics, and AI-powered solutions. Former Analyst at Deloitte with 
            expertise in building scalable web applications and data pipelines.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="mailto:abhyudayalohani@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Mail size={20} />
              Email Me
            </a>
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Download size={20} />
              Resume
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-600">
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
