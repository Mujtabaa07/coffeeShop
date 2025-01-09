import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/authSlice";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "./Navitems";
import { ProDropdown, OsDropdown, UsLoginDropdown, UsLogoutDropdown } from "./Dropdown";

const NavbarContainer = styled(motion.nav)`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(44, 19, 11, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(30, 12, 5, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 2px solid #8b4513;

  &.scrolled {
    padding: 0.8rem 2rem;
    background: rgba(44, 19, 11, 0.98);
  }

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/coffee-beans-pattern.png") repeat;
    opacity: 0.05;
    pointer-events: none;
  }
`;

const Logo = styled(motion.div)`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    color: #d2691e;
    text-decoration: none;
    background: linear-gradient(to right, #d2691e, #cd853f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:hover {
      opacity: 0.9;
    }
  }

  img {
    margin-right: 5px; /* Adds space between the image and the text */
    width: 30px; /* Adjust size of the image */
    height: 30px; /* Adjust size of the image */
  }
`;

const RightNav = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0px;
  left: 35vw; //Now the Shop section is completely visible at the top-right section of Navbar.
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;

  &.scrolled {
    padding: 0.8rem 2rem;
    background: rgba(44, 19, 11, 0.98);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 100px;
    right: 0;
    bottom: 0;
    background: url("/coffee-beans-pattern.png") repeat;
    opacity: 0.05;
    pointer-events: none;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  margin: 10px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.div)`
  position: relative;

  a {
    color: #deb887;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    font-family: "Poppins", sans-serif;
    padding: 25px;

    &:hover {
      color: #ffe4b5;
    }
  }

  &.active a {
    text-decoration: underline;
    color: #d2691e;
  }

  &::after {
    content: "☕";
    position: absolute;
    font-size: 0.8rem;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.3s ease;
    color: #d2691e;
  }

  &:hover::after {
    transform: translateX(-50%) scale(1);
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: 2px solid #d2691e;
  font-size: 1.5rem;
  cursor: pointer;
  color: #deb887;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: rgba(210, 105, 30, 0.2);
    color: #ffe4b5;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background: rgba(44, 19, 11, 0.98);
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 15px 15px;
  border: 2px solid #8b4513;
  border-top: none;
`;

const MobileNavLink = styled(motion.div)`
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;

  a {
    color: #deb887;
    text-decoration: none;
    font-weight: 500;
    display: block;
    transition: all 0.3s ease;
    font-family: "Poppins", sans-serif;
  }

  &:hover {
    background: rgba(210, 105, 30, 0.2);

    a {
      color: #ffe4b5;
      transform: translateX(10px);
    }
  }
`;

const DropdownMenu = styled(motion.div)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(44, 19, 11, 0.95);
  border: 2px solid #8b4513;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  display: none;
  flex-direction: column;
  padding: 0.5rem 0;
  z-index: 1001;

  a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #deb887;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    transition: background 0.3s ease;

    &:hover {
      background: rgba(210, 105, 30, 0.2);
      color: #ffe4b5;
    }
  }
`;

const ShopLink = styled(NavLink)`
  position: relative;

  &:hover ${DropdownMenu} {
    display: flex;
  }

  &::after {
    content: '▼';
    font-size: 0.7rem;
    margin-left: 0.3rem;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: rotate(180deg);
  }
