import React, { useState, useEffect, useContext } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { ThemeContext } from './context/ThemeContext';
import Certifications from './components/Certifications';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className={isDark ? 'dark' : ''}>
      <nav className={`fixed top-0 w-full ${isDark ? 'bg-gray-900/90 border-gray-700' : 'bg-white/90 border-gray-200'} backdrop-blur-sm shadow-sm z-50 border-b`}>
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => scrollToSection('home')}
              className={`text-xl font-bold ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-primary hover:text-secondary'} transition-colors`}
            >
              AL
            </button>

            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id 
                      ? isDark ? 'text-blue-400 font-semibold' : 'text-primary font-semibold'
                      : isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
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

          {isMenuOpen && (
            <div className={`md:hidden py-4 border-t ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200'}`}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 ${
                    activeSection === item.id 
                      ? isDark ? 'text-blue-400 font-semibold bg-gray-800' : 'text-primary font-semibold bg-blue-50'
                      : isDark ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <main className={`pt-16 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications /> 
        <Contact />
      </main>

      <footer className={`${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-900 text-white'} py-8`}>
        <div className="container-custom text-center">
          <p className={isDark ? 'text-gray-500' : 'text-gray-400'}>
            © {new Date().getFullYear()} Abhyudaya Lohani. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
