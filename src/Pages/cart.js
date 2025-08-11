import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../Store/cartSlice";
import styled from "styled-components";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ItemImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius: 8px;
`;

const ItemName = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
`;

const ItemPrice = styled.span`
  margin-left: 1rem;
  font-size: 1rem;
  color: #888;
`;

const QuantityInput = styled.input`
  width: 60px;
  height: 30px;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 1rem;
  font-size: 1rem;
  padding: 5px;
  &:focus {
    outline: none;
    border-color: #ff5722;
  }
`;

const RemoveButton = styled(motion.button)`
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;

const SummaryTable = styled.table`
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;
`;

const SummaryRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const SummaryCell = styled.td`
  padding: 0.8rem;
  text-align: right;
  font-size: 1.1rem;
  color: #333;
`;

const ProceedButton = styled(motion.button)`
  background: #7c2214;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  font-size: 1.2rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #5e1105;
  }
`;

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    toast.error("Item removed from cart!");
  };

  const handleUpdateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      toast.warn("Quantity must be greater than 0");
      return;
    }
    dispatch(updateQuantity({ productId, quantity: parseInt(quantity) }));
    toast.info("Cart updated!");
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const SGST = totalPrice * 0.09;
  const CGST = totalPrice * 0.09;
  const finalPrice = totalPrice + SGST + CGST;

  const handleProceedToPayment = () => {
    alert("Payment is processing...");
    dispatch(clearCart());
    toast.success("Thank you for your purchase!");
  };

  return (
    <CartContainer>
      <h1>Your Cart</h1>
      <RemoveButton
  whileHover={{ scale: cartItems.length > 0 ? 1.05 : 1 }}
  whileTap={{ scale: cartItems.length > 0 ? 0.95 : 1 }}
  onClick={() => {
    if (cartItems.length === 0) return;
    const confirmClear = window.confirm(
      "Are you sure you want to remove all items from the cart?"
    );
    if (confirmClear) {
      dispatch(clearCart());
      toast.info("All items removed from cart!");
    }
  }}
  disabled={cartItems.length === 0}
  style={{
    marginBottom: "1rem",
    backgroundColor: cartItems.length === 0 ? "#ccc" : "#7c2214",
    color: cartItems.length === 0 ? "#666" : "#fff",
    cursor: cartItems.length === 0 ? "not-allowed" : "pointer",
  }}
>
  Clear Cart
</RemoveButton>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add some items!</p>
      ) : (
        cartItems.map((item) => (
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
        ))
      )}

      <SummaryTable>
        <tbody>
          <SummaryRow>
            <SummaryCell>Total:</SummaryCell>
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
            <SummaryCell>Final Price:</SummaryCell>
            <SummaryCell>${finalPrice.toFixed(2)}</SummaryCell>
          </SummaryRow>
        </tbody>
      </SummaryTable>
      <ProceedButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleProceedToPayment}
      >
        Proceed to Payment
      </ProceedButton>
    </CartContainer>
  );
}

export default Cart;
