//list 6 objects and 6 instances of the same + 6 properties
/*
*/
function phone(brand,size,connectivity,megapixels,storage,country){
    //creating properties of the phone object
    this.brand = brand
    this.size = size
    this.connectivity = connectivity
    this.megapixels = megapixels
    this.storage = storage
    this.country = country
}

//kato then creates 6 instances of the object phone
phone1 = new phone('samsung','6inch','5g','8mp','32gb','korea')
phone2 = new phone('tecno', '4inch', '3g', '16mp', '16gb','china')
phone3 = new phone('huawei','7inch','lte','16mp','124gb','japan')
phone4 = new phone('sony','10inch','5g','20mp','200gb','kongo')
phone5 = new phone('katorch','4inch','2g','2mp','50mb','uganda')
phone6 = new phone('iPhone','8inch','6g','16mp','64gb','America')

/*now i am creating properties for the livestock object */
function livestock(type, weight, meat, uses, origin,destination){
    //type of animal, its weight,the type of meat,purpose and source/destination
    this.type = type
    this.weight = weight
    this.meat = meat
    this.uses = uses
    this.origin = origin
    this.destination = destination
}
//Creating instances of the different kinds of livestock
livestock1 = new livestock('cow','100kg','beef','food','Mbarara','lufula')
livestock2 = new livestock('pig','60kg','pork','muchomo','wambizi','kyadondo rugby grounds')
livestock3 = new livestock('sheep','45kg','Mutton','Pet','Masaka','London')
livestock4 = new livestock('rabbit','2kg','nyama','dog food','wakiso','kampala')
livestock5 = new livestock('kuroiler','1kg','chicken','katogo','kampala','Kawempe')
livestock6 = new livestock('goat','35kg','Goat meat','muchomo just','kiboga','lufula')


/* For the object boda, I have considered the following attributes 
maker,chasis,Yearproduced,origin,stage, dealer
 */
function boda( maker,chasis,Yearproduced,origin,stage, dealer){
    this.maker = maker
    this.chasis = chasis
    this.Yearproduced = Yearproduced
    this.origin = origin
    this.stage = stage
    this.dealer = dealer

}
//with the above function, here are 6 instances of the object boda as defined
boda1 = new boda('bajaj','steel','2002','india','kamwokya','Simba motors')
boda2 = new boda('tvs', 'custom','2003','china','Makerere','Jumia')
boda3 = new boda('Suzuki','Wood','1882','Japan','Katanga','GOU')
boda4 = new boda('Musa body','Kyuma','2020','Uganda','Mpigi','Yuasa motors')
boda5 = new boda('BMW','rubber','2000','Germany','Entebbe','Spear Motors')
boda6 = new boda('Harley Davidson','Gold','1998','America','Airport','Embassy')


/* for the object soda, these are the properties considered 
distributor,container,maker,color,calories,transportation
 */
function soda(name,container,maker,color,calories,transportation){
    //maker as in perpsi,riham,coke
    this.name=name
    this.container=container
    this.maker=maker
    this.color=color
    this.calories=calories
    this.transportation=transportation
}
//Applying the above 6 instances of the object soda
soda1 = new soda('Pepsi','Plastic','Pepsi Uganda','Dark brown','200cal','Truckers')
soda2 = new soda('Riham','Glass','Riham industries','Blue','200cal','BodaBoda')
soda3 = new soda('Krest','Glass','CocaCola','Green','50cal','Trains')
soda4 = new soda('Fanta','2 litre','CocaCocola','Orange','900cal','trucks')
soda5 = new soda('Mirinda','Ofwono','Pepsi Ug','Purple','300cal','trucks')
soda6 = new soda('Nirvana','Plastic','Century bottling','Clear','0cal','SafeBoda')



/*for the object bar, these are the attributes name,location,agelimit,seating,year it was
launched, proprietor
 */
function bar(name,location,agelimit,seating,launched, proprietor){
    //launched, year launched, do they consider age limits, what is seating capacity
    this.name=name
    this.location=location
    this.agelimit=agelimit
    this.seating=seating
    this.launched=launched
    this.proprietor=proprietor
    }
    //here go 6 instances of the object bar
bar1= new bar('Panamera','Kamwokya','18+','200 people',2008,'Desh')
bar2= new bar('Paradiso','Muyenga','None','50 people', 2000,'Mugaga')
bar3= new bar('Fuego','Muyenga','21+','100 people',1999,'Muyindi')
bar4= new bar('Katikati','Lugogo','25+','3000',1990,'Kabaka')
bar5= new bar('Hideout','Lugogo','20+','No seating',2018,'Saleh')
bar6= new bar('Kafunda','Anywhere','No age limit','19 people',2016,'Mama baby')


/*the object is newspaper, Kato has assigned it these attributes
website,country,language, pages,owner, reach
 */
function newspaper(website,country,language, pages,owner, reach){
     
    this.website = website
    this.country=country
    this.language=language
    this.pages=pages
    this.owner=owner
    this.reach=reach
}
//6 instances of object newspaper, each instance is new
newspaper1= new newspaper('Newvision.com','Uganda','English',60,'Kabushenga','Countrywide')
newspaper2= new newspaper('Redpepper.ug','Uganda','English',30,'Tumusiime','Central Ugaanda')
newspaper3= new newspaper('Bukedde.co.ug','Uganda','language',20,'Kabaka','Buganda')
newspaper4= new newspaper('rwandatimes.rw','Rwanda','Kinyarwanda',40,'Kagame')
newspaper5= new newspaper('sudantribune.su','Sudan', 'Arabic', 68, 'GOSS')
newspaper6= new newspaper('nation.co.ke','Kenya','Swahili',32,'Kenyatta','EAst Africa')

//
