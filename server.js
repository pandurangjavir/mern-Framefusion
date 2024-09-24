const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv=require('dotenv')
const cors = require('cors')
const path = require('path')

dotenv.config()
app.use(express.json())

if(process.env.NODE_ENV === 'local'){
    app.use(cors({
        origin: process.env.NODE_ENV === 'http://localhost:5173',
        credentials: true
    }));
    
}else{
    app.use(cors({
        credentials: true
    }))

}


app.use('/api',require('./routes/authRoutes'))
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

dbConnect()
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}..`));
