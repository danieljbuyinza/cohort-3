
//creating 5 objects with 6 parameters.

// Creating person object
// below are the person properties
function person(name, age, weight, location, title, gender) {
    this.name = name
    this.age = age
    this.weight = weight
    this.location = location
    this.title = title 
    this.gender = gender 
}
// person instantiation
john = new person('John', 30, 76, 'Kampala', 'Mr', 'female')
jane = new person('Jane', 45, 80, 'Wakiso', 'Mrs', 'female')
jackson = new person('Jackson', 55, 95, 'Mbale', 'Mr', 'male')
freda = new person('Freda', 35, 84, 'Mbarara', 'Mrs', 'female')
ben = new person('Ben', 40, 86, 'Masaka','Mr', 'male')
emily = new person('Emily', 25, 83, 'Soroti', 'Miss', 'female')


//Creating Car object
// car properties
function car(brand, colour, type, weight, country, speed) {
    this.brand = brand
    this.colour = colour
    this.type = type
    this.weight = weight
    this.country = country
    this.speed = speed
}
// car instantiation
prado = new car('prado', 'white', 'suv', 1800, 'Japan', 160)
mercedes = new car('mercedes', 'silver', 'sedan', 1500, 'Germany', 220)
audi = new car('audi', 'black', 'suv', 1700, 'Germany', 200)
vw = new car('vw', 'red', 'suv', 1400, 'Germany', 240)
harrier = new car('harrier', 'orange', 'sedan', 1600, 'Japan', 180)
kiira = new car('kiira', 'grey', 'sedan', 1400, 'Uganda', 140)


// creating football club object
// football club properties
function football(location, stadium, NoOfSupporters, coach, sponsor, star) {
    this.location = location
    this.stadium = stadium
    this.NoOfSupporters = NoOfSupporters
    this.coach = coach
    this.sponsor = sponsor
    this.star = star
}
// football instantiation
arsenal = new football('london', 'emirates', 60000, 'Unai', 'jvc' , 'Auba')
liverpool = new football('merseryside','anfield', 80000, 'Kloop', 'Jeep' , 'Salah')
chelsea = new football('oldtown', 'standford', 60000, 'lampard', 'umbro' , 'Tammy')
madrid = new football('spain', 'bernabaue',90000, 'zidane', 'benz' , 'Bale')
bayern = new football('munich', 'arena', 75000, 'jonson', 'budlight' , 'Ribery')
psg = new football('paris', 'stadeParis', 85000, 'platini', 'nike' , 'Neymar')


// creating country object
// properties
function country(countryName, population, size, continent, emblem, independence) {
    this.countryName = countryName
    this.population =  population
    this.size = size 
    this.continent = continent
    this.emblem = emblem   
    this.independence = independence
}
//  country instantiation
uganda = new country('Uganda', 40, 240000, 'Africa', 'crested crane', 1962)
spain = new country('Spain', 47, 195634, 'Europe', 'lion', 1906)
china = new country('China', 1386, 3704000, 'Asia', 'stars', 1949)
canada = new country('Canada', 37, 3800000, 'North America', 'beaver', 1867)
kenya = new country('Kenya', 49,220000 , 'Africa', 'lions', 1963)
brazil = new country('Brazil', 209, 3200000, 'South America', 'bird', 1822)


// creating speaker object
// speaker properties
function speaker(brand, colour, batteryCapacity, couuntryOfOrigin, weight, year) {
    this.brand= brand
    this.colour = colour
    this.batteryCapacity = batteryCapacity 
    this.couuntryOfOrigin = couuntryOfOrigin
    this.weight = weight 
    this.year = year
}
// speaker instantiation
jbl = new speaker('jbl', 'orange', 6000, 'America', 500, 2014)
samsung = new speaker('samsung', 'black', 8000, 'South Korea', 600, 1999)
beats = new speaker('beats', 'red', 4000, 'America', 800, 2015)
lg = new speaker('LG', 'grey', 5000, 'South Korea', 750, 2008)
sony = new speaker('Sony', 'silver', 7600, 'Japan', 550, 2017)
hisense = new speaker('Hisense', 'white', 9000, 'China', 600, 2016)