import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaCoffee, FaMugHot, FaGlassWhiskey } from "react-icons/fa";
import Button from "../componets/Button";
import Faq from "../componets/faq";

const HomeContainer = styled.div`
  padding: 0;
  max-width: 100%;
  background: #f8efe4; /* Light cream */
  color: #281a0d; /* Dark wood brown */
  font-family: "Inter", sans-serif;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f8efe4;
  }

  ::-webkit-scrollbar-thumb {
    background: #8b4513; /* Saddle brown */
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #deb887; /* Burlywood */
  }

  ::selection {
    background: #8b4513;
    color: #f8efe4;
  }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 2rem 6%;
  background: linear-gradient(rgba(40, 26, 13, 0.7), rgba(40, 26, 13, 0.7)),
    url("https://cdn.pixabay.com/photo/2024/03/22/18/30/ai-generated-8650286_1280.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #f8efe4;
  position: relative;
  border-bottom: 1px solid rgba(139, 69, 19, 0.2); /* Saddle brown border */

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, #f8efe4, transparent);
  }

  @media (max-width: 768px) {
    padding: 2rem 4%;
    min-height: 80vh;
    background-attachment: scroll;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4.8rem;
  font-family: "Playfair Display", serif;
  font-weight: 800;
  color: #f8efe4;
  margin-bottom: 1.2rem;
  background: linear-gradient(
    45deg,
    #8b4513,
    #deb887
  ); /* Saddle brown to burlywood */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  &::after {
    content: "☕";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    color: #deb887;
    opacity: 0;
    animation: steam 3s infinite;
  }

  @keyframes steam {
    0% {
      transform: translateY(0) translateX(-50%) scale(1);
      opacity: 0.8;
    }
    50% {
      transform: translateY(-20px) translateX(-50%) scale(1.2);
      opacity: 0.4;
    }
    100% {
      transform: translateY(-40px) translateX(-50%) scale(1);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.7rem;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #deb887; /* Burlywood */
  max-width: 700px;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    max-width: 90%;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(
    45deg,
    #8b4513,
    #deb887
  ); /* Saddle brown to burlywood */
  color: #f8efe4;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(45deg, #deb887, #8b4513);
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(139, 69, 19, 0.4);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.8rem;
    font-size: 0.95rem;
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 6rem 6%;
  background: linear-gradient(
    135deg,
    #f8efe4,
    #f0e6d9
  ); /* Light cream gradient */
  position: relative;

  &::before {
    content: "Our Features";
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    color: #deb887; /* Burlywood */
    background: linear-gradient(45deg, #8b4513, #deb887);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 4rem 4%;
    gap: 1.5rem;

    &::before {
      font-size: 2rem;
    }
  }
`;

const FeatureCard = styled.div`
  background: rgba(248, 239, 228, 0.85); /* Creamier, less white */
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(139, 69, 19, 0.2); /* Saddle brown border */
  backdrop-filter: blur(12px);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 340px; /* Taller cards */

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(248, 239, 228, 0.9); /* Slightly more opaque on hover */
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      #8b4513,
      #deb887
    ); /* Saddle brown to burlywood */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  .steam {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.6rem;
    color: #deb887; /* Burlywood */
    pointer-events: none;
    opacity: 0;
    animation: steam 3s infinite;
  }

  &:hover .steam {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 300px; /* Taller cards on mobile */
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 120px; /* Taller image container */
  margin-bottom: 1.2rem;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${FeatureCard}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.6rem;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  color: #281a0d; /* Dark wood brown */
  margin-bottom: 0.8rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #deb887; /* Burlywood */
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  color: #281a0d; /* Dark wood brown */
  line-height: 1.5;
  max-width: 240px;
  margin: 0 auto;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #deb887; /* Burlywood */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const SpecialtySection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 6rem 6%;
  background: #281a0d; /* Dark wood brown */
  position: relative;
  color: #f8efe4;

  &::before {
    content: "Our Specialties";
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    font-family: "Playfair Display", serif;
    font-weight: 700;
    color: #deb887; /* Burlywood */
    background: linear-gradient(45deg, #8b4513, #deb887);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 4rem 4%;
    gap: 1.5rem;

    &::before {
      font-size: 2rem;
    }
  }
`;

const SpecialtyCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(139, 69, 19, 0.2); /* Saddle brown border */
  backdrop-filter: blur(12px);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 280px;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      #8b4513,
      #deb887
    ); /* Saddle brown to burlywood */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  .steam {
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.6rem;
    color: #deb887; /* Burlywood */
    pointer-events: none;
    opacity: 0;
    animation: steam 3s infinite;
  }

  &:hover .steam {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: 240px;
  }
