var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema(
    {
      login: {type: String, required: true, unique: true, trim: true},
      password: {type: String, required: true, trim: true},
      isAdmin: {type: Boolean, required: true}
    }
  );

  module.exports = mongoose.model('Users', UsersSchema);
