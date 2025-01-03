import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../componets/Button';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const HomeContainer = styled.div`
  padding: 0;
  max-width: 100%;
  background-color: #FDF5E6;
  color: #2C130B;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    rgba(44, 19, 11, 0.7),
    rgba(44, 19, 11, 0.7)
  ), url('https://cdn.pixabay.com/photo/2024/03/22/18/30/ai-generated-8650286_1280.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #FFE4B5;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, #FDF5E6, transparent);
  }
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  font-family: 'Playfair Display', serif;
  color: #FFE4B5;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
  font-family: 'Poppins', sans-serif;
  color: #DEB887;
  max-width: 600px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 0 20px;
  }
`;

const StyledButton = styled(Button)`
  background: #D2691E;
  color: #FFE4B5;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  border-radius: 30px;
  border: 2px solid #8B4513;
  transition: all 0.3s ease;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    background: #8B4513;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
  }
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  padding: 6rem 4rem;
  background: linear-gradient(135deg, #FDF5E6, #FFE4B5);
  position: relative;
  overflow: visible;

  &::before {
    content: '☕';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
    color: #8B4513;
  }
  
  @media (max-width: 768px) {
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(139, 69, 19, 0.1);
  border: 1px solid rgba(210, 105, 30, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(139, 69, 19, 0.2);
  }
`;

const FeatureIcon = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #8B4513;
  font-family: 'Playfair Display', serif;
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  color: #6B4423;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
`;

const SpecialtySection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  background: #2C130B;
  position: relative;
  
  &::before {
    content: 'Our Specialties';
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.5rem;
    color: #FFE4B5;
    font-family: 'Playfair Display', serif;
  }
`;

const SpecialtyImage = styled(motion.img)`
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 20px;
  margin: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid #8B4513;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05) rotate(3deg);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: #FFE4B5;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) translateX(-50%);
    }
    40% {
      transform: translateY(-20px) translateX(-50%);
    }
    60% {
      transform: translateY(-10px) translateX(-50%);
    }
  }
`;

function Home() {
  const featuresRef = useRef(null);
  const specialtyRef = useRef(null);

  useEffect(() => {
    const features = featuresRef.current.children;
    const specialties = specialtyRef.current.children;

    gsap.fromTo(
      features,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: featuresRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      specialties,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: specialtyRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

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
        <ScrollIndicator>↓</ScrollIndicator>
      </HeroSection>
      <FeaturesSection ref={featuresRef} className="hover:cursor-pointer">
        <FeatureCard >
          <FeatureIcon src="https://img.freepik.com/free-photo/side-view-fresh-coffee-beans-falling-out-black-basket-red-background_141793-27586.jpg?t=st=1727759694~exp=1727763294~hmac=661c2c2b8c561df98b21f74effb9bb02a0875b0584c062f076bceafa5d6f7eda&w=1380" alt="Quality Beans" />
          
           <Link to="/premiumbeans"><FeatureTitle>Premium Beans</FeatureTitle></Link>
          <FeatureDescription>We source the finest coffee beans from around the world.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="https://img.freepik.com/free-vector/people-making-different-coffee-methods_23-2148659306.jpg?t=st=1727760094~exp=1727763694~hmac=1308757b9658b2965de4fa54acb3d847813ef088426f2fb78a05d8cb0be1b993&w=826" alt="Expert Baristas" />
          <Link to="/expertbaristas"><FeatureTitle>Expert Baristas</FeatureTitle></Link>
          <FeatureDescription>Our skilled baristas craft each cup to perfection.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="https://img.freepik.com/free-photo/modern-coffee-shop-with-comfortable-chairs-elegant-decor-relaxing-ambiance-generated-by-artificial-intelligence_188544-150832.jpg?t=st=1727760180~exp=1727763780~hmac=5b12fc3782c57d5c5a04bcd60e2d275f3c18e52b87d6939948612e1cd4a76d68&w=1380" alt="Cozy Ambiance" />
          <FeatureTitle>Cozy Ambiance</FeatureTitle>
          <FeatureDescription>Enjoy your coffee in our warm and inviting atmosphere.</FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
      <SpecialtySection ref={specialtyRef}>
        <SpecialtyImage src="https://img.freepik.com/free-photo/brown-coffee-beans-seed_74190-6651.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid " alt="Specialty Coffee 1" />
        <SpecialtyImage src="https://img.freepik.com/free-photo/coffee-machine-making-perfect-cup-coffee_23-2151699675.jpg?ga=GA1.1.1542821208.1727756299&semt=ais_hybrid" alt="Specialty Coffee 2" />
        <SpecialtyImage src="https://img.freepik.com/free-photo/coffee-cup-with-beans_23-2148453628.jpg?t=st=1727760337~exp=1727763937~hmac=c326eb236a78a478ea9d9703e1bdbb8b390dcc71cefb24d78ca7a85bcb1c1cc5&w=740" alt="Specialty Coffee 3" />
      </SpecialtySection>
    </HomeContainer>
  );
}

export default Home;