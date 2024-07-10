const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lokesh:12345@cluster0.n9upzef.mongodb.net/supportdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = db;