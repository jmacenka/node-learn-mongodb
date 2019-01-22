// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // Utilizing Object-Destructuring

let connection = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connection, {useNewUrlParser: true}, (err, client)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB-Server.');
  }
  console.log('Connected to MongoDB-Server');
  const db = client.db('TodoApp');

  db.collection('Users').findOneAndUpdate({
    name:"Jan"
  },{
    $inc:{age:1}
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log('Updated:');
    console.log(`New age: ${result.value.age}`);
  }).catch((err)=>{
    if(err){
      console.log(err);
    }
  });

  // client.close();
});
