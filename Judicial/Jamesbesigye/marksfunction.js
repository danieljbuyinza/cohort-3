//function to receive two marks and choose a higher mark

function marks(mark1,mark2){
  var mark1, mark2, highermark
highermark = (mark1 >= mark2)?mark1:mark2 //if statement compares two test marks and returns the higher marks
// if mark1 is greater or equal to mark2, assign it to higher mark else assign mark 2

return highermark
}
//console.log ("The higher mark is \t" + marks(68,75))//prints higher mark

//function to recieve course work marks, add the higher score from marks function and multiply by 40%
function coursework(mark3){
  var mark3, finalAssesment 
  var testmark = marks(68,75)
  //console.log(mark3)
  finalAssesment = (mark3 + testmark)*0.4   // adds test marks to best test mark and multiplies result by 40%
  //console.log(testmark)
  //console.log(finalassesment)
  return finalAssesment                     //returns final assement mark for use by calling function

}
coursework(25)

function exam(mark4){
  var finalResults
  var examMark = mark4*0.6
  var assesmentMark = coursework(25)
  finalResults = examMark + assesmentMark
  console.log(assesmentMark)                //prints final assesment mark
  console.log(examMark)                     // prints exam mark
  console.log(finalResults)                 //prints final exam marks
}
exam(50)
