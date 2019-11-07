/* My 6 objects using the this property ...............*/
/* 1st object of employee*/
function employee(namee,agee,dobb,salaryy,positionn,attendancee) {
    this.name = namee  //this is a keyword for accessing the properties
    this.age = agee
    this.dob = dobb
    this.salary = salaryy
    this.position = positionn
    this.attendance = attendancee
}

/* constructor */
var daniel = new employee("Daniel", 23, "2nd 1998",2000000,"Accountant","present")
var patrick = new employee("Patrick", 25, "6th 1999",300000,"Receptionist","present")
var rachel = new employee("Rachel", 27, "8th 1989", 500000, "Project manager", "present")
var fanny = new employee("Fanny", 25, "3th 1997", 300000, "Human Resource", "Absent")
var jhon = new employee("Jhon", 29, "4th 1998", 300000, "Driver", "present")
var james = new employee("James", 35, "6th 2009", 400000, "Engineer", "present")

/* displays output */
console.log(daniel.name)
console.log(patrick.dob)
console.log(rachel.salary)
console.log(fanny.age)
console.log(jhon.position)
console.log(james.attendance)


//separates output results from previous logs
console.log("\n\n");



/* 2nd object of hospital */
function hospital(namee, locationn, countryy, regionn, cityy, townn ) {
    this.name = namee
    this.location = locationn
    this.country = countryy
    this.region = regionn
    this.city = cityy
    this.town = townn
}

/* constructor */
var ihk = new employee("ihk", "africa", "uganda", "central", "kampala", "muyenga")
var nsambya = new employee("nsambya", "africa", "uganda", "central", "kampala", "nsambya")
var rubaga = new employee("rubaga", "africa", "uganda", "central", "kampala", "rubaga")
var mulago = new employee("mulago", "africa", "uganda", "central", "kampala", "mulago")
var kibuli = new employee("kibuli", "africa", "uganda", "central", "kampala", "kibuli")
var namirembe = new employee("namirembe", "africa", "uganda", "central", "kampala", "namirembe")

/* displays output */
console.log(ihk.name)
console.log(nsambya.name)
console.log(rubaga.name)
console.log(mulago.name)
console.log(kibuli.name)
console.log(namirembe.name)





//separates output results from previous logs
console.log("\n\n");



/* 3rd object of phone */
function phone(namee, typee, colorr, modell, durabilityy, manufacturerr) {
    this.name = namee
    this.type = typee
    this.color = colorr
    this.model = modell
    this.durability = durabilityy
    this.manufacturer = manufacturerr
}

/* constructor */
var samsung = new phone("samsung", "smartphone", "anyColour", "2019model", "5yrs", "china")
var nokia = new phone("nokia", "smartphone", "anyColour", "2019model", "6yrs", "china")
var iphone = new phone("iphone", "smartphone", "anyColour", "2015model", "4yrs", "china")
var techno = new phone("techno", "smartphone", "anyColour", "2019model", "10yrs", "china")
var microsoft = new phone("microsoft", "smartphone", "anyColour", "2017model", "2yrs", "china")
var huawei = new phone("huawei", "smartphone", "anyColour", "2018model", "10yrs", "china")

/* displays output */
console.log(samsung.name)
console.log(nokia.name)
console.log(iphone.name)
console.log(techno.name)
console.log(microsoft.name)
console.log(huawei.name)



//separates output results from previous logs
console.log("\n\n");



/* 4th object of bag */
function bag(namee, typee, colorr, sizee, durabilityy, manufacturerr) {
    this.name = namee
    this.type = typee
    this.color = colorr
    this.size = sizee
    this.durability = durabilityy
    this.manufacturer = manufacturerr
}

/* constructor */
var backpack = new phone("backpack", "leather", "any", "central", "big", "uganda")
var handbag = new phone("handbag", "leather", "any", "central", "big", "uganda")
var suitecase = new phone("suitecase", "leather", "any", "central", "big", "uganda")
var wallet = new phone("wallet", "leather", "any", "central", "small", "uganda")
var crossbag = new phone("crossbag", "leather", "any", "central", "medium", "uganda")
var clutch = new phone("clutch", "leather", "any", "central", "small", "uganda")

/* displays output */
console.log(backpack.name)
console.log(handbag.name)
console.log(suitecase.name)
console.log(wallet.name)
console.log(crossbag.name)
console.log(clutch.name)




//separates output results from previous logs
console.log("\n\n");



/* 5th object of shoe */
function shoe(namee, typee, colorr, occasionn, durabilityy, manufacturerr) {
    this.name = namee
    this.type = typee
    this.color = colorr
    this.occasion = occasionn
    this.durability = durabilityy
    this.manufacturer = manufacturerr
}

/* constructor */
var heels = new phone("heels", "forLadies", "anyColor", "party", "long", "uganda")
var snickers = new phone("snickers", "forGents", "anyColor", "games", "long", "uganda")
var pumps = new phone("pumps", "forBoth", "anyColor", "walks", "long", "uganda")
var boots = new phone("boots", "forGents", "anyColor", "gardening", "long", "uganda")
var sandles = new phone("sandles", "forLadies", "anyColor", "aroundHouse", "long", "uganda")
var slippers = new phone("slippers", "forLadies", "anyColor", "bathroom", "long", "uganda")

/* displays output */
console.log(heels.name)
console.log(snickers.name)
console.log(pumps.name)
console.log(boots.name)
console.log(sandles.name)
console.log(slippers.name)

//separates output results from previous logs
console.log("\n\n");




/* 6th object of fruit */
function fruit(namee, typee, colorr, tastee, costt, sizee) {
    this.name = namee
    this.type = typee
    this.color = colorr
    this.taste = tastee
    this.cost = costt
    this.size = sizee
}

/* constructor */
var orange = new phone("orange", "juicy", "yellow", "bitter", "500", "small")
var mango = new phone("mango", "juicy", "yellow", "sweet", "500", "medium")
var lemon = new phone("lemon", "juicy", "green", "bitter", "300", "small")
var pineapple = new phone("pineapple","juicy", "yellow", "bitter", "1000",  "medium")
var apple = new phone("apple", "juicy", "red", "sweet", "1000", "small")
var jackfruit = new phone("jackfruit", "juicy","green", "sweet", "2000", "big")

/* displays output */
console.log(orange.name)
console.log(mango.name)
console.log(lemon.name)
console.log(pineapple.name)
console.log(apple.name)
console.log(jackfruit.name)


