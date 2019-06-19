const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({

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
    aMarks: [
        {
            studentId: {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
            marks: Number
        }
    ]
})

mongoose.model('Assignment', AssignmentSchema)

module.exports = mongoose;