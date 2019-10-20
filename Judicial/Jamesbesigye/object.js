/*creating objects in Js and using this.property
functions are first class objects
*/

function student(name, age,gender){
this.name = name
this.age = age
this.gender = gender    //asigning property values
}

student1 = new student("james",4,"male")    //instatiating the object
console.log(student1.name)

//create six objects and six instances of each.

function mobilePhone(name,model,price,color,size,mode){
    this.name = name,
    this.model = model,
    this.price = price,
    this.color = color,
    this.size = size
    this.mode = mode
    
}
mobile1 =new mobilePhone ("ericson", 2014, 150000,"yellow", "big","smart");
mobile2 =new mobilePhone ("Nokia", 2016, 100000,"black", "small","analog");
mobile3 =new mobilePhone ("itel", 2015, 200000,"orange", "small","smart");
mobile4 =new mobilePhone ("techno", 2017, 300000,"red", "big","analog");
mobile5 =new mobilePhone ("sumsang", 2018, 50000,"green", "small","smart");
mobile6 =new mobilePhone ("iphone", 2019, 170000,"blue", "small","analog");

console.log(mobile1,mobile2,mobile3) //testing printing multiple objects in one console log. wow it works
cat =new animal("pussy",1,"white","james",011,5000) // testing if object can be instantiated before creation- turns out" true"
console.log(cat)


function animal(name,age,color,owner,farmNumber,price){
    this.name = name
    this.age =age
    this.colour =color
    this.owner  =owner
    this.farmNumber =farmNumber
    this.price  =price
}
cow = new animal("brown_bull",2,"brown","james",023,1500000) // instantiating objects. various animals
goat = new animal("mike",3,"black","james",024,80000)
snake = new animal("green mamba",1,"green","non",0,0)

console.log(cow)
console.log(goat)
console.log(snake)