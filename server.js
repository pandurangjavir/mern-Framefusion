const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();
app.use(express.json());

// CORS setup
if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origin: 'http://localhost:5173', // Fixed typo
        credentials: true
    }));
} else {
    app.use(cors({
        origin: process.env.CLIENT_URL || '*', // Allow specific client or default to '*'
        credentials: true
    }));
}

// Routes
app.use('/api', require('./routes/authRoutes'));

// Static file serving for production
if (process.env.NODE_ENV === 'production') {
    console.log('Serving static files from:', path.join(__dirname, "./vite-project/dist"));
    app.use(express.static(path.join(__dirname, "./vite-project/dist")));
    app.get('*', (req, res) => {
        console.log('Serving index.html for:', req.url);
        res.sendFile(path.resolve(__dirname, './', 'vite-project', 'dist', 'index.html'));
    });
}

// Database connection
const dbConnect = async () => {
    try {
        const dbUri = process.env.NODE_ENV === 'local' ? process.env.LOCAL_DB_URI : process.env.MONGODB_URI;
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`${process.env.NODE_ENV} database is connected ...`);
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

dbConnect();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
