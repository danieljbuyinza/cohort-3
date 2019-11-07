//ASSIGNMENT 2 (FAT ARROW)

// Using the fat arrow function, declare a function which will calculate the average marks scored from the two tests

const testsCousework = (a, b, c) => {
    // initialise a variable to hold the average mark
    const testCouseworkAverage = (a + b + c) / 3;
    // expose the tests and Cousework Average to other functions
    return testCouseworkAverage;
};

/**
 * declare a function to calculate the final marks
 * It takes in the students marks as parameters
 */

const finalResults = (test1, test2, courseWork, exams) => {
    // declare variable to hold the final marks and assign it to the calculated marks
    const finalResult =
        testsCousework(test1, test2, courseWork) * 0.4 + exams * 0.6;
    // return the calculated total marks rounded off to the nearest whole number
    return Math.round(finalResult);
};
// sample function call
console.log(finalResults(82, 70, 89, 50));
