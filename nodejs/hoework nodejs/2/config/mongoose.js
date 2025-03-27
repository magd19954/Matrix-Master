const mongoose = require('mongoose');

const lin='mongodb+srv://majdalbatran:1111@testtest.sltkapp.mongodb.net/?retryWrites=true&w=majority&appName=testtest'
mongoose.connect(lin)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB:');
    });
