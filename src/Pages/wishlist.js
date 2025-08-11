import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, addToCart } from '../Store/cartSlice';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const WishlistContainer = styled.div`
  padding: 6rem 2rem 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fffbeb;
  padding-top: 1.5rem;
  padding-top: 1.5rem;
  `;

const WishlistHeader = styled(motion.h1)`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 3rem;
  margin-top: 2rem;
  padding: 0 1rem;
  text-align: center;
  color: #78350f;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const EmptyWishlistMessage = styled.div`
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.2rem;
`;

const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, max-content));
  gap: 2rem;
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 50px;
`;

const WishlistItem = styled(motion.div)`
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 420px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -2px -2px 8px rgba(255, 255, 255, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -4px -4px 12px rgba(255, 255, 255, 0.9);
  }
  &:hover .overlay {
    opacity: 1;
  }
`;

const ItemImage = styled(motion.img)`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border: 2px solid rgb(65, 21, 5);
  border-radius: 12px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease,
    filter 0.4s ease;
  &:hover {
    transform: scale(1.05);
    border-color: #6d4c41;
    box-shadow: 0 8px 20px rgba(109, 76, 65, 0.3);
    filter: brightness(1.03) contrast(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
`;

const OverlayText = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
`;

const ItemInfo = styled.div`
  padding: 1.25rem;
  background: url("https://png.pngtree.com/thumb_back/fh260/background/20231205/pngtree-creamy-textured-milk-colored-background-image_13815875.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  min-height: 200px;
`;

const ItemName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  box-sizing: border-box;
  color: #333;
`;

const ItemPrice = styled.p`
  font-size: 1.1rem;
  color: #4a2c2a;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ActionButton = styled(motion.button)`
  flex: 1;
  min-width: 90px;
  background: linear-gradient(145deg, rgb(51, 15, 15), rgb(46, 22, 22));
  color: white;
  border: none;
  padding: 0.8rem 1rem;
  font-size: 0.85rem;
  border-radius: 20px;
  cursor: pointer;
  letter-spacing: 0.6px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;
  font-weight: 600;
  margin: 0 2px;
  &:hover {
    background: linear-gradient(145deg, #7d5858, #8e6a6a);
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  &.remove {
    background: linear-gradient(145deg, #e74c3c, #c0392b);
    &:hover {
      background: linear-gradient(145deg, #c0392b, #a93226);
    }
  }
`;

function Wishlist() {
  const wishlistItems = useSelector((state) => state.cart.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
    toast.success(`${item.name} moved to cart!`, { autoClose: 2000 });
  };

  const handleRemoveFromWishlist = (itemId, itemName) => {
    dispatch(removeFromWishlist(itemId));
    toast.error(`${itemName} removed from wishlist!`, { autoClose: 2000 });
  };

  const handleBuyNow = (item) => {
    dispatch(addToCart(item));
    dispatch(removeFromWishlist(item.id));
    toast.success(`${item.name} added to cart! Redirecting to checkout...`, { autoClose: 2000 });
    setTimeout(() => {
      window.location.href = '/cart';
        }, 1000);
  };

  console.log('Wishlist items:', wishlistItems); // Debug log

  return (
    <WishlistContainer>
      <WishlistHeader
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        💝 Your Wishlist ({wishlistItems.length} items)
      </WishlistHeader>

      {wishlistItems.length === 0 ? (
        <EmptyWishlistMessage>
          <h2>Your wishlist is empty</h2>
          <p>Start adding items to your wishlist while shopping!</p>
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
            Start Shopping
          </motion.button>
        </EmptyWishlistMessage>
      ) : (
        <WishlistGrid>
          <AnimatePresence>
            {wishlistItems.map((item) => (
              <WishlistItem
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ position: "relative" }}>
                  <ItemImage src={item.image} alt={item.name} />

                  <Overlay
                    className="overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 1,
                    }}
                  >
                    <OverlayText>{item.description || 'A delicious item from our menu.'}</OverlayText>
                  </Overlay>
                </div>

                <ItemInfo>
                  <div>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                  </div>
                  <ActionButtons>
                    <ActionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </ActionButton>
                    <ActionButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </ActionButton>
                    <ActionButton
                      className="remove"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleRemoveFromWishlist(item.id, item.name)}
                    >
                      Remove
                    </ActionButton>
                  </ActionButtons>
                </ItemInfo>
              </WishlistItem>
            ))}
          </AnimatePresence>
        </WishlistGrid>
      )}
    </WishlistContainer>
  );
}

export default Wishlist; 
