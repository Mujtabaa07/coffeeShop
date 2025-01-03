import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
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
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} MsCafe. All rights reserved.</p>
        <p>Made with ♥ by Mscoder</p>
        <SocialIcons>
          <SocialIcon
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </SocialIcon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;