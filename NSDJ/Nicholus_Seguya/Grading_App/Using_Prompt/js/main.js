//Prompting the Student to input their name, test1, test2, coursework and exam
var studentName = prompt("Please Input your Student's Name :");
var t1 = parseInt(prompt("Input your Test One Mark :"));
var t2 = parseInt(prompt("Input your Test Two Mark :"));
var cos_mark = parseInt(prompt("Input your Corsework Mark :"));
var exam_mark = parseInt(prompt("Input your Exam Mark :"));

//check if input fields are not blank

if (studentName != '' && t1 != '' && t2 != '' && cos_mark != '' && exam_mark != '') {

    // Output Student's Name on the page
    document.getElementById("stud_name").innerHTML = ("Student's Name : " + studentName)

    //This function Checks for the best done Test
    function check_best_done(t1, t2) {//Takes in two parameters Test1 and Test2
        let best = (t1 > t2) ? t1 : t2;//Checking for best done Test
        return best;//Return Value for Best Done Test for other functions to use
    }// End of Function.


    // Output the best done test mark out of 100% 
    document.getElementById("t1").innerHTML = ("Your best done Test Mark is : " + check_best_done(t1, t2))


    //This function is to compute the average of the corsework and the best done test out of 40%
    function cosWork(t1, t2, cos_mark) {//Takes in three parameters Test1 ,Test2 and Corsework Mark
        let sum_test_cwk = check_best_done(t1, t2) + cos_mark;//Get  the sum of the corsework mark and the value returned by the first fucnction
        let avg = sum_test_cwk / 2;//Get the average of the sum of corsework mark and the best done test.
        let mark_outOf_40 = avg * (40 / 100);//Compute the average mark out of 40%
        return mark_outOf_40;//Return the mark out of 40 percent for other functions to use
    }//End of Fucntion

    // Output the coursework mark out of 40% 
    document.getElementById("cos_40").innerHTML = ("Your Mark Out of 40% is : " + cosWork(t1, t2, cos_mark))

    //This Computes the exam mark out of 60%
    function exam_outOf_60(exam_mark) {
        let exam_outof_60 = exam_mark * (60 / 100);//Compute the exam mark out of 60 percent
        return exam_outof_60
    }

    // Output the exam mark out of 60% 
    document.getElementById("cos_60").innerHTML = ("Your Mark Out of 60% is : " + exam_outOf_60(exam_mark))


    //This Computes the final mark out of 100 percent
    function final_mark(t1, t2, cos_mark, exam_mark) {//It takes in 4 paramaters
        let mark_outOf_100 = exam_outOf_60(exam_mark) + cosWork(t1, t2, cos_mark); //Get the sum of the Mark out 40% and the Mark out of 60%
        return mark_outOf_100;
    }//End Of Function

    // Output the final mark out of 100% 
    document.getElementById("exa").innerHTML = ("Your Final Mark out of 100% is : " + final_mark(t1, t2, cos_mark, exam_mark))

}
else {
    alert("Sorry can't display results because some fields were left empty")
}