// authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunks for Google Authentication
export const googleLogin = createAsyncThunk(
  'auth/googleLogin',
  async (credential, { rejectWithValue }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001/api'}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential })
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Google login failed');
      }
      
      // Store token in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001/api'}/auth/user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to get user');
      }

      return data;
    } catch (error) {
      // Clear invalid token
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('token');
      
      if (token) {
        await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001/api'}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }
      
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      return null;
    } catch (error) {
      // Still clear localStorage even if API call fails
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return rejectWithValue(error.message);
    }
  }
);

// Check if user is already logged in from localStorage
const checkInitialAuth = () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  
  if (token && user) {
    try {
      const parsedUser = JSON.parse(user);
      return {
        isLoggedIn: true,
        user: parsedUser,
        token: token,
        isAuthenticated: true
      };
    } catch (error) {
      // Clear invalid data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
  
  return {
    isLoggedIn: false,
    user: null,
    token: null,
    isAuthenticated: false
  };
};

const initialState = {
  ...checkInitialAuth(), // Initialize from localStorage
  loading: false,
  error: null,
  // Google Auth specific fields
  googleUser: null,
  // Coffee shop specific user data
  loyaltyPoints: 0,
  favoriteOrders: [],
  orderHistory: [],
  preferences: {
    newsletter: false,
    notifications: true,
    favoriteStore: null
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Keep your existing actions for backward compatibility
    login: (state) => {
      state.isLoggedIn = true;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isAuthenticated = false;
      state.user = null;
      state.googleUser = null;
      state.token = null;
      state.error = null;
      state.loyaltyPoints = 0;
      state.favoriteOrders = [];
      state.orderHistory = [];
      // Clear localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
    
    // New actions for enhanced functionality
    clearError: (state) => {
      state.error = null;
    },
    
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isAuthenticated = true;
    },
    
    updateUserPreferences: (state, action) => {
      if (state.user) {
        state.user.preferences = { ...state.user.preferences, ...action.payload };
        state.preferences = { ...state.preferences, ...action.payload };
        // Update localStorage
        localStorage.setItem('user', JSON.stringify(state.user));
      }
    },
    
    addFavoriteOrder: (state, action) => {
      if (state.user) {
        state.favoriteOrders.push(action.payload);
        if (state.user.favoriteOrders) {
          state.user.favoriteOrders.push(action.payload);
          localStorage.setItem('user', JSON.stringify(state.user));
        }
      }
    },
    
    removeFavoriteOrder: (state, action) => {
      if (state.user) {
        state.favoriteOrders = state.favoriteOrders.filter(order => order.id !== action.payload);
        if (state.user.favoriteOrders) {
          state.user.favoriteOrders = state.user.favoriteOrders.filter(order => order.id !== action.payload);
          localStorage.setItem('user', JSON.stringify(state.user));
        }
      }
    },
    
    addLoyaltyPoints: (state, action) => {
      if (state.user) {
        state.loyaltyPoints += action.payload;
        if (state.user.loyaltyPoints !== undefined) {
          state.user.loyaltyPoints += action.payload;
          localStorage.setItem('user', JSON.stringify(state.user));
        }
      }
    },
    
    // Legacy compatibility - set credentials manually
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.isAuthenticated = true;
      state.googleUser = user.provider === 'google' ? user : null;
      state.loyaltyPoints = user.loyaltyPoints || 0;
      state.favoriteOrders = user.favoriteOrders || [];
      state.orderHistory = user.orderHistory || [];
      state.preferences = user.preferences || state.preferences;
    }
  },
  
  extraReducers: (builder) => {
    builder
      // Google Login
      .addCase(googleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.googleUser = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isAuthenticated = true;
        state.loyaltyPoints = action.payload.user.loyaltyPoints || 0;
        state.favoriteOrders = action.payload.user.favoriteOrders || [];
        state.orderHistory = action.payload.user.orderHistory || [];
        state.preferences = action.payload.user.preferences || state.preferences;
        state.error = null;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isAuthenticated = false;
      })
      
      // Get Current User
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isAuthenticated = true;
        state.loyaltyPoints = action.payload.user.loyaltyPoints || 0;
        state.favoriteOrders = action.payload.user.favoriteOrders || [];
        state.orderHistory = action.payload.user.orderHistory || [];
        state.preferences = action.payload.user.preferences || state.preferences;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isLoggedIn = false;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      })
      
      // Logout User
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.googleUser = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isAuthenticated = false;
        state.loyaltyPoints = 0;
        state.favoriteOrders = [];
        state.orderHistory = [];
        state.preferences = {
          newsletter: false,
          notifications: true,
          favoriteStore: null
        };
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        // Still logout even if API call fails
        state.user = null;
        state.googleUser = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isAuthenticated = false;
        state.loyaltyPoints = 0;
        state.favoriteOrders = [];
        state.orderHistory = [];
        state.error = action.payload;
      });
  }
});

// Export actions
export const { 
  login, 
  logout, 
  clearError, 
  setUser, 
  updateUserPreferences, 
  addFavoriteOrder, 
  removeFavoriteOrder, 
  addLoyaltyPoints,
  setCredentials 
} = authSlice.actions;

// Selectors for easy state access
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectLoading = (state) => state.auth.loading;
export const selectError = (state) => state.auth.error;
export const selectLoyaltyPoints = (state) => state.auth.loyaltyPoints;
export const selectFavoriteOrders = (state) => state.auth.favoriteOrders;

export default authSlice.reducer;