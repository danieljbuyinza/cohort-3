
function test (x,y){
    let w = (x>y)?x:y
    return w
}
//Testing & returns the highest of the two done tests and culculating average
function coswrk(cos){
    let coswrk = test(80,70)+cos
   let avg = coswrk/2
  let f = avg * (40/100)
    return f
}
//Adding the final mark to the coursework and Best Done Test
function exam(ex){
    let K = ex*(60/100)
    let exam = K + coswrk(70)
    console.log(exam)
}
//Calling the function with the final mark
exam(95)