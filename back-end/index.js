const express = require("express");
// const mongoose = require('mongoose') 
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
const { Sequelize } = require('sequelize')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/marketplace', require('./controllers/marketplace'))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

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