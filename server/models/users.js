//This file holds the model for all users

const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 1, 
		validate: {
			isAsync: false,
			validator: validator.isEmail,
			message: "{VALUE} is not a valid email"
		}
	}, 
	password: {
		type: String,
		required: true,
		minlength: 5
	},
	tokens: [{
		access: {
			type: String, 
			required: true
		},
		token: {
			type: String, 
			required: true
		}
	}]
});


/*		VALIDATIONS (ABOVE)

--'unique' verifies that the property email has its own values
--'validator.isEmail' checks if email is an actual email and has correct format

--Every validator has a password and tokens. The tokens will be used in conjunction 
	with each HTTP request to make sure the user is correct



*/


module.exports = {User}