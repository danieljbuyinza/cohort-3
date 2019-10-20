
  const marks=(mark1,mark2)=> {highermark=(mark1>=mark2)? mark1:mark2//Used arrow function
  
  //console.log(highermark)
  return highermark
  
  }
  //marks(75,25)
  

  //console.log ("The higher mark is \t" + marks(68,75))//prints higher mark

//function to recieve course work marks, add the higher score from marks function and multiply by 40%


const coursework = (mark3)=> {
  var testMark,
    testMark = marks(68,75)       //returns highest mark and assigns it to testMark
  var finalAssesment = (mark3 + testMark)*0.4 //computes 40% of total of testmarks and highest mark
 // console.log(testMark)
  //console.log(mark3)
 // console.log(finalAssesment)
 return finalAssesment
}

coursework(25)


 exam=(mark4)=>{
  var finalResults
  var examMark = mark4*0.6
  var assesmentMark = coursework(25)
  finalResults = examMark + assesmentMark
  console.log(assesmentMark)                //prints final assesment mark
  console.log(examMark)                     // prints exam mark
  console.log(finalResults)                 //prints final exam marks
}
exam(50)

