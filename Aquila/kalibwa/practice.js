/*let a=20,b=30
//using +
let c=a+b
console.log(c)

let d=a*b
console.log(d)

let e=b-a
console.log(e)

let f=b/a
console.log(f)
// let try if there is any change after tricking the value

let y=++c
console.log(y)
// there is incrementation of 1on the value we declared in console.long(c)

let z=--c
console.log(z)
// when u use -- signe before the value us to reduce one on the value ,same case if is ++ is to add 1 one the value
// mine has decresed on the last value that i got instead of reduicing on valeu of c 
let q=c+=2
console.log(q)
 //let try this then get a conclusion
 // to get the reminder
let sum=20
let sub=50
let add=sum%sub
console.log(add)
//the module operator

let add2=sub%sum
console.log(add2)

//&& AND,OR are other logical operators

//==
var x=5, x2="5"
var x3=x==x2;

//===
var x4=x===x2
// are differenet because triple signes of equal showes any single details on ressemblance.

function dan() {
let num1=20;
let num2=100;
let num3=num1+num2
return num3
console.log("the sum is",num3)
}


dan()


function subnums(){
    let diff = dan()-40;
    console.log("the difference is", diff)

}
subnums()

// define 3 fonctions 
// function 1 should add three numbers i.e(30,60,100)
// function 2 should multiply the result from   f1 by 2
// function 3 should find the remainder of f2 result divided by 15.

function eg(){
let m=30,n=60,p=100
// addind 3 numbers
let r=m+n+p

console.log("the result of fuction1",r)
return r
}
//  return always comes after

function ex(){
let t=eg()*2
// multipling f1 by 2

console.log("the result of fuction2",t)
return t
}
function er(){
    let rem=ex()%15
    
    console.log("reminder result",rem)
}


er()*/

/*function addNum(a,b,c)
{
    let d=a+b+c
    return d
}
function subNum()
{
    let y=addNum(20,20,30)-10
    console.log("the answer is:\t"+y)
    //"\t" adds the space on the same line.
    return y
}
subNum()*/

/*function check(a,b)
{
    let c=(a>b)?a:b
    return c
}

function coswrk(cos)
{
let d=check(70,90)+ 50;
average = d/2
let e=average*(40/100)  

return e

}

function exam(x)
{
let y=76*(60/100)
let z=y+coswrk(80)
console.log(z)
}
exam()*/

/*let kal=(a,b)=>
{ 
let c=a+b
console.log(c)
}
kal(10,25)
kal(34,58)
//this remplace the function that we studied previously .
// => we call it fat arrow.

/*let num1=20, num2=40
if (num1<num2)
{
    console.log('you have passed')
}
else{
    console.log('heaven is not for you!')
}*/

*/

*/
/*var mysal = 200
var yoursal = 1000
if (mysal > yoursal)
{
    console.log('my sal is greater than your sal')
}
else if (mysal < yoursal){
    console.log('my salary is less than your salary')
}
*/
/*var sal = 20000
switch (sal){
case 2000:
    let x= sal*2000
    console.log('that is not 20000')
    break
case 200000:
    console.log('that is not 20000')
        break
default:
    console.log('20000 is defaul tvalue')

}
*/
// num++ is for icremeting 1. if we need to increment n(number). it actually does by writting "num+=n"
/*let num = 0
for (num=0;num<=10;num+=2)
{
if(num%2==0){
console.log(num)
}
}*/

/*for (let a=0; a <= 10; a++){
    var c=(a%2==0)? a:
    console.log(c)
}
// example for while-loop
var ab=0
while(ab<=5)
{
console.log(ab)
ab++
}
// examole of for loop,in for loop we put values by putting condition in the same bracket
/*for(var ab; ab<=5; ab++)
{

}*/
 var mangoes=[20,40,60,80]
 for(var item=0;item<=3;item++)
 {
     console.log(mangoes[item])
 }
 // size is known by doing s=n-1