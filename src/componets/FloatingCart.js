import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart, FaHeart, FaTimes } from 'react-icons/fa';

const FloatingContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FloatingButton = styled(motion.button)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  &.cart {
    background: linear-gradient(145deg, #7c2214, #8e2a1a);
    color: white;
    
    &:hover {
      background: linear-gradient(145deg, #5e1105, #7c2214);
      transform: scale(1.1);
    }
  }
  &.wishlist {
    background: linear-gradient(145deg, #e91e63, #f06292);
    color: white;
    
    &:hover {
      background: linear-gradient(145deg, #c2185b, #e91e63);
      transform: scale(1.1);
    }
  }
`;

const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: #ff5722;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  border: 2px solid white;
`;

const MiniCart = styled(motion.div)`
  position: absolute;
  top: 70px;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;
  overflow: hidden;
`;

const MiniCartHeader = styled.div`
  background: linear-gradient(145deg, #7c2214, #8e2a1a);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MiniCartTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MiniCartContent = styled.div`
  max-height: 300px;
  overflow-y: auto;
  padding: 1rem;
`;

const MiniCartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
`;

const MiniCartItemImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
`;

const MiniCartItemInfo = styled.div`
  flex: 1;
`;

const MiniCartItemName = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 0.2rem;
`;

const MiniCartItemPrice = styled.div`
  font-size: 0.8rem;
  color: #7c2214;
  font-weight: 600;
`;

const MiniCartItemQuantity = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const MiniCartFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #e0e0e0;
  background: #f9f9f9;
`;

const MiniCartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #333;
`;

const ViewCartButton = styled(motion.button)`
  width: 100%;
  background: linear-gradient(145deg, #7c2214, #8e2a1a);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: linear-gradient(145deg, #5e1105, #7c2214);
    transform: translateY(-2px);
  }
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 0.9rem;
`;

const FloatingCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.cart.wishlist);
  const navigate = useNavigate();
  const [showMiniCart, setShowMiniCart] = useState(false);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlistItems.length;

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      navigate('/cart');
    } else {
      setShowMiniCart(!showMiniCart);
    }
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleViewCart = () => {
    setShowMiniCart(false);
    navigate('/cart');
  };

  return (
    <FloatingContainer>
      <FloatingButton
        className="cart"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCartClick}
      >
        <FaShoppingCart />
        {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>}
      </FloatingButton>

      <FloatingButton
        className="wishlist"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWishlistClick}
      >
        <FaHeart />
        {wishlistCount > 0 && <Badge>{wishlistCount}</Badge>}
      </FloatingButton>

      <AnimatePresence>
        {showMiniCart && (
          <MiniCart
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <MiniCartHeader>
              <MiniCartTitle>🛒 Mini Cart</MiniCartTitle>
              <CloseButton onClick={() => setShowMiniCart(false)}>
                <FaTimes />
              </CloseButton>
            </MiniCartHeader>

            <MiniCartContent>
              {cartItems.length === 0 ? (
                <EmptyCartMessage>
                  <p>Your cart is empty</p>
                  <p>Add some items to get started!</p>
                </EmptyCartMessage>
              ) : (
                cartItems.slice(0, 3).map((item) => (
                  <MiniCartItem key={item.id}>
                    <MiniCartItemImage src={item.image} alt={item.name} />
                    <MiniCartItemInfo>
                      <MiniCartItemName>{item.name}</MiniCartItemName>
                      <MiniCartItemPrice>${item.price.toFixed(2)}</MiniCartItemPrice>
                      <MiniCartItemQuantity>Qty: {item.quantity}</MiniCartItemQuantity>
                    </MiniCartItemInfo>
                  </MiniCartItem>
                ))
              )}
              {cartItems.length > 3 && (
                <div style={{ textAlign: 'center', padding: '0.5rem', color: '#666', fontSize: '0.8rem' }}>
                  +{cartItems.length - 3} more items
                </div>
              )}
            </MiniCartContent>

            {cartItems.length > 0 && (
              <MiniCartFooter>
                <MiniCartTotal>
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </MiniCartTotal>
                <ViewCartButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleViewCart}
                >
                  View Full Cart
                </ViewCartButton>
              </MiniCartFooter>
            )}
          </MiniCart>
        )}
      </AnimatePresence>
    </FloatingContainer>
  );
};

export default FloatingCart; 
