import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../componets/Button";

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
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
  width: 100%;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  min-height: 150px;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [nameError, setNameError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const nameRegex = /^[a-zA-Z\s]*$/; // Allows Only letters and spaces
      if (!nameRegex.test(value)) {
        setNameError("Name can only contain letters and spaces.");
      } else {
        setNameError("");
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if there's a validation error
    if (nameError) {
      alert("Please fix the errors before submitting.");
      return;
    }

    
    console.log("Form submitted:", formData);

    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </Title>
      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {nameError && <ErrorMessage>{nameError}</ErrorMessage>}
        </div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button primary type="submit">
          Send Message
        </Button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;
