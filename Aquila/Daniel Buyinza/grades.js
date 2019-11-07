/* Compare to determine the greater of the two marks */
let check = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}

/* Calculating the coursework */
let coursework = (course) => {
    let d = (check(50, 50) + course) / 2
    let f = d * (40/100)
    return f
}

/* Calculating the final results including those of the exam */
let exam = (ex) => {
    let y = ex * (60/100)
    let results = y + coursework(50)
    return results
}

/* Output the result */
console.log(exam(50))