import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiMongodb, SiMysql, SiRedux, SiCplusplus } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'C/C++', icon: <SiCplusplus /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'GitHub', icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section fade-in">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card hover-lift">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
