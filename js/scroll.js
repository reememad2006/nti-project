window.onscroll = function () {
    let button = document.getElementById("backToTop");

    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function backToTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}