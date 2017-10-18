/*  Require the mongodb module and call the client server  */
//const MongoClient = require('mongodb').MongoClient;

// ES6 Destructuring
// ObjectID allows me to make new Object IDs
const {MongoClient, ObjectID} = require('mongodb'); 

//Create a new instance of OBjectID
var obj = new ObjectID();

//Connect mongo to web
//localhost:27017, remember the port when installing mongodb, and TodoApp
	//is the name of the database. To create a new database, just write it
	//in the url, as below:
//(db) is an arguemnt that'll allow me to use all of its available methods
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server')
	}
	console.log("Successfully Connected!");

	//deleteMany
	// db.collection('Todos').deleteMany({text: "Clean the garage"}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: "Fix the mirror"}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	});




	//this closes the connection
	db.close();
});



//NOTES
// 1) _id is automatically created for every collection