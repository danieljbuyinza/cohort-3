/*
create 6 objects, taking on 6 properties each and 6 instances for each

*/
console.log("Results below are from the proffession object")
function proffession(name, salaryPay, dressCode, educationLevel, retirementAge, profBenefits){
    this.name = name
    this.salaryPay = salaryPay
    this.dressCode = dressCode
    this.educationLevel = educationLevel
    this.retirementAge = retirementAge
    this.profBenefits = profBenefits
}
// creating new instances of the proffession object
var proff1 = new proffession('Doctor', '100000 Ughs' )
console.log('The ' + proff1.name + ' has a salary pay of ' + proff1.salaryPay)

var proff2 = new proffession('Lawyer', '50000 Ughs', 'blue suits')
console.log('The ' + proff2.name + 's' + ' mainly dress in ' + proff2.dressCode)

var proff3 = new proffession('Teacher', '1000000 Ughs')
console.log('A salary pay of ' + proff3.salaryPay + ' befits ' + proff3.name)

var proff4 = new proffession('Engineer', '300000 Ughs', 'no tie', 'Bachelors degree')
console.log('An ' + proff4.name + ' earns about ' + proff4.salaryPay + ' but with a qualification of ' + proff4.educationLevel)

var proff5 = new proffession('Driver', '100000 Ughs', 'helmet', 'S4', 70, 'Career growth')
console.log('The ' + proff5.name + ' usually retire at ' + proff5.retirementAge)

var proff6 = new proffession('Accountant', ' 700000 Ughs', 'black & white')
console.log('The ' + proff6.name + ' dress in ' + proff6.dressCode + ' and earn about ' + proff6.salaryPay)

console.log()

// creating the object country
console.log("Results below are from the country object")
function country(countryName, countrySize, language, medianAge, lifeExpectancy, populationSize){
    this.countryName = countryName
    this.countrySize = countrySize
    this.language = language
    this.medianAge = medianAge
    this.lifeExpectancy = lifeExpectancy
    this.populationSize = populationSize
}
// creating new instances of the country object
let country1 = new country('Uganda', '50m', 'English' ,70,)
console.log('In ' + country1.countryName + ' , most people speak ' + country1.language )

let country2 = new country('Kenya', '60m', 'Swahili', 50)
console.log('In ' + country2.countryName + ' , most people speak ' + country2.language + ' but with a meidan age of about ' + country2.medianAge)

let country3 = new country('Tanzania', '70', 'Swahili', 60)
console.log('Most people speak ' + country3.language + ' in ' + country3.countryName)

let country4 = new country('Russia', '80m', 'Russian language', 59)
console.log('Most people speak ' + country4.language + ' in ' + country4.countryName)

let country5 = new country('America', '90m', 'English', 48)
let country6 = new country('Rwanda', '20m', 'Runyankore', 45)

console.log()

// creating the fruit object
console.log("Results below are from the fruit object")
function fruit(fruitName,fruitCost, fruitColor, fruitNutritionalValue, fruitShape, fruitSize){
    this.fruitName = fruitName
    this.fruitCost = fruitCost
    this.fruitColor = fruitColor
    this.fruitNutritionalValue = fruitNutritionalValue
    this.fruitShape = fruitShape
    this.fruitSize = fruitSize
}
// creating new instances of the fruit object
var fruit1 = new fruit('Bananas', '500 Ugshs' )
var fruit2 = new fruit('Mangoes', '700 Ugshs')
var fruit3 = new fruit('Jack-fruit', '600 Ugshs')
var fruit4 = new fruit('Peers', '800 Ugshs')
var fruit5 = new fruit('Papaya', '200 Ugshs')
var fruit6 = new fruit('Lemons', '2500 Ugshs')

console.log()

// creating the University object
console.log("Results below are from the university object")
function university(location, mainCourse, uniRank, uniStrikeColor, numOfProffs, uniGradDate){
    this.location = location
    this.mainCourse = mainCourse
    this.uniRank = uniRank
    this.uniStrikeColor = uniStrikeColor
    this.numOfProffs = numOfProffs
    this.uniGradDate = uniGradDate
}
// creating new instances of the univeristy object
let uniName1 = new university('Makerere University', 'Medicine', 1, 'red')
let uniName2 = new university('Kyambogo University', 'Telecom Engineering', 10, 'yellow-blue')
let uniName3 = new university('Kampala International University', 'ICT', 25, 'green')
let uniName4 = new university('Ndejje University', 'Applied sciences', 30, 'blue')
let uniName5 = new university('Uganda Christian University', 'Law', 10, 'green')
let uniName6 = new university('Mbarara University', 'Technology', 50, 'navy blue')

console.log()

// creating new car object
console.log("Results below are from the car object")
function president(name, age, country, paySalary, officeLocation, fleetNumber){
    this.name = name
    this.age = age
    this.country = country
    this.paySalary = paySalary
    this.officeLocation = officeLocation
    this.fleetNumber = fleetNumber
}

// creating new instance of the car object
var car1 = new president('Y.K Museveni', 70, 'Uganda', 3000000, 'sate house', 40)
var car2 = new president('Paul Kagame', 65, 'Rwanda', 2500000, 'Kigali', 30)
var car3 = new president('Vladmir Putin', 50, 'Russia', 400000, 'Kremlin', 60)
var car4 = new president('Trump', 67, 'USA', 450000, 'white house', 50)
var car5 = new president('AKonya John', 30, 'Uganda', 500000, 'Kampala', 25)
var car6 = new president('Johntel', 80, 'Kenya')

console.log()


// creating the planet object
console.log("Results below are from the planet object")
function planet(planetName, planetSize, distanceFromSun, planetSurfaceColor, planetTemperature,                              planetChemicalComposition ){
    this.planetName = planetName
    this.planetSize = planetSize
    this.distanceFromSun = distanceFromSun
    this.planetSurfaceColor = planetSurfaceColor
    this.planetTemperature = planetTemperature
    this.planetChemicalComposition = planetChemicalComposition
}

// creating new instances of planet object
let planet1 = new planet('Mercury ',' 4850 kilometers (~3000 miles)', 'close', 'gray to orange')
console.log('Planet ' + planet1.planetName + ' is' + planet1.planetSize + ' in diameter' + ' and so ' + planet1.distanceFromSun + ' to the sun' + ' with a surface color from ' + planet1.planetSurfaceColor + '.!')

let planet2 = new planet('Venus ','12,000 kilometers (7300 miles)', 'earths neighbour', 'brownish-yellow', '900K', 'sulphuric acid and CO2')
console.log('Planet ' + planet2.planetName + ' is the second planet away from the Sun' + ' with a little over ' + planet2.planetSize + ' in diameter.' + ' It has a ' + planet2.planetSurfaceColor + ' surface color with an atmosphere composed largely of ' + planet2.planetChemicalComposition )

let planet3 = new planet('Earth', '12,000 kilometers', 'close', 'green', 'average temperature','liquid water')
console.log('Planet '+ planet3.planetName + ' is a little morethan ' + planet3.planetSize + ' in diameter with ' + planet3.planetChemicalComposition + ' on the surface' )

let planet4 = new planet('Juipter', '142,980 kilometers')
console.log('Planet ' + planet4.planetName + ' is about ' + planet4.planetSize + ' in diameter.')

let planet5 = new planet('Saturn', '120,536 kilometers')
console.log('Planet ' + planet5.planetName + ' is about ' + planet5.planetSize + ' in diameter.')

let planet6 = new planet('Uranus', '51,118 kilometers')
console.log('Planet ' + planet6.planetName + ' is about ' + planet6.planetSize + ' in diameter.')







