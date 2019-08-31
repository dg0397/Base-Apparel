import "./styles.scss";
import {importImages} from "./app/images"

importImages();

const input = document.querySelector('input');//select all inputs
const btn = document.querySelector('button'); //select the button
const alertDiv = document.querySelector('.container__alert');
const form = document.querySelector('form');
const hero = document.querySelector('.container__img img');

form.reset();

//this function checks the email with regular expressions
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
//This function is called when the input is out of focus.
function alertInput(){
    if(this.value.length === 0){
        
        alertDiv.textContent = "Email cannot be empty"; // write the message in the div
        alertDiv.classList.add('alert'); //add the alert class to the div

        this.classList.add('input-alert'); //add the input-alert class to the input
    
    }else if(this.name === 'email' && !validateEmail(this.value)){
        
        alertDiv.textContent = 'Please provide a valid email'; //check the email and write a message if email is wrong
        alertDiv.classList.add('alert'); //add the alert class to the div
    
    }else{
    
        alertDiv.textContent = ''; // remove the message in the div
        this.classList.remove('input-alert'); // remove the input-alert class
        
    }
}

//this functions checks the input
function checkInputs(){
   

        
        if(input.value.length === 0){
            
            alertDiv.textContent = "Email cannot be empty";// write the message in the div
            alertDiv.classList.add('alert');//add the alert class to the div

            input.classList.add('input-alert');//add the input-alert class to the input

        }
    

}

function changeColorText(){
    
        this.style.color = "#1c1c1c"
        
}

function backgroundChange(){
    
    if(innerWidth >= 1200){
        hero.src = "./static/images/hero-desktop.jpg";
    }else{
        hero.src = "./static/images/hero-mobile.jpg";
    }

}

addEventListener('resize',backgroundChange)

addEventListener('DOMContentLoaded',backgroundChange);

input.addEventListener('blur', alertInput);
input.addEventListener("focus", changeColorText);
btn.addEventListener('click', checkInputs);