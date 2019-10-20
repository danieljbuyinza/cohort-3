//checking the greater test mark
let checkTest = (test1,test2) =>{
    let highTest = (test1>test2)?test1:test2;
    
    console.log(`We considered `+highTest+'\t' +`as the test mark`);
    return highTest; 
}
   
    //calculating final coursework mark by adding it with test

let coursework = (cw) =>{
    let addMarks = checkTest(70,50) + cw;
    let avg = (addMarks/2);
    let finalCw = avg*(40/100);
    console.log(`Total coursework mark is \t`+finalCw);
    return finalCw;
}

    //calculating final 
    let exam = (exmMark) =>{
        let calcExam = exmMark*(60/100);
        let exmFinal = coursework(40) + calcExam;
        console.log(`Final exam mark is ` +exmFinal);

    }
 
    
    //invoking exam
    exam(50);