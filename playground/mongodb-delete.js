// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectId} = require('mongodb'); // Utilizing Object-Destructuring

let connection = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(connection, {useNewUrlParser: true}, (err, client)=>{
  if (err) {
    return console.log('Unable to connect to MongoDB-Server.');
  }
  console.log('Connected to MongoDB-Server');
  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result)=>{
  //   console.log(result);
  // }).catch((err)=>{
  //   if (err) {
  //     console.log('Error, ', err);
  //   }
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectId("5c471f817caf51e09b79f513")
  }).then((result)=>{
    let del = result.lastErrorObject.n

    if (del > 0){
      console.log('Deleted the following Item:');
      console.log(result);
    } else {
      console.log('Nothing to do here.');
    }
  }).catch((err)=>{
    if(err){
      console.log('Error, ',err);
    }
  });

  // client.close();
});
