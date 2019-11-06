/*creating a function called logset to enable a user reset form when
they click on cancel button */

function logReset(event){
    log.textContent =`Form reset!time stamp: ${event.timeStamp}`
}
const form = document.getElementsByTagName('form')
const log = document.getElementById('log')
form[0].addEventListener('reset',logReset)

/* starting up a new object or 'function' called check*/ 
function check(e){
    // creating properties and accessing the elements in the html file
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    if (username.value==''&& password.value==''){
        alert ('enter password or username')

        username.style.border='2px solid red'
        password.style.border='2px solid red'
    }
    else if (username.value!==''&& password.value==''){
        alert ('enter your password')
        password.style.border='2px solid red'
    }

    else if (password.value!==''&& username.value==''){
        alert('enter your user name')
        username.style.border='2px solid red'
    }
else if (password.value!==''&& username.value!==''){
    alert('thanks for loging in')
}
}
//accessing the login button with the id 'login'
var login =document.getElementById('login')
// inserting an event listener to the login button
/*note on event listeners you insert the name the of the function that is to be 
 called on the tag where the event handler is to happen*/
login.addEventListener('click',check)