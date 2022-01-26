const express = require('express')
const app = express();

app.get('/', function (req, res) {
    // create html responce
    res.send('<a href="/about">About Us Page</a> <br> <a href="/contact">Contact Us</a>')
});

app.get('/', function (req, res) {
    res.send('<h1>About Us Page</h1>')
})

app.get('/', function (req, res) {
    res.send('<h1>Contact Us Page</h1>')
})

app.listen(3000)