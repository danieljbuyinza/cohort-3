/*/my first js example -- addition of two numbers
let num1 =100;
//2n variable
var num_2 = 40;

//capturing the sum
num_3 = num1+num_2;
console.log('The answer is :\t' +num_3) // the slash '\' means to concutinate \t-space \n-new line

*
var x=5;
if (x<=5){

console.log("exact");
}

//checks two scenario's
/*var x=10;
if (x<5){

console.log("exact");
}
else{
console.log("exit")
}

//using if -- elseif --else
var x=50;
if (x>50){

console.log("you have passed");
}
else if(x=50){
console.log("You are on probation")
}
else{
console.log("You have failed")
}*/
//use of arithmeti operators

/*let x=10;y=30;
let z=x+y;//add
console.log("The sum is \t" +z);

let q=x-y;//subtract
console.log("The differene is \t" +q);

let t=x*y;//multiply
console.log("The multiplition is \t" +t);

let w=x/y;//division
console.log("The division is \t" +w);

//let v=x++;//++ after 
//console.log("The answer is \t" +v);//value remains same

//let l=++x;//increment b4 variable
//console.log("The answer is \t" +l);

//let r=--x;
//console.log("The answer is \t" +r);

//let s=x--;
//console.log("The answer is \t" +s);

/*let a=x+=2; //same as b=b+2
console.log("The answer is \t" +a);

let sum=20
let sub=50
let add = sum % sub;
console.log(add);
*/

//funtion efinitions
function addNums(){
    let num1=200;
    let num2=100;
    let num3=num1+num2;
    console.log("The sum is : ", num3);
    //
    return num3;//expose num3 to other funtions
}
//funtion invocations or calling a function


function subNums(){
    let diff= addNums()-200;
    console.log("The difference is : ", diff);
    //return num3;
}
addNums();
subNums();
/*  assignment:  
define 3 functions, 
function 1:should add 3 numbers(30,60,100),
function 2:should multiply thef result from funtion 1 by 2, 
function 3:should fin the remainder of funtion2 result divided by 15  
*/

var x=5; y=10; z=15;
x++;

