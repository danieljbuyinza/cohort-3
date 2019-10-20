/*Objects Assignment.
Create 6 Objects and 6 instances of each object.
the first object defines a car, with parameters that illustrate the vehicle model, its top speed, the price of the vehicle,
the vehicle color, its year of release and the buyer(owner) of the car*/

var car = function (model,speed,sale,color,yearofrelease,buyer){
    //assigning properties to the parameters of the object-'car'
    this.model = model
    this.speed = speed
    this.sale = sale
    this.color = color
    this.yearofrelease = yearofrelease
    this.buyer = buyer

}
//examples of objects. the 'new' keyword attributes new objects that fit within the functional criteria of the car object.
//this will allow the system to determine information of the vehicle by use of the console.log denotation below
Audi = new car('R8',300,2000000,'black',2010,'Fahad')
AstonMartin = new car('DBX',310,2500000,'silver',2012,'Jeremy')
BMW = new car('M3',300,15000000,'striped',2010,'Mostwanted')
Ford = new car('Mustang',320,3000000,'black',2013,'Clarence')
Lamborghini = new car('Gallado',400,3500000,'yellow',2013,'Ahmed')
Bugatti = new car('Chiron',480,5000000,'matte',2016,'Twalib')

console.log(AstonMartin.model)
console.log(Audi.buyer)
console.log(Bugatti.speed)
console.log(Lamborghini.sale)
console.log(BMW.yearofrelease)
console.log(Ford.model)

//Second Object
/*This object is defined for identifying cell phone properties, identifying model type, the owner of the device,the operating system it uses,
the price the devise sells in Kenyan currency, the screensize and the number of cameras on the device*/

var phone = function (type,owner,operatingsystem,price,screensize,cameras){
    //apportioning properties for the parameters above to allow the system to determine relevant information about the device
    this.type = type
    this.owner = owner
    this.operatingsystem = operatingsystem
    this.price = price
    this.screensize = screensize
    this.cameras = cameras
}

//running operations based on object 2 above
Samsung = new phone('J7','Ahmed' ,'Android',15000,'4.8 inches','two')
iPhone = new phone(4,'Emmanuel','iOS',10000,'4 inches','two')
Tecno = new phone('L8','Gloria','Android',8000,4.8,'two')
Tecno2 = new phone('J8','Emmanuel','Android',5000, '4.8 inches','two')
Samsung2 = new phone('S10','Kevin','Android',35000,'4.5 inches','two')
iPhone2 = new phone(8,'Doreen','iOS',35000,'4.8 inches','two')

console.log(iPhone2.owner)
console.log(Samsung2.price)
console.log(Tecno.cameras)
console.log(Samsung.operatingsystem)
console.log(Tecno2.type)
console.log(iPhone.cameras)

/*Object 3
Third function is designed to output artist sales based on the name of the artist and discography information inputted.
Properties here include the genre of the artist's music, the current album trending, chart position, ratings of the album,
top single debuted off of the album and how many units its selling per week
*/

var artist = function (genre,album,chartposition,ratings,topsingle,salesperweek){
    //properties are assigned to the relevant parameters and format criteria.
    this.genre = genre
    this.album = album
    this.chartposition = chartposition
    this.ratings = ratings
    this.topsingle = topsingle
    this.salesperweek = salesperweek
}

Khalid = new artist('RnB','Free Spirit',7,'4.5/5','Better',250000)
PVRIS = new artist('Rock','White Noise',9,'4.0/5','St Patrick', 200000)
JayZ = new artist('HipHop','Magna Carter',1,'4.9/5','Holy Grail', 2000000)
YoungMA = new artist('HipHop','Herstory',8,'4.3/5','Petty Wap',230000)
DavidGuetta = new artist('Electronic/Dance','Nothing But The Beat',4,'4.5/5','Memories',550000)
ChrisBrown = new artist('RnB/HipHop','Indigo',3,'4.7/5','Heat',580000)

console.log(Khalid.album)
console.log(PVRIS.topsingle)
console.log(JayZ.salesperweek)
console.log(YoungMA.ratings)
console.log(DavidGuetta.chartposition)
console.log(ChrisBrown.genre)

/*Object 4
this object deefines the properties of a country, ranging from geographic location, capital city, type of civilisation,
currency being used in the country,the nation's president and the continent which the country is located.
*/

