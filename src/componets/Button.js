import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  padding: 0.3rem 0.7rem;
  margin: 1rem 30px 1rem 0;
  font-size: 1rem;
  background-color: ${(props) => (props.primary ? "#5b342eff" : "#6c3d36ff")};
  color: ${(props) => (props.primary ? "white" : "white")};
  border: 2px solid #5e3731ff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: 30px;
  border-radius: 10px;
  font-weight: bold;
  letter-spacing: 1px;

  margin-right: ${(props) =>
    props.noMargin ? "0" : "10px"}; /* Add margin for spacing */

  &:hover {
    background-color: ${(props) => (props.primary ? "#6c3d36ff" : "white")};
    color: ${(props) => (props.primary ? "white" : "#6c3d36ff")};
    text-shadow: 5px 5px 9px rgba(0, 0, 0, 0.8);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;  /* Default to horizontal layout */
  gap: 10px;            /* Add space between the buttons */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack buttons vertically on small screens */
    gap: 10px;              /* Add space between stacked buttons */
  }
`;

const Button = ({ children, primary, onClick, noMargin, ...props }) => {
  return (
    <ButtonContainer>
    <StyledButton
      primary={primary}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      noMargin={noMargin} /* pass the noMargin prop */

      {...props}
    >
      {children}
    </StyledButton>
    </ButtonContainer>
  );
};

export default Button;