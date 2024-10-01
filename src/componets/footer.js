import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2023 Zumar Cafe. All rights reserved.</p>
      <SocialIcons>
        <SocialIcon
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-facebook-f"></i>
        </SocialIcon>
        <SocialIcon
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-twitter"></i>
        </SocialIcon>
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <i className="fab fa-instagram"></i>
        </SocialIcon>
      </SocialIcons>
    </FooterContainer>
  );
}

export default Footer;