// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // Utilizing Object-Destructuring

let connection = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connection, {useNewUrlParser: true}, (err, client)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB-Server.');
  }
  console.log('Connected to MongoDB-Server');
  const db = client.db('TodoApp');

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('Todos count',count);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name:'Jan'}).toArray().then((docs)=>{
    console.log('Found users:');
    console.log(JSON.stringify(docs, undefined, 2));
  }).catch((err)=>{
    if (err) {
      console.log('Error, ',err);
    }
  });

  db.collection('Users').find().count().then((count)=>{
    console.log('User-Count',count);
  }).catch((err) => {
    if(err){
      console.log('Error',err);
    }
  });

  // client.close();
});
