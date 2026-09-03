function showDetails() {

    let details = document.getElementById("quality-details");
    let button = document.querySelector(".read-more-btn");

    if (details.style.display === "none") {

        details.style.display = "block";
        button.innerHTML = "Hide Details";

    } else {

        details.style.display = "none";
        button.innerHTML = "Read More";
    }
}
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
function filterShipping(category) {

    let rows = document.querySelectorAll(".shipping-table tbody tr");

    rows.forEach(function(row) {

        let device = row.cells[0].textContent.toLowerCase();

        if (category === "all") {
            row.style.display = "";
        }
        else if (category === "smartphones" && device.includes("smartphones")) {
            row.style.display = "";
        }
        else if (category === "laptops" && device.includes("laptop")) {
            row.style.display = "";
        }
        else if (category === "accessories" && device.includes("accessories")) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }

    });
}