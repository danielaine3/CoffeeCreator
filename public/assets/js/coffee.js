$(function() {
	$(".drank").on("click", function(event) {
		var id = $(this).data("id");
		var newCoffee = $(this).data("newcoffee");

		var newCoffeeState = {
			drank: newCoffee
		};

		$.ajax("/api/coffee/" + id, {
			type:"PUT",
			data: newCoffeeState
		}).then(
			function() {
				console.log("changed drank to", newCoffee);
				location.reload();
			}
		);
	});
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newCoffee = {
			name: $("#co").val().trim()
		};

		$.ajax("/api/coffee", {
			type:"POST",
			data:newCoffee
		}).then(
			function() {
				console.log("created new coffee");
				location.reload();
			}
		);
	});
});