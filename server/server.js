'use strict';
//this file is just for routes
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());


/* Require file that connects mongoose, Todo, and User. Also, require
file the imports ObjectID methods */
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');
var {ObjectID} = require('mongodb');

//POST a new todo
app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.send(e);
	});
});

//GET all todos
app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		//using an object makes things more flexible
		res.send({todos})
	}, (err) => {
		res.status(400).send(err);
	});
});

//GET individual todo
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	//check if todo's id is an actual ObjectID
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			res.status(404).send();
		}
		res.send({todo});
	}, (err) => {
		res.send(400);
	});
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id

	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo){
			res.status(404).send();
		}
		res.send({todo});
		console.log(todo);
	}, (err) => {
		res.send(400);
	});
});



app.listen(3000);

module.exports = {app};






