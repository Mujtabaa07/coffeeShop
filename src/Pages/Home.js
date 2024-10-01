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
  width:100vw;
  background-image: url('https://cdn.pixabay.com/photo/2024/03/22/18/30/ai-generated-8650286_1280.png');
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
  width: 350px;
  height:350px;
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
          Welcome to MsCafe
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
          <FeatureIcon src="https://img.freepik.com/free-photo/side-view-fresh-coffee-beans-falling-out-black-basket-red-background_141793-27586.jpg?t=st=1727759694~exp=1727763294~hmac=661c2c2b8c561df98b21f74effb9bb02a0875b0584c062f076bceafa5d6f7eda&w=1380" alt="Quality Beans" />
          <FeatureTitle>Premium Beans</FeatureTitle>
          <FeatureDescription>We source the finest coffee beans from around the world.</FeatureDescription>
        </FeatureCard>
        <FeatureCard>
          <FeatureIcon src="https://img.freepik.com/free-vector/people-making-different-coffee-methods_23-2148659306.jpg?t=st=1727760094~exp=1727763694~hmac=1308757b9658b2965de4fa54acb3d847813ef088426f2fb78a05d8cb0be1b993&w=826" alt="Expert Baristas" />
          <FeatureTitle>Expert Baristas</FeatureTitle>
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