import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-700 mb-8">
              I'm currently seeking opportunities in data science, machine learning engineering, 
              and AI research. Feel free to reach out for collaborations, research opportunities, 
              or just to connect!
            </p>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:abhyudayalohani@gmail.com"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <span>abhyudayalohani@gmail.com</span>
              </a>
              
              <a 
                href="tel:+12404134861"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="p-2 bg-green-100 rounded-lg">
                  <Phone size={20} className="text-green-600" />
                </div>
                <span>+1 (240) 413-4861</span>
              </a>
              
              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MapPin size={20} className="text-purple-600" />
                </div>
                <span>College Park, Maryland</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/abhyudaya-lohani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/Abhyudaya01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
