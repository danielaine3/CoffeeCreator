// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var coffee = {
	all: function(cb) {
		orm.all("coffee", function(res) {
			cb(res);
		});
	},
	create: function(cols, vals, cb) {
		orm.create("coffee", cols, vals, function(res) {
			cb(res);
		});
	}, 
	update: function(objColVals, condition, cb) {
		orm.update("coffee", objColVals, condition, function(res) {
			cb(res);
		});
	},
	delete: function(condition, cb) {
		orm.delete("coffee", condition, function(res) {
			cb(res);
		});
	}
};
module.exports = coffee;