const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    uploadedDate : {
        type : Date,
        require : true
    },
    studentId : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    },
    courseId : {
        type : Schema.Types.ObjectId,
        ref : 'Course'
    },
    examId : {
        type : Schema.Types.ObjectId,
        ref : 'Exam'
    },
    assignmentId : {
        type : Schema.Types.ObjectId,
        ref : 'Assignment'
    }
});

mongoose.model('File', FileSchema)

module.exports = mongoose;