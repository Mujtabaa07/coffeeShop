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

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #78350f;
  color: #fffbeb;
  padding: 2rem 3rem 2rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);

`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  
  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5rem;
    
    &:first-child {
      font-weight: 500;
    }
  }

  @media (max-width:768px){
    display:flex;
    flex-direction:column;
  }
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
  margin-bottom: 1.3rem;
  // text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    gap:1.5rem;

  }
`;

const InfoColumn = styled.div`
  flex: 1;
  margin: 0 1rem;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  p, a {
    font-size: 0.9rem;
    color:rgb(255, 255, 255);
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
  }

  a:hover {
    color: #fbbf24;
  }

  @media (max-width:768px){
    h3{
      font-size:1.2rem;
      margin-bottom:0rem;
      }

    p{
      font-size:1rem;
      margin:0rem;
    } 

`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem; //additional gap removed.
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }
`;

const SocialIcon = styled(motion.a)`
  color: #fffbeb;
  font-size: 1.5rem;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 50%;
  transition: color 0.3s ease;
  
  &:hover {
    color: #fbbf24;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>

        {/* Social Icons */}
        <SocialIcons>
          <SocialIcon
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Facebook"
            role="link"
          >
            <i className="fab fa-facebook-f"></i>
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="twitter"
            role="link"
          >
            <i className="fa-brands fa-twitter"></i>{/* 'className' should've been used instead of 'class'. */}
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Instagram"
            role="link"

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

       <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIcons>
    
        {/* Informational Sections */}
        <InfoSection>
          <InfoColumn>
            <h3>About Us</h3>
            <p>Founded in 2010, MsCafe is dedicated to serving the finest coffee with passion and expertise. We source our beans from sustainable farms across the globe.</p>
          </InfoColumn>
          <InfoColumn  >
            <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/testimonial">Testimonial</Link>
          </InfoColumn>

          <InfoColumn>
            <h3>Contact Us</h3>
            <p>Email: contact@mscafe.com</p>
            <p>Phone: (123) 456-7890</p>
          </InfoColumn>

          <InfoColumn>
            <h3>Location</h3>
            <p>123 Coffee St, Bean Town, USA</p>
            <p><a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">View on Map</a></p>
          </InfoColumn>
        </InfoSection>

        <p>&copy; {new Date().getFullYear()} MsCafe. All rights reserved.</p>
        <p>Made with ♥ by Mscoder</p>

      </FooterContent>
    </FooterContainer>

  );
}

export default Footer;
