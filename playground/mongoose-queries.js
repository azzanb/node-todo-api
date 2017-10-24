const{ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

//use a doc's id for example
var id = "59ea40d4d2be6c8a2dacfd88";

//a mongodb method that checks if the ID is valid
if(!ObjectID.isValid(id)) console.log("ID not valid")

//get an array of docs
// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log(todos);
// });

// //just get a single doc
// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log(todo);
// });

User.findById({_id: id}).then((user) => {
	if(!user){
		console.log("Unable to find user");
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});


//Notes
/* 1) If the results of queries come up null, it simply means the data to be fetched
	is incorrect. It could be the id or the name or whatever the parameters of the 
	search is. */ 