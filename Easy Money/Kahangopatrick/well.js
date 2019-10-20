//Using the fat arrow Approach
//The  Algorithm for testing
let test = (x,y)=>{
    let w = (x>y)?x:y
    return w
 }

 //Working out final mark adding the test marks and coswrk
 workcos = ()=> {
    let coswrk = test(80,70)
   let avg = coswrk/2
  let f = avg * (40/100)
  return f
}

//Final exam mark after adding final mark with coswork and test
 exam= (ex) => {
    let K = ex*(60/100)
    let exam = K + coswrk(70)
    console.log(exam)
}
//Calling the function "exam" and entering the final mark
exam(95);