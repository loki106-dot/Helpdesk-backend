const express = require('express');
const path = require('path');
const Query = require('./models/Query');
require('./config/db'); // Initialize MongoDB connection

const app = express();

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route to fetch and display queries
app.get('/', async (req, res) => {
    try {
        const queries = await Query.find();
        res.render('queries', { queries });
    } catch (err) {
        console.error('Error fetching queries:', err);
        res.status(500).send('Error fetching queries');
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
