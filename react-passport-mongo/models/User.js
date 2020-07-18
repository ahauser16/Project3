var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dogname: [{type: Schema.Types.ObjectId, ref:'Dog'}]
  
});

//hashing a password before saving it to the database
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 14, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
});

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email })
    .populate("dogname")
    .exec(function (err, user) {
      console.log("User: " + user);
      if (err) {
        callback(err);
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        callback(err);
      }
      console.log(password)
      console.log(user.password)
      bcrypt.compare(password, user.password, function (err, result) {
        console.log(err)
        if(err) callback(err);
        console.log(result)
        if (result === true) {
          console.log(user);
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}
var User = mongoose.model('User', UserSchema);
module.exports = User;