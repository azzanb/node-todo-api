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

						/*	RETRIEVE DATA  */
	//toArray is called a "Cursor" in the API Docs, and it returns a promise
	/* find() can be empty--finding all collecitons-- or can take an object to
		narrow down the find */
	db.collection('Todos').find({completed: true}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) =>{
		console.log("Unable to process");
	});

	//Retrieve by _id
	db.collection('Todos').find({
		_id: new ObjectID("59e68daf31db807b4e64694d")
	 }).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) =>{
		console.log("Unable to process");
	});

	 //Count the total number of collections
	 db.collection('Todos').find().count().then((count) => {
		console.log(`Total number of collections: ${count}` );
	}, (err) =>{
		console.log("Unable to process");
	});

	//this closes the connection
	db.close();
});



//NOTES
// 1) _id is automatically created for every collection