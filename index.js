const express = require('express')
const app = express();

const path = require('path')

// body-parseri lisamine koodi
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// add views directory path
app.set('views', path.join(__dirname, 'views'));
// add views templage engine
app.set('view engine', 'ejs')

app.get('/login',  (req, res)=> {
  /*  let questions = [
        {title: "What is Node.js?", user : "Kadi", votes : "10"},
        {title: "What is Express.js?", user : "Mike", votes : "8"}
    ] */
    res.render('login')
})

app.post('/login', (req, res)=>{
    console.log('post request done')
    console.log(req.body)
});

app.listen(3000, ()=> {
    console.log('Server started on http://localhost:3000/');
});