const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req,res) =>{
    res.send('<h1>The server is running</h1>');
});

app.listen(PORT, () =>{
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`)
});