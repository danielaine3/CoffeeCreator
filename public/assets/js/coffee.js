$(function() {
	$(".add-coffee").on("submit", function(event) {
		event.preventDefault();

		var newCoffee = {
			name: $("#co").val().trim()
		};
		console.log("made it here.")
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
	$(".drink").on("click", function(event) {
		var id = $(this).data("id");
		var newDrank = $(this).data("newdrank");

		var newCoffeeState = {
			drank: newDrank
		};

		$.ajax("/api/coffee/" + id, {
			type:"PUT",
			data: newCoffeeState
		}).then(
			function() {
				console.log("changed drank to", newDrank);
				location.reload();
			}
		);
	});
});