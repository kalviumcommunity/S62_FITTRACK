const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(express.json());
const PORT = 8080;
const mongoURL = process.env.mongoURI;
let databaseStatus = '';

mongoose.connect(mongoURL)
.then(() => {
    databaseStatus = 'Connected to the database successfully';
})
.catch((err) => {
    databaseStatus = `Error connecting to the database: ${err.message}`;
    
})

app.get('/', (req,res) =>{
    res.send(`<h1>${databaseStatus}</h1>`);
});

app.listen(PORT, () =>{
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`)
});