// the verify function that ensures that a user can't sign in without a username and password
function verify(){
    
    var usName = document.getElementById('usName')
    var password = document.getElementById('password')

    const demoClass = document .getElementsByClassName('txt')


//  The condition allows an aler on screen with 
// the input username and password input and requests for verification  if none
    if (usName.value != '' && password.value != ''){
       alert('Your username is: '+usName.value + '\n Password is: '+password.value)
       //return false
  }
  else{
    alert('Please tell us who you are')
    for (i = 0; i<demoClass.length; i++){
        demoClass[i].style.border = '2px solid red'
    }

  }
}




   