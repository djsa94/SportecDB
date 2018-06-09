'use strict';

var mongoose = require('mongoose'),
Login = mongoose.model('Login'),
User = mongoose.model('Users');

exports.create_login = function(req,res){
	var new_login = new Login(req.body);
	new_login.save(function(err, login){
		if(err)
			res.send(err);
		var log = new Login(login);
		User.findById(log.get('userId'), function(err,user){
				if(err)
					res.send(err);
				res.json(user);
			});
		
	})
};
exports.list_all_logins = function(req,res){
	Login.find({}, function(err, login){
		if(err)
			res.send(err);
		res.json(login);
	});
};
exports.log_in = function(req,res){
	Login.findOne({email: req.params.email}, function(err, login){
	 	if(err){
	 		res.send(err);
	 	}else{
	 	//res.json(login);
		 	var log = new Login(login);
			if(log.get('password') == req.body.password){
				User.findById(log.get('userId'), function(err,user){
					if(err)
						res.send(err);
					res.json(user);
				});
			}else{
			res.json({ message: 'password incorrecto'});
		}
		}
	});

};
exports.delete_login = function(req, res){

	Login.remove({
		_id: req.params.userId
	}, function(err, user){
		if(err)
			res.send(err);
		res.json({ message: 'User deleted'});
	});
};

// exports.read_user = function(req, res){
// 	User.findById(req.params.userId, function(err, user){
// 		if(err)
// 			res.send(err);
// 		res.json(user);
// 	});
// };