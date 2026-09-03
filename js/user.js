let loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
let buttons = document.getElementById("buttons")
let userInfo = document.querySelector(".userInfo")

if (loggedUser) {
    buttons.classList.add("d-none")
    userInfo.classList.remove("d-none")
    userInfo.innerHTML = `
    <div class="d-flex align-items-center gap-3">
        <span class="fw-semibold">Hi, ${loggedUser.fname}</span>
        <button id="logoutBtn" class="btn btn-outline-danger btn-sm">Logout</button>
    </div>
    `

    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("loggedUser")
        window.location = "../html/login.html"
    })
} else {
    buttons.classList.remove("d-none")
    userInfo.classList.add("d-none")
}