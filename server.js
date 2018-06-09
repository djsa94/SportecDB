
console.log('May Node be with you')

var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
mongoose = require('mongoose'),
User = require('./api/models/UserModel'),
Login = require('./api/models/LoginModel'),
Sport = require('./api/models/SportModel'),
News = require('./api/models/NewsModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SportecDB');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/userListRoutes');
var loginRoutes = require('./api/routes/loginRoutes');
var sportRoutes = require('./api/routes/sportRoutes');
var newsRoutes = require('./api/routes/newsRoutes');
routes(app);
loginRoutes(app);
sportRoutes(app);
newsRoutes(app);

app.listen(port);

console.log('API arriba en ' + port);