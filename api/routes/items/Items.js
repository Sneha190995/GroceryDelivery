const express = require('express');
var myitems = express.Router();
var connection = require('../../database/database');


//get api
myitems.get('/items',function(req,res){
	connection.query("select * from item",function(error,rows){
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
myitems.delete('/items/:id', (req, res) => {
	let sql = "DELETE FROM item WHERE id=" + req.params.id + "";
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
myitems.post('/items', function (req, resp) {
	
	let data = {
		id: req.body.id,
		item_name: req.body.item_name,
		price: req.body.price,
		item_photo: req.body.item_photo,
		description: req.body.description,
		unit_id: req.body.unit_id
	};
	let sql = "INSERT INTO item SET ?";

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

module.exports = myitems;