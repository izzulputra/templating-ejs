const express = require("express");
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views')) //untuk membuat path jika index.js diakses diluar dari folder templating-ejs di CLI


app.get('/', (req, res) => {
    res.render('home') //express sudah auto akan mencari file views karena sudah default
})

app.get('/cats', (req, res) => {
    const cats =[
        "Joe", "kindy", "cassey", "Woody"
    ]
    res.render('cats',{cats})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params; //destructor function
    const data = redditData[subreddit]; // ambil dari file json untuk tiap params
    console.log(data);
    res.render('subreddit', {...data})
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random()*10)
    res.render('random', {num})
})

const port =3000;
app.listen(port, () => {
    console.log(`listening at port http://localhost:${port}`)
})