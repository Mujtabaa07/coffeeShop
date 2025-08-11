import { createSlice } from '@reduxjs/toolkit';
import ProfileService from '../services/profileService';

// Load cart from localStorage if available
const loadCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem('mscafe_cart');
    return cartData ? JSON.parse(cartData) : { items: [] };
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
    return { items: [] };
  }
};

// Load wishlist from localStorage if available
const loadWishlistFromStorage = () => {
  try {
    const wishlistData = localStorage.getItem('mscafe_wishlist');
    return wishlistData ? JSON.parse(wishlistData) : { items: [] };
  } catch (error) {
    console.error('Error loading wishlist from localStorage:', error);
    return { items: [] };
  }
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromStorage().items,
    wishlist: loadWishlistFromStorage().items,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
      // Recalculate totals
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);

      // Save to localStorage
      localStorage.setItem('mscafe_cart', JSON.stringify({ items: state.items }));

      // Trigger profile update for real-time sync
      ProfileService.cartUpdated({
        items: state.items,
        totalAmount: state.totalAmount,
        itemCount: state.itemCount
      });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      
      // Recalculate totals
      state.itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      
      // Trigger profile update
      ProfileService.cartUpdated({
        items: state.items,
        totalAmount: state.totalAmount,
        itemCount: state.itemCount
      });
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const item = state.items.find(item => item.id === productId);
      if (item) {
                if (quantity <= 0) {
          // Remove item if quantity is 0 or less
          state.items = state.items.filter(item => item.id !== productId);
        } else {
          item.quantity = quantity;
        }
        // Save to localStorage
        localStorage.setItem('mscafe_cart', JSON.stringify({ items: state.items }));
      }
    },
    clearCart: (state) => {
      state.items = [];
      // Save to localStorage
      localStorage.setItem('mscafe_cart', JSON.stringify({ items: state.items }));
    },
    // Wishlist functionality
    addToWishlist: (state, action) => {
      const existingItem = state.wishlist.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.wishlist.push({ ...action.payload, quantity: 1 });
        // Save to localStorage
        localStorage.setItem('mscafe_wishlist', JSON.stringify({ items: state.wishlist }));
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
      // Save to localStorage
      localStorage.setItem('mscafe_wishlist', JSON.stringify({ items: state.wishlist }));
    },
    moveToWishlist: (state, action) => {
      const itemToMove = state.items.find(item => item.id === action.payload);
      if (itemToMove) {
        // Add to wishlist
        const existingWishlistItem = state.wishlist.find(item => item.id === action.payload);
        if (!existingWishlistItem) {
          state.wishlist.push({ ...itemToMove, quantity: 1 });
        }
        // Remove from cart
        state.items = state.items.filter(item => item.id !== action.payload);
        // Save both to localStorage
        localStorage.setItem('mscafe_cart', JSON.stringify({ items: state.items }));
        localStorage.setItem('mscafe_wishlist', JSON.stringify({ items: state.wishlist }));
      }
    },
    // Buy Now functionality - adds item to cart and redirects
    buyNow: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Save to localStorage
      localStorage.setItem('mscafe_cart', JSON.stringify({ items: state.items }));
    },
  },
});
      // Save order to localStorage   
 export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  addToWishlist, 
  removeFromWishlist, 
  moveToWishlist,
  buyNow 
} = cartSlice.actions;
export default cartSlice.reducer;