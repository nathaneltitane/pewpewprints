// quote //

// part id and name filled from the product whose [ QUOTE ] button was clicked
// delegated from the document - drawer and quote modules load after the page

$( document ).on ( 'click', "[for='modal-quote']:not(.modal-close):not(.modal-background)", function ( ) {

	var product = $( this ).closest ( '.product' );

	var id = '';

	var name = '';

	// footer button - no product - fields cleared

	if ( product.length ) {

		id = product.find ( '.product-identifier' ).text ( ).trim ( ).toUpperCase ( );

		name = product.find ( '.product-name' ).text ( ).trim ( ).toUpperCase ( );
	}

	$( "#quote form input[name='part-id']" ).val ( id );

	$( "#quote form input[name='part-name']" ).val ( name );

} );
