const express = require("express");
// const mongoose = require('mongoose') 
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello world");
});

const marketplaceController = require('./controller/marketplace.js')
  app.use('/marketplace', marketplaceController);

// app.use(express.static(path.join(__dirname, 'front-end-react', 'build')))

aapp.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})