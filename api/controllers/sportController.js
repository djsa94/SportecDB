'use strict';

var mongoose = require('mongoose'),
Login = mongoose.model('Login'),
User = mongoose.model('Users'),
Sport = mongoose.model('Sport');

exports.create_sport = function(req,res){
	var new_sport = new Sport(req.body);
	new_sport.save(function(err, sport){
		if(err)
			res.send(err);
		res.json(sport);
	})
};
exports.list_all_sports = function(req,res){
	Sport.find({}, function(err, sport){
		if(err)
			res.send(err);
		res.json(sport);
	});
};
exports.get_news = function(req,res){
	Sport.findById(req.params.sportId, function(err, sport){
		if(err)
			res.send(err);
		var new_sport = new Sport(sport);
		
		res.json(new_sport.get('news'));
	});
};
exports.add_news = function(req,res){

	Sport.findOneAndUpdate({_id: req.params.sportId}, {$push: {news: req.body}});
};