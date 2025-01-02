import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Store/authSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const LoginBackGround = styled.section`
  background-image: url('https://img.freepik.com/free-photo/hot-latte-art-coffee-cup-wood-table-coffee-shop_1150-8937.jpg?t=st=1727759954~exp=1727763554~hmac=2715c972f28c255c158e0d14f664f9443fdd95a0e4b21cf6d5b41bc690aaa2d3&w=1380');
  background-size: cover;
  background-position: center;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled(motion.form)`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled(motion.button)`
  width: 100%;
  padding: 0.5rem;
  background-color: #7c2214;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const RegisterLink = styled(Link)`
  display: block;
  margin-top: 1rem;
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
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.username === username && parsedUser.email === email && parsedUser.password === password) {
        dispatch(login({ username, email }));
        navigate('/profile'); // Redirect to profile page
      } else {
        setError('Invalid credentials');
      }
    } else {
      setError('No user data found');
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
          <h2>Login</h2>
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
          <RegisterLink to="/register">Don't have an account? Register</RegisterLink>
        </LoginForm>
      </LoginContainer>
    </LoginBackGround>
  );
}

export default Login;
