const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

let id = "5c473459589eb25d10a6d0a9"

if (!ObjectId.isValid(id)){
  console.log(`Thats not a valid ID: ${id}`);
} else {
  User.findById(id,(err, result)=>{
    if(err) return console.log(err);
    if(!result) return console.log('Sorry, no User under this id');
    console.log(result);
  });
};
// var id = "5c482f074d4ad855007cc5ef11";
//
// if (!ObjectId.isValid(id)){
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos',todos);
// }).catch((e)=>console.log(e));;
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo',todo);
// }).catch((e)=>console.log(e));;
//
// Todo.findById(id).then((todo)=>{
//   if (!todo){
//     return console.log("Id not found.");
//   }
//   console.log('Todo By Id',todo);
// }).catch((e)=>console.log(e));
