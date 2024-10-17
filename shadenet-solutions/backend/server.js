const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
const productRoutes = require('./routes/productRoutes');
const quotationRoutes = require('./routes/quotationRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/products', productRoutes);
app.use('/api/quotations', quotationRoutes);
app.use('/api/contact', contactRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Example route to test the server
app.get('/', (req, res) => {
  res.send('ShadeNet Solutions API is running');
});

console.log('Server setup complete. Try accessing http://localhost:5000 to test.');