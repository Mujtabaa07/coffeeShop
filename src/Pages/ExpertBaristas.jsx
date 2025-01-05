import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
const ExpertContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
      box-shadow: 1px 1px 5px 6px #888888;

`;

const FeatureTitle =  styled(motion.h1)`
 font-size: 4rem;
    margin-top: -4rem;
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

function ExpertBaristas() {
  return (
    
           <>
           <div>
    <ExpertContainer>
     <FeatureTitle
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
       Expert Baristas
      </FeatureTitle>
      <ImageContent
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
    <Image src="https://img.freepik.com/free-vector/people-making-different-coffee-methods_23-2148659306.jpg?t=st=1727760094~exp=1727763694~hmac=1308757b9658b2965de4fa54acb3d847813ef088426f2fb78a05d8cb0be1b993&w=826"  alt="Expert Baristas" />
    </ImageContent >
    <FeatureDescription
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
       
       Expert baristas excel in making coffee due to their comprehensive knowledge of coffee, practical brewing skills, and passion for the craft.practical brewing skills, and passion for the craft. They ensure optimal flavor extraction by meticulously controlling variables like grind size, water temperature, and brewing time. Their expertise allows them to create a perfect cup of coffee tailored to individual preferences, showcasing their attention to detail and dedication.Their skillset is honed through extensive training and practice. Expert baristas demonstrate exceptional precision in every step of the coffee-making process.A true expert barista has a passion for coffee that drives them to constantly improve and innovate. They experiment with new coffee blends, brewing methods, and flavor combinations to create unique and memorable coffee experiences.


        
       
       
    </FeatureDescription>
    <button type="button" class="btn btn-warning mx-20">Read More</button>
    </ExpertContainer>
    </div>
    </>
      
    
  )
}

export default ExpertBaristas
