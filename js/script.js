const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const claimBtn = document.getElementById('claimBtn')

claimBtn.addEventListener("click", validateInput)

class Error {
    constructor (classErr, textErr){
        this.classErr = classErr
        this.textErr = textErr
    }

    static createErrorElement(text) {
        let p = document.createElement('p')
        p.textContent = text
        p.classList.add('errorTxt')

        return p 
    }

    update() {
        this.classErr.classList.add('errorInput')
        this.classErr.parentElement.appendChild(Error.createErrorElement(this.textErr))
    }

    remove() {
        this.classErr.classList.remove('errorInput')
        
        console.log(this.classErr.nextElementSibling)
        this.classErr.nextElementSibling.remove()
    }

}


function validateInput() {
    validateFName()
    validateLName()
    validateEmail()
    validatePassword()

    event.preventDefault()

   if(false) { 
       event.preventDefault() 
    } else if (validateFName() && validateLName() && validateEmail() && validatePassword() === true){
        location.reload()
    }
}


function validateFName() {
    let errFirstN = new Error(firstName, "First Name cannot be empty");

    if (!firstName.value) { 
        if(firstName.classList != "errorInput"){
            errFirstN.update()
        
            return false
        }
        return false
    } else {
        if(firstName.classList == "errorInput"){
            errFirstN.remove()

            return true 
        }
        
        return true 
    }
}

function validateLName() {
    let errLastN = new Error(lastName, "Last Name cannot be empty");

    if (!lastName.value) { 
        if(lastName.classList != "errorInput") {
            
            errLastN.update()
            
            return false
        }
        return false
    
    } else {
        if(lastName.classList == "errorInput"){
            errLastN.remove()

            return true
        }
        
        return true 
    }
}

function validateEmail() {
    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    let errEmail = new Error(email, "Looks like this is not an email");

    if (!checkEmail) { 
        if (email.classList != "errorInput") {   
            errEmail.update()
            
            return false
        }
        return false
    } else {
        if(errEmail.classList == "errorInput"){
            errEmail.remove()

            return true
        }
        
        return true 
    }
}

function validatePassword() {
    let checkPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)
    let errPass = new Error(password, "Password cannot be empty");

    if (!checkPass) { 
        if(password.classList != "errorInput") {
            errPass.update()
            
            return false 
        }
        return false
    } else {
        if(errPass.classList == "errorInput"){
            errPass.remove()

            return true
        }
        
        return true 
    }
}