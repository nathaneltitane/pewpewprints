// modules //

$(function() {

	$.get("/modules/head.html", function(data) {

		$("head").append(data);

	});

	$.get("/modules/cart.html", function(data) {

		$("#cart").append(data);

	});

	$.get("/modules/drawer.html", function(data) {

		$("#drawer").append(data);

	});

	$.get("/modules/footer.html", function(data) {

		$("#footer").append(data);

	});

	$.get("/modules/contact.html", function(data) {

		$("#contact").append(data);

	});

	$.get("/modules/print.html", function(data) {

		$("#print").append(data);

	});

	$.get("/modules/quote.html", function(data) {

		$("#quote").append(data);

	});
});
