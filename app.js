const form = document.querySelector("#form");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const username = document.querySelector("#username");
const seatrequired = document.querySelector('#seatrequired')

form.addEventListener("submit", (e) => {
  if (!validInput()) {
    e.preventDefault();
  }
});

function validInput() {
  const phoneVal = phone.value.trim();
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const seatrequiredVal =seatrequired.value.trim();
  let success = true;

// phone no validation

  if (phoneVal === "") {
    success = false;
    setError(phone, "Enter phone no.");
  }
  else if(phoneVal.length > 10){
    success = false;
    setError(phone, "Enter 10digit phone no.");
  }
  else if(!validatePhoneNumber(phoneVal) ){
    success = false;
    setError(phone, "Enter valid numbers 0 to 9");
  }  
  else {
    setSuccess(phone);
  }


// username validation

  if (usernameVal === "") {
    success = false;
    setError(username, "Enter username.");
  }
  // else if(usernameVal==("*")||("_")||("=")||("%")||("/")||("-") ){
  //   success = false;
  //   setError(username, "no special character.");
  // }
  else if(!/^[a-zA-Z]*$/g.test(usernameVal)) {
    success = false;
    setError(username, "no special character.");
   
  }
  else if(/(.)\1{2,}/.test(usernameVal)){
    success = false;
    setError(username, "aa-continuously not allowed");

  }
  else if(usernameVal.length >=25 ){
    success = false;
    setError(username, "Enter maximum 20 character.");
  }
  else if(usernameVal.length < 5 ){
    success = false;
    setError(username, "Enter minimum 5 character.");
  }
   else {
    setSuccess(username);
  }


// Seatrequired validation

if(seatrequiredVal ===""){
  success=false;
  setError(seatrequired,"enter no of seats")
} else if(seatrequiredVal >=6){
  success=false;
  setError(seatrequired,"5seats per username")
} else if( !/^[0-9]$/.test(seatrequiredVal)){
  success=false;
  setError(seatrequired,"enter valid no")
} else if(seatrequiredVal <= 0){
  success=false;
  setError(seatrequired,"no of seats cant be zero")

}else{
  setSuccess(seatrequired);
}



// emailvalidation

  if (emailVal === "") {
    success = false;
    setError(email, "Email is required.");
  } else if (!validateEmail(emailVal)) {
    success = false;
    setError(email, "Please enter a valid email.");
  } else {
    setSuccess(email);
  }



  return success;
}

function setError(element, message) {
  const groupControl = element.parentElement;
  const errorElement = groupControl.querySelector(".error");

  errorElement.innerText = message;
  groupControl.classList.add("error");
  groupControl.classList.remove("success");
}

function setSuccess(element) {
  const groupControl = element.parentElement;
  const errorElement = groupControl.querySelector(".error");

  errorElement.innerText = "";
  groupControl.classList.add("success");
  groupControl.classList.remove("error");
}

const validateEmail = (email) => {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};



function validatePhoneNumber(phoneVal) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(phoneVal);
}



