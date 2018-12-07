$(".toggle-icon").click(function () {
  $('#nav-icon').toggleClass("pushed");
  $(this).toggleClass("on");
  $('.nav-container').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});


$('.round').click(function(e) {
  e.preventDefault();
  e.stopPropagation();
  $('.arrow').toggleClass('bounceAlpha');
});


