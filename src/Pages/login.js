import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Store/authSlice";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
const LoginBackGround = styled.section`
  background-image: url('https://img.freepik.com/free-photo/hot-latte-art-coffee-cup-wood-table-coffee-shop_1150-8937.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
`; 

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.6);
`;

const LoginForm = styled(motion.form)`
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

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size:1rem;
  transition: border-color 0.3s ease,box-shadow 0.3s ease;

  &:focus{
  border-color: #7c2214;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  outline:none;
  }

  &:hover {
    border-color: #aaa;
  }

  &::placeholder{
  color:#999;
  }
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background-color: #7c2214;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.2s ease;
  
  &:hover{
  background-color: #6c1a1a;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
  }

  &:active{
  transform: translateY(0);
  }

`;

const RegisterLink = styled(Link)`
  display: block;
  margin-top: 1rem;
  text-align: center;
  color: #7c2214;
  text-decoration: none;
`;

const ForgetPasswordLink = styled(Link)`
  display: block;
  margin-top: 0.5rem;
  text-align: center;
  color: #7c2214;
  text-decoration: none;
`;

const ErrorMessage = styled.div`
  margin-top: 1rem;
  color: red;
  text-align: center;
`;

function Login() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      dispatch(login({ username, email }));
      navigate("/"); // Redirect to home page
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <LoginBackGround>
      <LoginContainer>
        <LoginForm
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <Heading>Login</Heading>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Login
          </Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <RegisterLink to="/register">
            Don't have an account? <b>Register</b>
          </RegisterLink>
          <ForgetPasswordLink to="/forget-password">
            Forgot Password?
          </ForgetPasswordLink>
        </LoginForm>
      </LoginContainer>
    </LoginBackGround>
  );
}

export default Login;
