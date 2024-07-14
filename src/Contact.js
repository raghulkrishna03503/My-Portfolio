import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact'>
    <div id='container-contact'>
      <div className="contact-container">
        <h1>Reach Out to Me!</h1>
        <p>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
        <p className="quote">"First Pakistani Google Code-In Finalist | Software Engineer @SadaPay | building refactornow.dev"</p>
        <div className="location-status">
          <p>📍 Karachi, Pakistan</p>
          <p>Open for opportunities: No</p>
        </div>
        <div className="social-icons">
          <a href="#"><i className="fa fa-github"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
          <a href="#"><i className="fa fa-envelope"></i></a>
          <a href="#"><i className="fa fa-gitlab"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-medium"></i></a>
          <a href="#"><i className="fa fa-stack-overflow"></i></a>
        </div>
        <div className="footer">
          <p>Made with ❤️ by DeveloperFolio Team</p>
          <p>Theme by <a href="#">developerFolio</a></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
