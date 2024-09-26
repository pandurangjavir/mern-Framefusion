const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();
app.use(express.json());

// const express = require('express');
// const cors = require('cors');
// const app = express();

// For local development
if (process.env.NODE_ENV === 'local') {
    console.log("inside try");
    
    app.use(cors({
        origin: 'http://localhost:5173',  // React frontend URL
        credentials: true,                // Allow credentials
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // Allow required methods
        allowedHeaders: 'Content-Type,Authorization',      // Allow necessary headers
    }));
} else {
    console.log("process " ,process.env.ALLOWED_ORIGIN);
    
    app.use(cors({
        origin: process.env.ALLOWED_ORIGIN ,  // Production URL
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        allowedHeaders: 'Content-Type,Authorization',
    }));
}

app.use('/api', require('./routes/authRoutes'));

if (process.env.NODE_ENV === 'production') {
    console.log('Serving static files from:', path.join(__dirname, "./vite-project/dist"));
    app.use(express.static(path.join(__dirname, "./vite-project/dist")));
    app.get('*', (req, res) => {
        console.log('Serving index.html for:', req.url);
        res.sendFile(path.resolve(__dirname, './', 'vite-project', 'dist', 'index.html'));
    });
}

const dbConnect = async () => {
    try {
        if (process.env.NODE_ENV === 'local') {
            await mongoose.connect(process.env.LOCAL_DB_URI);
            console.log('Local database is connected ...');
        } else {
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('Production database is connected ...');
        }
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

dbConnect();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
