// quote //

$(document).ready(function() {

	var field_id = $("#quote form input[name='part-id']");

	var field_name = $("#quote form input[name='part-name']");

	$.each(

		$(".product"),

			function (index, item) {

				var id  = $(item).find(".part-identifier")[0].innerText;

				var name  = $(item).find(".part-name")[0].innerText;

				var button = $(item).find("[for='modal-quote']")[0];

				$(button).on(
					"click",

					function (event) {

						$(field_id).attr("value", id);

						$(field_name).attr("value", name);

					}

				);

			}

	);

});
