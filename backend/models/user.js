const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: {
    type: String
  },
  provider: {
    type: String,
    default: 'google'
  },
  loyaltyPoints: {
    type: Number,
    default: 100
  },
  favoriteOrders: [{
    name: String,
    price: Number,
    customizations: [String],
    orderDate: { type: Date, default: Date.now }
  }],
  preferences: {
    newsletter: { type: Boolean, default: false },
    notifications: { type: Boolean, default: true },
    favoriteStore: String
  },
  orderHistory: [{
    orderId: String,
    items: [Object],
    total: Number,
    orderDate: { type: Date, default: Date.now },
    status: { type: String, default: 'completed' }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);