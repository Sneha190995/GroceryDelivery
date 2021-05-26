let mysql = require('mysql');

let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'grocerydelivery'

})

connection.connect(function (err) {

	if (err) {
		return console.error('error: ' + err.message);
	}
console.log('connected to mysql server.');
});


module.exports = connection;