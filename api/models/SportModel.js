'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SportSchema = new Schema({
	name: {
		type: String,
		required: 'Please insert a name'
	},
	news:{
		type: [String]
	}
}, {collection: 'Sport'})

module.exports = mongoose.model('Sport', SportSchema);