$(document).ready(function() {
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });
});

$(document).ready(function() {
    $("a").each(function() {
        if (this.a == window.location.a) {
            $(this).addClass("active-button");
        }
    });
});