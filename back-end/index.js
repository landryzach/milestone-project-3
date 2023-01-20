const express = require("express");
// const mongoose = require('mongoose') 
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(express.json())
app.use('/marketplace', require('./controllers/marketplace'))

app.get('/', (req, res) => {
  res.render('Home');
});

// app.use(express.static(path.join(__dirname, 'front-end-react', 'build')))

app.get('*', (req,res) => {
  res.status(404).send('<h1>404: PAGE NOT FOUND</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})