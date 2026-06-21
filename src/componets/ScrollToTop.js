import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 20px;
  background-color: #7c2214;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-size:20px;
  font-weight:bold;
  box-shadow:0 2px 10px rgba(0,0,0,0.2);
  transition:background-color 0.3s ease, transform 0.3s ease;
  &:hover{
  background-color:#a8322b;
  transform:translateY(-2px);}

  cursor: pointer;
  display: ${({ visible }) => (visible ? "block" : "none")};
  z-index: 1000;
`;

const ScrollToTop = () => {
const { pathname } = useLocation();
  // Scroll to top instantly on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // or 'auto'
    });
  }, [pathname]);

  // Button visibility state
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrolled > 100);
    };

    const onScroll = () => {
      requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll when clicking the button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton onClick={scrollToTop} visible={visible} aria-label="Scroll to top">
      ↑ 
    </ScrollButton>
  );
};


export default ScrollToTop;
