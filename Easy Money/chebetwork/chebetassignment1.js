// Assignment 2
/*
   -  write a function thats takes two test marks i.e  test1, and test2
   -  when it gets the marks, it should check for the best mark from the two and return it
   -  create another function for coursework mark requiring one parameter  -  a coursework mark, check it
      then get average of coursework and return current coursework value
   -  write the final function that takes a single parameter, computes the mark exam , as well as final Exam        mark.

    what is the exam mark of the student ?

   */

// this function finds the bestdone exam between two tests
function testmarks(a, b) {
   c = a > b ? a : b
   console.log("the answer is the bestdone exam  " + c)
   return c
}

//this function finds the best done between coursework and bestdone exams
// function bestmark(coursework, bestdone) {
//    var cwm = 70
//    d = cwm > c ? cwm : c
//    console.log("the answer is the bestdone btn coursework and exams  " + d)
// return d
//}


//this function averages the coursework mark and bestdone exams
function average(cwm) {
   var cwmbestdone = testmarks(40, 60) + cwm
   var verybestmark = cwmbestdone / 2
   var finalcwm = verybestmark *(40/100)
   console.log("this answer shoes the average btn the coursework mark and the bestdone exam  " +finalcwm)
   return verybestmark
}
function finalexam(final){
   var finalMark = final * (60/100)
   var finalExamMark = finalMark + average(50)
   console.log("your final mark for this courseunit is  " +finalExamMark)
}
finalexam(60)









