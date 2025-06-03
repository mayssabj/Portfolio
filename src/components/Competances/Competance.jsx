import React from 'react';
import { Code, Database, Globe, Server, Smartphone, Cloud, Settings, Cpu } from 'lucide-react';
import './Competance.css';

const Competance = () => {
  const skills = [
    // Programming Languages
    { name: 'C', category: 'Programming Languages', color: 'bg-blue-600', icon: '💻' },
    { name: 'C#', category: 'Programming Languages', color: 'bg-purple-700', icon: '💎' },
    { name: 'Java', category: 'Programming Languages', color: 'bg-red-600', icon: '☕' },
    { name: 'JavaScript', category: 'Programming Languages', color: 'bg-yellow-500', icon: '⚡' },
    { name: 'Python', category: 'Programming Languages', color: 'bg-blue-500', icon: '🐍' },
    { name: 'R', category: 'Programming Languages', color: 'bg-blue-800', icon: '📊' },
    { name: 'PHP', category: 'Programming Languages', color: 'bg-indigo-600', icon: '🐘' },
    
    // Frameworks
    { name: 'Laravel', category: 'Frameworks', color: 'bg-red-500', icon: '🎭' },
    { name: 'React', category: 'Frameworks', color: 'bg-blue-500', icon: '⚛️' },
    { name: 'Node.js', category: 'Frameworks', color: 'bg-green-600', icon: '🚀' },
    { name: 'Symfony', category: 'Frameworks', color: 'bg-black', icon: '🎼' },
    { name: 'JavaFX', category: 'Frameworks', color: 'bg-orange-600', icon: '🖥️' },
    { name: '.NET', category: 'Frameworks', color: 'bg-purple-800', icon: '🔷' },
    { name: 'BLAZOR', category: 'Frameworks', color: 'bg-purple-600', icon: '🔥' },
    { name: 'Angular', category: 'Frameworks', color: 'bg-red-700', icon: '🅰️' },
    { name: 'Spring', category: 'Frameworks', color: 'bg-green-700', icon: '🌱' },
    
    // Style Languages
    { name: 'HTML', category: 'Style Languages', color: 'bg-orange-500', icon: '🌐' },
    { name: 'CSS', category: 'Style Languages', color: 'bg-blue-600', icon: '🎨' },
    { name: 'XML', category: 'Style Languages', color: 'bg-yellow-600', icon: '📄' },
    
    // Database
    { name: 'MySQL', category: 'Database', color: 'bg-blue-700', icon: '🗄️' },
    { name: 'Oracle', category: 'Database', color: 'bg-red-800', icon: '🏛️' },
    { name: 'MongoDB', category: 'Database', color: 'bg-green-700', icon: '🍃' },
    { name: 'Laragon', category: 'Database', color: 'bg-blue-800', icon: '💿' },
    { name: 'SQL Server', category: 'Database', color: 'bg-red-700', icon: '💾' },
    
    // Operating Systems
    { name: 'Windows', category: 'Operating Systems', color: 'bg-blue-500', icon: '🪟' },
    { name: 'Linux (Ubuntu)', category: 'Operating Systems', color: 'bg-orange-600', icon: '🐧' },
    { name: 'KaliLinux', category: 'Operating Systems', color: 'bg-gray-800', icon: '🔐' },
    
    // DevOps
    { name: 'Git', category: 'DevOps', color: 'bg-orange-700', icon: '🔄' },
    { name: 'Docker', category: 'DevOps', color: 'bg-blue-500', icon: '🐳' },
    { name: 'Kubernetes', category: 'DevOps', color: 'bg-blue-600', icon: '☸️' },
    { name: 'Ansible', category: 'DevOps', color: 'bg-red-600', icon: '⚙️' },
    { name: 'OpenStack', category: 'DevOps', color: 'bg-red-700', icon: '☁️' },
    
    // Development Tools
    { name: 'Android', category: 'Development Tools', color: 'bg-green-500', icon: '🤖' },
    { name: 'FlutterFlow', category: 'Development Tools', color: 'bg-blue-400', icon: '📱' },
  ];

  const categories = [
    { name: 'Programming Languages', icon: <Code className="w-4 h-4" />, color: 'text-blue-600' },
    { name: 'Frameworks', icon: <Server className="w-4 h-4" />, color: 'text-green-600' },
    { name: 'Style Languages', icon: <Globe className="w-4 h-4" />, color: 'text-orange-600' },
    { name: 'Database', icon: <Database className="w-4 h-4" />, color: 'text-purple-600' },
    { name: 'Operating Systems', icon: <Cpu className="w-4 h-4" />, color: 'text-gray-600' },
    { name: 'DevOps', icon: <Cloud className="w-4 h-4" />, color: 'text-cyan-600' },
    { name: 'Development Tools', icon: <Smartphone className="w-4 h-4" />, color: 'text-pink-600' }
  ];

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div className="competance-container">
      <div className="competance-wrapper">
        {/* Header */}
        <div className="competance-header">
          <h1 className="competance-title">
            My Skills
          </h1>
        </div>

        {/* Skills Grid by Category */}
        <div className="skills-container">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.name);
            
            if (categorySkills.length === 0) return null;
            
            return (
              <div 
                key={category.name} 
                className="category-section"
                style={{
                  animationDelay: `${categoryIndex * 200}ms`
                }}
              >
                {/* Category Header */}
                <div className="category-header">
                  <div className={`category-title-wrapper ${category.color}`}>
                    {category.icon}
                    <h2 className="category-title">{category.name}</h2>
                  </div>
                  <div className="category-divider"></div>
                </div>

                {/* Skills Badges */}
                <div className="skills-badges">
                  {categorySkills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`skill-badge ${skill.color}`}
                      style={{
                        animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                      }}
                    >
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number text-blue-600">{skills.length}+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-green-600">{categories.length}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-purple-600">5+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number text-orange-600">10+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <h3 className="cta-title">Ready to collaborate?</h3>
            <p className="cta-text">
              These skills enable me to create complete and innovative solutions
            </p>
           <a href="mailto:maissabenjoud@gmail.com">
                    <button className='button n-button'>Contact</button>
                </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competance;