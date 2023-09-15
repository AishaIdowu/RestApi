require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
          keepAlive: true,
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log(`Database Connected: ${conn.connection.host}`);
    
    } catch (error) {
        console.log(error);

    }
}

module.exports = connectDB;