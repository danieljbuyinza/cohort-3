
// ===================== Start ===================================
/**
 * This function Creates an object person with 6 properties
 * @param {The person's name} name 
 * @param {The person's age} age 
 * @param {The person's gender} gender 
 * @param {The person's residence} residence 
 * @param {The person's weight} weight 
 * @param {The person's color} color 
 */
function person(name,age,gender,residence,weight,color){
    
   //Determining the properties and values of the object person  
    this.name = name
    this.age = age
    this.gender = gender
    this.residence = residence
    this.weight = weight
    this.color = color
}

 // Constructing different objects i.e Nicholus,Nicolette etc...
 
nicholus = new person('Seguya Nicholus',30,'M','Entebbe',80,'black') 
nicolette = new person('Nalubega Nicolette',2,'F','Zzana',15,'brown')
brenda = new person('Nantume Brenda',15,'F','Entebbe',45,'brown')
sandra = new person('Nanteza Sandra',25,'F','Kireka',55,'black')
mukasa = new person('Mukasa Joseph',15,'M','Nsambya',45,'brown')
samuel = new person('Ssemujju Samuel',35,'M','Kisubi',75,'brown')
// ===================== End ===================================


// ===================== Start ===================================
/**
 * This function Creates an object Animal with 6 properties
 * @param {This is the animal name} anm_name 
 * @param {This is the animal behavior} behavior 
 * @param {This is the animal sound} sound 
 * @param {This is the animal type} type 
 * @param {This is the animal young_one} young_one 
 * @param {This is the animal home} home 
 */
function animal(anm_name,behavior,sound,type,young_one,home){
    //Determining the properties and values of the object animal
    this.name = anm_name
    this.behavior = behavior
    this.sound = sound
    this.type = type
    this.young_one = young_one
    this.home = home
}

// Constructing different objects i.e cat,lion etc...
cat = new animal('Cat','Meowing',' Meow','Pet','kitten','Cage')
dog = new animal('Dog','Barking','Bow','Pet','Puppy','Kennel')
cow = new animal('Cow','Mowing','Mow','Domestic','Calf','Cowshed')
hen = new animal('Hen','Preening','Clucking','Domestic','Chick','Chicken Coop')
sheep = new animal('Sheep','Beeing','Bee','Domestic','Lamb','Pen')
lion = new animal('Lion','Roars','Grunts','Wild','Cub','Den')
// ===================== End ===================================


// ===================== Start ===================================
/**
 * This function Creates an object phone with 6 properties
 * @param {*} phone_name 
 * @param {*} model 
 * @param {*} type 
 * @param {*} processor 
 * @param {*} manufacturer 
 * @param {*} price 
 */
function phone(phone_name,model,type,processor,manufacturer,price){

    //Determining the properties and values of the object animal
this.name = phone_name
this.model = model
this.type = type
this.processor = processor
this.manufacturer = manufacturer
this.price = price
}

// Constructing different objects i.e cat,lion etc...spectrun
samsung = new phone('Samsung','J200','Smart Phone','Qualcom','Samsung','$150')
apple = new phone ('Tecno','W3','Smart Phone','A13','Apple Inc','$400')
huwei = new phone('Huwei','P30 Pro','Smart Phone','Kirin 920','Huwei','$300')
nokia = new phone('Nokia','Asha','Cell Phone','Octa Core','HMD Global')
ericsson = new phone('Sony Ericsson','It261','Smart Phone','Snapdragon S4 Pro','Sony Mobile')
itel = new phone('Itel','it1508','Cell phone','Mtk','Itel','$140')
// ===================== End ===================================


// ===================== Start ===================================
/**
 *  * This function Creates an object University with 6 properties
 * @param {*} uni_name 
 * @param {*} location 
 * @param {*} year_started 
 * @param {*} website 
 * @param {*} motto 
 * @param {*} chancellor 
 */
function university(uni_name,location,year_started,website,motto,chancellor){

    //Determining the properties and values of the object animal
    this.name = uni_name 
    this.location = location
    this.year_started = year_started
    this.website = website
    this.motto = motto
    this.chancellor = chancellor

}

// Constructing different objects i.e makerere,Nkumba etc...
nkumba = new university('Nkumba','Lyamutundwe',1994,'www.nkumbauniversity.ac.ug','promotion of excellence in applied business education','Gordon Wavamunno')
makerere = new university('Makerere',' University Rd, Kampala',1922,'https://www.mak.ac.ug','We Build for the Future','Barnabas Nawangwe')
ucu = new university('Uganda Christian','Bishop Tucker Rd, Mukono',1997,'https://ucu.ac.ug','A Centre of Excellence in the Heart of Africa','John Musisi Senyonyi')
ndejje = new university('Ndejje','Kampala',1992,'https://www.ndejjeuniversity.ac.ug','Fear of God brings Knowledge and Wisdom','Wilberforce Kisamba Mugerwa')
kiu = new university('Kampala International','Kampala',2001,'https://kiu.ac.ug',"Uganda's leading private university",'Peter. K. Tibenderana')
gulu  = new university('Gulu','Laroo Division, Municpality 166, Gulu, Gulu',2002,'https://gu.ac.ug','','George Openjuru')
// ===================== End ===================================


// ===================== Start ===================================
/**
 * This function Creates an object vehicle with 6 properties
 * @param {*} veh_name 
 * @param {*} type 
 * @param {*} color 
 * @param {*} release 
 * @param {*} price 
 * @param {*} manufacturer 
 */
function vehicle(veh_name,type,color,no_of_tyres,price,manufacturer){

    //Determining the properties and values of the object animal
    this.name = veh_name
    this.type = type
    this.color = color
    this.no_of_tyres = o_of_tyres
    this.price = price
    this.manufacturer = manufacturer
}
// Constructing different objects i.e wagon,bicycles etc...
wagon = new vehicle('Farm wagon','carrier','brown',4,'US$5,800.00','america')
motor_vehicle = new vehicle('Boxer','carrier','red',2,'$5,000','america')
bicycle = new vehicle('Phonex','carrier','black',2,'$350','america')
railed_vehicle = new vehicle('Train','carrier','brown','8','$1,700,000.','america')
amphibious_vehicle = new vehicle('cars','carrier','brown',4,' $106,000','america')
aircraft = new vehicle('Helicopter','carrier','green',4,'$340,000','america')
// ===================== End ===================================


/**
 * 
 * @param {*} companyName 
 * @param {*} networth 
 * @param {*} noOfEmployees 
 * @param {*} technology 
 * @param {*} salary 
 * @param {*} noOfBonusPackages 
 */
/* Creating a company object */
function company(companyName, networth, noOfEmployees, technology, salary, noOfBonusPackages) {

    //Determining the properties and values of the object compay
    this.companyName = companyName
    this.networth = networth 
    this.noOfEmployees = noOfEmployees
    this.technology = technology
    this.salary = salary 
    this.noOfBonusPackages = noOfBonusPackages
}
// Constructing different objects i.e google,microsoft etc...
google = new company('google', 29.5, 192000, 'search engine', 15000, 8)
microsoft = new company('microsoft', 38.9, 168050, 'os', 8500, 11)
apple = new company('apple', 42, 171300, 'desktop computer', 16500, 3)
facebook = new company('facebook', 33.1, 110000, 'social network', 10000, 6)
amazon = new company('amazon', 27.9, 95000, 'ecommerce store', 14500, 2)
andela = new company('andela', 11.2, 15000, 'code', 6700, 2)


