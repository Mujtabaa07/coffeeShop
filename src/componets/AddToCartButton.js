import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../Store/cartSlice';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const AddToCartButton = styled(motion.button)`
  background: linear-gradient(145deg, rgb(51, 15, 15), rgb(46, 22, 22));
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;
  font-weight: 600;
  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border-radius: 20px;
  padding: 0.3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 2px solid #7c2214;
`;

const QuantityButton = styled.button`
  background: #7c2214;
  color: white;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5e1105;
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const QuantityDisplay = styled.span`
  font-weight: bold;
  color: #7c2214;
  min-width: 30px;
  text-align: center;
  font-size: 1rem;
`;

const BuyNowButton = styled(motion.button)`
  background: linear-gradient(145deg, rgb(51, 15, 15), rgb(46, 22, 22));
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;
  font-weight: 600;
  margin-left: 0.5rem;
  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
`;

const EnhancedAddToCartButton = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [isInCart, setIsInCart] = useState(false);

  // Check if product is already in cart
  React.useEffect(() => {
    const cartItem = cartItems.find(item => item.id === product.id);
    setIsInCart(!!cartItem);
  }, [cartItems, product.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`, { autoClose: 2000 });
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity <= 0) {
      // Remove from cart if quantity is 0
      dispatch(updateQuantity({ productId: product.id, quantity: 0 }));
      toast.info(`${product.name} removed from cart!`, { autoClose: 2000 });
    } else {
      dispatch(updateQuantity({ productId: product.id, quantity: newQuantity }));
      toast.info(`Quantity updated to ${newQuantity}!`, { autoClose: 2000 });
    }
  };

  const handleBuyNow = () => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart! Redirecting to checkout...`, { autoClose: 2000 });
    // Navigate to cart page after a short delay
    setTimeout(() => {
 window.location.href = '/cart';
    }, 1000);
  };

  const currentQuantity = cartItems.find(item => item.id === product.id)?.quantity || 0;

  if (!isInCart) {
    return (
      <ButtonContainer>
        <AddToCartButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </AddToCartButton>
        <BuyNowButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBuyNow}
        >
          Buy Now
        </BuyNowButton>
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer>
      <QuantitySelector>
        <QuantityButton
          onClick={() => handleQuantityChange(currentQuantity - 1)}
        >
          -
        </QuantityButton>
        <QuantityDisplay>{currentQuantity}</QuantityDisplay>
        <QuantityButton
          onClick={() => handleQuantityChange(currentQuantity + 1)}
        >
          +
        </QuantityButton>
      </QuantitySelector>
      <BuyNowButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBuyNow}
      >
        Buy Now
      </BuyNowButton>
    </ButtonContainer>
  );
};

export default EnhancedAddToCartButton; 