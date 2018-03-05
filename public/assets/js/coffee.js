$(function() {
	$(".add-coffee").on("click", function(event) {
		var id = $(this).data("id");
		var newDrank = $(this).data("newdrank");

		var newDrankState = {
			dranks: newDrank
		};

		$.ajax("/api/coffee/" +id, {
			type:"PUT",
			data: newDrankState
		}).then(
			function() {
				console.log("changed drank to", newDrank);
				location.reload();
			}
		);
	});
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newDrank = {
			name: $("#co").vale().trim(),
			drank: $("[name=drank]:checked").val().trim()
		};

		$.ajax("/api/cats", {
			type:"POST",
			data:newDrank
		}).then(
			function() {
				console.log("created new coffee");
				location.reload();
			}
		);
	});
});