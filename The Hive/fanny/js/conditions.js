/** 
let num1=20, num2=40;
if(num1>num2){
    console.log("You have passed!");
}
else{
    console.log("Heaven not for you!");
}

*/

/*

//calulate PAYE
let paye = (sal) =>{
    if(sal>=130000){
        let earning= sal *(30/100);
        console.log(earning);
        return earning;
    }
    else{
        console.log("Please enjoy your salary wisely!");
    }
}
paye(1200000000);
*/

//question2

let salary = (emp1, emp2) => {
        let paye1 = emp1 * (30/100);
        let paye2 = emp2 * (30/100);
    
    if(paye1>=paye2){
        
        console.log("Employee1 pays more", +paye1);
    }
    else{
        console.log("Employee2 pays more", +paye2);
    }
  
}
salary(4500000,350000); 
