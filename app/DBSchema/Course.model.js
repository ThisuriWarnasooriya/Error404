const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require("./User.model")

const CourseSchema = new Schema({
    courseId : {
        type : String,
        require : true
    },
    courseName  : {
        type : String,
        require : true
    },
    userId  : {
        type : Schema.Types.ObjectId,
        ref: 'User'
    },

    assignment : [
        {
            assignmentId: String,
            deadLine: Date,
            description: String,
            aMarks : [
                {
                    studentId : {
                        type : Schema.Types.ObjectId,
                        ref : 'User'
                    },
                    marks : Number
                }
            ]
        }
    ],
});

mongoose.model('Course', CourseSchema)

module.exports = mongoose;
