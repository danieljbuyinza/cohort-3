// function that test marks for tests and returns the best done
function checktest(a, b) {
    let c = (a > b) ? a : b
    return c
}
//function returns the total marks for coursework(f)
function coursework(cos) {
    let d = checktest(70, 80) + cos
    let average =(d/2)

    let f = average * (40 / 100)
    return f
}
function exam(exm) {
    let examMark = exm *  (60/100)
    // final exam mark
    let finalMark = examMark + coursework(70)
    console.log(finalMark)

} 
exam(90)