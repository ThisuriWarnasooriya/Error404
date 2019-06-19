const Express = require("express");
const Routes = Express.Router();
const CourseRoute = require('../Course/Course.Route');
const FileRoute = require('../File/File.Route');

Routes.use('/course/', CourseRoute);
Routes.use('/file/', FileRoute);
console.log("1");

module.exports = Routes;
