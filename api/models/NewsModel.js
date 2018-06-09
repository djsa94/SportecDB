'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
	titulo: {
		type: String,
		required: 'Please insert titulo'
	},
	contenido:{
		type: String,
		required: 'Please insert contenido'
	},
	fecha:{
		type: String
	},
	imagen:{
		type:String
	}
})

module.exports = mongoose.model('News', NewsSchema);