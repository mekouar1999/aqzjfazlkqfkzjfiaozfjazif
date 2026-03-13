const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDb');
const cors = require('cors');
connectDB();
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
const adminRoutes = require('./AdminRoutes');
app.use('/api/v1/admin', adminRoutes);
app.get("/", (req, res) => {x
    res.send("Hello World!");
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});