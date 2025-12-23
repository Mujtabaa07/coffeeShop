const express = require('express');
const Order = require('../models/order');
const Product = require('../models/product');
const User = require('../models/user');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { items, deliveryMethod, paymentMethod, customerNotes, loyaltyPointsUsed = 0 } = req.body;

    // Validate and calculate order totals
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product || !product.available) {
        return res.status(400).json({ 
          success: false, 
          message: `Product ₹{item.product} is not available` 
        });
      }

      let itemPrice = product.price;
      
      // Apply customizations
      if (item.customizations) {
        for (const customization of item.customizations) {
          itemPrice += customization.priceModifier || 0;
        }
      }

      const itemSubtotal = itemPrice * item.quantity;
      subtotal += itemSubtotal;

      orderItems.push({
        product: item.product,
        quantity: item.quantity,
        customizations: item.customizations || [],
        price: itemPrice,
        subtotal: itemSubtotal
      });
    }

    // Calculate tax (8% for example)
    const tax = subtotal * 0.08;
    
    // Apply loyalty points discount
    const loyaltyDiscount = Math.min(loyaltyPointsUsed * 0.01, subtotal * 0.5); // Max 50% discount
    
    const total = subtotal + tax - loyaltyDiscount;

    // Calculate estimated time
    const avgPrepTime = orderItems.reduce((acc, item) => {
      return acc + (item.product.preparationTime || 5);
    }, 0) / orderItems.length;

    const estimatedTime = new Date(Date.now() + avgPrepTime * 60000);

    // Calculate loyalty points earned (1 point per dollar)
    const loyaltyPointsEarned = Math.floor(total);

    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      subtotal,
      tax,
      discount: loyaltyPointsUsed > 0 ? {
        amount: loyaltyDiscount,
        reason: 'Loyalty Points'
      } : { amount: 0 },
      total,
      deliveryMethod,
      paymentMethod,
      customerNotes,
      estimatedTime,
      loyaltyPointsEarned,
      loyaltyPointsUsed
    });

    // Update user loyalty points
    await User.findByIdAndUpdate(req.user.id, {
      $inc: { 
        loyaltyPoints: loyaltyPointsEarned - loyaltyPointsUsed
      }
    });

    const populatedOrder = await Order.findById(order._id)
      .populate('items.product', 'name image price category');

    res.status(201).json({ success: true, data: populatedOrder });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(400).json({ success: false, message: 'Order creation failed' });
  }
});

// @route   GET /api/orders
// @desc    Get user's orders
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    
    const filter = { user: req.user.id };
    if (status) filter.status = status;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const orders = await Order.find(filter)
      .populate('items.product', 'name image price category')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Order.countDocuments(filter);

    res.json({
      success: true,
      data: orders,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalItems: total
      }
    });
  } catch (error) {
    console.error('Orders fetch error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   GET /api/orders/:id
// @desc    Get single order
// @access  Private
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findOne({ 
      _id: req.params.id, 
      user: req.user.id 
    }).populate('items.product', 'name image price category');

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, data: order });
  } catch (error) {
    console.error('Order fetch error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   PUT /api/orders/:id/status
// @desc    Update order status (Admin only)
// @access  Private/Admin
router.put('/:id/status', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { 
        status,
        ...(status === 'completed' && { actualCompletionTime: new Date() })
      },
      { new: true }
    ).populate('items.product', 'name image price category');

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.json({ success: true, data: order });
  } catch (error) {
    console.error('Order status update error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// @route   POST /api/orders/:id/cancel
// @desc    Cancel order
// @access  Private
router.post('/:id/cancel', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findOne({ 
      _id: req.params.id, 
      user: req.user.id 
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (!['pending', 'confirmed'].includes(order.status)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Order cannot be cancelled at this stage' 
      });
    }

    order.status = 'cancelled';
    await order.save();

    // Refund loyalty points if used
    if (order.loyaltyPointsUsed > 0) {
      await User.findByIdAndUpdate(req.user.id, {
        $inc: { loyaltyPoints: order.loyaltyPointsUsed }
      });
    }

    res.json({ success: true, data: order });
  } catch (error) {
    console.error('Order cancellation error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
