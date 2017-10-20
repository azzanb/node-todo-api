const {MongoClient, ObjectID} = require('mongodb'); 


var obj = new ObjectID();


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

	//findOneAndDelete, this will print to the console the deleted object
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });


	db.close();
});



