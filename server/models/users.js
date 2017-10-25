//This file holds the model for all users
const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

//First, create the schema that sets the stage for all users
var UserSchema = new mongoose.Schema({
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

//return only some data, not password and token
UserSchema.methods.toJSON = function() {
	var user = this;

	//convert user to a normal object
	var userObj = user.toObject();

	//only choose id and email
	return _.pick(userObj, ["_id", "email"]);
}

//on the schema, make sure every user is authenticated
UserSchema.methods.generateAuthToken = function() {

	var user = this;
	var access = 'auth';
	var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

	user.tokens.push({access, token});

	return user.save().then(() => {
		return token
	});
}

UserSchema.statics.findByToken = function (token) {

	//this is a model method, so the 'this' binding is being called on the model, 
		//hence the variable name being User, not user
	var User = this;
	var decoded;

	try{
		decoded = jwt.verify(token, 'abc123');
	} catch(err){
		return Promise.reject();
	}

	//if successful:
		//1) find user with decoded id
		//2) find user with decoded token
		//3) find user with access set to auth
		// *if a key has a dot, must use quotes as shown below*
	return User.findOne({
		'_id': decoded._id,
		'tokens.token': token,
		'tokens.access': 'auth'
	});
};

//Then, pass the schema to a model
var User = mongoose.model('User', UserSchema);






/*		VALIDATIONS (ABOVE)

--'unique' verifies that the property email has its own values
--'validator.isEmail' checks if email is an actual email and has correct format

--Every validator has a password and tokens. The tokens will be used in conjunction 
	with each HTTP request to make sure the user is correct

--'UserSchema.methods' are instance methods, called for individual docs
--'UserSchema.statics' is a model method, called for the model
--Both are normal functions instead of arrow functions because I need access to the 'this' binding

*/


module.exports = {User}