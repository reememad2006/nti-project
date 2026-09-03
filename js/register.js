let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")

let regFirst = /^[A-Za-z]{3,8}$/
let regLast = /^[A-Za-z]{3,8}$/
let regEmail = /^[A-Za-z][A-Z a-z 0-9 _]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let regPass = /^[A-Z a-z 0-9]{8,}$/

let fnameError = document.getElementById("fnameError")
let lnameError = document.getElementById("lnameError")
let emailError = document.getElementById("emailError")
let passwordError = document.getElementById("passwordError")
let success = document.getElementById("success")

let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let isValid = true
    if (fname.value.trim() === "") {
        fnameError.textContent = "this field is required"
        isValid = false
    } else if (!regFirst.test(fname.value)) {
        fnameError.textContent = "first name must be 3-8 characters"
        isValid = false
    } else {
        fnameError.textContent = ""
    }

    if (lname.value.trim() === "") {
        lnameError.textContent = "this field is required"
        isValid = false
    } else if (!regLast.test(lname.value)) {
        lnameError.textContent = "last name must between 3-8 characters"
        isValid = false
    } else {
        lnameError.textContent = ""
    }

    if (email.value.trim() === "") {
        emailError.textContent = "this field is required"
        isValid = false
    } else if (!regEmail.test(email.value)) {
        emailError.textContent = "please enter a valid email address"
        isValid = false
    } else {
        emailError.textContent = ""
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "this field is required"
        isValid = false
    } else if (!regPass.test(password.value)) {
        passwordError.textContent = "password must be at least 8 characters"
        isValid = false
    } else {
        passwordError.textContent = ""
    }

    if (isValid) {
        success.textContent = "success"
        let users = JSON.parse(localStorage.getItem("users")) || []
        users.push({
            fname: fname.value,
            lname: lname.value,
            email: email.value,
            password: password.value,
        })
        localStorage.setItem("users", JSON.stringify(users))
        
        form.reset()
        setTimeout(() => {
            window.location = "../html/login.html"
        }, 500)
    }
})