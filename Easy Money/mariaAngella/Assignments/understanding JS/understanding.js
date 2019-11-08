/* console.log([] === 0); // false coz the array is not exactly 0 i.e compares both the value and datatype.....datatype for an array is an object and 0 is a number
console.log([] == 0); //true coz the length of the array is 0 i.e the values match......value is same but datatype isn't

//write a  loop that outputs numbers from 200 to 0

for (var loop1 = 200; loop1 >= 0; loop1--) {
  console.log("This is the answer \t" + loop1);
}
 */
//while loop that doesn't stop
/* while(true){
    console.log(2);
} */

//using switch condition to choose a telecom menu e.g ussd airtel
//can also have a switch under a switch
/* var ussdOptions = prompt("Enter a number corresponding to your choice");
ussdOptions = Number.parseInt(ussdOptions);

switch (ussdOptions) {
  case 1:
    console.log("Send Money");
    break; // it will break each time it finishes the case so that it doesn't continue to the next
  case 2:
    console.log("Airtime/Bundle");
    break;
  default:
    console.log("unknown input");
}


//using if and else when there are conditions like <, > etc

//adding 2 numbers in a function
function add(a,b){
  var c = a+b;
  console.log(c)
}

add(10,20) */





//functions
/* var getFullName = (firstName, secondName)=>{
  let fullName = firstName+" "+secondName
  console.log('hello ', fullName)
  return fullName
}
getFullName("maria", "angella"); */



/* 1. function declaration */
/* var addition = function (){}; //anonymous function...function without a name i.e can only be used once
var addition = () => {}; //anonymous function...function without a name i.e can only be used once
function addition () {} //no need for termination since there's no assignment (=) */




/* 2. function definition */
/* var addition = () => {
      console.log(7 + 8); //2. function definition
    }; */




/* 3. function call or Invoking a function */
// immediately invoked a function
/* (() => {
  console.log(7 + 8); 
})(); 
// another immediately invoked a function
(function(){console.log(7+8)})()
// calling a function anytime
addition();    */ 




/* 4. parameterized functions with their arguments.........parameters are specifed and take up values during calling*/
//display 11
/* var addition = () => {
  let x =7;
  let y =4;
  console.log(x+y); 
};
addition();  

//display what answer you want with your values
var addition = (x,y) => {
  console.log(x + y);
};
addition(2,6); //2 and 6 are arguments that are in place of the parameters x and y
addition(7, 6); 
addition(7, 46);  */




/*5. Return */
/* var addition = (x, y) => {
  let sum =x+y
  return sum; // computer stops executing the function...i.e the below code is not executed

}; */

//another return example.... declare another variable first to capture the function value and use it for other operations
/* let myAddition = addition(7,8);
console.log(myAddition*2); */


























/* 3 functions for addition, subtration and multiplication */
// function addition
/* var addition = (r,s) => {
  let sum = r+s
  return sum;
};
//function subtraction
var subtraction = (t,u) => {
  let sub = t - u;
  return sub;
};
//function multiplication
var multiplication = (r,s,t,u) => {
  let mul = addition(r,s)*subtraction(t,u);
  console.log("my answer is \t" + mul);
  return mul;
};

multiplication(1,2,3,4) */
















/* var,let and const -----global scope,local scope and block scope*/
//with var, it's value is accesses globally in the code
/* var name = 'maria'
function printname(){
  console.log(name);
}
printname()

 */
//Also with let, it's value is accessed in the global scope in the code
/* let name = "maria";
function printname() {
  console.log(name);
}
printname(); */


//with var inside a function
/* function printname() {
  var name = "maria";
  console.log(name);
}
printname();

function printname2() {
  var name = "angella";
  console.log(name);
}
printname2(); */

//2nd declaration overrides the 1st declaration
/* var name ='maria'
var name = 'angella'
console.log(name) */

//global scope variables if they are at the start of code
/* var a;
let b; */
// const c;

//local scope, d is a local variable inside the function....and d is global to the innerfunction1 function
/* function myfunction1(){
  a = 'maria'
  var d;
  function innerfunction1(){
    a = 'angella'
    d = 'other name'
  }
} */

