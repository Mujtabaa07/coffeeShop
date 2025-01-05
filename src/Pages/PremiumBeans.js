import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
const PremiumContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
      box-shadow: 1px 1px 5px 6px #888888;

`;

const FeatureTitle =  styled(motion.h1)`
 font-size: 4rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: ##78350f;
    font-family: 'Playfair Display', serif;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: space-around;
    font-weight:bold;
    
`;
const ImageContent = styled(motion.div)`
 display: flex
;
    justify-content: flex-start;
    align-items: center;
    padding: 0rem;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
}
`;

const Image = styled(motion.img)`
 width: 500px;
    height: 500px
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    margin-left: 20rem;
   
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const FeatureDescription = styled(motion.p)`
  font-size: 1.5rem;
    color: #6B4423;
    line-height: 1.6;
    font-family: 'Poppins', sans-serif;
    display: flex;
    margin: 0px;
    margin-left: 60px;
    margin-right: 50px;
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
        Premium beans
      </FeatureTitle>
      <ImageContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
    <Image src="https://img.freepik.com/premium-photo/roasted-coffee-bean-leaf-background-coffee-house-barista-dominance-brown-tones-high-resolution-illustrations-art-ai_727385-1025.jpg?w=360" />
    </ImageContent >
    <FeatureDescription
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
       
        Premium coffee beans are often considered the finest quality beans available, predominantly made from 100% Arabica beans. These beans are prized for their exceptional flavor, rich aroma, and smoother, less bitter taste compared to Robusta beans. Sourced from the highest-grade coffee plants, premium beans undergo meticulous cultivation and harvesting processes. Specialty roasting techniques, typically in small batches, ensure that the beans' unique flavors are expertly developed. Many premium coffee brands are committed to ethical sourcing, collaborating closely with farmers to promote sustainable and fair trade practices. The variety of flavors and roasts available, including single-origin beans, dark roasts, light roasts, and flavored beans, caters to diverse palates. Popular premium coffee brands such as Atlas Coffee Club, Starbucks Espresso, Kicking Horse, and Stumptown Coffee Roasters offer distinctive blends and roasts to satisfy different tastes.
        
       
       
    </FeatureDescription>
    <button type="button" class="btn btn-warning mx-20">Read More</button>
    </PremiumContainer>

    </>
     ) 
}

export default PremiumBeans

