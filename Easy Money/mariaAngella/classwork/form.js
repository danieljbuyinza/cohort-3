/* first paramaterized function that takes 2 marks (test1 and test2)- 
 */

let test = (test1, test2) => {
    let test3 = (test1 > test2) ? test1 : test2 //checks for the best of the two and returns the better mark
    return test3
}

/* second paramaterized function (coursework + better mark of the 2 tests) 
 */
let coswork = (test1, test2, coswork_mark) => {
    let coswork_mark1 = (test(test1, test2) + coswork_mark) / 2 //and divides by 2 then multiplies by 0.4 to get 40%
    let coswork_mark2 = coswork_mark1 * (40 / 100)
    return coswork_mark2
}

/*  third parametized function  
 */
let exam = (test1, test2, coswork_mark, exam_mark) => {
    let exam_mark1 = exam_mark * (60 / 100) //multiplies the exam by 0.6 
    let final_mark = exam_mark1 + coswork(test1, test2, coswork_mark) //adds the result to the 2nd function to get Final result

    console.log("final_mark \t" + final_mark)
    return final_mark
}

exam(85, 80, 40, 40)