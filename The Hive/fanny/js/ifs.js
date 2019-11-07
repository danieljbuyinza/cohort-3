/**comparing salaries of two different people using if---else if-----else 
Example1*/
var mysal = 200;
var yoursal = 1000;
if (mysal > yoursal){
    console.log('My salary is greater than your salary');
}
else if(mysal < yoursal){
    console.log("My salary is less than your salary");
}

//Example2  --- using switch statements
var sal = 20000;
switch (sal){
    case 2000:
        //let x = sal * 2000;   --- this is mostly use during grading, we assign variables
            console.log("That is not 20000");
            break;
    case 200000:
            console.log("That is not 20000");
            break;
    default:
            console.log("20000 is the efault salary");
}


//Example3 ---  using switch statements to find marks of students
var courseMarks;
switch (courseMarks){
    case 0:
            console.log("You failed");
            break;
    case 50:
            console.log("Your grade is:\t" +v);
}