$(function() {
    $('.stackable').click(function() {
    var adelante = $(".stackable.front");
    var atras = $(".stackable:not(.front)");

    atras.addClass("zoom-in");
    atras.addClass("front");
    adelante.addClass("zoom-out");
    adelante.removeClass("front");
    });
    
    $('.stackable').bind("webkitAnimationEnd", function() {
        $(".stackable").removeClass("zoom-in zoom-out");
    });
});
