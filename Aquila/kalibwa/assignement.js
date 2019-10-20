/*  create 6 differentes classes and then 6 instances of each class with 6 propeties each.
 let use 6 objects as examples such as(country1,country,phone,university,footballer,ruler)*/

function user(firstName,lastName,dateOfBirth,gender,age,nationality){
//Below, you can see "user" as object defined by using a constructor function called function User(). The constructor creates an object type called User(). 
//Then, we create a new object instance called user001, using CUNSTROCTOR FUNCTION. Then constructor function contains 6 this statements that define the 6 properties with empty values. The values of the properties are added by each object instance.

    this.firstName=firstName,
    this.lastName=lastName,
    this.dateOfBirth=dateOfBirth 
    this.gender=gender
    this.age=age
    this.nationality= nationality 
}
var user001=new user("john","smith",1990,"m",29,"ugandan")
var user002=new user("haron","hank",1991,"m",28,"british")
var user003=new user("abagnale","edward",1992,"m",27,"british")
var user004=new user("abbey","reuben",1993,"f",26,"congolese")
var user005=new user("haron","hank",1994,"m",25,"british")
var user006=new user("haron","hank",1995,"m",24,"british")
console.log(user001,user002);

function EastAfrica(code,currency,presindent,population,name,city) {
//bellow, you can see "EastArica "object defined by using a constructor function called function country().
    this.code=code
    this.currency=currency
    this.presindent=presindent
    this.population=population
    this.name=name
    this.city=city
}
var country1=new country(+243,"usd","museveni",2900000,"uganda","kamplala")
var country2=new country(+244,"usd","kabila",280000,"kenya","nairobi")
var country3=new country(+245,"usd","kagame",270000,"burundi","bujumbura")
var country4=new country(+254,"euro","mugabe",260000,"tanzania","mobasa")
var country5=new counytry(+256,"euro","kenyata",250000,"zimbabwe","harare")
var country6=new country(+257,"euro",1995,"felix",2400000,"zambia","maputo")

function phone(price,owner,memory,ram,battery,version){
//bellow, you can see "phone " as object defined by using a constructor function called function country().,6 instances with differentes properties
this.price=price
this.owner=owner
this.memory=memory
this.ram=ram
this.battery=battery
this.version=version
}
var nokia=new phone("150 USD","jean","16gb","2gb","2000mAh","kamplala",2.0)
var blackberry=new phone("200 USD","jean","8gb","2gb","2000mAh","nairobi",8.0)
var techno=new phone("400 USD","kagame","32gb","2gb","2000mAh",8.0)
var itel=new phone("90 USD","mugabe","32gb","2gb","2000mAh",8.0)
var iphone=new phone("90 USD","kenyata","132gb","2gb","2000mAh",8.1)
var sony=new phone("90 USD","felix","64gb","2gb","2000mAh",7.1)

//using university as object
function university(name,location,fee,state,students,founder){
    this.name=name
    this.location=location
    this.fee=fee
    this.state=state
    this.students=students
    this.founder=founder
}
var boston=new university("boston","US","1500USD","New-york",80000,"OBAMA")
var harvard=new university("harvard","US","1500USD","New-york",90000,"OBAMA")
var makerere=new university("makerere","US","1500USD","New-york",80000,"OBAMA")
var KIU=new university("KIU","kampala","1500USD","New-york",80000,"OBAMA")
var UNIKIN=new university("UNIKIN","kinshansa","1500USD","New-york",80000,"OBAMA")
var SAPIES=new university("SIAPES","congo","1500USD","New-york",80000,"OBAMA")

function footballer(team,goals,salary,wife,kids,status){
    this.team=team      
    this.goals=goals
    this.salary=salary
    this.wife=wife
    this.kids=kids
    this.status=status

}
var footballer1=new footballer ("arsenal",10,"1500USD","rebecca",4,"married")
var footballer1=new footballer ("arsenal",10,"1500USD","rebecca",4,"married")
var footballer1=new footballer ("arsenal",10,"1500USD","rebecca",4,"married")
var footballer1=new footballer ("arsenal",10,"1500USD","rebecca",4,"married")
var UNIKIN=new footballer ("arsenal",10,"1500USD","rebecca",4,"married")
var SAPIES=new new footballer ("arsenal",10,"1500USD","rebecca",4,"married")
