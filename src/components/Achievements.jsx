import React from 'react';
import JavaImg from '../assets/certificates/Java.jpg';
import JsImg from '../assets/certificates/Javascript.jpg';
import MySQLImg from '../assets/certificates/MySQL.jpg';
import SpringImg from '../assets/certificates/Springboot.jpg';
import WebDevImg from '../assets/certificates/WebDevelopment.jpg';

const certs = [
  { title: 'Java Certificate', src: JavaImg },
  { title: 'JavaScript Certificate', src: JsImg },
  { title: 'MySQL Certificate', src: MySQLImg },
  { title: 'Spring Boot Certificate', src: SpringImg },
  { title: 'Web Development Certificate', src: WebDevImg },
];

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section fade-in">
      <h2 className="section-title">Achievements & Certificates</h2>
      <div className="cert-grid">
        {certs.map((c, i) => (
          <div key={i} className={`cert-card fade-in delay-${(i % 5) + 1} hover-lift`}>
            <img src={c.src} alt={c.title} className="cert-img" />
            <p className="cert-title">{c.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
