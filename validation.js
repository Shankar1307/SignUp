const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e =>{
    e.preventDefault();     //To avoid reloading the website
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordValue2 = password2.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username cannot be blank');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){      //isEmail tag is used to check the email is in the email form
        setError(email, 'Email is not valid');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password cannot be blank');
    }
    else if(passwordValue.length > 10){
        setError(password, 'Password must be less than 10 characters');
    }
    else{
        setSuccess(password);
    }
   
    if(passwordValue2 === ''){
        setError(password2, 'Confirm password cannot be blank');
    }
    else if(passwordValue !== passwordValue2){
        setError(password2, 'Confirm password does not match!');
    }
    else{
        setSuccess(password2);
    }

    //call by value
    function setError(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');    //for <small> tag there is no id is given, so using querySelector tag we can call them.
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function isEmail(email){
        return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
    }

}
