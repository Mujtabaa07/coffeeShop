const express = require('express');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

console.log('🛣️ Setting up auth routes...');

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'fallback-secret', {
    expiresIn: '7d'
  });
};

// Google Authentication Route
router.post('/google', async (req, res) => {
  try {
    console.log('🔐 Google login attempt received');
    
    const { credential } = req.body;
    
    if (!credential) {
      console.error('❌ No credential provided');
      return res.status(400).json({ 
        success: false, 
        message: 'No credential provided' 
      });
    }

    console.log('🔍 Verifying Google token...');
    
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID
    });
    
    const payload = ticket.getPayload();
    console.log('✅ Token verified for user:', payload.email);
    
    let user = await User.findOne({ googleId: payload.sub });
    
    if (!user) {
      console.log('➕ Creating new user:', payload.email);
      user = await User.create({
        googleId: payload.sub,
        name: payload.name,
        email: payload.email,
        avatar: payload.picture,
        provider: 'google',
        loyaltyPoints: 100 // Welcome bonus
      });
    } else {
      console.log('👋 Welcome back:', user.email);
    }
    
    const token = generateToken(user._id);
    
    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        loyaltyPoints: user.loyaltyPoints,
        preferences: user.preferences
      }
    });
    
    console.log('🎉 Login successful for:', user.email);
    
  } catch (error) {
    console.error('❌ Google auth error:', error.message);
    
    res.status(400).json({ 
      success: false, 
      message: 'Authentication failed',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Please try again'
    });
  }
});

// Health check
router.get('/health', (req, res) => {
  res.json({ 
    message: 'Auth routes working',
    googleAuth: process.env.GOOGLE_CLIENT_ID ? 'Configured' : 'Missing',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;