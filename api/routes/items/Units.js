const express = require('express');
var myunits =express.Router();
var connection = require('../../database/database');

//get api
myunits.get('/units',function(req,res){
	connection.query("select * from unit",function(error,rows){
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
myunits.delete('/units/:id', (req, res) => {
	let sql = "DELETE FROM unit WHERE id=" + req.params.id + "";
	let query = connection.query(sql, (err, results) => {
		if (err) throw err;
		res.send(JSON.stringify({
			"status": 200,
			"error": null,
			"response": results
		}));
	});
});

// myunits.delete('/units',function(req,res){
// 	let id=req.body.id;
// 	connection.query("delete from unit where id=? ", [id], function(error,result) {
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

// myunits.delete('/units/:id',function(req,res){
// 	let id=req.params.id;
// 	connection.query("delete from unit where id=? ", [id], function(error,result) {
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


//post api
myunits.post('/units', function (req, resp) {
	
	let data = {
		id: req.body.id,
		unit_name: req.body.unit_name,
		unit_short: req.body.unit_short
	
	};
	let sql = "INSERT INTO unit SET ?";

	let query = connection.query(sql, data, function (error, result) {
		if (!!error) {
			console.log('error in the query');
		} else {
			console.log('successful query');
			
			resp.send(JSON.stringify({
				"status": 200,
				"error": null,
				"response": result
			}));

		}
	});
});



module.exports = myunits;