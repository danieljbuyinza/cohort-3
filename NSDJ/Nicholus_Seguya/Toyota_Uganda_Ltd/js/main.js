
//Accessing all elements with class input-field
const demoQueryAll = document.querySelectorAll(".input-field");

// changing border color of all input fields
demoQueryAll.forEach(query => {
    query.style.border = "2px solid rgb(211, 232, 252)";
});

/* function to check for username and password fields */
var check_nameAndpassword = () => {
    //Create variables for all elements
    var userName = document.getElementById("txt-username");
    var passw = document.getElementById("txt-password");

    if (userName.value == "" && passw.value == "") {
        alert("Username or Password should not be empty");
        userName.style.border = "2px solid red";
        passw.style.border = "2px solid red";
        //return false
    }
    if (userName.value == "" && passw.value != "") {
        alert("Username should not be empty");
        userName.style.border = "2px solid red";
    }
    if (userName.value != "" && passw.value == "") {
        alert("Password should not be empty");
        passw.style.border = "2px solid red";
    }
    if (userName.value != "" && passw.value != "") {
        alert(
            "Your Username is : " +
            userName.value +
            "\nYour password is : " +
            passw.value
        );
    }
};

/* Creating a Select handler that 
  will be triggered after event select */
var displayselect = event => {
    const display = document.getElementById("display");
    const select = event.target.value.substring(event.selectionStart, event.target.selectionEnd);
    alert(`Your Selection is : ${select}`);
};
const input = document.querySelector("input");
input.addEventListener("select", displayselect);


/* Creating a reset handler that 
  will be triggered after event reset */
// reset form and display time stamp
var formReset = event => {
    display.textContent = `Form Reset! Time Stamp : ${event.timeStamp}`;
};
const form = document.getElementById("form");
const display = document.getElementById("display");
form.addEventListener("reset", formReset);