import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../Store/authSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
const LoginBackGround= styled.section`
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

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate the credentials here
    dispatch(login({ email }));
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
      </LoginForm>
    </LoginContainer>
    </LoginBackGround>
  );
}

export default Login;