`;

function Navbar() {
  const [prodropdown, setproDropdown] = useState(false);
  const [osdropdown, setosDropdown] = useState(false);
  const [uslogindropdown, setusloginDropdown] = useState(false);
  const [uslogoutdropdown, setuslogoutDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className={scrolled ? "scrolled" : ""}
      >
        <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src="3817208_coffee_cup_drink_icon.png" alt="Logo" />
          <Link to="/">MsCafe</Link>
        </Logo>

        <ul>
          <RightNav>
            {navItems.map((items) => {
              if (items.title === "Product") {
                return (
                  <NavLinks>
                    <li
                      key={items.id}
                      className={location.pathname === items.path ? "active" : ""}
                      onMouseEnter={() => setproDropdown(true)}
                      onMouseLeave={() => setproDropdown(false)}
                    >
                      <NavLink whileHover={{ scale: 1.05 }}>
                        <Link>{items.title}</Link>
                        {prodropdown && <ProDropdown />}
                      </NavLink>
                    </li>
                  </NavLinks>
                );
              }

              if (items.title === "Stories") {
                return (
                  <NavLinks>
                    <li
                      key={items.id}
                      className={location.pathname === items.path ? "active" : ""}
                      onMouseEnter={() => setosDropdown(true)}
                      onMouseLeave={() => setosDropdown(false)}
                    >
                      <NavLink whileHover={{ scale: 1.05 }}>
                        <Link>{items.title}</Link>
                        {osdropdown && <OsDropdown />}
                      </NavLink>
                    </li>
                  </NavLinks>
                );
              }

              if (items.title === "User") {
                return (
                  <NavLinks>
                    {isLoggedIn ? (
                      <>
                        <li
                          key={items.id}
                          className={location.pathname === items.path ? "active" : ""}
                          onMouseEnter={() => setusloginDropdown(true)}
                          onMouseLeave={() => setusloginDropdown(false)}
                        >
                          <NavLink whileHover={{ scale: 1.05 }}>
                            <Link>{items.title}</Link>
                            {uslogindropdown && <UsLoginDropdown />}
                          </NavLink>
                        </li>
                        <li>
                          <NavLink whileHover={{ scale: 1.05 }}>
                            <Link>{items.title}</Link>
                            {uslogoutdropdown && <UsLogoutDropdown />}
                          </NavLink>
                        </li>
                      </>
                    ) : (
                      <li
                        key={items.id}
                        className={location.pathname === items.path ? "active" : ""}
                        onMouseEnter={() => setuslogoutDropdown(true)}
                        onMouseLeave={() => setuslogoutDropdown(false)}
                      >
                        <NavLink whileHover={{ scale: 1.05 }}>
                          <Link>{items.title}</Link>
                          {uslogoutdropdown && <UsLogoutDropdown />}
                        </NavLink>
                      </li>
                    )}
                  </NavLinks>
                );
              }

              return (
                <NavLinks>
                  <li key={items.id} className={location.pathname === items.path ? "active" : ""}>
                    <NavLink whileHover={{ scale: 1.05 }}>
                      <Link to={items.path}>{items.title}</Link>
                    </NavLink>
                  </li>
                </NavLinks>
              );
            })}
            <NavLinks>
              <NavLink className={location.pathname === "/" ? "active" : ""} whileHover={{ scale: 1.05 }}>
                <Link to="/">Home</Link>
              </NavLink>

              <ShopLink className={location.pathname === "/shop" ? "active" : ""}>
                <Link to="/shop">Shop</Link>
                <DropdownMenu>
                  <Link to="/shop/cake">Cakes</Link>
                  <Link to="/shop/coffee">Coffee</Link>
                  <Link to="/shop/soup">Soups</Link>
                  <Link to="/shop/milkshake">Milkshakes</Link>
                </DropdownMenu>
              </ShopLink>

             {/* removed unnecessary links that were already hidden and obsolete.  */}

              {isLoggedIn ? (
                <>
                  <NavLink className={location.pathname === "/profile" ? "active" : ""} whileHover={{ scale: 1.05 }}>
                    <Link to="/profile">Profile</Link>
                  </NavLink>
                  <NavLink className={location.pathname === "/cart" ? "active" : ""} whileHover={{ scale: 1.05 }}>
                    <Link to="/cart">Cart</Link>
                  </NavLink>
                  <NavLink
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false); // Ensure mobile menu closes after logout
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <span style={{ color: "#deb887" }}>Logout</span>
                  </NavLink>
                </>
              ) : null}
            </NavLinks>

            <MobileMenuButton onClick={toggleMenu} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              {isOpen ? "×" : "☰"}
            </MobileMenuButton>
          </RightNav>
        </ul>
      </NavbarContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <MobileNavLink whileHover={{ scale: 1.02 }}>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.02 }}>
              <Link to="/shop" onClick={toggleMenu}>
                Shop
              </Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.02 }}>
              <Link to="/about" onClick={toggleMenu}>
                About
              </Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.02 }}>
              <Link to="/testimonial" onClick={toggleMenu}>
                Testimonial
              </Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.02 }}>
              <Link to="/premiumbeans" onClick={toggleMenu}>
                Premium Beans
              </Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.02 }}>
              <Link to="/expertbaristas" onClick={toggleMenu}>
                Expert Baristas
              </Link>
            </MobileNavLink>
            <MobileNavLink whileHover={{ scale: 1.02 }}>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </MobileNavLink>
            {isLoggedIn ? (
              <>
                <MobileNavLink whileHover={{ scale: 1.02 }}>
                  <Link to="/profile" onClick={toggleMenu}>
                    Profile
                  </Link>
                </MobileNavLink>
                <MobileNavLink whileHover={{ scale: 1.02 }}>
                  <Link to="/cart" onClick={toggleMenu}>
                    Cart
                  </Link>
                </MobileNavLink>
                <MobileNavLink
                  whileHover={{ scale: 1.02 }}
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </MobileNavLink>
              </>
            ) : (
              <>
                <MobileNavLink whileHover={{ scale: 1.02 }}>
                  <Link to="/login" onClick={toggleMenu}>
                    Login
                  </Link>
                </MobileNavLink>
                <MobileNavLink whileHover={{ scale: 1.02 }}>
                  <Link to="/register" onClick={toggleMenu}>
                    Register
                  </Link>
                </MobileNavLink>
              </>
            )}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
