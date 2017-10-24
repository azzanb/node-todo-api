//This file holds the model for all todos

var mongoose = require('mongoose');

//The model for all todos, which has validators(http://mongoosejs.com/docs/validation.html)
var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true //remove all leadinf or trailing white spaces
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};