import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FAQContainer = styled.div`
  padding: 6rem 6%;
  background: linear-gradient(
    135deg,
    #f8efe4,
    #f0e6d9
  ); /* Light cream gradient, matching FeaturesSection */
  position: relative;

  &::before {
    content: "Frequently Asked Questions (FAQs)";
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

    &::before {
      font-size: 2rem;
    }
  }
`;

const FAQContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  align-items: stretch;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const FAQItem = styled(motion.div)`
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
  min-height: 340px; /* Taller cards, matching FeatureCard */

  &:hover {
    transform: translateY(-10px) scale(1.02);
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

const Question = styled(motion.h3)`
  font-size: 1.6rem;
  margin-bottom: 1rem;
  color: #78350f;
  font-family: "Playfair Display", serif;
  font-weight: 550;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Answer = styled(motion.p)`
  font-size: 1.1rem;
  color: #6b4423;
  line-height: 1.6;
  font-family: "Poppins", sans-serif;
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-out;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ArrowIcon = styled.div`
  font-size: 1.5rem;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  margin-left: 1rem;
  display: inline-block;
  vertical-align: middle;
`;

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQContent>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => toggleFAQ(1)}
        >
          <span className="steam">☕</span>
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            How do I place an order?
            <ArrowIcon isOpen={openFAQ === 1}>↓</ArrowIcon>
          </Question>
          <Answer isOpen={openFAQ === 1}>
            To place an order, browse our collection and click the 'Add to Cart'
            button. When you're ready, proceed to checkout.
          </Answer>
        </FAQItem>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => toggleFAQ(2)}
        >
          <span className="steam">☕</span>
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Can I modify my order after placing it?
            <ArrowIcon isOpen={openFAQ === 2}>↓</ArrowIcon>
          </Question>
          <Answer isOpen={openFAQ === 2}>
            Unfortunately, once an order is placed, it cannot be modified.
            However, you can cancel it and place a new one if needed.
          </Answer>
        </FAQItem>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => toggleFAQ(3)}
        >
          <span className="steam">☕</span>
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            What payment methods do you accept?
            <ArrowIcon isOpen={openFAQ === 3}>↓</ArrowIcon>
          </Question>
          <Answer isOpen={openFAQ === 3}>
            We accept various payment methods including credit cards, PayPal,
            and bank transfers.
          </Answer>
        </FAQItem>
        <FAQItem
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={() => toggleFAQ(4)}
        >
          <span className="steam">☕</span>
          <Question
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            How can I track my order?
            <ArrowIcon isOpen={openFAQ === 4}>↓</ArrowIcon>
          </Question>
          <Answer isOpen={openFAQ === 4}>
            After your order is shipped, you will receive a tracking number via
            email to monitor your shipment.
          </Answer>
        </FAQItem>
      </FAQContent>
    </FAQContainer>
  );
}

export default FAQ;
