function el (elementID) {
    return document.getElementById(elementID)
}

var firstName = el("firstName")
var lastName = el("lastName")
var DOB = el("DOB")
var email = el("email")
var phoneNumber = el("phoneNumber")
var password = el("password")
var confirmPassword = el("confirmPassword")
var submitBtn = el("submitBtn")

const patterns = {
    phoneNumber: /^(\+234)?\d{10}$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    firstName: /^[a-z]{3,20}$/i,
    lastName: /^[a-z]{3,20}$/i,
    email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/,
    confirmPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    DOB: /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./]([0]?[1-9]|[1][0-2])[./]([0-9]{4}|[0-9]{2})$/
}

const ourInputs = document.querySelectorAll('input')
for (let i = 0; i < ourInputs.length; i++){
    ourInputs[i].addEventListener('keyup', validateForm)
}

phoneNumber.addEventListener('blur', changeNumber)
confirmPassword.addEventListener('blur', checkPassword)

function changeNumber (e) {
    let key = e.target.id;
    let formerValue = e.target.value;
    let newArr = formerValue.split('');
    if (newArr[0] == "+" && newArr[1] == "2" && newArr[2] == "3" && newArr[3] == "4"){

    }
    else newArr[0] = "+234";
    e.target.value = newArr.join(''); 

    if (key === 'phoneNumber' && patterns[key].test(e.target.value) === false){
        document.getElementsByTagName('span')[4].className = 'show'
    }
        
    if (key === 'phoneNumber' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[4].className = 'doNotShow'
        document.getElementsByTagName('input')[4].className = 'green-border'
    }    
}

function checkPassword (e) {
    key = e.target.id;
    if (key === 'confirmPassword' && patterns[key].test(e.target.value) === false ){
        document.getElementsByTagName('span')[6].className = 'show'
    }
        
    if (key === 'confirmPassword' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[6].className = 'doNotShow'
        document.getElementsByTagName('input')[6].className = 'green-border'
        
    }

    if (key === 'confirmPassword' && password.value != e.target.value) {
        document.getElementsByTagName('span')[6].className = 'show'
        document.getElementsByTagName('input')[6].classList.remove = 'green-border'

    }
}


function validateForm (e) {
    let key = e.target.id;
    // logic for firstName
    if (key === 'firstName' && patterns[key].test(e.target.value) === false){
        document.getElementsByTagName('span')[0].className = 'show'
    }

    if (key === 'firstName' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[0].className = 'doNotShow'
        document.getElementsByTagName('input')[0].className = 'green-border'
    }

    // logic for lastName

    if (key === 'lastName' && patterns[key].test(e.target.value) === false){
        document.getElementsByTagName('span')[1].className = 'show'
    }
        
    if (key === 'lastName' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[1].className = 'doNotShow'
        document.getElementsByTagName('input')[1].className = 'green-border'
    }

    // logic for DOB

    if (key === 'DOB' && patterns[key].test(e.target.value) === false){
        document.getElementsByTagName('span')[2].className = 'show'
    }
        
    if (key === 'DOB' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[2].className = 'doNotShow'
        document.getElementsByTagName('input')[2].className = 'green-border'
    }
    
    // logic for email

    if (key === 'email' && patterns[key].test(e.target.value) === false){
        document.getElementsByTagName('span')[3].className = 'show'
    }
        
    if (key === 'email' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[3].className = 'doNotShow'
        document.getElementsByTagName('input')[3].className = 'green-border'
    }

    // logic for phoneNumber

    if (key === 'phoneNumber' && patterns[key].test(e.target.value) === false){
        document.getElementsByTagName('span')[4].className = 'show'
    }
        
    if (key === 'phoneNumber' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[4].className = 'doNotShow'
        document.getElementsByTagName('input')[4].className = 'green-border'
    }

    // logic for password

    if (key === 'password' && patterns[key].test(e.target.value) === false){
        document.getElementsByTagName('span')[5].className = 'show'
    }
        
    if (key === 'password' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[5].className = 'doNotShow'
        document.getElementsByTagName('input')[5].className = 'green-border'
    }

    // logic for confirmPassword
    key = e.target.id;
    if (key === 'confirmPassword' && patterns[key].test(e.target.value) === false ){
        document.getElementsByTagName('span')[6].className = 'show'
    }
        
    if (key === 'confirmPassword' && patterns[key].test(e.target.value)){
        document.getElementsByTagName('span')[6].className = 'doNotShow'
        document.getElementsByTagName('input')[6].className = 'green-border'
        
    }
    
    if (key === 'confirmPassword' && password.value != e.target.value) {
        document.getElementsByTagName('span')[6].className = 'show'
        document.getElementsByTagName('input')[6].classList.remove = 'green-border'

    }

    
}


