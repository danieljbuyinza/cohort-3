/**arrays
 * Example 1
 */

 mangoes=[20,40,60,80];
 for(var i=0;i<=3;i++){
     console.log(mangoes[i]);
 }

 /*
 var student = {
     name: 'slayedOriginal',
     age : 60,
     dob :1889
 };

 //another style with a constructor
*/
function student(name, age, dob)
{
    this.name = name;
    this.age = age;
    this.dob = dob;
}

function studentmarks(test1,test2,coursework,finalmark)
{
    this.test1 = test1;
    this.test2 = test2;
    this.coursework = coursework;
    this.finalmark = finalmark;
}

Fanny = new student('Fanny',22,'4th Jan');
Phyllis = new student('Phyllis',21,'4th July');
console.log(Fanny.name);

