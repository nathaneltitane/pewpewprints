// modules //

$(function() {

	$.get("/modules/head.html", function(data) {

		$("head").append(data);

	});

	$.get("/modules/notice.html", function(data) {

		$("#notice").append(data);

	});

	$.get("/modules/models.html", function(data) {

		$("#models").append(data);

	});

	$.get("/modules/footer.html", function(data) {

		$("#footer").append(data);

	});

});
