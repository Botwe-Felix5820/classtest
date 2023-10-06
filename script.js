$('.message').fadeOut(500);
$('.btn').click(function() {
    $('.message').fadeIn(500);
});

$('.close').click(function() {
    $('.message').fadeOut(500);
});

$(document).ready(function() {
    $('#preloader').hide(500)
})