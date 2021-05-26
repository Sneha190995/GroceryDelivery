const express = require('express');
const bodyParser = require('body-parser');
let mysql = require('mysql');
// const { response } = require('express');
// create myunits var & initializing file(path) 
var myunits = require('./routes/items/Units');

// create myitems var & initializing file(path) 
var myitems = require('./routes/items/Items');

// create mycustomers var & initializing file(path) 
var mycustomers = require('./routes/items/Customers');

// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Add headers
app.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});

app.use('/myunits',myunits);
app.use('/myitems',myitems);
app.use('/mycustomers',mycustomers);

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



//  app.get('/items',function(req,res){
// 	connection.query("select * from item",function(error,rows){
// 		if(!!error){
// 			console.log('error in the query');
// 		}
// 		else{
// 			console.log('query is successful');
// 			console.log(rows);
// 			res.send(rows);
// 		}

// 	})
// })

// app.get('/units',function(req,res){
// 	connection.query("select * from unit",function(error,rows){
// 		if(!!error){
// 			console.log('error in the query');
// 		}
// 		else{
// 			console.log('query is successful');
// 			console.log(rows);
// 			res.send(rows);
// 		}

// 	})
// })

// app.get('/customers',function(req,res){
// 	connection.query("select * from customer",function(error,rows){
// 		if(!!error){
// 			console.log('error in the query');
// 		}
// 		else{
// 			console.log('query is successful');
// 			console.log(rows);
// 			res.send(rows);
// 		}

// 	})
// })

// app.post('/items', function (req, resp) {
	
// 	let data = {
// 		id: req.body.id,
// 		item_name: req.body.item_name,
// 		price: req.body.price,
// 		item_photo: req.body.item_photo,
// 		description: req.body.description,
// 		unit_id: req.body.unit_id
// 	};
// 	let sql = "INSERT INTO item SET ?";

// 	let query = connection.query(sql, data, function (error, result) {
// 		if (!!error) {
// 			console.log('error in the query');
// 		} else {
// 			console.log('successful query');
			
// 			resp.send(JSON.stringify({
// 				"status": 200,
// 				"error": null,
// 				"response": result
// 			}));

// 		}
// 	});
// });
// app.post('/units', function (req, resp) {
	
// 	let data = {
// 		id: req.body.id,
// 		unit_name: req.body.unit_name,
// 		unit_short: req.body.unit_short
	
// 	};
// 	let sql = "INSERT INTO unit SET ?";

// 	let query = connection.query(sql, data, function (error, result) {
// 		if (!!error) {
// 			console.log('error in the query');
// 		} else {
// 			console.log('successful query');
			
// 			resp.send(JSON.stringify({
// 				"status": 200,
// 				"error": null,
// 				"response": result
// 			}));

// 		}
// 	});
// });

// app.post('/customers', function (req, resp) {
	
// 	let data = {
// 		id: req.body.id,
// 		first_name: req.body.first_name,
// 		last_name: req.body.last_name,
// 		user_name: req.body.user_name,
// 		password: req.body.password,
// 		time_inserted: req.body.time_inserted,
// 		confirmation_code: req.body.confirmation_code,
// 		time_confirmed: req.body.time_confirmed,
// 		contact_email: req.body.contact_email,
// 		contact_phone: req.body.contact_phone,
// 		city_id: req.body.city_id,
// 		address: req.body.address,
// 		delivery_city_id: req.body.delivery_city_id,
// 		delivery_address: req.body.delivery_address
// 	};
// 	let sql = "INSERT INTO customer SET ?";

// 	let query = connection.query(sql, data, function (error, result) {
// 		if (!!error) {
// 			console.log('error in the query');
// 		} else {
// 			console.log('successful query');
			
// 			resp.send(JSON.stringify({
// 				"status": 200,
// 				"error": null,
// 				"response": result
// 			}));

// 		}
// 	});
// });


// app.delete('/items',function(req,res){
// 	let id=req.body.id;
// 	connection.query("delete from item where id=? ", [id], function(error,result) {
// 		if(!!error){
// 			console.log("error in the query");
// 		}
// 		else{
// 			console.log('query is successful');
// 			res.send(JSON.stringify({
// 				"status": 200,
// 				"error": null,
// 				"response": result
// 			}));
// 		}
// 	})
// })
app.put('/items',function(req,res){
	   id= req.body.id,
		item_name= req.body.item_name,
		price=req.body.price,
		item_photo=req.body.item_photo,
		description=req.body.description,
		unit_id= req.body.unit_id
	
	connection.query("update item set item_name=?,price=?,item_photo=?,description=?,unit_id=? where id=?",
					 [item_name,price,item_photo,description,unit_id,id],  function(error, result){
		if(!!error)
		{
			console.log("error in the query");
		}
		else{
			console.log('query is successful');
			res.send(JSON.stringify({
				"status": 200,
				"error": null,
				"response": result
			}));
		}
	})
})
// listen for request
// app.listen(port,() => 
// app.listen(3000,function(){
// 	console.log('server is listening on port 3000');
// });
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
})