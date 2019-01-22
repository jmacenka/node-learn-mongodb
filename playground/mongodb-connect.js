// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // Utilizing Object-Destructuring

let connection = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connection, {useNewUrlParser: true}, (err, client)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB-Server.');
  }
  console.log('Connected to MongoDB-Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false,
  // }, (err, result)=>{
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Jan',
  //   age: 30,
  //   location: 'Erlangen',
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Lazy-Error!');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
