import React from 'react';
import { Code, Database, Cloud, Wrench, Brain } from 'lucide-react';

const Skills = () => {
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
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", tag: "bg-blue-100 text-blue-700" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", tag: "bg-purple-100 text-purple-700" },
    green: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200", tag: "bg-green-100 text-green-700" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", tag: "bg-orange-100 text-orange-700" },
    red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-200", tag: "bg-red-100 text-red-700" }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
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
                  <div className={`p-2 bg-white rounded-lg ${colors.text}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">{category.title}</h3>
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
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Proficiency</h3>
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
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-1000"
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
