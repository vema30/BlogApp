const express = require('express');
const cors = require('cors'); // Import CORS here
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
connectDB();

app.use(cors()); // Use CORS middleware

app.use(express.json()); 
app.use('/api/auth', authRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
