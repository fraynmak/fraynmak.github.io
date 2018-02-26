console.log('jquery is loaded');
$(document).ready( function() {

  var hamburger = $(".hamburger");

  hamburger.on("click", function(e) {

  	console.log('clicked');

    hamburger.toggleClass("is-active");



//     Do something else, like open/close menu
    $('div.menu').toggle('.open-menu');
    $('#introduction').toggle('#introduction');

    if ($('#introduction').data('state') === 'hidden') {

	$('#introduction').data('state','show');
	$('#introduction').show();

} else {
	$('#introduction').data('state','show');
	$('#introduction').data('state','hide');
}

}

  $('.card').fadeIn('slow');
});