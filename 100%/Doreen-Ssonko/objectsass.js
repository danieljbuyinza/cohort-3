//creating 5 objects with 6 parameters
 //first object
 function phone (brand,RAM,colour,resolution,screensize,storageSpace) //in js functions are first class objects
{
    //below are the parameters of a phone
    this.brand = brand
    this.RAM = RAM 
    this.colour = colour
    this.resolution = resolution //camera resolution
    this. screensize = screensize
    this.storageSpace = storageSpace
}  //creating instances for the object phone
techno = new phone ('phantom9','6gbram','green','2340px','6.40inches','128gb' )
iphone = new phone ('iphonex','3gbram','black','2436px','5.85inches','256gb')
huawei = new phone ('p30pro','8gbram','silver','2340px','6.40inches','512gb')
samsung = new phone ('S10','8gbram','gold','3040px','6.10inches','128gb')
infinix = new phone ('note6','4gbram','brown','2160px','6.o1inches','64gb')
itel = new phone ('S15','2gbram','maroon','1320px','6.10inches','32gb')

console.log (iphone.resolution)//consolelogged the iphone camera resolution

//second object
function laptop (brand,colour,scrnresolution,storage,ram,size) //parameters of the laptop
{
    this.brand = brand  
    this.colour = colour
    this.scrnresolution = scrnresolution
    this.storage = storage
    this.ram = ram
    this.size = size
}
// below are the instances of the object laptop
    dell = new laptop ('xps13','rose-gold','3840*2160','256gb','8gb','13inch')
    lenovo = new laptop ('ideapad110','black','1366*768','128gb','8gb','15.6inch')
    microsoftsurface = new laptop ('surface10','grey','2496*1664','128gb','8gb','15inch')
    acer = new laptop ('aspire5','black','1920*1080','256gb','12gb','15.6inch')
    sony = new laptop ('vaioSX14','silver','3000*2000','512gb','8gb','15inch')
    hp = new laptop ('envy13','pale-gold','1440*900px','256gb','8gb','12inch')

    console.log (sony.storage) //sony laptop storage is consologged to return storage of the laptop

     //third object
function car (type, maxPower,topspeed,horsepower,batterycapacity,colour)//parameters of the car object
{
    this.type  = type
    this.maxPower =  maxPower
    this.topspeed = topspeed
    this.horsepower = horsepower
    this.batterycapacity = batterycapacity
    this.colour = colour
}
     //instances of the objects of car using a constructor

    bentley = new car    ('flying-spur','616bhp','207mph','626','112V','granite')
    jeep = new car       ('grand-cherokee','236bhp','180mph','295','108V','oliveGreen')
    mercedes = new car   ('cClass','384bhp','251mph','241','127V','polarWhite')
    bmw = new car        ('m1','512bhp','186mph','273','129V','sunsetOrange')
    chevrolet = new car  ('bumblebeeCamaro','455bhp','127mph','275','800V','satinSteelGray')
    audi = new car       ('r8','610bhp','207mhp','562','900v','mythosRed')

    console.log (audi.colour) //audi color is consolelogged to get mythosRed

//forth object
function television(screenSize,weight,hdmiPorts,name,refreshRate,price ) //here my object is a television
{ //below are the parameters in the television object
    this.screenSize  = screenSize
    this.weight = weight
    this.hdmiPorts   = hdmiPorts
    this.name = name
    this.refreshRate = refreshRate
    this.price = price
}
//instances of the objects
 samsung = new television ('65Inches','62Pounds','4','q10','120Hz','2597')
 lg = new television ('65Inches','55Pounds','4','c9','120H','2299')
 sony = new television ('75Inches','77Pounds','4','120H','2498')
 vizioSeries = new television ('65Inches','53Pounds','4','m','60Hz','927')
 tclSeries = new television ('65Inches','52Pounds','3','roku','60Hz','749')
 sunBrite = new television ('55Inches','47Pounds','3','veranda','60Hz','6060')
 console.log ('vizioSeries.hdmiPorts') //console.log vizioSeries to show how many hdmiPorts the tv has

// fifth object 
function box (length, weight, color ,owner ,kindOf ,country) //the object here is a box
{ //these are the parameters of the box
    this.length = length
    this.weight = weight
    this.color = color
    this.owner = owner
    this.kindOf = kindOf
    this.country = country
} //these are the instances of the object
box1 = new box ( '15cm','10kgs','blue' ,'verinah','biscuits','china')
box2 = new box ( '5cm', '7kgs', 'yellow','monica','chocolate','america')
box3 = new box ( '60cm', '23kgs', 'brown', 'ivan', 'gadgets','holland')
box4 = new box ('79cm', '34kgs', 'pink', 'clare', 'cosmetics', 'france')
box5 = new box ('64cm', '40kgs', 'grey', 'marvin', 'sneakers', 'ukraine')
box6 = new box ('3cm', '10kgs', 'blue','ulian', 'love', 'netherlands')
  
console.log ('ulian.kindOf') 
//here im consologging the kindOf box ulian has 



