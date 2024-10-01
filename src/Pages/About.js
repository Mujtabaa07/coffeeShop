import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../componets/Button';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContent = styled(motion.div)`
  flex: 1;
`;

const ImageContent = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled(motion.img)`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

function About() {
  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Zumar Cafe
      </Title>
      <Content>
        <TextContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Zumar Cafe was founded in 2010 with a simple mission: to serve the best coffee in town. Our passion for quality beans and expert brewing techniques has made us a favorite among coffee enthusiasts.
          </p>
          <p>
            We source our beans from sustainable farms around the world, ensuring that every cup of coffee you enjoy is not only delicious but also ethically produced.
          </p>
          <Button primary>Learn More</Button>
        </TextContent>
        <ImageContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image src="/images/about-cafe.jpg" alt="Zumar Cafe Interior" />
        </ImageContent>
      </Content>
    </AboutContainer>
  );
}

export default About;