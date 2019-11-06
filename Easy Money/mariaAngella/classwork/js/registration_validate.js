var credential = () =>{
    var userid = document.getElementById('userId')
    var password = document.getElementById('Password')
    var name = document.getElementById('Name')
    var country = document.getElementById('Country')
    var zipcode = document.getElementById('zipCode')
    var email = document.getElementById('Email')

    if (userid.value=='' && password.value=='' && name.value=='' && country.value=='' && zipcode.value=='' && email.value==''){
    var style = 'border 2px red'
    
}
    else if (userid.value == '' && password.value == '' && name.value == '' && country.value == '' && zipcode.value == '' && email.value == ''){
        alert('please fill in your credentials')
    }
   
    else if (userid.value!== '' && password.value!== '' && name.value == '' && country.value == '' && zipcode.value == '' && email.value == '') {
        alert('please complete all the fields')
    }

    else if (userid.value == '' && password.value == '' && name.value == '' && country.value == '' && zipcode.value == '' && email.value == '') {
        alert('Thank you for completing your registration')
    }
}

/* var valid =()=>{
    var lang1 = document.getElementById('lang1')
    var lang2 = document.getElementById('lang2')

    if (lang1.value!=='' && lang2.value!==''){
        alert ('check one of the two options of the languages you know')
        var style = 'border 2px red'
    }
    var range1 = document.getElementById('id')
    if (id.value=='' && id.value.length<4 && id.value.length>12){
        alert('input values between 4 and 12 please'){

        }
    }
} */