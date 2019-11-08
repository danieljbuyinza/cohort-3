var check_name = () => {
  //Create variables for all elements
  var studentName = document.getElementById("txt-name").value;
  var t1 = document.getElementById("txt-test1").value;
  var t2 = document.getElementById("txt-test2").value;
  var cos_mark = document.getElementById("txt-course").value;
  var exam_mark = document.getElementById("txt-exam").value;

  if (studentName.value == '' && t1.value != '' && t2.value != '' && cos_mark.value != '' && exam_mark.value != '') {
    alert("Student's name should not be empty");
    studentName.style.border = "2px solid red";
  }
  if (studentName.value != '' && t1.value == '' && t2.value != '' && cos_mark.value != '' && exam_mark.value != '') {
    alert("Please provide your Test one Mark");
    t1.style.border = "2px solid red";
  }
  if (studentName.value != '' && t1.value != '' && t2.value == '' && cos_mark.value != '' && exam_mark.value != '') {
    alert("Please provide your Test two Mark");
    t2.style.border = "2px solid red";
  }
  if (studentName.value != '' && t1.value != '' && t2.value != '' && cos_mark.value == '' && exam_mark.value != '') {
    alert("Please provide your Coursework Mark");
    cos_mark.style.border = "2px solid red";
  }
  if (studentName.value != '' && t1.value != '' && t2.value != '' && cos_mark.value != '' && exam_mark.value == '') {
    alert("Please provide your exam Mark");
    exam_mark.style.border = "2px solid red";
  }
  if (studentName.value == "" && t1.value == "" && t2.value == "" && cos_mark.value == "" && exam_mark.value == "") {
    alert("Fields should not be empty");
    studentName.style.border = '2px solid red';
    t1.style.border = "2px solid red";
    t2.style.border = "2px solid red";
    cos_mark.style.border = "2px solid red";
    exam_mark.style.border = "2px solid red";
    //return false
  }
  if (studentName.value != "" && t1.value == "" && t2.value == "" && cos_mark.value == "" && exam_mark.value == "") {
    alert("Fields should not be empty");
    // studentName.style.border = '2px solid red';
    t1.style.border = "2px solid red";
    t2.style.border = "2px solid red";
    cos_mark.style.border = "2px solid red";
    exam_mark.style.border = "2px solid red";
    //return false
  }
  if (studentName.value == "" && t1.value != "" && t2.value == "" && cos_mark.value == "" && exam_mark.value == "") {
    alert("Fields should not be empty");
    studentName.style.border = '2px solid red';
    // t1.style.border = "2px solid red";
    t2.style.border = "2px solid red";
    cos_mark.style.border = "2px solid red";
    exam_mark.style.border = "2px solid red";
    //return false
  }
  if (studentName.value == "" && t1.value == "" && t2.value != "" && cos_mark.value == "" && exam_mark.value == "") {
    alert("Fields should not be empty");
    studentName.style.border = '2px solid red';
    t1.style.border = "2px solid red";
    // t2.style.border = "2px solid red";
    cos_mark.style.border = "2px solid red";
    exam_mark.style.border = "2px solid red";
    //return false
  }
  if (studentName.value == "" && t1.value == "" && t2.value == "" && cos_mark.value != "" && exam_mark.value == "") {
    alert("Fields should not be empty");
    studentName.style.border = '2px solid red';
    t1.style.border = "2px solid red";
    t2.style.border = "2px solid red";
    // cos_mark.style.border = "2px solid red";
    exam_mark.style.border = "2px solid red";
    //return false
  }
  if (studentName.value == "" && t1.value == "" && t2.value == "" && cos_mark.value == "" && exam_mark.value != "") {
    alert("Fields should not be empty");
    studentName.style.border = '2px solid red';
    t1.style.border = "2px solid red";
    t2.style.border = "2px solid red";
    cos_mark.style.border = "2px solid red";
    // exam_mark.style.border = "2px solid red";
    //return false
  }
  if (studentName.value != '' && t1.value != '' && t2.value != '' && cos_mark.value != '' && exam_mark.value != ''){

    // Output Student's Name on the page
    document.getElementById("stud_name").innerHTML = ("Student's Name : " + studentName.value)

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
};
