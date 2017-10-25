var {User} = require('./../models/users');


//Authenticate user before routing user to page. 
var authenticate = (req, res, next) => {
	//get token from header
	var token = req.header('x-auth');

	//find appropriate user related to this token
	User.findByToken(token).then((user) => {
		if(!user){
			return Promise.reject();
		}

		//add the found user and token to the request object to be passed to
			//the route below
		req.user = user;
		req.token = token;

		//be sure to call next() so the next function
		next();
	}).catch((err) => {
		res.status(401).send();		
	});
};

module.exports = {authenticate};