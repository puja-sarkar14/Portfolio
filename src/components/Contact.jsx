import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section fade-in">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-content">
        <p>
          I am currently open to new Front-End Developer opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open! Alternatively, you can reach me directly at <a href="mailto:sarkarpuja9673@gmail.com" style={{display: 'inline', padding: 0, color: 'var(--accent-color)'}}>sarkarpuja9673@gmail.com</a> or +91 8408988215.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" required placeholder=" " />
            <label htmlFor="name">Name</label>
          </div>
          <div className="form-group">
            <input type="email" id="email" required placeholder=" " />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-group">
            <textarea id="message" required placeholder=" " rows="5"></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <button type="submit" className="btn submit-btn">Say Hello</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
