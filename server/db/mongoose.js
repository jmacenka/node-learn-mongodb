var mongoose = require('mongoose');

let connection = 'mongodb://localhost:27017/TodoApp'

mongoose.Promise = global.Promise;
mongoose.connect(connection,{ useNewUrlParser: true });

module.exports = {
  mongoose
};