`;

const SpecialtyIcon = styled.div`
  font-size: 3rem;
  color: #deb887; /* Burlywood */
  margin-bottom: 1rem;
  transition: transform 0.3s ease;

  ${SpecialtyCard}:hover & {
    transform: scale(1.1);
  }
`;

const SpecialtyTitle = styled.h3`
  font-size: 1.6rem;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  color: #f8efe4;
  margin-bottom: 0.8rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #deb887; /* Burlywood */
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const SpecialtyDescription = styled.p`
  font-size: 1rem;
  font-family: "Inter", sans-serif;
  color: #f8efe4;
  line-height: 1.5;
  max-width: 240px;
  margin: 0 auto;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #deb887; /* Burlywood */
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Welcome to MsCafe
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Where every cup tells a story and every sip is an adventure in flavor
        </Subtitle>
        <Link to="/shop">
          <StyledButton primary>Start Your Coffee Journey</StyledButton>
        </Link>
      </HeroSection>
      <FeaturesSection>
        <FeatureCard>
          <span className="steam">☕</span>
          <ImageContainer>
            <img
              src="https://img.freepik.com/free-photo/side-view-fresh-coffee-beans-falling-out-black-basket-red-background_141793-27586.jpg?t=st=1727759694~exp=1727763294~hmac=661c2c2b8c561df98b21f74effb9bb02a0875b0584c062f076bceafa5d6f7eda&w=1380"
              alt="Premium coffee beans"
              loading="lazy"
            />
          </ImageContainer>
          <Link to="/premiumbeans">
            <FeatureTitle>Premium Beans</FeatureTitle>
          </Link>
          <FeatureDescription>
            Savor the rich, bold flavors of our hand-selected, ethically sourced
            beans.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <span className="steam">☕</span>
          <ImageContainer>
            <img
              src="https://images.unsplash.com/photo-1512568400610-62da28bc8a13"
              alt="Expert barista crafting coffee"
              loading="lazy"
            />
          </ImageContainer>
          <Link to="/expertbaristas">
            <FeatureTitle>Expert Baristas</FeatureTitle>
          </Link>
          <FeatureDescription>
            Our skilled baristas craft each cup with precision and passion.
          </FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <span className="steam">☕</span>
          <ImageContainer>
            <img
              src="https://img.freepik.com/free-photo/modern-coffee-shop-with-comfortable-chairs-elegant-decor-relaxing-ambiance-generated-by-artificial-intelligence_188544-150832.jpg?t=st=1727760180~exp=1727763780~hmac=5b12fc3782c57d5c5a04bcd60e2d275f3c18e52b87d6939948612e1cd4a76d68&w=1380"
              alt="Cozy cafe interior"
              loading="lazy"
            />
          </ImageContainer>
          <Link to="/CozyAmbiance">
            <FeatureTitle>Cozy Ambiance</FeatureTitle>
          </Link>
          <FeatureDescription>
            Enjoy your coffee in our warm, inviting atmosphere.
          </FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
      <SpecialtySection>
        <SpecialtyCard>
          <span className="steam">☕</span>
          <SpecialtyIcon>
            <FaCoffee />
          </SpecialtyIcon>
          <Link to="/premiumbeans">
            <SpecialtyTitle>Premium Beans</SpecialtyTitle>
          </Link>
          <SpecialtyDescription>
            Savor the rich, bold flavors of our hand-selected, ethically sourced
            beans.
          </SpecialtyDescription>
        </SpecialtyCard>
        <SpecialtyCard>
          <span className="steam">☕</span>
          <SpecialtyIcon>
            <FaMugHot />
          </SpecialtyIcon>
          <Link to="/shop/coffee">
            <SpecialtyTitle>Special Flat White</SpecialtyTitle>
          </Link>
          <SpecialtyDescription>
            A velvety masterpiece crafted with precision and passion.
          </SpecialtyDescription>
        </SpecialtyCard>
        <SpecialtyCard>
          <span className="steam">☕</span>
          <SpecialtyIcon>
            <FaGlassWhiskey />
          </SpecialtyIcon>
          <Link to="/shop/coffee">
            <SpecialtyTitle>Nitro Cold Brew</SpecialtyTitle>
          </Link>
          <SpecialtyDescription>
            Smooth, creamy, and refreshingly bold—a coffee experience like no
            other.
          </SpecialtyDescription>
        </SpecialtyCard>
      </SpecialtySection>
      <Faq />
    </HomeContainer>
  );
}

export default Home;
