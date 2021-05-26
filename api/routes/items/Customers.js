const express = require('express');
var mycustomers =express.Router();
var connection = require('../../database/database');

//get api
mycustomers.get('/customers',function(req,res){
	connection.query("select * from customer",function(error,rows){
		if(!!error){
			console.log('error in the query');
		}
		else{
			console.log('query is successful');
			console.log(rows);
			res.send(rows);
		}

	})
})


//delete api
mycustomers.delete('/customers/:id', (req, res) => {
	let sql = "DELETE FROM customer WHERE id=" + req.params.id + "";
	let query = connection.query(sql, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({
			"status": 200,
			"error": null,
			"response": results
		}));
	});
});


//post api
mycustomers.post('/customers', function ( req, resp)  {
	
	var date = new Date();
	console.log("shhssh:", 11212)
	console.log("shhssh:", req.body, date.toISOString().slice(0, 19).replace('T', ' '))
	let data = {
		id : req.body.id,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		user_name: req.body.user_name,
		password: req.body.password,
		time_inserted:date.toISOString().slice(0, 19).replace('T', ' '),
		confirmation_code:'confirm',
		time_confirmed: date.toISOString().slice(0, 19).replace('T', ' '),
		contact_email: req.body.contact_email,
		contact_phone: req.body.contact_phone,
		city_id: null,//req.body.city_id,
		address: null,// req.body.address,
		delivery_city_id: null,//req.body.delivery_city_id,
		delivery_address:null// req.body.delivery_address
	};
	// console.log("shhssh:", req.body)
	console.log("data:" ,data);
	let sql = "INSERT INTO customer SET ?";

	let query = connection.query(sql, data, function (error, result) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			//console.log(rows);
			resp.send(JSON.stringify({
				"status": 200,
				"error": null,
				"response": result
			}));

		}
	});
});

module.exports = mycustomers;