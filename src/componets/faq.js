import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

const FAQHeading = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #6b4226;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: #8b5a2b;
  }
`;

const FAQItem = styled(motion.div)`
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: #6b4226;
    }
  }
`;

const Answer = styled(motion.p)`
  font-size: 1rem;
  color: #4a4a4a;
  padding-top: 10px;
  line-height: 1.5;
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
`;

const questionsAndAnswers = [
  {
    question: "What is your coffee made of?",
    answer:
      "We use only the finest organic coffee beans sourced ethically from sustainable farms.",
  },
  {
    question: "Do you offer vegan options?",
    answer:
      "Yes! We have a range of plant-based milks and vegan pastries available.",
  },
  {
    question: "What are your working hours?",
    answer: "We are open from 7 AM to 9 PM every day.",
  },
  {
    question: "Do you have free Wi-Fi?",
    answer: "Yes, we offer free high-speed Wi-Fi to all our customers.",
  },
  {
    question: "Can I place an order online?",
    answer: "Absolutely! You can order through our website or mobile app.",
  },
  {
    question: "Do you have outdoor seating?",
    answer:
      "Yes, we have a cozy outdoor seating area for customers to enjoy their coffee.",
  },
  {
    question: "Are pets allowed?",
    answer:
      "Yes! We are a pet-friendly café, and we even offer special treats for dogs.",
  },
  {
    question: "Do you provide gift cards?",
    answer: "Yes, we have gift cards available in-store and online.",
  },
  {
    question: "Do you host events or workshops?",
    answer: "We regularly host coffee-tasting events and barista workshops.",
  },
  {
    question: "Is there a loyalty program?",
    answer: "Yes, join our rewards program and earn points for every purchase.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <FAQHeading
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Frequently Asked Questions
      </FAQHeading>
      {questionsAndAnswers.map((item, index) => (
        <FAQItem
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => toggleFAQ(index)}
        >
          <h3>
            {item.question}
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </h3>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeIndex === index ? "auto" : 0,
              opacity: activeIndex === index ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <Answer
              initial={{ opacity: 0 }}
              animate={{ opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {item.answer}
            </Answer>
          </motion.div>
        </FAQItem>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
