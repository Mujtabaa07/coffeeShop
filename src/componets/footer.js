import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FooterImg from './FooterImg.png';

// Styled components for the footer
const FooterContainer = styled.footer`
  background: linear-gradient(90deg, rgba(148, 93, 56, 1), rgba(56, 39, 16, 1));
  color: #fffbeb;
  padding: 1.5rem 0.5rem 1.5rem;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
  gap: 2.5rem;

  .logo-section {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    backdrop-filter: blur(10px);
  }

  .infoimg {
    height: auto;
    width: 200px;
    object-fit: contain;
    filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border-radius: 15px;

    &:hover {
      transform: scale(1.2) rotate(1deg);
      filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.3)) brightness(1.9);
    }
  }

  .info-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
    flex: 1;
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
    
    .logo-section {
      padding: 0.8rem;
    }

    .infoimg {
      width: 220px;
    }

    .info-wrapper {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .logo-section {
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      background: transparent;
    }

    .infoimg {
      width: 180px;
    }

    .info-wrapper {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      width: 100%;
    }
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  p {
    margin: 0.5rem 0;
    font-size: 1rem;
    line-height: 1.5;

    &:first-child {
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
    padding: 0.5rem;
  }
`;

const InfoColumn = styled.div`
  text-align: left;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: #ffd6a5;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.9rem;
    color: #fffbeb;
    margin-bottom: 0.4rem;
    line-height: 1.5;
    opacity: 0.9;
  }

  a {
    font-size: 0.9rem;
    color: #fffbeb;
    text-decoration: none;
    margin-bottom: 0.4rem;
    display: block;
    opacity: 0.9;
    transition: all 0.3s ease;
    
    &:hover {
      color: #fbbf24;
      transform: translateX(5px);
      opacity: 1;
    }
  }

  h3:nth-of-type(2) {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    text-align: center;

    a:hover {
      transform: none;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin: 1.5rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const SocialMediaIcon = styled(motion.a)`
  padding: 0.8rem;
  border-radius: 12px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  color: #fffbeb;
  text-decoration: none;
  
  i {
    font-size: 1.6rem;
  }
  
  i.fa-facebook-f {
    font-size: 1.6rem;
  }

  &:hover {
    transform: scale(1.15) translateY(-2px);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(0px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.8);
  }

  &[href*="facebook.com"]:hover {
    color: #3b5998;
  }

  &[href*="twitter.com"]:hover {
    color: #000000;
  }

  &[href*="instagram.com"]:hover {
    color: #e4405f;
  }

  &[href*="linkedin.com"]:hover {
    color: #0077b5;
  }

  &[href*="github.com"]:hover {
    color: #333333;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 40px;
    height: 40px;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #ffd6a5, transparent);
  margin: 1.5rem auto;
  width: 80%;
`;

const PaymentIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  margin-top: 1rem;
  width: 110px;

  @media (max-width: 768px) {
    width: 100px;
    margin: 1rem auto 0;
    gap: 0.8rem;
  }
`;

const PaymentIcon = styled(motion.a)`
  color: #fffbeb;
  font-size: 3.5rem;
  text-decoration: none;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  i {
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  &[href*="apple.com"]:hover {
    color: #000000;
    background: rgba(255, 255, 255, 0.9);
  }

  &[href*="google.com"]:hover {
    color: #4285F4;
    background: rgba(255, 255, 255, 0.9);
  }

  &[href*="mastercard.com"]:hover {
    color: #EB001B;
    background: rgba(255, 255, 255, 0.9);
  }

  &[href*="visa.com"]:hover {
    color: #1A1F71;
    background: rgba(255, 255, 255, 0.9);
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    width: 40px;
    height: 40px;
  }
`;

const CopyrightSection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 214, 165, 0.3);
  
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    margin: 0.3rem 0;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Social Icons */}
        <SocialIcons>
          <SocialMediaIcon
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </SocialMediaIcon>

          <SocialMediaIcon
            href="https://www.linkedin.com/in/mohamed-mujtaba-290885249/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="LinkedIn"
            role="link">
            <i className="fab fa-linkedin-in"></i>
          </SocialMediaIcon>

          <SocialMediaIcon
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="Twitter"
            role="link">
            <i className="fab fa-x-twitter"></i>
          </SocialMediaIcon>

          <SocialMediaIcon
            href="https://www.instagram.com/hy.mujtaba/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </SocialMediaIcon>

          <SocialMediaIcon
            href="https://github.com/Mujtabaa07/coffeeShop"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            aria-label="GitHub"
            role="link">
            <i className="fab fa-github"></i>
          </SocialMediaIcon>
        </SocialIcons>

        {/* Divider */}
        <Divider />

        {/* Informational Sections */}
        <InfoSection>
          <div className="logo-section">
            <img src={FooterImg} alt="Footer" className="infoimg"/>
          </div>

          <div className="info-wrapper">
            <InfoColumn>
              <h3>About Us</h3>
              <p>
                Founded in 2010, MsCafe is dedicated to serving the finest coffee
                with passion and expertise. We source our beans from sustainable
                farms across the globe.
              </p>
            </InfoColumn>

            <InfoColumn>
              <h3>Quick Links</h3>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/testimonial">Testimonial</Link>
              <Link to="/contributor">Contributors</Link>
            </InfoColumn>

            <InfoColumn>
              <h3>Contact Us</h3>
              <p><a href="mailto:contact@mscafe.com">✉️ contact@mscafe.com</a></p>
              <p><a href="tel:+11234567890">☎️ (123) 456-7890</a></p>

              <h3>We Accept</h3>
              <PaymentIcons>
                <PaymentIcon
                  href="https://www.apple.com/apple-pay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  aria-label="Apple Pay"
                  role="link">
                  <i className="fa-brands fa-apple-pay"></i>
                </PaymentIcon>

                <PaymentIcon
                  href="https://pay.google.com/intl/en_in/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  aria-label="G Pay"
                  role="link">
                  <i className="fa-brands fa-google-pay"></i>
                </PaymentIcon>

                <PaymentIcon
                  href="https://redemption.mastercard.com/#/user/login?language=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  aria-label="Mastercard"
                  role="link">
                  <i className="fa-brands fa-cc-mastercard"></i>
                </PaymentIcon>

                <PaymentIcon
                  href="https://www.visa.com.au/en_au/account/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15 }}
                  aria-label="Visa"
                  role="link">
                  <i className="fa-brands fa-cc-visa"></i>
                </PaymentIcon>
              </PaymentIcons>
            </InfoColumn>

            <InfoColumn>
              <h3>Location</h3>
              <p>123 Coffee St, Bean Town, USA</p>
              <p>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noopener noreferrer">
                  📍 View on Map
                </a>
              </p>
            </InfoColumn>
          </div>
        </InfoSection>

        {/* Footer Text */}
        <CopyrightSection>
          <p>&copy; {new Date().getFullYear()} MsCafe. All rights reserved.</p>
          <p>Made with ♥ by MsCoder</p>
        </CopyrightSection>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;