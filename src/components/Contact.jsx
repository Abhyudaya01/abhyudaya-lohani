import React, { useState, useContext } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mgvrwvga', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`section-padding ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container-custom">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h3>
            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
              I'm currently seeking opportunities in data science, machine learning engineering, 
              and AI research. Feel free to reach out for collaborations, research opportunities, 
              or just to connect!
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:abhyudayalohani@gmail.com"
                className={`flex items-center gap-3 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                <div className={`p-2 ${isDark ? 'bg-blue-900 border border-blue-700' : 'bg-blue-100'} rounded-lg`}>
                  <Mail size={20} className={isDark ? 'text-blue-400' : 'text-blue-600'} />
                </div>
                <span>abhyudayalohani@gmail.com</span>
              </a>
              
              <a 
                href="tel:+12404134861"
                className={`flex items-center gap-3 ${isDark ? 'text-gray-300 hover:text-green-400' : 'text-gray-700 hover:text-green-600'} transition-colors`}
              >
                <div className={`p-2 ${isDark ? 'bg-green-900 border border-green-700' : 'bg-green-100'} rounded-lg`}>
                  <Phone size={20} className={isDark ? 'text-green-400' : 'text-green-600'} />
                </div>
                <span>+1 (240) 413-4861</span>
              </a>
              
              <div className={`flex items-center gap-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className={`p-2 ${isDark ? 'bg-purple-900 border border-purple-700' : 'bg-purple-100'} rounded-lg`}>
                  <MapPin size={20} className={isDark ? 'text-purple-400' : 'text-purple-600'} />
                </div>
                <span>College Park, Maryland</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/abhyudaya-lohani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${isDark ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors`}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Abhyudaya01" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-lg transition-colors`}
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold mb-2`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${isDark ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold mb-2`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border ${isDark ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block ${isDark ? 'text-gray-300' : 'text-gray-700'} font-semibold mb-2`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className={`w-full px-4 py-3 border ${isDark ? 'bg-gray-900 border-gray-700 text-white placeholder-gray-500' : 'bg-white border-gray-300 text-gray-900'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 ${
                  status === 'sending' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : status === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : isDark 
                    ? 'bg-blue-700 hover:bg-blue-600' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white rounded-lg transition-colors font-semibold`}
              >
                {status === 'sending' && 'Sending...'}
                {status === 'success' && (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                )}
                {status === 'error' && 'Failed - Try Again'}
                {!status && (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-center text-sm">
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
