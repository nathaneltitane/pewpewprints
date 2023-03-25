// quote //

$(document).ready(function() {

	var field_id = $("#quote form input[name='part-id']");

	var field_name = $("#quote form input[name='part-name']");

	$.each(

		$(".product"),

			function (index, product) {

				var id  = $(product).find(".product-identifier")[0].innerText;

				var name  = $(product).find(".product-name")[0].innerText;

				var button = $(product).find("[for='modal-quote']")[0];

				id = id.trim();

				name = name.trim();

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
