/* Creating a human object */
function human(name, age, weight, employed, skill, homeArea) {
    this.name = name
    this.age = age
    this.weight = weight
    this.employed = employed // Boolean checking whether the person is employed or not
    this.skill = skill
    this.homeArea = homeArea
}
/* the humans */
drake = new human('drake', 23, 50, true, 'blockchain', 'mutungo')
ernest = new human('ernest', 89, 48, true, 'data science', 'kireka')
cynthia = new human('cynthia', 53, 70, false, 'agriculture', 'kamwokya')
mzee = new human('mzee', 13, 65, false, 'social science', 'nsambya')
joan = new human('joan', 71, 72, true, 'web development', 'namanve')
wycliffe = new human('wycliffe', 33, 70, false, 'business computing', 'makerere')


/* Creating a car object */
function car(carName, topSpeed, colour, noOfSeats, year, typeOfFuel) {
    this.carName = carName
    this.topSpeed = topSpeed
    this.colour = colour
    this.noOfSeats = noOfSeats
    this.year = year // Release of the car
    this.typeOfFuel = typeOfFuel
}
/* the cars */
lamborghini = new car('lamborghini', 395, 'orange', 2, 2017, "Petrol")
bmw = new car('bmw', 320, 'deepblue', 5, 2018, "Petrol")
benz = new car('mercedes benz', 330, 'black', 5, 2019, "Petrol")
bentley = new car('bentley', 340, 'darkgreen', 5, 2015, "Petrol")
astonMartin = new car('aston martin', 360, 'silver', 2, 2014, "Petrol")
rangeRover = new car('range rover', 310, 'white', 7, 2017, "Diesel")


/* Creating a superhero object */
function superhero(name, power, strength, canFly, noOfAccessories, masked) {
    this.name = name
    this.power = power
    this.strength = strength
    this.canFly = canFly
    this.noOfAccessories = noOfAccessories // The number of items they utilise when active
    this.masked = masked // If their attire conceals their identity
}
/* the superheroes */
superman = new superhero('superman', 'strength', 95, true, 1, false)
batman = new superhero('batman', 'combat', 75, false, 5, true)
wonderwoman = new superhero('wonderwoman', 'virtue', 90, true, 3, false)
flash = new superhero('flash', 'speed', 30, false, 0, true)
cyborg = new superhero('cyborg', 'tech', 60, true, 0, false)
aquaman = new superhero('aquaman', 'marine', 65, false, 1, false)


/* Creating a company object */
function company(companyName, networth, noOfEmployees, technology, salary, noOfBonusPackages) {
    this.companyName = companyName
    this.networth = networth // In billions
    this.noOfEmployees = noOfEmployees
    this.technology = technology
    this.salary = salary // Per month
    this.noOfBonusPackages = noOfBonusPackages
}
/* the companies */
google = new company('google', 29.5, 192000, 'search engine', 15000, 8)
microsoft = new company('microsoft', 38.9, 168050, 'os', 8500, 11)
apple = new company('apple', 42, 171300, 'desktop computer', 16500, 3)
facebook = new company('facebook', 33.1, 110000, 'social network', 10000, 6)
amazon = new company('amazon', 27.9, 95000, 'ecommerce store', 14500, 2)
andela = new company('andela', 11.2, 15000, 'code', 6700, 2)


/* Creating a course object */
function course(course, duration, difficulty, passMark, platform, certification) {
    this.course = course
    this.duration = duration // In weeks
    this.difficulty = difficulty
    this.passMark = passMark
    this.platform = platform
    this.certification = certification
}
// the courses
java = new course('introduction to java programming', 14, 'intermediate', 85, 'codecademy', true)
javascript = new course('javascript - beginner to advanced', 10, 'beginner', 80, 'edx', true)
python = new course('python for software engineers', 12, 'intermediate', 80, 'datacamp', true)
sql = new course('understanding sql', 5, 'beginner', 90, 'oracle', true)
c = new course('the complete course on c#', 10, 'advanced', 75, 'microsoft', true)
php = new course('php for web development', 7, 'intermediate', 70, 'cousera', true)


/* Creating a soda object */
function soda(soda, colour, temperature, natureOfBottle, price, brand) {
    this.soda = soda
    this.colour = colour
    this.temperature = temperature
    this.natureOfBottle = natureOfBottle // Glass or plastic
    this.price = price
    this.brand = brand
}
// the sodas
coke = new soda('coke', 'black', 'cold', 'glass', 1500, 'coca-cola')
fanta = new soda('fanta', 'orange', 'cold', 'plastic', 2500, 'coca-cola')
pepsi = new soda('pepsi', 'black', 'warm', 'glass', 2000, 'pepsi-cola')
sprite = new soda('sprite', 'colourless', 'warm', 'plastic', 1500, 'coca-cola')
novida = new soda('novida', 'colourless', 'cold', 'plastic', 1500, 'coca-cola')
stoney = new soda('stoney', 'colourless', 'cold', 'glass', 2000, 'coca-cola')