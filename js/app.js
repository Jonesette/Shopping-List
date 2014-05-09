$(document).ready(function() {
	// Set Initial Variable Values
	var description = "Add a description.";
	var quantity = "0";
	var price = "0";

	//Disable Enter to submit form.
	$( 'form' ).bind('keypress', function(e){
   		if ( e.keyCode == 13 ) {
   			return false;
   		}
 	});

	//Clear Description on click
	$('.description').one('focus', function() {
		this.value = '';
	});

	// Get Description
	$('.item-details').on('focusout', '.description', function() {
		description = $(this).val();
		//alert(description);
	});

	// Get Quantity
	$('.item-details').on('focusout', '.quantity', function() {
		quantity = +$(this).val();
		//alert(quantity);
	});

	// Get Price
	$('.item-details').on('focusout', '.price', function() {
		price = +$(this).val();
		//alert(price);
	});

	// Set Total equal to Quantity * Price
	$('#add-item').click(function(event) {
		event.preventDefault();
		var itemtotal = quantity * price;
		//alert(itemtotal);
		// Show Table
		$('.table').show();
		// Append to Table
		$('#results tbody').append('<tr class="item"><td>'+description+'</td><td>'+quantity+'</td><td>'+'$ '+price+'</td><td>'+'$ '+itemtotal+'</td><td class="controls"><form><input class="delete" type="button" value="Delete-Item"></form></td></tr>');
	});

	// Add Delete Item Function
	$('.table').on('click', '.delete', function() {
		$(this).closest('tr').remove();
	});
});