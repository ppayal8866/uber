//connecting mysql using sequelize

var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'root', 'reallyStrongPwd123', {
	host: 'localhost',
	dialect: 'mysql', 
	port: '3306',
	dialectModule: require('mysql2'),
});

sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch((error) => {
	console.error('Unable to connect to the database: ', error);
});

exports.sequelize = sequelize;