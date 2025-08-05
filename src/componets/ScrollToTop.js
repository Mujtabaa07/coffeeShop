import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: px;
  background-color: #4d2b26ff;
  // background:transparent;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  font-size: 16px;
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
      ↑ scroll up
    </ScrollButton>
  );
};


export default ScrollToTop;
