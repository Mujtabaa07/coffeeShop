import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Store/cartSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CartContainer = styled.div`
  padding: 2rem;
`;

const CartItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 4px;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemPrice = styled.span`
  margin-left: 1rem;
`;

const QuantityInput = styled.input`
  width: 50px;
  text-align: center;
`;

const RemoveButton = styled(motion.button)`
  background-color: #ff4136;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
`;

const TotalPrice = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
  margin-top: 2rem;
`;

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity: parseInt(quantity) }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <ItemInfo>
            <ItemImage src={item.image} alt={item.name} />
            <ItemName>{item.name}</ItemName>
            <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
          </ItemInfo>
          <QuantityInput
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
          />
          <RemoveButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </RemoveButton>
        </CartItem>
      ))}
      <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
    </CartContainer>
  );
}

export default Cart;