const express = require('express')
const app = express();
// add public directory
app.use(express.static("public"));

app.get('/user/:username',  (req, res)=> {
    // get parameter data from addressrow
    let user = req.params.username;
    // use this data in template
    res.render('index.ejs', {username : user});
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000/');
});