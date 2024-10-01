import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../componets/Button';

gsap.registerPlugin(ScrollTrigger);

const HomeContainer = styled.div`
  padding: 0;
  max-width: 100%;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-image: url('/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
`;

const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 4rem 2rem;
  background-color: #f8f8f8;
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const SpecialtySection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: #fff;
`;

const SpecialtyImage = styled(motion.img)`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  margin: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
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
          transition={{ duration: 0.5 }}
        >
          Welcome to Zumar Cafe
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the finest coffee in town
        </Subtitle>
        <Link to="/shop">
          <Button primary>Order Now</Button>
        </Link>
      </HeroSection>
      <FeaturesSection ref={featuresRef}>
        <FeatureCard>
          <FeatureIcon src="/images/coffee-bean.svg" alt="Quality Beans" />
          <FeatureTitle>Premium Beans</FeatureTitle>
          <FeatureDescription>We source the finest coffee beans from around the world.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="/images/barista.svg" alt="Expert Baristas" />
          <FeatureTitle>Expert Baristas</FeatureTitle>
          <FeatureDescription>Our skilled baristas craft each cup to perfection.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="/images/ambiance.svg" alt="Cozy Ambiance" />
          <FeatureTitle>Cozy Ambiance</FeatureTitle>
          <FeatureDescription>Enjoy your coffee in our warm and inviting atmosphere.</FeatureDescription>
        </FeatureCard>
      </FeaturesSection>
      <SpecialtySection ref={specialtyRef}>
        <SpecialtyImage src="/images/specialty-1.jpg" alt="Specialty Coffee 1" />
        <SpecialtyImage src="/images/specialty-2.jpg" alt="Specialty Coffee 2" />
        <SpecialtyImage src="/images/specialty-3.jpg" alt="Specialty Coffee 3" />
      </SpecialtySection>
    </HomeContainer>
  );
}

export default Home;