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

    

}


function validateInput() {
    // validateFName()
    // validateLName()
    // validateEmail()
    // validatePassword()

   if(validateFName() || validateLName() || validateEmail() || validatePassword() ===false) { 
       event.preventDefault() 
    } else {
        location.reload()
    }
}


function validateFName() {
    if (!firstName.value) { 
        if(firstName.classList != "errorInput"){
            let errFirstN = new Error(firstName, "First Name cannot be empty");
            errFirstN.update()
        
            return false
        }
        return false
    }
    else { 
        return true 
    }
}

function validateLName() {
    if (!lastName.value) { 
        if(lastName.classList != "errorInput") {
            let errLastN = new Error(lastName, "Last Name cannot be empty");
            errLastN.update()
            
            return false
        }
        return false
    
    } else { 
        return true 
    }
}

function validateEmail() {
    let checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)

    if (!checkEmail) { 
        if (email.classList != "errorInput") {
            let errEmail = new Error(email, "Looks like this is not an email");
            errEmail.update()
            
            return false
        }
        return false
    } else { 
        return true 
    }
}

function validatePassword() {
    let checkPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)

    if (!checkPass) { 
        if(password.classList != "errorInput") {
            let errPass = new Error(password, "Password cannot be empty");
            errPass.update()
            
            return false 
        }
        return false
    } else { 
        return true 
    }
}

//ADD REMOVE ERROR FEATURE