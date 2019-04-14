const express = require('express');
const router = express.Router();

//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://jblau:kento@cluster0-jhthm.mongodb.net/opine-redux?retryWrites=true';
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Set up routes for user requests
const userController = require('../controllers/userController');

// POST to log in
router.post('/login', userController.find_user);

// POST to change user data
router.post('/update', userController.update_user);

// DELETE to delete user data
router.delete('/delete', userController.delete_user);

module.exports = router;
