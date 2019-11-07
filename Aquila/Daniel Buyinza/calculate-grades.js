/* Compare to determine the greater of the two marks */
let check = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}

/* Calculating the coursework */
let classCoursework = (course) => {
    let d = (check(test1.value, test2.value) + course) / 2
    let f = d * (40/100)
    return f
}

/* Calculating the final results including those of the exam */
let examination = (ex) => {
    let y = ex * (60/100)
    let results = y + classCoursework(theCoursework.value)
    return results
}