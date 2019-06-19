const mongoose = require('../DBSchema/File.model');
const FileSchema = mongoose.model('File');

const FileController = function(){
    this.insert = (data) => {
        return new Promise((resolve, reject) => {
            const File = new FileSchema({
                uploadedDate : data.uploadedDate,
                studentId : data.studentId,
                courseId : data.courseId,
                examId : data.examId,
                assignmentId : data.assignmentId
            });
            File.save().then(() => {
                resolve({status: 200, message: "Added new File"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })

    }

    this.update = (id, data) => {
        return new Promise((resolve, reject) => {
            FileSchema.update({_id: id}, data).then(() => {
                resolve({status: 200, message: "update File details"});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.searchAll = () => {
        return new Promise((resolve, reject) => {
            FileSchema.find().exec().then((data) => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.search = (id) => {
        return new Promise((resolve, reject) => {
            FileSchema.find({_id:id}).exec().then(user => {
                resolve({status: 200, data: user});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }

    this.delete = (id) => {
        return new Promise((resolve, reject) => {
            FileSchema.remove({_id:id}).then(() => {
                resolve({status: 200, message: "remove File"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            })
        })
    }
}

module.exports = new FileController();