import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../componets/Button';

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 1.5rem; /* Adjusted padding for top */
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05); /* Slightly scales up the input */
  }
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Slightly scales up the textarea */
  }
`;


function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <Title
        className = "mt-7"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontWeight: 'bold' }}
      >
        Contact Us
      </Title>
      <Title
        className = "mt-1"
        initial={{ opacity: 0, y: -20}}
        animate={{ opacity: 1, y: 2 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: "24px" }} 
      >
        We would love to hear from you!
      </Title>
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div style={{ display: 'flex',justifyContent:'space-between',gap:'10px' }}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          pattern="[a-zA-Z\s]+" title="Name must only contain letters"
          style={{ width: '50%' }}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '50%' }}
        />
        </div>
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button primary type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;