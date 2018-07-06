// $("a").each(function () {
//     if ($(this).attr('href') === window.location.pathname) {
//     	console.log('test');
//         $(this).css('display', 'none');
//     }
// });

$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});