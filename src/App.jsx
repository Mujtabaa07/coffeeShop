
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './componets/ScrollToTop.jsx';
import { Provider } from 'react-redux';
import { store } from './Store/index';
import styled from 'styled-components';
import Navbar from './componets/Navbar.jsx';
import Footer from './componets/footer.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/login.jsx';
import Register from './Pages/Register.jsx';
import Shop from './Pages/Shop.jsx';
import Cart from './Pages/cart.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/contact.jsx';
import Profile from './Pages/profile.jsx';
import Checkout from './Pages/checkOut.jsx';
import Testimonial from './Pages/Testimonial.jsx';

import Cake from './Pages/cake.jsx';
import Coffee from './Pages/coffee.jsx';
import Soup from './Pages/soup.jsx';
import Milkshakes from './Pages/milkshake.jsx';
import PremiumBeans from './Pages/PremiumBeans.jsx';
import ForgetPassword from "./Pages/ForgetPassword.jsx";

import ExpertBaristas from "./Pages/ExpertBaristas.jsx";
import Reviews from "./componets/Reviews.jsx";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #7c2214;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <AppContainer>
          <Navbar />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/checkout" element={<Checkout />} />

              <Route path="/shop/cake" element={<Cake />} />
              <Route path="/shop/coffee" element={<Coffee />} />
              <Route path="/shop/soup" element={<Soup />} />
              <Route path="/shop/milkshake" element={<Milkshakes />} />

              <Route path="/premiumbeans" element={<PremiumBeans />} />
              <Route path="/expertbaristas" element={<ExpertBaristas />} />
            </Routes>
          </ContentContainer>
          <Reviews />
          <Footer />
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
