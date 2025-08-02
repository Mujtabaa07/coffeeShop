import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart, moveToWishlist } from '../Store/cartSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const CartContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
  min-height: 100vh;
`;

const CartHeader = styled.h1`
  text-align: center;
  color: #7c2214;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: bold;
`;

const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.2rem;
`;

const CartItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 1.5rem;
  border-radius: 8px;
  border: 2px solid #f0f0f0;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const ItemPrice = styled.span`
  font-size: 1.1rem;
  color: #7c2214;
  font-weight: 600;
`;

const ItemTotal = styled.span`
  font-size: 1.1rem;
  color: #2e7d32;
  font-weight: bold;
  margin-left: 1rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 2rem;
`;

const QuantityButton = styled.button`
  background: #7c2214;
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
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

const QuantityInput = styled.input`
  width: 60px;
  height: 35px;
  text-align: center;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  padding: 5px;
  font-weight: bold;
  
  &:focus {
    outline: none;
    border-color: #7c2214;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &.remove {
    background-color: #e74c3c;
    color: white;
    &:hover {
      background-color: #c0392b;
    }
  }

  &.wishlist {
    background-color: #f39c12;
    color: white;
    &:hover {
      background-color: #e67e22;
    }
  }
`;

const SummaryContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
`;

const SummaryRow = styled.tr`
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const SummaryCell = styled.td`
  padding: 1rem 0;
  text-align: right;
  font-size: 1.1rem;
  color: #333;

  &:first-child {
    text-align: left;
    font-weight: 500;
  }
`;

const ProceedButton = styled(motion.button)`
  background: linear-gradient(145deg, #7c2214, #8e2a1a);
  color: white;
  border: none;
  padding: 1.2rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 34, 20, 0.3);

  &:hover {
    background: linear-gradient(145deg, #5e1105, #7c2214);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 34, 20, 0.4);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ClearCartButton = styled(motion.button)`
  background: #95a5a6;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7f8c8d;
  }
`;

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    toast.error('Item removed from cart!', { autoClose: 2000 });
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity < 0) {
      toast.warn('Quantity cannot be negative', { autoClose: 2000 });
      return;
    }
    dispatch(updateQuantity({ productId, quantity: parseInt(quantity) }));
    toast.info('Cart updated!', { autoClose: 2000 });
  };

  const handleMoveToWishlist = (productId) => {
    dispatch(moveToWishlist(productId));
    toast.success('Item moved to wishlist!', { autoClose: 2000 });
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
      toast.info('Cart cleared!', { autoClose: 2000 });
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const SGST = totalPrice * 0.09;
  const CGST = totalPrice * 0.09;
  const finalPrice = totalPrice + SGST + CGST;

  const handleProceedToPayment = () => {
    if (cartItems.length === 0) {
      toast.warn('Your cart is empty!', { autoClose: 2000 });
      return;
    }
    
    // Navigate to checkout page
    navigate('/checkout');
    toast.success('Proceeding to checkout!', { autoClose: 2000 });
  };

  return (
    <CartContainer>
      <CartHeader>🛒 Your Shopping Cart</CartHeader>
      
      {cartItems.length === 0 ? (
        <EmptyCartMessage>
          <h2>Your cart is empty</h2>
          <p>Add some delicious items to get started!</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/shop')}
            style={{
              background: '#7c2214',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              borderRadius: '8px',
              fontSize: '1.1rem',
              cursor: 'pointer',
              marginTop: '1rem'
            }}
          >
            Continue Shopping
          </motion.button>
        </EmptyCartMessage>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
            >
              <ItemInfo>
                <ItemImage src={item.image} alt={item.name} />
                <ItemDetails>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price.toFixed(2)} each</ItemPrice>
                  <ItemTotal>Total: ${(item.price * item.quantity).toFixed(2)}</ItemTotal>
                </ItemDetails>
              </ItemInfo>
              
              <QuantityContainer>
                <QuantityButton
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </QuantityButton>
                <QuantityInput
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                />
                <QuantityButton
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </QuantityButton>
              </QuantityContainer>

              <ActionButtons>
                <ActionButton
                  className="wishlist"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleMoveToWishlist(item.id)}
                >
                  ♡ Wishlist
                </ActionButton>
                <ActionButton
                  className="remove"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </ActionButton>
              </ActionButtons>
            </CartItem>
          ))}

          <SummaryContainer>
            <h2 style={{ color: '#7c2214', marginBottom: '1rem' }}>Order Summary</h2>
            <SummaryTable>
              <tbody>
                <SummaryRow>
                  <SummaryCell>Subtotal ({cartItems.length} items):</SummaryCell>
                  <SummaryCell>${totalPrice.toFixed(2)}</SummaryCell>
                </SummaryRow>
                <SummaryRow>
                  <SummaryCell>SGST (9%):</SummaryCell>
                  <SummaryCell>${SGST.toFixed(2)}</SummaryCell>
                </SummaryRow>
                <SummaryRow>
                  <SummaryCell>CGST (9%):</SummaryCell>
                  <SummaryCell>${CGST.toFixed(2)}</SummaryCell>
                </SummaryRow>
                <SummaryRow>
                  <SummaryCell>Total Amount:</SummaryCell>
                  <SummaryCell style={{ color: '#2e7d32' }}>${finalPrice.toFixed(2)}</SummaryCell>
                </SummaryRow>
              </tbody>
            </SummaryTable>
            
            <ProceedButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleProceedToPayment}
            >
              🛒 Proceed to Checkout
            </ProceedButton>
            
            <ClearCartButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClearCart}
            >
              Clear Cart
            </ClearCartButton>
          </SummaryContainer>
        </>
      )}
    </CartContainer>
  );
}

export default Cart;