const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
    name : {
        type : String,
        require : true
    }
});

mongoose.model('Instructor', InstructorSchema)

module.exports = mongoose;
