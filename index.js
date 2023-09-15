require('dotenv').config();
const express = require("express");
// const person = require('./routes/persons');
const connectDB = require('./db/connect');

const app = express();
app.use(express.json());



// routes
app.use('/', require('./routes/persons'));


const PORT = process.env.PORT || 3000  ;
connectDB().then(() => {
    app.listen(PORT, console.log(`App listening on port: ${PORT}`));
})



