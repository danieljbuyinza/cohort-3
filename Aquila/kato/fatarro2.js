/*
   -  write a function thats takes two test marks i.e  test1, and test2
   -  when it gets the marks, it should check for the best mark from the two and return it
   -  create another function for coursework mark requiring one parameter  -  a coursework mark, check it
      then get average of coursework and return current coursework value
   -  write the final function that takes a single parameter, computes the mark exam , as well as final Exam        mark.

    what is the exam mark of the student ?
*/

//function that asks someone two marks and returns best mark of the two//

let testMarks=(test1, test2)=>{
    // if (test1>test2){return test1} else{return test2}*/

    let bestdone=(test1>test2?test1:test2)
    console.log(bestdone)
    return bestdone
    
}
//testMarks(50,60)
//function to get coursework mark
/*function courseworkMark(coursework) {
    let courseworkCurrentMark = testMarks(70 , 80) + coursework;
    let averageCourseWorkMark = courseworkCurrentMark / 2;

    let curentcourseworkMark =  averageCourseWorkMark * (40 / 100);

    return curentcourseworkMark;
}*/
let courseworkMark=(test1, test2,coursework)=>{
    let courseworkCurrentMark = testMarks(test1, test2) + coursework;
    let averageCourseWorkMark = courseworkCurrentMark / 2;

    let curentcourseworkMark =  averageCourseWorkMark * (40 / 100);
    console.log(curentcourseworkMark)
    return curentcourseworkMark;
    
}
 courseworkMark(40,70, 20)

/*  function examMark(computedMark) {
    let generalExamMark = computedMark * (60 / 100)
    let finalMark = generalExamMark + courseworkMark(80)

    console.log('your final exam mark is : ' + finalMark);
}
// examMark(90);
*/
let examMark=(test1, test2,coursework,computedMark)=> {
    let generalExamMark = computedMark * (60 / 100)
    let finalMark = generalExamMark + courseworkMark(test1, test2,coursework)

    console.log('your final exam mark is : ' + finalMark);
}
examMark(70,60, 20, 80)