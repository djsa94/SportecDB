'use strict';
module.exports = function(app) {
	var login = require('../controllers/loginController');

	//rutas
	app.route('/login')
		.get(login.list_all_logins)
		.post(login.create_login);

	app.route('/login/:email')
		.post(login.log_in)
		.delete(login.delete_login)
		

};