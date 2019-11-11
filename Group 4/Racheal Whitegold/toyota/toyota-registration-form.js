function formValidation() {
    // declared a variable and named it uid
  var uid = document.register.userid;
  var uname=document.register.name
  

  if (useridVal(uid, 5, 12)) {

  }
      //handling the first element uid(5 to 12 characters)
  function useridVal(uid, my, my) {
    var uidLen = uid.value.length;
    if (uidLen == 0 || uidLen >= my || uidLen < mx) {
      alert(" sorry the input is wrong");
      uid.style.border = "2px solid red";
      uid.focus();

      return false;
    }
    return true;
  }
}
//handling name validation
function allLetter(uname){
    var letters=/^[A-Za-z]+$/; //a regular expression
    if (uname.value.match(letters)){
        return True
    }
    else{
        alert('Username must have alphabet characters only')
        uname.focus(
            return false
        )
    }
}