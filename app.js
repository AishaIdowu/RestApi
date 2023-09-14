const express = require("express");
const person = require('./routes/persons');
const connectDB = require('./db/connect');
require('dotenv').config();
const app = express();
app.use(express.json());



// routes
app.use('/api', person);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port:${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
