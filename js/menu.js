(function() {

    "use strict";

    var toggles = document.querySelectorAll(".c-hamburger");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
        });
    }

})();

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            document.getElementById('menu').style.backgroundColor = '#fff';
            $('#menu').addClass('rolling');
        } else {
            document.getElementById('menu').style.backgroundColor = 'transparent';
            $('#menu').removeClass('rolling');
        }
    });
});