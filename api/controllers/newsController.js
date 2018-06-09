'use strict';

var mongoose = require('mongoose'),
Login = mongoose.model('Login'),
User = mongoose.model('Users').
News = mongoose.model('News'),
Sport = mongoose.model('Sport');
exports.create_news = function(req,res){
	var new_news = new News(req.body);
	new_news.save(function(err, news){
		if(err){
			res.send(err);
		}else{
		var noti = new News(news);
		
		Sport.findOne({name: req.body.sport}, function(err, dep){
			if(err){
				res.send(err);
			}else{
				//
				var deporte = new Sport(dep);
				
				deporte.news.push(noti.get('_id'));
				deporte.save();	
				res.json(deporte);
				
			}
			
		})
		
		
		
		}
	})
};
exports.list_all_news = function(req,res){
	News.find({}, function(err, news){
		if(err)
			res.send(err);
		res.json(news);
	});
};

exports.get_news = function(req, res){

	var listaDeportes = [];
	listaDeportes = JSON.parse(req.body.sports);
	console.log(req.body.sports);
	var listaIds = [];
	console.log('listaDeportes');
	console.log(listaDeportes);
	
	
	//listaDeportes.forEach(function(dep, index, arr){
		var i;
	for(i = 0; i<listaDeportes.length; i++){
		Sport.findOne({name : listaDeportes[i]}, function(err, result){
			if(err){
				//res.send(err);
			}else{
			console.log('loop deportes');
			console.log(listaDeportes[i]);
			console.log(result);
			var deporte = new Sport(result);
			var listaAux = deporte.get('news');
			
			//var listaNueva = listaIds.concat(listaAux);
			listaIds = listaIds.concat(listaAux);
			console.log('log IDS');
			console.log(listaIds);
			console.log('limite');
			var limite = (listaDeportes.length - 1);
			console.log(limite);

			if(i.value == limite.value){
				
				console.log('EN EL IF');
				console.log(listaIds);
				//res.json(listaIds);

			}else{
				console.log('por lo menos compara');
			}
			}
		})	
		console.log('log IDS2');
			console.log(listaIds);
		
		
		}
		res.json(listaIds);

	// })

	// var listaNoticias = [];
	// listaIds.forEach(function(noti){
	// 	News.findOne({_id: noti}, function(err,news){
	// 		console.log('loop noticia');
	// 		console.log(news);
	// 		listaNoticias.push(news);
	// 	})
	// })
	// res.json(listaNoticias);


	
};