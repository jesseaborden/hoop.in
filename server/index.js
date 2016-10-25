const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database.js').sequelize;
var Sequelize = require('sequelize');
var rootRouter = require('./routers/root_router.js');
var path = require('path');

const app = express();

var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());

sequelize.sync({ force: true }).then(function () {});

app.use('/api', rootRouter);

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'));
});

app.listen(port, function () {
	console.log('Listnening on 3000');
});
