const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Must provide name'],
        maxlength: [20, 'Name cannot be longer than 20 characters']
    }
});

module.exports = mongoose.model('Person', PersonSchema);