'use strict';
module.exports = function(app) {
	var news = require('../controllers/newsController');

	//rutas
	app.route('/news')
		.get(news.list_all_news)
		.post(news.create_news);

	app.route('/news/newsFeed')
		.post(news.get_news);
		

};