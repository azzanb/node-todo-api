

//this is another 
const jwt = require('jsonwebtoken');

var data = {
	id: 10
};

/* 'jwt.sign: takes the data obj and the salt and returns a token.
this is used for user's token's array in the User Model. This token can 
never be manipulated as long as it's salted.

'jwt.verify(): returns the decoded format of the token'
*/
var token = jwt.sign(data, '123456');
console.log(token);

var decoded = jwt.verify(token, '123456');
console.log(decoded);



/*				For playground purposes								*/

//the number of bits from the resulting hash
// const {SHA256} = require('crypto-js');

// let message = "I am the best person";
// let hash = SHA256(message).toString();

// console.log(message); //the actual message
// console.log(hash); //the same message hidden behind a long series of numbers and letters

// var data = {
// 	id: 4
// };
// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'saltingthehash').toString()
// };
// var resultHash = SHA256(JSON.stringify(token.data) + 'saltingthehash').toString();
// console.log(resultHash);

//salting the hash means adding a value to a hash value so that the ultimate value 
	//is never the same 

//This is a standard called JWT(JSON Web Token)


