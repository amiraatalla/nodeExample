const express = require('express')
const bodyParser = require('body-parser')
const cors = require("cors");
const mongoose = require('mongoose')

const port = 8000

// const productsRoutes = require('./routes/productsRoute')


mongoose.connect('mongodb+srv://amira:amira@cluster0.jpeg6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true })


mongoose.connection.on('error', (err) => {
    console.log(err)
})

mongoose.connection.once('open', () => {
    console.log('Database Connection Established!')
})
const app = express()

// middleware for cors to allow cross origin resource sharing
app.use(cors());
// middleware to convert our request data into JSON format
app.use(bodyParser.json())
// app.use("/api", productsRoutes);

app.listen(port, () => {
    console.log(`server is listenning to port : ${port}`);
})