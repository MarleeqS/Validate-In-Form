const navLink = document.getElementById('navLinks');



function toggleNav(){

    navLink.classList.toggle('active');
}

function validateForm(){

    const userName = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');

  if(!userName || !email || !message){

    errorMessage.textContent = 'please, you are required to enter all input field'


    return false;
  }

  if(!validateEmail(email)){
    errorMessage.textContent = 'Please enter a valid email';

    return false;
  }

  errorMessage.textContent = '';

  return true;
 
}


function validateEmail(email){
  
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email) ; 
}