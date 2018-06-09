'use strict';
module.exports = function(app) {
	var sport = require('../controllers/sportController');

	//rutas
	app.route('/sport')
		.get(sport.list_all_sports)
		.post(sport.create_sport);

	app.route('/sport/:sportId')
		.get(sport.get_news)
		.put(sport.add_news);
		

};