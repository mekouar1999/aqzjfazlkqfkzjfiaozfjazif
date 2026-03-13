const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDb');

connectDB();
dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/v1/auth/register", (req, res) => {
    res.json("Register");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});