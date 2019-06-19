const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course_LectureSchema = new Schema({
    CourseId :{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
});

mongoose.model('Course_Lecture', Course_LectureSchema)