import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: ${props => props.primary ? '#7c2214' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#7c2214'};
  border: 2px solid #7c2214;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.primary ? '#5e1a0f' : 'rgba(124, 34, 20, 0.1)'};
  }
`;

const Button = ({ children, primary, onClick, ...props }) => {
  return (
    <StyledButton
      primary={primary}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;