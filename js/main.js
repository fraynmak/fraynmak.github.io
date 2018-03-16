console.log('jquery is loaded');
$(document).ready( function() {

  var hamburger = $(".hamburger");

  hamburger.on("click", function(e) {

    hamburger.toggleClass("is-active");

    // Do something else, like open/close menu
    $('div.menu').toggle('.open-menu');
    $('div#introduction').hide('#introduction');
//data-state hide&show 
  if ($('#introduction').data('state') === 'hidden') {

    $('#introduction').data('state','show');

    $('#introduction').slideDown();
} else {
  $('#introduction').data('state','hidden');
  $('#introduction').hide();
}
});


});