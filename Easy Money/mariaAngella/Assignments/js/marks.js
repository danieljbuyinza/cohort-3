/* first paramaterized function that takes 2 marks (test1 and test2)- 
 */

let test = (test1, test2) => {
    let test3 = (test1 > test2) ? test1 : test2 //checks for the best of the two and returns the better mark
    return test3
}

/* second paramaterized function (coursework + better mark of the 2 tests) 
 */
let coswork = (test1, test2, coursework) => {
    let coursework1 = (test(test1, test2) + coursework) / 2 //and divides by 2 then multiplies by 0.4 to get 40%
    let coursework2 = coursework1 * (40 / 100)
    return coursework2
}

/*  third parametized function  
 */
let final_mark = (test1, test2, coursework, exam) => {
    let exam1 = exam * (60 / 100) //multiplies the exam by 0.6 
    let exam2 = exam1 + coswork(test1, test2, coursework) //adds the result to the 2nd function to get Final result

    console.log("Final Mark is \t" + exam2)
    return exam2
}

/* calling the function with all parameterized values */
// final_mark(85, 80, 40, 40)