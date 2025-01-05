import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PremiumContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
  box-shadow: 1px 1px 5px 6px #888888;

  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem 1rem;
  }
`;

const FeatureTitle = styled(motion.h1)`
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #78350f;
  font-family: 'Playfair Display', serif;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-around;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Adjust font size for smaller screens */
    text-align: center; /* Center the title on smaller screens */
  }
`;

const ImageContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Image = styled(motion.img)`
  width: 500px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

const FeatureDescription = styled(motion.p)`
  font-size: 1.5rem;
  color: #6b4423;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  display: flex;
  margin: 0;
  margin-left: 60px;
  margin-right: 50px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    text-align: justify; /* Ensure text is justified on small screens */
  }
`;

const Button = styled.button`
  type: "button";
  class: "btn btn-warning mx-20";
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #b5651d;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 1.2rem;
  }
`;

function PremiumBeans() {
  return (
    <>
      <PremiumContainer>
        <FeatureTitle
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Premium Beans
        </FeatureTitle>
        <ImageContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
    <Image src="https://img.freepik.com/free-photo/side-view-fresh-coffee-beans-falling-out-black-basket-red-background_141793-27586.jpg?t=st=1727759694~exp=1727763294~hmac=661c2c2b8c561df98b21f74effb9bb02a0875b0584c062f076bceafa5d6f7eda&w=1380" alt="Quality Beans" />
    </ImageContent >
    <FeatureDescription
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Premium coffee beans are often considered the finest quality beans available, predominantly made from 100% Arabica beans. These beans are prized for their exceptional flavor, rich aroma, and smoother, less bitter taste compared to Robusta beans. Sourced from the highest-grade coffee plants, premium beans undergo meticulous cultivation and harvesting processes. Specialty roasting techniques, typically in small batches, ensure that the beans' unique flavors are expertly developed. Many premium coffee brands are committed to ethical sourcing, collaborating closely with farmers to promote sustainable and fair trade practices. The variety of flavors and roasts available, including single-origin beans, dark roasts, light roasts, and flavored beans, caters to diverse palates. Popular premium coffee brands such as Atlas Coffee Club, Starbucks Espresso, Kicking Horse, and Stumptown Coffee Roasters offer distinctive blends and roasts to satisfy different tastes.
        </FeatureDescription>
        <Button>Read More</Button>
      </PremiumContainer>
    </>
  );
}

export default PremiumBeans;
