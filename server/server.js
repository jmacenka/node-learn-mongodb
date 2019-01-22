var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

let port = 3000;

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

app.listen(port, ()=>{
  console.log(`Started Server on Port ${port}.`);
});
