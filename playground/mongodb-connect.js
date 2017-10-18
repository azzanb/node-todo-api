/*  Require the mongodb module and call the client server  */
//const MongoClient = require('mongodb').MongoClient;

// ES6 Destructuring
// ObjectID allows me to make new Object IDs
const {MongoClient, ObjectID} = require('mongodb'); 

//Create a new instance of OBjectID
var obj = new ObjectID();
console.log(obj);

//Connect mongo to web
//localhost:27017, remember the port when installing mongodb, and TodoApp
	//is the name of the database. To create a new database, just write it
	//in the url, as below:
//(db) is an arguemnt that'll allow me to use all of its available methods
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server')
	}
	console.log("Successfully Connected!")

	//Create a collection, insert a new doc
	// db.collection('Todos').insertOne({
	// 	text: 'Something to write',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err){
	// 		return console.log('Unable to Insert');
	// 	}
	// 	//ops stores all docs that were inserted
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// //Insert new doc into Users collection (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: "Azzan",
	// 	age: 25,
	// 	location: "Cleveland"
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log("There has been an error creating a new collection")
	// 	};
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//this closes the connection
	db.close();
});