const {MongoClient, ObjectID} = require('mongodb'); 

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server')
	}
	console.log("Successfully Connected!");

	//findOneAndUpdate requires a few things:
		//filter (by id as below)
		//update operators ($set, and whatever else I want)
		//options
	// db.collection("Todos").findOneAndUpdate({
	// 	_id: new ObjectID("59e6b6ef0b4eb6ff86a3e0a3")
	// }, 
	// {
	// 	$set: {
	// 		completed: false
	// 	}
	// },
	// {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection("Users").findOneAndUpdate({
		_id: new ObjectID("59e68f460b4eb6ff86a3dc44")
	},
	{
		$inc: {
			age: 30
		},
		$set: {
			text: "Azzan is writing"
		}
	},
	{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	})



	
	db.close();
});



