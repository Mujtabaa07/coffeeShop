import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";

const RegisterBackGround = styled.section`
  background-image: url("https://img.freepik.com/free-photo/hot-latte-art-coffee-cup-wood-table-coffee-shop_1150-8937.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.6);
`;

const RegisterForm = styled(motion.form)`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-width: 90%;
  text-align: center;
  opacity: 1;
  transition: opacity 0.6s ease-in-out;
`;

const Heading = styled.h2`
  margin-bottom: 1.5rem;
  color: #7c2214;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #7c2214;
    outline: none;
    box-shadow: 0 0 5px rgba(124, 34, 20, 0.5);
  }
  &:hover {
    border-color: #aaa;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.8rem;
  background-color: #7c2214;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5b190f;
  }
`;

const LoginLink = styled(Link)`
  display: block;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #7c2214;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
    color: #5b190f;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 1.5rem;
  color: green;
  text-align: center;
  font-weight: bold;
`;

const ErrorMessage = styled.div`
  margin-top: 1.5rem;
  color: red;
  text-align: center;
  font-weight: bold;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.password.length < 9){
      setError("Password must have a minimum of 8 characters");
      return;
    }
    else if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData));
    dispatch(login({ username: formData.username, email: formData.email }));
    setIsSubmitted(true);
    setError("");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <RegisterBackGround>
      <RegisterContainer>
        <RegisterForm
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <Heading>Register</Heading>
          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.03 }}
          />
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {isSubmitted && (
            <SuccessMessage>Registration successful!</SuccessMessage>
          )}
          <LoginLink to="/login">Already have an account? Login</LoginLink>
        </RegisterForm>
      </RegisterContainer>
    </RegisterBackGround>
  );
};

export default Register;
