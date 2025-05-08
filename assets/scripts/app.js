    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
        document.querySelector("nav").style.height = "7vh";
        document.querySelector("nav").style.backgroundColor = "rgba(250, 250, 250, 0.85)";
    }
    else {
        document.querySelector("nav").style.height = "10vh";
        document.querySelector("nav").style.backgroundColor = "rgba(250, 250, 250, 1)";
    }
}