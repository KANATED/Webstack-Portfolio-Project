const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'admin', 'delivery'], default: 'customer' },
});

module.exports = mongoose.model('User', UserSchema);

// Repeat similar steps for restaurant.js, menu.js, order.js, and delivery.js.

// Step 8: Create routes
// Example: Open routes/auth.js and add the following code:

const express = require('express');
const router = express.Router();

// Example route: User login
router.post('/login', (req, res) => {
    res.json({ message: 'Login endpoint' });
});

module.exports = router;