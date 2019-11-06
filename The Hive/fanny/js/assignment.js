/*  assignment:  define 3 functions, 
function 1:should add 3 numbers(30,60,100),
function 2:should multiply result from functions 1 by 2, 
function 3:should fin the remainder of funtion2 result divided by 15  
*/

//F1
function addNumbers(){
    let num1=30;
    let num2=60;
    let num3=100;
    let num4=num1+num2+num3;
    //console.log("The sum is : ", num4);
    return num4;
}

//F2
function multNumbers(){
    let mult = addNumbers() * 2;
    console.log("The multiplication is : ", mult);
    return mult;
}

//F3
function findRemainder(){
    let remainder = multNumbers() % 15;
    console.log("The remainder is : ", remainder);
    return remainder;
    
}
addNumbers();
multNumbers();
findRemainder();