const mongoose = require('../DBSchema/Course.model');
const CourseSchema = mongoose.model('Course');

const CourseController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            const course = new CourseSchema({
                courseId: data.courseId,
                courseName: data.courseName,
                userId : data.userId,
                exam : data.exam,
                assignment : data.assignment
            });
            course.save().then(() => {
                resolve({status: 200, message: "Added new course"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })

    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            CourseSchema.update({_id: id}, data).populate('User').then(() => {
                resolve({status: 200, message: "update course details"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            CourseSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            CourseSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            CourseSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "remove course"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}

module.exports = new CourseController();