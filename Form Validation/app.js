const form = document.querySelector('#form')
const username = document.querySelector('#usrname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cnfrmpass = document.querySelector('#cnfrmpasswrd')

form.addEventListener('submit',(evnt) =>{
    if(!validateInputs()){
        evnt.preventDefault()
    }
})

function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cnfrmpassVal = cnfrmpass.value.trim()
    let success = true

    if(usernameVal === ''){
        success = false
        setError(username,'Username is required')
    }
    else
        setSuccess(username)

    if(emailVal === ''){
        success = false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false
        setError(email,'Please enter a valid email id')
    }
    else   
        setSuccess(email)

    if(passwordVal === ''){
        success = false
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false
        setError(password,'Password should be atleast 8 characters')
    }
    else
        setSuccess(password)

    if(cnfrmpassVal === ''){
        success = false
        setError(cnfrmpass,'Confirm password is required')
    }
    else if(cnfrmpassVal !== passwordVal){
        success = false
        setError(cnfrmpass,"Password dosen't match")
    }
    else
        setSuccess(cnfrmpass)

    return success
}

function setError(element,message){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup = element.parentElement
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = ''
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}

const validateEmail = (email) => {
    return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
}