const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/auth.routes');
const snippetRoutes = require('./routes/snippet.routes');

const app = express();


const allowedOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

// CORS setup 
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// MongoDB connection 
const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// MongoDB connection
console.log('Attempting to connect to MongoDB Atlas...');
console.log('Database URL:', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, mongooseOptions)
  .then(() => {
    console.log('Connected to MongoDB Atlas successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/snippets', snippetRoutes);

// check endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running!',
    time: new Date().toISOString()
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error details:', err);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
