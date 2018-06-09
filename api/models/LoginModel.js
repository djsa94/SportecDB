'user strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
	email: {
		type: String,
		required: 'Please insert email'
	},
	password:{
		type: String,
		required: 'Please insert password'
	},
	userId:{
		type: String, 
		default: ''
	}
})

module.exports = mongoose.model('Login', LoginSchema);