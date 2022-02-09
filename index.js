const express = require("express");
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')) //untuk membuat path jika index.js diakses diluar dari folder templating-ejs di CLI


app.get('/', (req, res) => {
    res.render('home') //express sudah auto akan mencari file views karena sudah default
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params; //destructor function
    res.render('subreddit', {subreddit})
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random()*10)
    res.render('random', {num})
})

const port =3000;
app.listen(port, () => {
    console.log(`listening at port http://localhost:${port}`)
})