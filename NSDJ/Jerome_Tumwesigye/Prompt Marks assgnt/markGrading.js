
      //Creating prompts for the user to input content
      var name = prompt("Enter student name");
      var test1 = parseInt(prompt("Enter first test mark"));
      var test2 = parseInt(prompt("Enter second test mark"));
      var assgnt = parseInt(prompt("Enter the assignment mark"));
      var examFinal = parseInt(prompt("Enter the Exam mark"));

      //Ensuring that no input field is left empty
      if (
        name != "" &&
        test1 != "" &&
        test2 != "" &&
        assgnt != "" &&
        exam != ""
      ) {
        //Accessing DOM elements and printing in them
        //innerthml is a property/attribute of a paragraph identified by 'studentName' in a html document
        //This property (innerhtml) is assigned a value ' the student ....
        document.getElementById("studentName").innerHTML =
          "The student's name is:\t" + name;
        //Compare two tests and consider the best done
        function check(test1, test2) {
          //A function named "check" with two prameters
          let test = test1 > test2 ? test1 : test2; //This function considers the best done test and stores it in a avriable named "test".
          //if test1 is greater tahn test2, consider test1. Otherwise, consider test2
          return test; //Exposes the value in a variable named test for further action.
        }
        //Accessin the identifier and printing in it
        document.getElementById("test").innerHTML =
          "The best done test is:\t" + check(test1, test2);

        //This function computes the total coarse work score out of 40 given the assignment mark
        function coswk(test1, test2, assgnt) {
          //The function named coswk has three parameters.
          let coswkAdd = check(test1, test2) + assgnt; //Invokes the function test and adds to it the assignment score.
          let coswkTotal = coswkAdd * (40 / 200); //coarsework total is outof 40
          return coswkTotal;
        }
        //Print the total coarsework score in html
        document.getElementById("coswrk").innerHTML =
          "The total coarse work mark (out of 40) is:\t" +
          coswk(test1, test2, assgnt);

        //display the end semester exam mark

        //This function computes the final module score given the exam mark
        function exam(test1, test2, assgnt, examFinal) {
          let examScore = examFinal * (60 / 100); //Exam score is out of 60
          let totalScore = examScore + coswk(test1, test2, assgnt); //Adding coarse work and exam scores to obtain the final mark.
          return totalScore
        }
        document.getElementById("examMark").innerHTML =
          "The end of sem. exam score (out of 60) is:\t" + examFinal;

        document.getElementById("examScore").innerHTML =
          "The final module score (out of 100) is:\t" +
          exam(test1, test2, assgnt, examFinal);
      } else {
        alert("Please do not leave any empty field");
      }
  
