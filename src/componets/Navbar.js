import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Store/authSlice';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.div)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #7c2214;
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const MobileNavLink = styled(motion.div)`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  &:last-child {
    border-bottom: none;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Logo
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/">MsCafe</Link>
        </Logo>
        <NavLinks>
          <NavLink whileHover={{ scale: 1.1 }}>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }}>
            <Link to="/shop">Shop</Link>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }}>
            <Link to="/about">About</Link>
          </NavLink>
          <NavLink whileHover={{ scale: 1.1 }}>
            <Link to="/contact">Contact</Link>
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink whileHover={{ scale: 1.1 }}>
                <Link to="/profile">Profile</Link>
              </NavLink>
              <NavLink whileHover={{ scale: 1.1 }}>
                <Link to="/cart">Cart</Link>
              </NavLink>
              <NavLink whileHover={{ scale: 1.1 }} onClick={handleLogout}>
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink whileHover={{ scale: 1.1 }}>
              <Link to="/login">Login</Link>
            </NavLink>
          )}
        </NavLinks>
        <MobileMenuButton
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ☰
        </MobileMenuButton>
      </NavbarContainer>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink whileHover={{ scale: 1.05 }}>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.05 }}>
              <Link to="/shop" onClick={toggleMenu}>Shop</Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.05 }}>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.05 }}>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </MobileNavLink>
            {isLoggedIn ? (
              <>
                <MobileNavLink whileHover={{ scale: 1.05 }}>
                  <Link to="/profile" onClick={toggleMenu}>Profile</Link>
                </MobileNavLink>
                <MobileNavLink whileHover={{ scale: 1.05 }}>
                  <Link to="/cart" onClick={toggleMenu}>Cart</Link>
                </MobileNavLink>
                <MobileNavLink whileHover={{ scale: 1.05 }} onClick={() => { handleLogout(); toggleMenu(); }}>
                  Logout
                </MobileNavLink>
              </>
            ) : (
              <MobileNavLink whileHover={{ scale: 1.05 }}>
                <Link to="/login" onClick={toggleMenu}>Login</Link>
              </MobileNavLink>
            )}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;