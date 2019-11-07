//create a list of students
function student (name,gender,age,address,height,position){
    //we use this to create a property of an object
    //this property name should be the same as the parameter
this.name = name
this.gender = gender
this.age = age
this.address = address
this.height = height
this.position= position

}
//we use new to create copies of an object.
//initializing instances of different kinds of objects.
name=new student("max","jane","bob","jewel","cindy","zilla")
gender=new student("male","female","male","female","female","male")
age=new student(11,15,18,25,30,19)
address=new student("kira","ntinda","naalya","banda","kikoni","mengo")
height=new student(5,7,9,11,8,6)
position=new position(1,2,3,4,5,6)


//create a list of phone
function phone (shape,version,color,brands,application,price){
//we use this to create a property of an object'
//this property name should be the same as the parameter
this.shape=shape
this.version=version
this.color=color
this.brands=brands
this.application=application
this.price=price
}
//we use new to create copies of object
//initializing instances of different kind of objects
shape=new phone("rectangle","block","oval","square","bone shape","round")
version=new phone(1.5,1.6,2.0,2.2,2.3,3.0)
color=new phone("black","white","red","pink","purple", "blue")
brand=new phone("apple","nokia","acer","HTC","oppo","huawei")
application=new phone("alarm","calender","calculator","clock","contacts","games")
prices=new phone(50000,30000,80000,95000,49000,90000)

//create list for car
function car(model,year,color,speed,engine,shape){
//we use this to create a property of an object
//this property name should be the same as the parameter
this.model=model
this.year=year
this.color=color
this.speed=speed
this.engine=engine
this.body=body
}
//we use new to create copies of objects
//initialising instances of differents kind of objects
model=new car("audi","bentley","bmw","ford","fiat","honda")
year=new car(2006,2009,2007,2003,2019,2017)
color=new car("red","black","white","yellow","gold","blue")
mileage=new car(91000,12500,88000,119000,147000,77000)
engine=new car(1320,1240,1490,990,1490,1990)
body=new car("sedan","hatchback","mini truck","suv","sports","pick up")

//create a list of coat
function coat(color,size,type,designer,){
//we use this to create a property of an object
//this property name should be the same as the parameter
this.color=color
this.size=size
this.type=type
this.designer=designer
}
//we use new to create copies of objects
//initialising instances of differents kind of objects
color=new coat("beige","red","pink","white","black","brown")
size=new coat(5,8,12,14,16,10)
type=new type("trench","leather","denim","bomber","quilted","overcoat")
designer=new type("gucci","aldo","chanel","yeezy","bvlgari","vuitton")

//create a list of hospital
function hospital(patient,doctor,drug,prescription,name,bed){
    //we use this to create a property of an object
    //this property name should be the same as the parameter
    this.patient=patient
    this.doctor=doctor
    this.drug=drug
    this.prescription=prescription
    this.name=name
    this.bed=bed
}
//we use new to create copies of objects
//initialising instances of different kind of objects
patient=new hospital("carol","cindy","brian","may","jojo","alba")
doctor=new hospital("orthopedic","dentist","gyno","psychiatrist","urologist","radiologist")
drug=new hospital("panadol","expain","antibiotics","vitaminc","ibrufen","zental")
prescription=new hospital("3*3","2*3","1*1","4*2","2*2","3*1")
name=new hospital("rubaga","mulago","nsambya","ihk","case","norvik")
bed=new hospital("single","double","decker","triple","queensize","babycoat")

//create a list of book
function book(type,pages,author,color,price,publishyear){
    //we use this to create a property for an object
    //this property should be the same as the parameter
    this.type=type
    this.pages=pages
    this.author=author
    this.color=color
    this.price=price
    this.publishyear=publishyear
    }
    //we use new to create a copy of an object
    //initialising instances of different kind of objects
    type=new book("atlas","exercise","graph","novel","bible","text")
    pages=new book(200,500,15,100,80,1000)
    author=new book("atim","myra","jimmy","ozzy","candy","oyela")
    color=new book("yellow","beige","cream","white","blue","green")
    price=new book(50000,20000,15000,39000,70000,5000)
    publishyear=new book(1705,2017,1993,2000,1987,2003)



