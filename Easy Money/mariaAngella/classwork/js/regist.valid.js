function formValidation (){
    /* declare variables to access form elements */
    var uid = document.registration.userId
    var uname = document.registration.name
    // var paswrd = document.registration.Password
    var uadd = document.registration.Address
if (useridVal(uid,5,12)){
    if(allLetter(uname)){ // this if should return true for the outer if to be executed

    }
// alert ('working')
}

/* handling the first element userid(5 to 12) */
function useridVal(uid,mx,my){
    var uidLen = uid.value.length
    if (uidLen==0 || uidLen>=my || uidLen<mx){
        uid.focus() // takes the cursor to userid input element
        uid.style.border = '2px solid red'
        return false //very important or else the form will post to the database
    }
return true
}

//handling the name validation
function allLetter(uname){
var letters =/^[A-Za-z]+$/; //string is a mixture/begins with(^) of uppercase and lowercase letters and nothing more($)
if(uname.value.match(letters)){
    return true
}
else{
    alert ('Username must have alphabet characters only')
    uname.focus()
    return false
}

    //handling the password validation
    function passwrd(upswd, mx, my) {
        var up = uid.value.length
        if (uidLen == 0 || uidLen >= my || uidLen < mx) {
            uid.focus() // takes the cursor to userid input element
            uid.style.border = '2px solid red'
            return false //very important or else the form will post to the database
        }
        return true
    }


    // handling the address validation
function alphanumeric(uadd){
var letters =/^[0-9a-zA-Z]+$/ //regular expressions
    if (uadd.value.match(letters)) {
        return true
    }
    else {
        alert('Address must be alphanumeric only')
        uadd.focus()
        return false
    }
}

}
}