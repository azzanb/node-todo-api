const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

//Todo.remove({}) - remove all
//Todo.findOneAndRemove()
//Todo.findByIdAndRemove