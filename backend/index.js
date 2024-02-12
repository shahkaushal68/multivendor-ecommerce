const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const cookieParser = require('cookie-parser');

const app = express();

//default Middleware
app.use(express.json({ extended: true })); // for postman //Used to parse JSON bodies
app.use(cors()); //Middleware for connect server and react (used for server connection with unknown url)
app.use(express.urlencoded({ extended: true })); //for send the data via form //Parse URL-encoded bodies
app.use(cookieParser());

const port = process.env.PORT || 4040;

//Databae Connection
//mongoose.set("strictQuery", true);
mongoose
    .connect('mongodb+srv://kaushal:kaushal@cluster0.w7b0lw6.mongodb.net/multi-vendor-ecommerce?retryWrites=true&w=majority')
    .then(console.log("Connection Successfully"))
    .catch((error) => console.log(error));

//Routing
app.use('/', require("./routes"));


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})