var country = function (location,capital,civilisation,currency,president,continent){
    //Assigning of properties to country parameters to help identify values called out in the functions proceeding the parenthesis
    this.location = location
    this.capital = capital
    this.civilisation = civilisation
    this.currency = currency
    this.president = president
    this.continent = continent
}

Kenya = new country('East Africa','Nairobi','Third World','Kenya Shilling','Uhuru Kenyatta','Africa')
Uganda = new country('East Africa', 'Kampala','Third World','UGX','Yoweri Museveni','Africa')
USA = new country("North America",'Washington DC','First World','American Dollar','Donald Trump','North America')
GreatBritain = new country('Western Europe','London','First World','Sterling Pound','Queen Elizabeth II','Europe')
SouthAfrica = new country('South Africa','Johannesburg','Second World','Rand','Ramaphosa','Africa')
China = new country('Far East Asia','Beijing','First World','Yen','Xi','Asia')

console.log(Kenya.president)
console.log(Uganda.location)
console.log(USA.civilisation)
console.log(GreatBritain.currency)
console.log(SouthAfrica.continent)
console.log(China.capital)

/*Object 5
object 5 defines the type of laptops students have, the price of the device, the specifications of ra, hdd and the monitor size
as well as the processor speed.
*/

var laptop = function (modeltype,pricetag,ram,hdd,monitorsize,processor){
    //assigning of properties using the 'this.' key word to their respective parameter
    this.modeltype = modeltype
    this.pricetag = pricetag
    this.ram = ram
    this.hdd = hdd
    this.monitorsize = monitorsize
    this.processor = processor
}

//calling out the object properties with user information inputed in the paranthesis
ShayosLaptop = new laptop('dell',35000,'4GB','500GB','15 x 18','4GHz')
NicksLaptop = new laptop('hp',20000,'4GB','500GB','10 x 15','4GHz')
SandrasLaptop = new laptop('acer', 35000, '8GB','500GB','20 x 15', '4GHz')
EmmasLaptop = new laptop('hp',38000,'2GB','500GB','20 x 18','5GHz')
GloriasLaptop = new laptop('dell',15000, '2GB','250GB','18 x 15', '2GHz')
FannysLaptop = new laptop('Lenovo',40000,'4GB','500GB','20 x 18','8GHz')

//acquiring information from object
console.log(ShayosLaptop.modeltype)
console.log(NicksLaptop.processor)
console.log(SandrasLaptop.hdd)
console.log(EmmasLaptop.monitorsize)
console.log(GloriasLaptop.pricetag)
console.log(FannysLaptop.ram)

/*Object 6
this object helps note down the names of team members in specific football teams for a video game,
illustrating in its parameters the goalkeeper, the defender, the midfielder, the striker, the captain of the squad
and the coach of the team.
*/

var squad = function(Goalkeeper,Defender,Midfielder,Striker,Captain,Coach){
    //parameters are given their own relevant properties using the 'this.' keyword
    this.Goalkeeper = Goalkeeper
    this.Defender = Defender
    this.Midfielder = Midfielder
    this.striker = Striker
    this.captain = Captain
    this.Coach = Coach
}

//seeking information from selected football teams, note how each individual value of parameters are aligned to the respective attributes from the parent object
///'new' keyword allows for the creation of other objects whose information can be traced from the parent object above
Manchester = new squad('De Gea','McGuire','Pogba','Rashford','Young','Ole Gunner')
Arsenal = new squad('Leno','Bellerin','Ozil','Aubameyang','Xhaka','Unai Emery')
Liverpool = new squad('Minolet','van Djik','Robertson','Salah','Milner','Klopp')
Barcelona = new squad('Ter Stegen','Pique','Busquets','Griezmann','Messi','Valverde')
RealMadrid = new squad('Coutois','Marcelo','Modric','Benzema','Ramos','Zidane')
ManchesterCity = new squad('Bravo','Stones','Bernado Silva','Aguero','David Silva','Pep Guardiola')

console.log(Manchester.Goalkeeper)
console.log(Arsenal.Defender)
console.log(Liverpool.Coach)
console.log(Barcelona.captain)
console.log(RealMadrid.Midfielder)
console.log(ManchesterCity.striker)