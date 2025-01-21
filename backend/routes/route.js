const express = require('express');
const mongoose = require('mongoose');
const User = require('../schema.js');
const router = express.Router();
// app.use(express.json())

router.get('/user', (req,res) => {
    User.find()
    .then((users) => {
        res.status(200).json(users);
    })
    .catch((err) => {
        res.status(500).json({ message: 'An error occured', error: err.message });
    });
});

router.post('/user', (req, res) => {
    const userData = new User(req.body);
    userData
    .save()
    .then(() => res.status(201).json({ message: 'User added successfully!'}))
    .catch((err) => res.status(500).json({ message: 'An error occured', error: err.message}));
});

router.put('/user/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    User.findByIdAndUpdate(id, updatedData, { new:true })
    .then((updatedItem) => {
        if(!updatedItem) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User data updates successfully', updatedItem});
    })
    .catch((err) => {
        res.status(500).json({ message: 'An error occured', error:err.message });
    });
});

router.delete('/user/:id', (req,res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then((deletedItem) => {
        if (!deletedItem) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', deletedItem });
    })
    .catch((err) => {
        res.status(500).json({ message: 'An error occured', error: err.message});
    });
});

module.exports = router;


