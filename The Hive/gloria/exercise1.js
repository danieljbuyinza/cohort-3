//the below code is an example of vanilar js
function testWork(m,d){
    let a=(m>d)?m:d
    console.log(a);
    return a;

}
//testWork();this cant show cos it lacks value


function courseWork(cos){
    let c = (testWork(90,95)+cos)/2
    let b = c*(40/100);
    console.log(b)
    return b;
}
// courseWork(); this cant show coz its being called down

function finalExams(exam){
    let e = courseWork(95)
    let f = exam*(60/100)
    console.log(e+f);
    return f;
    
}
    //changing the above from vanilar js to es6 js
// in the example i will be comparing marks for students and see who performed well

    let student = () =>{
        var test = 70
        var test2 =80
        let tests = test>=test2
        if (test>test2){
        console.log('your grade is C');
        }

    else {
        console.log("your grade is B"+);
        return tests;
    }
} 

//student();this has been commented out because i will be calling it the code below.

let studentcorseWork =(corse)=>{
    let marks = student(80)+corse/2
    let final=marks*(40/100)
    console.log("your test marks is this",final)
}
studentcorseWork(80)


