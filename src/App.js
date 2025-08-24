import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ScrollToTop from './componets/ScrollToTop';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './Store/index';
import { getCurrentUser } from './Store/authSlice';
import styled from 'styled-components';

import Navbar from './componets/Navbar';
import Footer from './componets/footer';

import Home from './Pages/Home';
import Login from './Pages/login';
import Register from './Pages/Register';
import Menu from './Pages/Menu';
import Shop from './Pages/Shop';
import Cart from './Pages/cart';
import About from './Pages/About';
import Blog from './Pages/blog';
import Blog1 from './Pages/blog1';
import Blog2 from './Pages/blog2';
import Blog3 from './Pages/blog3';
import Faq from './Pages/Faq';
import Contact from './Pages/contact';
import Profile from './Pages/profile';
import Checkout from './Pages/checkOut';
import Testimonial from './Pages/Testimonial';
import Cake from './Pages/cake';
import Coffee from './Pages/coffee';
import Soup from './Pages/soup';
import Milkshakes from './Pages/milkshake';
import PremiumBeans from './Pages/PremiumBeans';
import ForgetPassword from './Pages/ForgetPassword';
import ExpertBaristas from './Pages/ExpertBaristas';
import CozyAmbiance from './Pages/CozyAmbiance';
import Feedback from './Pages/Feedback';
import Favorites from './Pages/favorites';
import Wishlist from './Pages/wishlist';
import Reviews from './componets/Reviews';
import AnimatedCursor from 'react-animated-cursor';

import Chatbot from "./componets/Chatbot";

// Styled Containers
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #7c2214;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

// ✅ Enhanced Protected Profile Route with Google Auth
const SafeProfileRoute = () => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
  
  // Check both new auth system and legacy localStorage
  const legacyUserData = localStorage.getItem('user');
  const legacyUser = legacyUserData ? JSON.parse(legacyUserData) : null;
  
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  // Allow access if authenticated through Google Auth OR legacy system
  return (isAuthenticated && user) || legacyUser ? <Profile /> : <Navigate to="/login" replace />;
};

// ✅ Protected Route Component for other protected pages
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);
  const legacyUserData = localStorage.getItem('user');
  const legacyUser = legacyUserData ? JSON.parse(legacyUserData) : null;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  return (isAuthenticated && user) || legacyUser ? children : <Navigate to="/login" replace />;
};

// ✅ Main App Content Component
const AppContent = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth); 

  useEffect(() => {
    if (token && !user) {
      dispatch(getCurrentUser());
    }
  }, [token, user, dispatch]);

  return (
    <AppContainer>
      <Navbar />

      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color="210, 105, 30"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4}
      />

      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ContentContainer>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/shop/cake" element={<Cake />} />
          <Route path="/shop/coffee" element={<Coffee />} />
          <Route path="/shop/soup" element={<Soup />} />
          <Route path="/shop/milkshake" element={<Milkshakes />} />
          <Route path="/premiumbeans" element={<PremiumBeans />} />
          <Route path="/expertbaristas" element={<ExpertBaristas />} />
          <Route path="/cozyambiance" element={<CozyAmbiance />} />

          {/* Protected Routes */}
          <Route path="/profile" element={<SafeProfileRoute />} />
          <Route 
            path="/cart" 
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/checkout" 
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/favorites" 
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/feedback" 
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </ContentContainer>

      <Reviews />

      {/* Add Chatbot so it floats on every page */}
      <Chatbot />

   <ToastContainer position="top-right" autoClose={2000} />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog1" element={<Blog1 />} />
              <Route path="/blog2" element={<Blog2 />} />
              <Route path="/blog3" element={<Blog3 />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<SafeProfileRoute />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/menu/cakes" element={<Cake />} />
              <Route path="/menu/coffee" element={<Coffee />} />
              <Route path="/menu/soups" element={<Soup />} />
              <Route path="/menu/milkshakes" element={<Milkshakes />} />
              <Route path="/premiumbeans" element={<PremiumBeans />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/expertbaristas" element={<ExpertBaristas />} />
              <Route path="/cozyambiance" element={<CozyAmbiance />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </ContentContainer>

          <Reviews />

          {/* Add Chatbot so it floats on every page */}
          <Chatbot />

          <Footer />
        </AppContainer>
      </Router>
    </Provider>

      <Footer />
    </AppContainer>
  );
};

// ✅ Main App Component with Google OAuth Provider
function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </Provider>
    </GoogleOAuthProvider>

  );
}

export default App;