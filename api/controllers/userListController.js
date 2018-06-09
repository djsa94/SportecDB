'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('Users');

exports.list_all_users = function(req,res){
	User.find({}, function(err, user){
		if(err)
			res.send(err);
		res.json(user);
	});
};

exports.create_user = function(req, res){
	var new_user = new User(req.body);
	new_user.save(function(err, user){
		if(err)
			res.send(err);
		res.json(user);
	})
};

exports.read_user = function(req, res){
	User.findById(req.params.userId, function(err, user){
		if(err)
			res.send(err);
		res.json(user);
	});
};

exports.update_user = function(req, res){
	User.findOneAndUpdate({_id: req.params.userId}, {$set: {sports:{$each : req.body.sports}}}, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  })
}

exports.update_user_sports = function(req, res){
	
// 	User.findById({_id : req.params.userId}, function(err, usr){
// 		var user = new User(usr);
// 		user.update(
//    { _id: req.params.userId },
//    { $push: { sports: { $each: req.body.sports } } }
// );
// 		user.save();
// 	})
User.findOne({_id: req.params.userId}, function(err, usr){
			if(err){
				res.send(err);
			}else{
				//
				var user = new User(usr);
				var deporte = JSON.parse(req.body.sports)
				user.sports.push(deporte);
				user.save();	
				console.log(user);
				res.json(user);

				
			}
			
		})

}

exports.delete_user = function(req, res){

	User.remove({
		_id: req.params.userId
	}, function(err, user){
		if(err)
			res.send(err);
		res.json({ message: 'User deleted'});
	});
};

exports.delete_user_sports = function(req, res){

	User.update({_id: req.params.userId}, { $set: { sports: [] }}, function(err, affected){
    console.log('affected: ', affected);
    res.json(affected);
});

	
};