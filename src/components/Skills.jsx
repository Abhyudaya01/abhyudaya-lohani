import React, { useContext } from 'react';
import { Code, Database, Cloud, Wrench, Brain } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';


const Skills = () => {
  const { isDark } = useContext(ThemeContext);

  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "blue",
      skills: ["Python", "Java", "C++", "R", "TypeScript/JavaScript", "Swift", "SQL", "MySQL", "PySpark"]
    },
    {
      icon: Brain,
      title: "Frameworks & Libraries",
      color: "purple",
      skills: ["React", "Node.js", "Spring Boot", "Flask", "NumPy", "Pandas", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "MediaPipe", "OpenCV"]
    },
    {
      icon: Cloud,
      title: "Cloud & Big Data",
      color: "green",
      skills: ["AWS (S3, EC2, SageMaker)", "Databricks", "Google BigQuery", "Azure Synapse", "Red Hat OpenShift", "PostgreSQL"]
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      color: "orange",
      skills: ["Git", "Google Analytics", "VS Code", "Jira", "Azure DevOps", "PyCharm", "IntelliJ", "Xcode"]
    },
    {
      icon: Database,
      title: "Core Competencies",
      color: "red",
      skills: ["Machine Learning", "Deep Learning", "Data Mining", "Neural Networks", "Predictive Modeling", "ETL/ELT Pipelines", "Dashboard Visualizations", "LLMs", "RAG Systems"]
    }
  ];

  const colorClasses = {
    blue: { 
      bg: isDark ? "bg-gray-900 border-blue-700" : "bg-blue-50", 
      text: isDark ? "text-blue-400" : "text-blue-600", 
      border: isDark ? "border-blue-700" : "border-blue-200", 
      tag: isDark ? "bg-blue-900 text-blue-300 border border-blue-700" : "bg-blue-100 text-blue-700" 
    },
    purple: { 
      bg: isDark ? "bg-gray-900 border-purple-700" : "bg-purple-50", 
      text: isDark ? "text-purple-400" : "text-purple-600", 
      border: isDark ? "border-purple-700" : "border-purple-200", 
      tag: isDark ? "bg-purple-900 text-purple-300 border border-purple-700" : "bg-purple-100 text-purple-700" 
    },
    green: { 
      bg: isDark ? "bg-gray-900 border-green-700" : "bg-green-50", 
      text: isDark ? "text-green-400" : "text-green-600", 
      border: isDark ? "border-green-700" : "border-green-200", 
      tag: isDark ? "bg-green-900 text-green-300 border border-green-700" : "bg-green-100 text-green-700" 
    },
    orange: { 
      bg: isDark ? "bg-gray-900 border-orange-700" : "bg-orange-50", 
      text: isDark ? "text-orange-400" : "text-orange-600", 
      border: isDark ? "border-orange-700" : "border-orange-200", 
      tag: isDark ? "bg-orange-900 text-orange-300 border border-orange-700" : "bg-orange-100 text-orange-700" 
    },
    red: { 
      bg: isDark ? "bg-gray-900 border-red-700" : "bg-red-50", 
      text: isDark ? "text-red-400" : "text-red-600", 
      border: isDark ? "border-red-700" : "border-red-200", 
      tag: isDark ? "bg-red-900 text-red-300 border border-red-700" : "bg-red-100 text-red-700" 
    }
  };

  return (
    <section id="skills" className={`section-padding ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container-custom">
        <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color];
            const Icon = category.icon;
            
            return (
              <div 
                key={index} 
                className={`${colors.bg} border ${colors.border} rounded-lg p-6 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg ${colors.text}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 ${colors.tag} rounded-full text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Proficiency</h3>
          <div className="space-y-6">
            {[
              { name: "Python & Data Science", level: 95 },
              { name: "Java & Spring Boot", level: 90 },
              { name: "React & Frontend Development", level: 88 },
              { name: "Machine Learning & AI", level: 85 },
              { name: "Cloud Technologies (AWS/Azure)", level: 82 },
              { name: "SQL & Database Design", level: 90 }
            ].map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{skill.name}</span>
                  <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>{skill.level}%</span>
                </div>
                <div className={`w-full ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3`}>
                  <div 
                    className={`${isDark ? 'bg-gradient-to-r from-blue-600 to-indigo-500' : 'bg-gradient-to-r from-blue-500 to-indigo-600'} h-3 rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
