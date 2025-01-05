import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for the footer
const FooterContainer = styled.footer`
  background-color: #78350f;
  color: #fffbeb;
  padding: 3rem 2rem;
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
    line-height: 1.6;
    
    &:first-child {
      font-weight: 500;
    }
  }
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
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
    font-size: 1rem;
    color: #fffbeb;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
  }

  a:hover {
    color: #fbbf24;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;

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
        <p>&copy; {new Date().getFullYear()} MsCafe. All rights reserved.</p>
        <p>Made with ♥ by Mscoder</p>

        {/* Informational Sections */}
        <InfoSection>
          <InfoColumn>
            <h3>About Us</h3>
            <p>Founded in 2010, MsCafe is dedicated to serving the finest coffee with passion and expertise. We source our beans from sustainable farms across the globe.</p>
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
            aria-label="Twitter"
            role="link"
          >
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Instagram"
            role="link"
          >
            <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
