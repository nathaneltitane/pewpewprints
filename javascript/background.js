// background //

$(document).ready(function() {

	var logo_array = [
		['logo-black'],
		['logo-blue'],
		['logo-fuschia'],
		['logo-green'],
		['logo-grey'],
		['logo-orange'],
		['logo-purple'],
		['logo-red'],
		['logo-teal'],
		['logo-yellow']
	];

	var index = Math.floor(Math.random() * logo_array.length);

	$('#background').css(

		'background-image',

		'url("/logo/' + logo_array[index] + '.svg")'


	);

});
