var express = require("express");
var router = express.Router();

// Import the model  to use its database functions.
var coffee = require("../models/coffee.js");

router.get("/", function(req, res) {
	coffee.all(function(data) {
		var hbsObject = {
			coffee: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/api/cats", function(req, res) {
	coffee.create([
		"name", "drank"
	], [
		req.body.name, req.body.drank
	], function(result) {
		res.json({ id: result.insertId })
	});
});

router.put("/api/coffee/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	coffee.update({
		drank: req.body.drank
	}, condition, function(result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;