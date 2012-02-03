$(function() {
    $('.stackable').click(function() {
	var adelante = $(".stackable.adelante");
	var atras = $(".stackable:not(.adelante)");

	atras.addClass("zoom-in");
	atras.addClass("adelante");
	adelante.addClass("zoom-out");
	adelante.removeClass("adelante");
    });
    
	$('.stackable').bind("webkitAnimationEnd", function() {
		$(".stackable").removeClass("zoom-in zoom-out");
	});
});


