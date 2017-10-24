const expect = require('expect');
const request = require('supertest');
const {app} = require('./../server');
const {Todo} = require('./../models/todo');


//make sure db is empty so test case can work
beforeEach((done) => {
	Todo.remove({}).then(() => done());
});


//need the argument 'done' because it's an asynchronous function
describe("POST /todos", () => {
	it('should create a new todo', (done) => {
		var text = 'Test todo text'

		request(app)
			.post('/todos')
			.send({text}) //send data with the request
			.expect(200) //expect staus to be 200
			.expect((res) => {
				expect(res.body.text).toBe(text);
			})
			.end((err, res) => {
				if(err) return done(err);
				Todo.find().then((todos) => {
					expect(todos.length).toBe(1);
					expect(todos[0].text).toBe(text);
					done();
				}).catch((e) => done(e))
			});	
	});

	it('should not create todo with invalid data', (done) => {
		request(app)
			.post('/todos')
			.send({})
			.expect(400)
			.end((err, res) => {
				Todo.find().then((todos) => {
					expect(todos.length).toBe(0);
					done()
				}).catch((e) => done(e));
			});
	});
});







