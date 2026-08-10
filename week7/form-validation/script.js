const form = document.getElementById("studentForm")
const fullNameInput = document.getElementById("fullName")
const emailInput = document.getElementById("email")
const ageInput = document.getElementById("age")
const passwordInput = document.getElementById("password")
const submitButton = document.getElementById("submitBtn")

console.log(
    form,
    fullNameInput,
    emailInput,
    ageInput,
    passwordInput,
    submitButton
)

const handleSubmit = (event) => {
    event.preventDefault()
    alert("form has been submitted")
        }

add