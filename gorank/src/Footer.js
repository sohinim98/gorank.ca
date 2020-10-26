import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="socials">
        <a
          aria-label="go to linkedin"
          href="https://www.linkedin.com/in/gorank-/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-linkedin fa-3x"></i>
        </a>
        <a
            aria-label="send an email"
            href="mailto:gorank951@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social"
        >
          <i className="fa fa-envelope fa-3x"></i>
        </a>
        <a
          aria-label="go to twitter"
          href="https://twitter.com/lilhooman99"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-twitter fa-3x"></i>
        </a>
        <a
          aria-label="go to instagram"
          href="https://www.instagram.com/_lilhooman_/"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-instagram fa-3x"></i>
        </a>
        <a
          aria-label="go to spotify"
          href="https://open.spotify.com/user/gorank99?si=DCWApMk_S4SwHrSbZFNrJg"
          target="_blank"
          rel="noopener noreferrer"
          className="social"
        >
          <i className="fa fa-spotify fa-3x"></i>
        </a>
      </div>
      <div>© 2020, Gorank. All rights reserved.</div>
    </section>
  )
}

export default Footer
