function Check( mark1 , mark2) {
    let higherMark = (mark1>mark2)? mark1:mark2
    return higherMark
    
}
//gets the average/total coswrk mark
function coswrk(c){
    let average =(Check(50 ,30)+c)/2
    let finalmrk =(average)*(40/100)
    return finalmrk

}
//gets final answer
0
function exammrk(e){
    let exam =e*(63/100)
    let fm =(coswrk(40))+exam
    console.log('the final exam mark is this\t'+fm)
}
exammrk(20)