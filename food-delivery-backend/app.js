require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Import routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/restaurants', require('./routes/restaurants'));
app.use('/api/menus', require('./routes/menus'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/deliveries', require('./routes/deliveries'));
app.use('/api/users', require('./routes/users'));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Food Delivery API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});