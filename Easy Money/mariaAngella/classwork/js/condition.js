//if and else function
let num1=20, num2=40

if (num1>num2){
    console.log("you have passed")
}
else { 
    console.log("heaven is not for you!")
}



//another if and else function
let paye = (salary) =>{
    if (salary>=130000){
        let paye1 = salary*(30/100)
        console.log("Paye is \t" +paye1)
        return paye1
    }
    else{
        console.log("please enjoy your salary wisely")
    }
}

paye(200000)
paye(50000)
















//Assignment create a function that compares PAYE for 2 employees(func1 compute paye, func2 compare)


//FUNCTION 1
let paye = (salary) => {


    let payee = 0;

//calculating paye from salary  
    if (salary >= 130000) {
     let payee = salary * (30 / 100)
        console.log("Your PAYE is \t" + payee)
        return payee
    }
//and if less than 130000, display "please enjoy your salary wisely"
    else {
        
        console.log("You don't pay PAYE, please enjoy your salary wisely")
    }   
}

//FUNCTION 2
//Function salary compares and gets the PAYE for the 2 salaries(salary1 and salary2)
    let salary = (salary1, salary2) => {
        let paye1 = paye(salary1), paye2 = paye(salary2)
        let compare_paye = (paye1 > paye2) ? paye1 : paye2

        if (compare_paye == 0){
            console.log("None of the employees pays PAYE")
        }
else{
            console.log("Comparing the PAYE \t" + compare_paye)
        }

//displays the calling functions separately i.e salary(100000,50000) and salary(20000,400000)
        console.log("\n\n");
        return compare_paye
    }



//calling functions
salary(100000,50000)
salary(20000,400000)

















// if and else example with return
let compute=(sal1, sal2)=>{
    if(sal1>=130000 && sal2>=130000)
{
let paye1 = sal1*(30/100)
let paye2 = sal2*(30/100)
let comp = (paye1>paye2?sal1:sal2)
console.log("The highest taxable pay is :\t" +comp)
        return comp
    }
    else{
        console.log("is not taxable")
    }
    
}

compute(1000000,200000)







// else if example
var mysal = 200
var yoursal = 1000
if (mysal > yoursal){
    console.log(" My salary is greater than your salary")
}
else if (mysal < yoursal){
    alert ("My salary is less than your salary")
}







//switch example
var sal = 20000
switch (sal){
    case 2000:
        console.log("that is not 20000")
        break
    case 200000:
        console.log("that is not 20000")
        break
    default:
        console.log("20000 is the default value")
}


//another swtich example

var courseMarks = 70

switch (courseMarks){
    case 0:
        console.log("you failed")
        break
    case 50:
        console.log("your grade D")
        break
    default:
        console.log("your grade B")
}

//another switch example

var marks = 55
switch (marks>=49){
    case true:
        console.log("you did not read enough")
        break
}

switch (marks >= 50&&marks<=65){
    case true:
        console.log("passed")
        break
}

//function with switch 

function abc (a,b){
    let c = a+b-5
    return c
}

switch(abc(20,30)){
    case 50:
        console.log("good stuff")
        break
    default:
        console.log("function is not working")
        
}

//function with switch  can also use continue instead of break
function abc(a, b) {
    let c = a + b - 5
    return c
}

switch (abc(20, 30)) {
    case 50:
        console.log("good stuff")
        continue
    default:
        console.log("function is not working")

}