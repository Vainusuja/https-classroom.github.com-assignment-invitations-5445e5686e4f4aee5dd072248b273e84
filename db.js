const mongoose = require('mongoose');

// Use the 127.0.0.1 format for the connection string
mongoose.connect('mongodb+srv://naveenraj272005:2005@cluster0.jcgie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
