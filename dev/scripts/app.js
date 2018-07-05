console.log('test')

$("a").each(function () {
    if ($(this).attr('href') === window.location.pathname) {
        $(this).css('color', '#000');
    }
});