/*/parameterize the funtions
function addNumbers(a,b){
    let t = a+b;

    console.log("The sum is : ", +t);
    return t;
}
function multNumbers(){
    let mult= addNumbers(4,8) * 2;
    console.log("The result is : ", +mult);
    return mult;
    
}
function findRemainder(){
    let remainder = multNumbers(8,10) % 15;
    console.log("The remainder is : ", remainder);
    return remainder;
}
findRemainder();

*/

function addNum(a,b,c)///parameterize funtions
{
    let d = a+b+c;
    return d;
}
function subNum(){
let y = addNum(20,20,30)-10;
console.log("The result is : ", +y);
    return y;
}
subNum();