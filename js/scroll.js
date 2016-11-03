$(window).scroll(function () {
    $(".bg").css("background-position","50% " + ($(this).scrollTop() / -1.7) + "px");
});