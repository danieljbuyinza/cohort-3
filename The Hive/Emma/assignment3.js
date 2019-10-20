
    /* ASSIGNMENT THREE
     CREATE SIX OBJECTS
   USING OBJECTS Examples1*/
//Creating propertise of the object person.
//OBJECT1
function person(village, name, age, school, location, heightInft){
    
    this.village = village
    this.name = name
    this.age = age
    this.school = school
    this.location = location
    this.heightInft = heightInft
}
//Initiatizing the instances of the object person.
allan = new person('lili', 'kirombe', 22, 'ntinda s.s', 'kampala', 5)
mark = new person('pili', 'nalyaa', 30, 'nalyaa s.s', 'entebbe', 6)
tom = new person('rico', 'namugongo', 70,'seeta s.s', 'jinja',3 )
luke = new person('porto','muyenga', 26,'gombe s.s', 'mbale', 2.5)
collin = new person('criti', 'bukoto', 23, 'butany s.s', 'kampala', 5)
rita = new person('spano','kira', 77, 'jinja s.s', 'kampala', 6)
console.log(allan.school)
console.log(allan.village)
console.log(allan.age)
console.log(allan.name)
console.log(allan.location)
console.log(allan.heightInft)


//OBJECT2
//Creating propertise of the object district.
function district (region, tribe, population, size, subcounty, county){
    
    this.region = region
    this.tribe = tribe
    this.population = population
    this.size = size
    this.subcounty = subcounty
    this.county = county
}
//Initiatizing the instances of the object district.
mbale = new district('western', 'bagishu', 15000 , '34 sqkm', 15)
jinja = new district('south-east', 'basoga', 3000, '12 sqkm',  6)
kampala = new district('central', 'baganda', 7000,'22 sqkm', 13 )
mbarara = new district('western','banyankole', 26000,'44 sqkm', 2.5)
gulu = new district('northern', 'Luo', 23000, '55 sqkm', 55)
kasese = new district('western','baganda', 770000, '45 sqkm', 6)
console.log(mbale.population)
console.log(kampala.subcounty)
console.log(gulu.tribe)
console.log(kasese.size)
console.log(kampala.subcounty)
console.log(jinja.region)

//OBJECT 3
//Creating propertise of the object country.
function country (region,president, flagColor, independenceDay, district, city){
    
    this.region = region
    this.president = president
    this.flagColor = flagColor
    this.independenceDay = independenceDay
    this.district= district
    this.city = city
}
//Initiatizing the instances of the object country.
uganda = new country('east africa', 'Kaguta musevini', 'black,yellow,red','12th oct',12,'kampala')
sudan = new country('eastern africa', 'under millitary rul', 'red,white ,black,white,green,red','26th july',34,'juba')
kenya = new country('east africa', 'uhuru kinyata','red,blue,green','5th may',34,'nairobi')
tanzania = new country('east africa','john magufuli','green,black,blue', '7th mach',43,'dodoma')
southafrica = new country('south africa', 'Cyril Ramaphosa','red,blue,black,green', '8th dec',54,'cape town')
egypt = new country('western','Abdel Fattah el-Sisi', 'gold,white,green','4th jal', 32,'cairo')
console.log(uganda.region)
console.log(kenya.president)
console.log(egypt.city)
console.log(uganda.district)
console.log(tanzania.president)
console.log(southafrica.independenceDay)


//OBJECT 4
//Creating propertise of the object school.
function school(uniformColor, population,location,grade,performance,numberOfstuffs ){
    
    this.uniformColor = uniformColor
    this.population = population
    this.location = location
    this.grade = grade
    this.performance = performance
    this.numberOfstuffs = numberOfstuffs
}
//Initiatizing the instances of the object school.
ntindaSecondary = new school('blue', 5000, 'kampala','5','exellent',12,70)
seetaSecondary = new school('green', 9000, 'mukono','3','good',50)
guluSecondary= new school('white', 8000,'gulu','2','verygood',45)
sorotiSecondary = new school('brown',4000,'soroti','1' ,'fair',96)
kampalaSecondary = new school('pink', 4890,'kampala', '4','good',73)
yumbeSecondary = new school('red',3500, 'yumbe','5','exellent',54)
console.log(ntindaSecondary.uniformColor)
console.log(seetaSecondary.location)
console.log(guluSecondary.performance)
console.log(sorotiSecondary.numberOfstuffs)
console.log(kampalaSecondary.grade)
console.log(yumbeSecondary.uniformColor)



//OBJECT5
//Creating propertise of the object president.
function president (name, country, height, age, wealthworth, race ){
    
    this.name = name
    this.country = country
    this.height = height
    this.age = age
    this.wealthworth = wealthworth
    this.race  = race
}
//Initiatizing the instances of the object president.
president1 = new president('uganda', 'kaguta musevi', '6 feet' ,78,'1 trillion dollars', 'african')
president2 = new president('tanzania', 'john magufuli', '7 feet',68,'4 trillion dollars','african')
president3 = new president('egypt', 'abdel fattah','5 feet',67,'6 trillion dollars','african' )
president4 = new president('south africa','cyril ramaphosa','5 feet',65, '7 trillion dollars','african')
president5 = new president('sudan', 'millitary rule', '8 feet','non' ,'2 trillion dollars', 'african')
president6 = new president('uhuru kenyatta', 'kenya','7 feet',76, '5 trillion dollars','african')
console.log(president1.age)
console.log(president2.race)
console.log(president3.country)
console.log(president4.name)
console.log(president5.height)
console.log(president6.country)



//OBJECT6
//Creating propertise of the fruit. 
function fruit (color, weight, texture, size, planttype,taste){
    
    this.color = color
    this.weight = weight
    this.texture = texture
    this.size = size
    this.planttype = planttype
    this.taste = taste
}
//Initiatizing the instances of the object fruit.
orange = new fruit('greenishyellow', '300 grams','smooth','small' , 'hardwood', 'sour')
banana = new fruit('yellow', '200 grams', 'smooth','small', 'herbetous','sweet')
pineapple = new fruit('yellow','2 kilograms','rough','medium', 'herbertous')
apple = new fruit('lightgreen', '100 grams','crunchy','small','hardwood')
lemon = new fruit('green',  '100 grams', 'rough','small','hardwood','sour')
watermelon = new fruit('reddish','3 kilograms','smooth', 'large','cripping','sweet')

console.log(orange.color)
console.log(banana.texture)
console.log(pineapple.size)
console.log(apple.planttype)
console.log(lemon.taste)
console.log(watermelon.weight)