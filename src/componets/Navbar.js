import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/authSlice";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCoffee,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6%;
  background: rgba(40, 26, 13, 0.9); /* Dark wood brown */
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(139, 69, 19, 0.2); /* Saddle brown border */
  transition: all 0.4s ease-in-out;

  &.scrolled {
    padding: 0.8rem 6%;
    background: rgba(40, 26, 13, 0.95);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  cursor: pointer;

  .logo-text {
    font-family: "Playfair Display", serif;
    font-weight: 800;
    font-size: 1.9rem;
    background: linear-gradient(
      45deg,
      #8b4513,
      #deb887
    ); /* Saddle brown to burlywood */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.5px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .logo-icon {
    color: #8b4513; /* Saddle brown */
    font-size: 2rem;
    transition: transform 0.4s ease;
  }

  &:hover .logo-icon {
    transform: rotate(20deg) scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
  padding: 0.6rem 0;

  a {
    color: #f5f5f5;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;

    &:hover {
      color: #deb887; /* Burlywood */
      background: rgba(255, 255, 255, 0.05);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: linear-gradient(
        90deg,
        #8b4513,
        #deb887
      ); /* Saddle brown to burlywood */
      transition: all 0.3s ease;
    }

    &:hover::after {
      width: 60%;
    }
  }

  &.active a {
    color: #deb887; /* Burlywood */
    font-weight: 600;
    background: rgba(255, 255, 255, 0.05);

    &::after {
      width: 60%;
    }
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(40, 26, 13, 0.95); /* Dark wood brown */
  border-radius: 12px;
  padding: 1.2rem;
  min-width: 220px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(139, 69, 19, 0.2); /* Saddle brown border */
  display: none;
  flex-direction: column;
  gap: 0.6rem;
  z-index: 1001;
  backdrop-filter: blur(8px);

  a {
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    color: #f5f5f5;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(139, 69, 19, 0.1); /* Saddle brown hover */
      color: #deb887; /* Burlywood */
      transform: translateX(4px);
    }
  }

  ${NavItem}:hover & {
    display: flex;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const AuthButton = styled(motion.button)`
  padding: 0.7rem 1.8rem;
  border-radius: 50px;
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.login {
    background: transparent;
    color: #f5f5f5;
    border: 1px solid rgba(139, 69, 19, 0.5); /* Saddle brown border */

    &:hover {
      background: rgba(139, 69, 19, 0.1); /* Saddle brown hover */
      border-color: #8b4513; /* Saddle brown */
      color: #deb887; /* Burlywood */
    }
  }

  &.register {
    background: linear-gradient(
      45deg,
      #8b4513,
      #deb887
    ); /* Saddle brown to burlywood */
    color: #1a1a1a;
    box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3); /* Saddle brown shadow */

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(139, 69, 19, 0.4);
      filter: brightness(1.1);
    }
  }

  &.logout {
    background: transparent;
    color: #f5f5f5;
    border: 1px solid rgba(165, 42, 42, 0.5); /* Darker brown for logout */

    &:hover {
      background: rgba(165, 42, 42, 0.1);
      border-color: #a52a2a;
      color: #a52a2a;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: #f5f5f5;
  font-size: 1.7rem;
  cursor: pointer;
  padding: 0.6rem;
  z-index: 1001;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(40, 26, 13, 0.95); /* Dark wood brown */
  backdrop-filter: blur(12px);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 5rem 2.5rem 2rem;
  overflow-y: auto;
`;

const MobileNavItem = styled(motion.div)`
  padding: 1rem 0;
  border-bottom: 1px solid rgba(139, 69, 19, 0.1); /* Saddle brown border */

  a {
    color: #f5f5f5;
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: all 0.3s ease;
    padding: 0.8rem 1rem;
    border-radius: 8px;

    &:hover {
      color: #deb887; /* Burlywood */
      background: rgba(139, 69, 19, 0.05); /* Saddle brown hover */
    }
  }

  &.active a {
    color: #deb887; /* Burlywood */
    font-weight: 600;
    background: rgba(139, 69, 19, 0.05); /* Saddle brown active */
  }
`;

const MobileDropdownMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 2rem;
  margin-top: 0.6rem;
  gap: 0.6rem;

  a {
    font-size: 1rem;
    padding: 0.7rem 1rem;
    border-bottom: none;
    border-radius: 8px;
  }
`;

const CartIndicator = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  background: #8b4513; /* Saddle brown */
  color: #f5f5f5;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.items);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { title: "Home", path: "/", icon: <FaCoffee /> },
    {
      title: "Menu",
      path: "/menu",
      dropdown: [
        { title: "Coffee", path: "/menu/coffee" },
        { title: "Cakes", path: "/menu/cakes" },
        { title: "Soups", path: "/menu/soups" },
        { title: "Milkshakes", path: "/menu/milkshakes" },
      ],
    },
    { title: "About", path: "/about" },
    { title: "Stories", path: "/stories" },
    { title: "Contact", path: "/contact" },
    { title: "Feedback", path: "/feedback" },
  ];

  return (
    <>
      <NavbarContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={scrolled ? "scrolled" : ""}
      >
        <LogoContainer
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaCoffee className="logo-icon" />
          <span className="logo-text">MsCafe</span>
        </LogoContainer>

        <NavLinks>
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onMouseEnter={() =>
                item.dropdown && setActiveDropdown(item.title)
              }
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <Link to={item.path}>
                {item.icon && <span>{item.icon}</span>}
                {item.title}
              </Link>

              {item.dropdown && (
                <DropdownMenu
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    activeDropdown === item.title
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.path}
                      to={subItem.path}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </DropdownMenu>
              )}
            </NavItem>
          ))}
        </NavLinks>

        <AuthButtons>
          {isLoggedIn ? (
            <>
              <NavItem>
                <Link to="/cart" style={{ position: "relative" }}>
                  <FaShoppingCart />
                  {cartItems.length > 0 && (
                    <CartIndicator>{cartItems.length}</CartIndicator>
                  )}
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/profile">
                  <FaUser /> Profile
                </Link>
              </NavItem>
              <AuthButton
                className="logout"
                onClick={handleLogout}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Logout
              </AuthButton>
            </>
          ) : (
            <>
              <AuthButton
                className="login"
                onClick={() => navigate("/login")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Login
              </AuthButton>
              <AuthButton
                className="register"
                onClick={() => navigate("/register")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Register
              </AuthButton>
            </>
          )}
        </AuthButtons>

        <MobileMenuButton
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavbarContainer>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
          >
            {navItems.map((item) => (
              <React.Fragment key={item.path}>
                <MobileNavItem
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                >
                  <Link to={item.path}>
                    {item.icon && <span>{item.icon}</span>}
                    {item.title}
                  </Link>

                  {item.dropdown && (
                    <MobileDropdownMenu>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </MobileDropdownMenu>
                  )}
                </MobileNavItem>
              </React.Fragment>
            ))}

            {isLoggedIn ? (
              <>
                <MobileNavItem onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/cart" style={{ position: "relative" }}>
                    <FaShoppingCart /> Cart
                    {cartItems.length > 0 && (
                      <CartIndicator>{cartItems.length}</CartIndicator>
                    )}
                  </Link>
                </MobileNavItem>
                <MobileNavItem onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/profile">
                    <FaUser /> Profile
                  </Link>
                </MobileNavItem>
                <MobileNavItem onClick={handleLogout}>
                  <span
                    style={{
                      color: "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.7rem",
                    }}
                  >
                    Logout
                  </span>
                </MobileNavItem>
              </>
            ) : (
              <>
                <MobileNavItem onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/login">Login</Link>
                </MobileNavItem>
                <MobileNavItem onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/register">Register</Link>
                </MobileNavItem>
              </>
            )}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
