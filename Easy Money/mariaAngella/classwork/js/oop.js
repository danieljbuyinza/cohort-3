/* oop Object Oriented Programing......function is a first class object */

var student = {
name: "Slayqueenoriginal",
age:50,
dob: 1995
}

/* another style with a constructor */ 
/* function student (x,y,z) {
this.name=x // this.name defines a property i.e this creates a property
this.age=y
this.dob=z
}

//new is the constructor
var rachel = new student ("rachel",23,"2nd 1998")
var philis = new student ("philis", 25,"6th 1999")

console.log(rachel.name)

console.log(philis.dob)
 */





/* My 6 objects using the this property */
/* 1st class rice*/
function houses (x,y,z) {
this.name=x // this.name defines a property i.e this creates a property
this.age=y
this.dob=z
}

//new is the constructor
var rachel = new student ("rachel",23,"2nd 1998")
var philis = new student ("philis", 25,"6th 1999")

console.log(rachel.name)

console.log(philis.dob)



/* 2nd class houses */
function rice(x, y, z) {
    this.name = x // this.name defines a property i.e this creates a property
    this.age = y
    this.dob = z
}

//new is the constructor
var rachel = new student("rachel", 23, "2nd 1998")
var philis = new student("philis", 25, "6th 1999")

console.log(rachel.name)

console.log(philis.dob)


/* 3rd class vehicles */
function rice(x, y, z) {
    this.name = x // this.name defines a property i.e this creates a property
    this.age = y
    this.dob = z
}

//new is the constructor
var rachel = new student("rachel", 23, "2nd 1998")
var philis = new student("philis", 25, "6th 1999")

console.log(rachel.name)

console.log(philis.dob)

/* 4th class boy-names */
function rice(x, y, z) {
    this.name = x // this.name defines a property i.e this creates a property
    this.age = y
    this.dob = z
}

//new is the constructor
var rachel = new student("rachel", 23, "2nd 1998")
var philis = new student("philis", 25, "6th 1999")

console.log(rachel.name)

console.log(philis.dob)


/* 5th class girl-names */
function rice(x, y, z) {
    this.name = x // this.name defines a property i.e this creates a property
    this.age = y
    this.dob = z
}

//new is the constructor
var rachel = new student("rachel", 23, "2nd 1998")
var philis = new student("philis", 25, "6th 1999")

console.log(rachel.name)

console.log(philis.dob)

/* 6th class cities */