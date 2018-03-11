var express = require("express");
// Import the model  to use its database functions.
var coffee = require("../models/coffee.js");
var router = express.Router();
router.get("/", function(req, res) {
	coffee.all(function(data) {
		var hbsObject = {
			coffee: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});
router.post("/api/coffee", function(req, res) {
	coffee.create([
		"name", "drank"
	], [
		req.body.name, false
	], function(result) {
		res.json({ id: result.insertId });
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
router.delete("/api/coffee/:id", function(req, res) {
	var condition = "id = " + req.params.id;
	coffee.delete(condition, function(result) {
		if (result.affectedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});
module.exports = router;