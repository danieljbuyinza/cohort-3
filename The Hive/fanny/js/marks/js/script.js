function validate(){
    
    var username = document.getElementById('username')
    var password = document.getElementById('password')

    const demoClass = document.getElementsByClassName('txt')


//  The condition allows an alert on screen with 
// the input username and password input and requests for verification  if none
    if (username.value != '' && password.value != ''){
       alert('Your username is: '+username.value + '\n Password is: '+password.value)
       //return false
  }
  else{
    alert('Please fill in your Username and Password')
    for (i = 0; i<demoClass.length; i++){
        demoClass[i].style.border = '1px solid red'
    }

  }
}
