import React, { useState, useEffect, useContext } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

import { Menu, X, Moon, Sun } from 'lucide-react';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useContext(ThemeContext);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];
      
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className={isDark ? 'dark' : ''}>
      
      {/* NAVBAR */}
      <nav
        className={`
          fixed top-0 w-full z-50 backdrop-blur-sm border-b shadow-sm
          ${isDark ? 'bg-[#0d1117]/90 border-gray-700' : 'bg-white/90 border-gray-200'}
        `}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className={`
                text-xl font-bold transition-colors
                ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-gray-900 hover:text-gray-700'}
              `}
            >
              AL
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    transition-colors text-sm font-medium
                    ${
                      activeSection === item.id
                        ? isDark
                          ? 'text-blue-400 font-semibold'
                          : 'text-gray-900 font-semibold'
                        : isDark
                          ? 'text-gray-300 hover:text-blue-400'
                          : 'text-gray-600 hover:text-gray-900'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle + Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className={`
                  p-2 rounded-lg transition-colors
                  ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div
              className={`
                md:hidden py-4 border-t
                ${isDark ? 'border-gray-700 bg-[#0d1117]' : 'border-gray-200 bg-white'}
              `}
            >
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    block w-full text-left px-4 py-2 rounded-md
                    ${
                      activeSection === item.id
                        ? isDark
                          ? 'text-blue-400 bg-gray-800 font-semibold'
                          : 'text-gray-900 bg-blue-50 font-semibold'
                        : isDark
                          ? 'text-gray-300 hover:bg-gray-800'
                          : 'text-gray-600 hover:bg-gray-100'
                    }
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* PAGE SECTIONS */}
      <main className={`pt-16 ${isDark ? 'bg-[#0d1117] text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      <footer
        className={`py-8 ${
          isDark
            ? "bg-[#0d1117] text-gray-300"
            : "bg-white text-gray-800 border-t border-gray-200"
        }`}
      >
        <div className="container-custom text-center">
          <p className={isDark ? "text-gray-500" : "text-gray-600"}>
            © {new Date().getFullYear()} Abhyudaya Lohani. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
