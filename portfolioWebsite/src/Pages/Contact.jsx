import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import "../Components/Styles/Contact.css";


function Contact() {
  return (
    <div>
      <div className="contact-container">
        <div className='contact-left'>
        <span data-text="Facebook">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x" />
          </a>
        </span>
        <span data-text="Twitter">
          <a href="https://twitter.com/SilonRajthala" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
        </span>
        <span data-text="Instagram">
          <a href="https://www.instagram.com/itzmesilon__" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </a>
        </span>
        <span data-text="Youtube">
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="3x" />
          </a>
        </span>
        <span data-text="Linkedin">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
        </span>
      </div>
      <div className='contact-right'>
        <h1>Contact</h1>
        <h2>Don't be shy! Hit me up! </h2>
        <span className='email-link' data-text="Mail: seelon.rajthala.7@gmail.com">
          <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=seelon.rajthala.7@gmail.com" target="_blank" rel="noopener noreferrer">
            <h3>✉</h3>
          </a>
        </span>
        <span data-text="Phone: +977 9803298969">
          <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <h3>✆</h3>
          </a>
        </span>
        <span data-text="Location: SU.NA.PA-4,BKT">
          <a href="https://www.google.com/maps/@27.6561171,85.387849,18z?entry=ttu" target="_blank" rel="noopener noreferrer">
            <h3>➤</h3>
          </a>
        </span>
</div>
    </div>
    </div>
  );
}

export default Contact;
