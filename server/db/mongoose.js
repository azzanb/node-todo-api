var mongoose = require("mongoose");

//Use promises
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {mongoose};