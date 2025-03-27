const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://majdalbatran:<db_password>@cluster0.p1q97gn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Replace <db_password> with your actual MongoDB password
mongoose.connect(dbURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB:', err);
    });
