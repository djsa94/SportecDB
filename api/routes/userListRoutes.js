'use strict';
module.exports = function(app) {
	var userList = require('../controllers/userListController');

	//rutas
	app.route('/users')
		.get(userList.list_all_users)
		.post(userList.create_user);

	app.route('/users/:userId')
		.get(userList.read_user)
		.put(userList.update_user)
		.delete(userList.delete_user);

	app.route('/users/sports/:userId')
		.put(userList.update_user_sports)
		.delete(userList.delete_user_sports)

};