/* function myfunction2(){
  //block scope
  if(a===1){
    let a = 1;
  }
  console.log('it is one')
  
}
myfunction2() */


// a is defined
/* function myfunction2() {
  if (true) {
    var a = 1;
  }
  console.log(a);
}
myfunction2(); */
  
// a is undefined
/* function myfunction2() {
  if (true) {
    let a = 1;
  }
  console.log(a);
}
myfunction2(); */

//both declared and defined
/* var f = 1
//only declared
var f
 */
//f can also be acceses outside the block unless within a function with var
/* for(var f = 100;f>=0;f--){
  var g =4  //not with let
  console.log(f)
}
console.log(g);
 */



 //Objects
 /*  */
 /* function person(name){
  this.name = name
 }
 var james = new person('james')
 console.log(james.name) */















 /*3 ways of coming up with objects
 1. object literals
 2. Factory(objects)
 3. constructor */

 //object literal--------object maria is created using object literal
/*  var mariaAngella ={
   firstName:"Maria",
   lastName:"Angella",
   age:29,
   gender:"Female",
 };


 var alexi = {
   color:"green",
   mailage:"10000",
   size:"large",
   model:"2019",
 };

 var techno = {
   color: "green",
   model: "2019",
   screensize: "large",
   
 }; */
 



 /* There are different ways to create new objects:

Define and create a single object, using an object literal..........you both define and create an object in one statement.
Define and create a single object, with the keyword new.
Define an object constructor, and then create objects of the constructed type. */


//object literal----create it yourself(you have to create for many objects e.g maria, jerome, patrick etc-----tiring though executes very fast)
/*  var mariaAngella = {
   firstName: "Maria",
   lastName: "Angella",
   age: 29,
   gender: "Female"
 };

 console.log(mariaAngella)
 console.log(mariaAngella.firstName);

  var jeromeMwesigye = {
    firstName: "Jerome",
    lastName: "Mwesigy",
    age: 29,
    gender: "Male"
  };

  console.log(jeromeMwesigye)
  console.log(jeromeMwesigye.age); */


//example of a brick(object) and  brick maker(template)
/* object factory -----function should start with a capital letter */
// Student is the template or manufacturer and the return{} returns a literal object
/* function Student(givenFirstName, givenLastName, givenAge, givenGender) {
  return {
    firstName:givenFirstName,
    lastName:givenLastName,
    age:givenAge,
    gender:givenGender,
  };
}

//function call for jerome literal object
let jerome = Student("Jerome","Tumwesigye", 120, "Male")
let patrick = Student("Patrick", "Opio", 20, "Male");
console.log(jerome)
console.log(patrick.age);
 */





 /*object constructor-----create what looks like you 
 .....start functon name with small letter  
 .......this.----turns the function into a constructor*/
/*  function car(carModel, carSpeed, carColor, carFuelType, carBrand) {
   this.model = carModel;
   this.speed = carSpeed;
   this.color = carColor;
   this.fuelType = carFuelType;
   this.brand = carBrand;
 }
//now use the constructor to create objects------create an instance object that behaves(new) like the constructor
const myford = new car(2019,180,"blue","petrol","ford")
const bmw = new car(2017, 280, "black", "diesel", "bmw");
console.log(myford)
console.log(bmw.color);
console.log(myford.brand);
 */



/* you are hired by the government of uganda to design a factory system that generates mobile phones and render them market ready.
all phones share the following specifications in common
1. Brand
2. model
3. color
4. battery life
category which is either 'smart' or 'other' */

 function phone(phoneBrand, phoneModel, phoneColor, phoneBatterylife) {
   this.brand = phoneBrand;
   this.model = phoneModel;
   this.color = phoneColor;
   this.batterylife = phoneBatterylife;
   
 }
 //now use the constructor to create objects------create an instance object that behaves(new) like the constructor
 const iphone = new phone("iphone", "2019", "blue", "long");
 const techno = new phone("techno", "2018", "green", "short");
 console.log(iphone);
 console.log(techno.color);
 console.log(techno.brand);