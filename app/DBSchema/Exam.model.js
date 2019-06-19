const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExamSchema = new Schema({

    courseId : {
        type : Schema.Types.ObjectId,
        ref : 'Course'
    },
    title : {
        type : String,
        required : true
    },
    deadLine : {
      type : Date,
      required : true
    },
    description : {
        type : String,
        required : true
    },
    eMarks: [
        {
            studentId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            marks: Number
        }
    ]
})

mongoose.model('Exam', ExamSchema)

module.exports = mongoose;
