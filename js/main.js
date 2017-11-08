$('.hamburger').on('click', function() {
    $('.side-drawer').toggle();
});

$('.parent').on('click', function(e) {
    $('nav ul li').removeClass('active');
    $(this).addClass('active');
});