const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const claimBtn = document.getElementById('claimBtn')

const firstNameErrTxt = document.createTextNode("First Name cannot be empty");
const lastNameErrTxt = document.createTextNode("Last Name cannot be empty");
const emailErrTxt = document.createTextNode("Looks like this is not an email");
const passErrTxt = document.createTextNode("Not a valid password");
const passErrTxt0 = document.createTextNode("Password cannot be empty");


claimBtn.addEventListener("click", validateInput)


function validateInput(){
    if( validateFName() || validateLName() || validateEmail() || validatePass() === false) {
        event.preventDefault()
    } else {
        !event.preventDefault()
    }
    
}

function validateFName() {
    if (firstName.value === "") {
        let p = document.createElement('p')
        p.appendChild(firstNameErrTxt)
        p.classList.add('errorTxt')

        firstName.classList.add('errorInput')
        firstName.parentElement.appendChild(p)
        return(false)
    }
}

function validateLName() {
    if (lastName.value === "") {
        let p = document.createElement('p')
        p.appendChild(lastNameErrTxt)
        p.classList.add('errorTxt')

        lastName.classList.add('errorInput')
        lastName.parentElement.appendChild(p)
        return(false)
    }
}


function validateEmail(){

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return(true)
    } else {
            let p = document.createElement('p')
            p.appendChild(emailErrTxt)
            p.classList.add('errorTxt')

            email.classList.add('errorInput')
            email.parentElement.appendChild(p)
            return(false)
        }
}

function validatePass() {

    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)) {
        return(true)
    } else if(password.value === '') {
        let p = document.createElement('p')
        p.appendChild(passErrTxt0)
        p.classList.add('errorTxt')

        password.classList.add('errorInput')
        password.parentElement.appendChild(p)
        return(false)

    } else {
            let p = document.createElement('p')
            p.appendChild(passErrTxt)
            p.classList.add('errorTxt')

            password.classList.add('errorInput')
            password.parentElement.appendChild(p)
            return(false)
        }
}