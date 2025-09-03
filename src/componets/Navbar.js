import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/authSlice";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaCoffee, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background: linear-gradient(135deg, rgba(44, 19, 11, 0.98) 0%, rgba(66, 33, 11, 0.98) 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 998;
  border-bottom: 1px solid rgba(210, 105, 30, 0.3);
  transition: all 0.3s ease;

  &.scrolled {
    padding: 1rem 5%;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  }
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;

  .logo-text {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 1.8rem;
    background: linear-gradient(to right, #d2691e, #f4a460);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
  }

  .logo-icon {
    color: #d2691e;
    font-size: 1.8rem;
    transition: transform 0.3s ease;
  }

  &:hover .logo-icon {
    transform: rotate(15deg);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
  padding: 0.5rem 0;

  a, span {
    color: #e6d5b8;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;

    &:hover {
      color: #f4a460;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(to right, #d2691e, #f4a460);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  &.active a, &.active span {
    color: #d2691e;
    font-weight: 600;

    &::after {
      width: 100%;
    }
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(44, 19, 11, 0.98);
  border-radius: 8px;
  padding: 1rem;
  min-width: 200px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(210, 105, 30, 0.3);
  display: none;
  flex-direction: column;
  gap: 0.8rem;
  z-index: 1001;

  a, span {
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(210, 105, 30, 0.2);
      transform: translateX(5px);
    }
  }

  ${NavItem}:hover & {
    display: flex;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const AuthButton = styled(motion.button)`
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &.login {
    background: transparent;
    color: #e6d5b8;
    border: 1px solid #d2691e;

    &:hover {
      background: rgba(210, 105, 30, 0.2);
    }
  }

  &.register {
    background: linear-gradient(to right, #d2691e, #cd853f);
    color: white;
    box-shadow: 0 4px 15px rgba(210, 105, 30, 0.4);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(210, 105, 30, 0.5);
    }
  }

  &.logout {
    background: transparent;
    color: #e6d5b8;
    border: 1px solid #8b0000;

    &:hover {
      background: rgba(139, 0, 0, 0.2);
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: #e6d5b8;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
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
  background: rgba(44, 19, 11, 0.98);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem 2rem;
  overflow-y: auto;
`;

const MobileNavItem = styled(motion.div)`
  padding: 1.2rem 0;
  border-bottom: 1px solid rgba(210, 105, 30, 0.2);

  a {
    color: #e6d5b8;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    transition: all 0.3s ease;

    &:hover {
      color: #f4a460;
    }
  }

  &.active a {
    color: #d2691e;
    font-weight: 600;
  }
`;

const MobileDropdownMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
  margin-top: 0.8rem;
  gap: 0.8rem;

  a {
    font-size: 1rem;
    padding: 0.8rem 0;
    border-bottom: none;
  }
`;

const CartIndicator = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #d2691e;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
`;

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const cartItems = useSelector(state => state.cart.items);
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
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

  const navItems = [
    { title: "Home", path: "/", icon: <FaCoffee /> },
    { 
      title: "Menu", 
      path: null, // Remove path so it doesn't redirect
      dropdown: [
        { title: "Coffee", path: "/shop/coffee" },
        { title: "Cakes", path: "/shop/cake" },
        { title: "Soups", path: "/shop/soup" },
        { title: "Milkshakes", path: "/shop/milkshake" }
      ]
    },
    { title: "Recipes", path: "/recipes" },
    { title: "About", path: "/about" },
    { title: "Stories", path: "/stories" },
    { title: "Contact", path: "/contact" },
    { title: "Feedback", path: "/feedback" },
    { title: "Shop", path: "/shop" },
    

  ];

  return (
    <>
      <NavbarContainer
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={scrolled ? "scrolled" : ""}
      >
        <LogoContainer 
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCoffee className="logo-icon" />
          <span className="logo-text">MsCafe</span>
        </LogoContainer>

        <NavLinks>
          {navItems.map((item) => (
            <NavItem 
              key={item.path || item.title}
              className={location.pathname === item.path ? "active" : ""}
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              {item.path ? (
                <Link to={item.path}>
                  {item.icon && <span>{item.icon}</span>}
                  {item.title}
                </Link>
              ) : (
                <span 
                  style={{ 
                    cursor: item.dropdown ? 'default' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.title}
                </span>
              )}
              
              {item.dropdown && (
                <DropdownMenu
                  initial={{ opacity: 0, y: 10 }}
                  animate={activeDropdown === item.title ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
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
                <Link to="/cart" style={{ position: 'relative' }}>
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </AuthButton>
            </>
          ) : (
            <>
              <AuthButton 
                className="login"
                onClick={() => navigate("/login")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Login
              </AuthButton>
              <AuthButton 
                className="register"
                onClick={() => navigate("/register")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register
              </AuthButton>
            </>
          )}
        </AuthButtons>

        <MobileMenuButton
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
            transition={{ type: "tween", duration: 0.3 }}
          >
            {navItems.map((item) => (
              <React.Fragment key={item.path || item.title}>
                <MobileNavItem
                  className={location.pathname === item.path ? "active" : ""}
                  onClick={() => !item.dropdown && item.path && setIsMobileMenuOpen(false)}
                >
                  {item.path ? (
                    <Link to={item.path}>
                      {item.icon && <span>{item.icon}</span>}
                      {item.title}
                    </Link>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {item.icon && <span>{item.icon}</span>}
                      {item.title}
                    </span>
                  )}
                  
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
                  <Link to="/cart" style={{ position: 'relative' }}>
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
                  <span style={{ color: "#e6d5b8", display: "flex", alignItems: "center", gap: "0.8rem" }}>
                    Logout
                  </span>
                </MobileNavItem>
              </>
            ) : (
              <>
                <MobileNavItem onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/login">
                    Login
                  </Link>
                </MobileNavItem>
                <MobileNavItem onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to="/register">
                    Register
                  </Link>
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
