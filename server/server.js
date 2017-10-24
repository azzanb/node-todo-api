'use strict';
//this file is just for routes
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

//require file that connects mongoose, Todo, and User
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

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

app.listen(3000);










