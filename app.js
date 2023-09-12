const express = require("express");
const person = require('./routes/persons');
const app = express();
app.use(express.json());



// routes
app.use('/api', person);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
