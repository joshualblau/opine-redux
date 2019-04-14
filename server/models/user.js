const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

//Create user model
const UserSchema = new Schema ({
  email: {type: String, required: true, unique: true},
  name: {
    first: {type: String, required: true},
    last: {type: String, required: true},
  },
  address: {
    num: {type: Number, required: true},
    street: {type: String, required: true},
    apt: {type: String},
    city: {type: String},
    state: {type: String, required: true},
    zip: {type: Number, required: true, enum: statesArray}
  }
});

// Virtual for user's full name
UserSchema
.virtual('name')
.get(function () {
  return this.name.first + ' ' + this.name.last;
});

// Virtual for user's full street address
UserSchema
.virtual('address')
.get(function () {
  return this.address.num + ' ' + this.address.street + ' ' + this.address.apt;
});

// Virtual for user's URL
UserSchema
.virtual('name')
.get(function () {
  return '/users/' + this._id;
});


module.exports = mongoose.model('User', UserSchema );
