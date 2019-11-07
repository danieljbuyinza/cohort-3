/**parameterize the funtions
cw=course work
em=exam marks

*/
function Marks(cw,em){
    let t = (cw>em)?cw:em;

    console.log("The result is : ", +t);
    return t;
}
function otherMark(){
    let other= Marks(84,58) / 2;
    console.log("The result is : ", +other);
    return other;
    
}
function finalMark(){
    let final = otherMark() + Marks()/100
}
otherMark();
