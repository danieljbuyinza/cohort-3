// Creating a Phone object

function phone(phoneType, screenSize, romSize, phoneColor, ramSize, camPixel) {
    this.phoneType = phoneType
    this.screenSize = screenSize
    this.romSize = romSize
    this.phoneColor = phoneColor
    this.ramSize = ramSize
    this.camPixel = camPixel
}
//instantiating 
nokia6 = new phone('Nokia6.1', '148.8mm x 75.8mm x 8.6mm', '64gb', 'Black', '4gb', '23MPX')
console.log('This phone is a '+nokia6.phoneType)
iphoneXR = new phone('IphoneXR','200mm x 100mm x 100mm','128gb','Grey','6gb','54MPX')
console.log('This is an '+iphoneXR.phoneType)
itel5 = new phone('Itel','11mm x 18mm x 12mm','16gb','white','1gb','11MPX')
console.log('This is an Itel5 '+itel5.romSize)
infinix = new phone('infinix','12mm x 42mm x 12mm','8gb','red','2gb','12MPX')
console.log('This is an infinix '+infinix.camPixel)
samsungJ1 = new phone('samsungJ1','16mm x 15mm x 10mm','4gb','back','2gb','12MPX')
console.log('This is samsungJ1 '+samsungJ1.ramSize)
camron = new phone('Camron','9mm x 13mm x 8mm','8gb','blue','2gd','8MPX')
console.log('This is a camron '+camron.screenSize)

// Creating a person object

function person(fName,lName,age,eyeColor,religion, nationality) {
    this.fName = fName
    this.lName = lName
    this.age = age
    this.eyecolor = eyeColor
    this.religion = religion
    this.nationality = nationality
}
//instantiating 
person1 = new person('John', 'Tukaj', 30, 'brown', 'catholic', 'Ugandan')
console.log('Person1 is '+person1.fName)
person2 = new person('Haruna','Kiwooma','71','Grey','Moslem','Arab')
console.log('Person2 is'+person2.religion)
person3= new person('Sandra','Nanteza','40','white','Protestant','Kenyan')
console.log('person3 is '+person3.lName)
person4 = new person('Ariela','Nakanwagi','','red','seventhdayAdventist','congolese')
console.log('person4 is'+person4.eyeColor)
person5 = new person('Kevin','Klein','45','black','moslem','Rwandese')
console.log('person5 is'+person5.nationality)
person6 = new person('Camron','Dias','40','blue','catholic','american')
console.log('person6 is'+person6.fName)

//creating a Trouser Object
function trouser(color,size,type,length,quality,design){
    this.color=color
    this.size=size
    this.type=type
    this.length=length
    this.quality=quality
    this.design=design
}
//instantiating 
trouser1=new trouser('red',34,'jean','20cm','cotton','denim')
console.log(' trouser1 is a '+trouser1.type)
trouser2=new trouser('blue',50,'silic','17cm','linen','colorsafe')
console.log('trouser2 is '+trouser2.quality)
trouser3=new trouser('brown',41,'Italian','13cm','pimaCotton','adidas')
console.log('trouser3 is '+trouser3.size)
trouser4=new trouser('grey',57,'indian','36cm','stretch','thermo')
console.log('trouser4 is '+trouser4.length)
trouser5=new trouser('black',64,'korean','34cm','woolLook','D&G')
console.log('trouser5 is '+trouser5.type)
trouser6=new trouser( 'white',24,'japan','19cm','wool','TMT')
console.log('trouser6 is  '+trouser6.quality)

//creating a laptop-object
function laptop(make,screenSize,speed,ram,hhdSize,oS){
    this.make=make
    this.screenSize=screenSize
    this.speed=speed
    this.ram=ram
    this.hhdSize=hhdSize
    this.oS=oS
}
//instantiating
apple=new laptop('Apple','17cm','6GHz','4GB','1TB','Ios')
hP=new laptop('HP','21cm','2GH','2GB','500GB','windows')
lenovo=new laptop('Levono','15cm','2GHz','1GB','250GB','Linux')
samsung=new laptop('samsung','17cm','3GHz','2GB','200GB','windows')
dell=new laptop('Dell','15cm','2GHz','2GB','150GB','windows10')
acer=new laptop('Acer','19cm','3GHz','1GB','120GB','windows7')
console.log(apple,hP,lenovo,samsung,dell,acer)










