let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("#form")
let formError = document.querySelector("#formError")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem("users")) || []
    let matchedUser = users.find(user => user.email === email.value && user.password === password.value)

    if(matchedUser) {
        formError.textContent = ""
        localStorage.setItem("loggedUser", JSON.stringify(matchedUser))
        form.reset()
        setTimeout(() => {
            window.location = "../html/home.html"
        }, 500)
    } else {
        formError.textContent = "Invalid email or password"
    }
})