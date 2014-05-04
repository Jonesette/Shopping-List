$(document).ready(function() {
	// Set Initial Variable Values
	var description = "Description";
	var quantity = +"3";
	var price = +"5";

	//Clear Description on click
	$('.description').one('focus', function() {
		this.value = '';
	});

	// Get Description
	$('.item-details').on('focusout', '.description', function() {
		var description = $(this).val();
		alert(description);
	});

	// Get Quantity
	$('.item-details').on('focusout', '.quantity', function() {
		var quantity = +$(this).val();
		alert(quantity);
	});

	// Get Price
	$('.item-details').on('focusout', '.price', function() {
		var price = +$(this).val();
		alert(price);
	});

	// Set Total equal to Quantity * Price
	$('#add-item').click(function(event) {
		event.preventDefault();
		var itemtotal = quantity * price;
		alert(itemtotal);
		// Show Table
		$('.table').show();
		// Append to Table
		$('#results tbody').append('<tr><td>'+description+'</td><td>'+quantity+'</td><td>'+'$ '+price+'</td><td>'+'$ '+itemtotal+'</td><td class="delete"><form><input type="submit" value="Delete"></form></td></tr>');
	});

});