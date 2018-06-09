'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: {
		type: String,
		required: 'Please insert a name'
	},
	last_name:{
		type: String,
		required: 'Please insert a last name'
	},
	birth_date:{
		type: Date, 
		default: Date.now
	},
	sports:{
		type:[String]
	},
	email:{
		type:String
	},
	password:{
		type:String,
		default:'123'
	}
})

module.exports = mongoose.model('Users', UserSchema);