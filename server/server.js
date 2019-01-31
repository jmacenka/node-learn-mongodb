var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ObjectId} = require('mongodb');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

let port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=> {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }).catch((e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos',(req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

// Get the entry by ObjectId
app.get('/todos/:id',(req,res)=>{
  let id = req.params.id;
  var resObj = {
    requestedId:id,
    requestIdValid:false,
    foundObject:false,
    object:null,
  }
  if(!ObjectId.isValid(id)){
    return res.status(404).send(resObj)
  } else {
    resObj.requestIdValid = true;
    User
    .findById(id)
    .then((user)=>{
      if(user){
        resObj.foundObject=true;
      }
      resObj.object=user;
      res.send(resObj);
    })
    .catch((e)=>{
      res.status(400).send();
    });
  };
});

app.delete('/todos/:id',(req, res)=>{
  let id = req.params.id;
  var resObj = {
    requestedId:id,
    requestIdValid:false,
    foundObject:false,
    object:null,
  }
  if (!ObjectId.isValid(id)){
    return res.status(404).send(resObj);
  } else {
    resObj['requestIdValid'] = true;
    Todo
    .findByIdAndDelete(id)
    .then((todo)=>{
      res.status(404);
      if (todo){
        resObj.foundObject = true;
        console.log(`Deleted Object ${todo}`);
        res.status(200);
      };
      resObj.object = todo;
      res.send(resObj);
    }).catch((e)=>{
      res.status(404).send()
    });
  };
});

app.listen(port, ()=>{
  console.log(`Started Server on Port ${port}.`);
});

module.exports = {
  app
}
