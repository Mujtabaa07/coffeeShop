import React from 'react';
import './Footer.css'; // For external CSS styling (you can copy the styles from your CSS)

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div
          className="footer-section about"
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <img src="img/logo.jpg" alt="Tiffin Fusion Logo" className="footer-logo" />
          <p>
            Welcome to STUDENTIFY, your go-to platform for unlocking academic potential and broadening horizons. We
            empower students with tailored resources, expert-led courses, and a dynamic learning environment to foster
            growth, curiosity, and critical thinking for success.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section services">
          <h2
            onMouseOver={(e) => (e.currentTarget.style.color = '#e67e22')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
          >
            Studentify
          </h2>
          <ul>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Who We Are
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Work With Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Investor Relations
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Learn More Section */}
        <div className="footer-section learn-more">
          <h2
            onMouseOver={(e) => (e.currentTarget.style.color = '#e67e22')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
          >
            Learn More
          </h2>
          <ul>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.paddingLeft = '10px';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-section social-links">
          <h2
            onMouseOver={(e) => (e.currentTarget.style.color = '#e67e22')}
            onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
          >
            Follow Us
          </h2>
          <ul className="social-icons">
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#e67e22';
                  e.currentTarget.style.transform = 'scale(1.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'black';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Studentify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
