let open = false;
let isMenuHandlerBound = false;

function toggleMenu() {
    if (!open) {
        $("#menu ul").slideDown();
        open = true;
    } else {
        $("#menu ul").slideUp();
        open = false;
    }
}

function menuHandler() {
    console.log("menu handler");
    if ($(window).width() < 600) {
        $("#menu ul").hide();
        // Only bind the click handler once
        if (!isMenuHandlerBound) {
            $("#menu").on('click.menuToggle', toggleMenu);
            isMenuHandlerBound = true;
        }
    } else {
        $("#menu ul").show();
        // Remove the click handler for desktop view
        if (isMenuHandlerBound) {
            $("#menu").off('click.menuToggle');
            isMenuHandlerBound = false;
        }
        // Reset open state when switching to desktop
        open = false;
    }
}

$(document).ready(function () {
    menuHandler();
    $(window).resize(function() {
        menuHandler();
    });
});
