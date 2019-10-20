// my first example
// first variable
let num1 = 10
// second variable
var num_2 = 20
//capturing the sum of two vars

let num3 = num1+num_2
console.log(num3)

let num4 = num_2-num1
console.log(num4)
console.log('This is the answer \n'+num3)
console.log('This is the answer \t' + num4)

//using +
let a = 20, b = 30
var c = a+b
console.log(c)
console.log('This is the answer \t' + c)


//using *
let d = a*b
console.log(d)
console.log('This is the answer \t' + d)

//using -
let e = b-a
console.log(e)
console.log('This is the answer \t' + e)

//using /
let f = b/a
console.log(f)
console.log('This is the answer \t' + f)

// use increament operators
let z = c++
console.log(z)

let y = ++c
console.log(y)
console.log('This is the answer \t' + y)

let m = --d
console.log(m)

let n = d--
console.log(n)


let q = c+=2
console.log(q)

//use modulus operators
let sum =20, sub =50
let add =sum%sub
console.log(add)

let add2 =sub%sum
console.log(add2)

//logical operators

//&& AND || OR


// ==
var x =5, x2 ="5"
var x3 = x==x2   //true

// ===
var x4 =x ===x2  //not true

//function definition---- prints 300 but doesn't expose/return the answer to the calling function if return is commented
function addNums(){
    let num1 =200
    let num2 =100
    let num3 =num1 + num2
    console.log("The sum is \t" +num3)
    return num3
}
// function invocation/ calling function
addNums()

//block of code with let variables within one function i.e can use the same variables as function above
function subNums() {
    let num1 = 20
    let num2 = 10
    let num3 = num1 + num2
    console.log("The sub is \t" + num3)
    return num3
}

function subNums(){
    let diff = addNums()- 200
    console.log(diff)
}

subNums()






//assignment 2
/**Define three functions
 * Function 1 should add three numbers i.e(30,60,100)
 * Function 2 should multiply the result from F1 by 2
 * Function 3 should find the remainder of F2 result divided by 15
 */

//Function 1
function add(num1, num2, num3){
    
    let summation = num1+num2+num3
    console.log("Addition for the 3 numbers is \t" +summation)
    return summation
}

//Function 2
function multiply(){
    let multiplication =add(30, 60, 100)*2
    console.log("Multiplying with Func1 \t" +multiplication)
    return multiplication
}

//Function 3
function modulus(){
    let mod = multiply()%15
    console.log("Modulus after dividing by 15 \t" +mod)
    
}
modulus()




//function for addition
function addNum(a,b,c)
{
    let d = a+b+c
    return d
}

//function for subtraction i.e calling function
function subNum()
{
    let y = addNum(20,20,30)-10
    console.log("The answer is :\t" +y)
    return y
}

//calling function
subNum()

function mud(){
    let ab = subNum()%addNum(12,20,30)
    console.log(ab)
    return ab
}

mud()






 //assignment on cw, t1&t2 plus exam
/* first paramaterized function that takes 2 marks (test1 and test2)-
 */
 function test(test1,test2){
     let test3 = (test1 > test2) ? test1 : test2  //checks for the best of the two and returns the better mark
     return test3
 }
 
/* second paramaterized function (coursework + better mark of the 2 tests)
 */
 function coswork(test1,test2,coswork_mark){
     let coswork_mark1 = (test(test1, test2) + coswork_mark) / 2 //and divides by 2 then multiplies by 0.4 to get 40%
     let coswork_mark2 = coswork_mark1*(40/100)
     return coswork_mark2
 }
/*  third parametized function
 */
function exam(test1, test2, coswork_mark,exam_mark){
    let exam_mark1 = exam_mark * (60 / 100) //multiplies the exam by 0.6 
    let final_mark = exam_mark1 + coswork(test1, test2, coswork_mark) //adds the result to the 2nd function to get Final result
   
     console.log("final_mark \t" + final_mark)
    return final_mark
 }

exam(85,80,80,80)

         
 let test = (test1,test2)=>{
     let test3 = (test1 > test2) ? test1 : test2
     console.log("test result using ES6 \t" +test3)
     return test3
 }

 test(80,85);
 test(75,90);