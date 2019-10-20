/*create 6 objects, taking on 6 properties each and 6 instances for each.
This is object oriented programming where we have objects and their properties and subsequent instances as stated below.
*/
function drink(n, b, a, c, m, d) {
    this.name = n
    this.type = b
    this.content = a
    this.color = c
    this.manufacturer = m
    this.body = d
}
//these are properties of object drink
var nilespecial = new drink('nilespecial', 'beer', 'alcoholic', 'orange', 'ugandabreweries', 'glass')
var cocacola = new drink('cocacola', 'softdrink', 'nonalcoholic', 'black', 'coccacola', 'glass')
var bushera = new drink('bushera', 'beverage', 'nonalcoholic', 'brown', 'britannia', 'plastic')
var fourcousins = new drink('fourcousins', 'wine', 'alcoholic', 'maroonred', 'noidea', 'glass')
var minutemaid = new drink('minutemaid', 'juice-beverage', 'nonalcoholic', 'yellow', 'cocacola', 'plastic')
var bond7 = new drink('bond7', 'whiskey', 'alcoholic', 'orangebrown', 'premiumdistillers', 'glass')
console.log( 'this highlights the instance of bushera which is a property of drink' , +bushera.name)
console.log(cocacola.content)
console.log(bushera.type)
console.log(fourcousins.manufacturer)
console.log(minutemaid.color)
console.log(bond7.body)

console.log('\n')
function president(n, g, t, e, y, l) {
    this.name = n
    this.age = g
    this.country = t
    this.gender = e
    this.yearsinoffice = y
    this.lifestatus = l
}
//these are properties of object president
var yoweri = new president('yoweri', 75, 'uganda', 'male', 33, 'alive')
var mugabe = new president('mugabe', 90, 'zimbabwe', 'male', 30, 'dead')
var sirleaf = new president('sirleaf', 80, 'sierraleone', 'female', '12', 'alive')
var zuma = new president('zuma', 77, 'southafrica', 'male', 9, 'alive')
var muammar = new president('muammar', 69, 'libya', 'male', 42, 'dead')
var magufuli = new president('magufuli', 60, 'tanzania', 'male', 4, 'alive')
console.log('this highlights the instance of bushera which is a property of drink' , +mugabe.lifestatus)


console.log('\n')

function phone(n, t, m, s, c, z) {
    this.name = n
    this.type = t
    this.model = m
    this.space = s
    this.color = c
    this.size = z
}
//these are properties of object phone
var samsung = new phone('samsung', 'smartphone', 'S7', '128GB', 'black', 'sleek')
var iphone = new phone('iphone', 'smartphone', 'eightplus', '256GB', 'rosegold', 'sleek')
var katochi = new phone('katochi', 'notsmartphone', 'k7', '500MB', 'green', 'thick')
var honor = new phone('honor', 'smartphone', '8x', '128GB', 'magentablue', 'sleek')
var infinix = new phone('infinix', 'smartphone', 'note3', '64GB', 'black', 'sleek')
var tecno = new phone('tecno', 'smartphone', 'note4', '600GB', 'pink', 'sleek')
console.log('this highlights the instance of katochi which is a property of phone' , +katochi.name)
console.log(honor.color)
console.log(infinix.size)
console.log(samsung.model)
console.log(iphone.type)
console.log(tecno.space)


console.log('\n')
function hair(p, h, q, o, y, x) {
    this.type = p
    this.length = h
    this.quality = q
    this.color = o
    this.style = y
    this.texture = x
}
//thes are properties of object hair
var african = new hair('african', 'short', 'super', 'brownish', 'kinky', 'rough')
var brazillian = new hair('brazillian', 'long', 'good', 'black', 'curly', 'smooth')
var chinese = new hair('chinese', 'short', 'good', 'black', 'straight', 'soft')
var latina = new hair('latina', 'verylong', 'fair', 'pink', 'curly', 'soft')
var locks = new hair('locks', 'long', 'good', 'teal', 'plaited', 'hard')
var braids = new hair('braids', 'long', 'rough', 'red', 'onhead', 'rough')
console.log('this highlights the instance of braids which is a property of hair' , +african.length)

console.log('\n')
//this is a 
function animal(a, y, h, u, f, v) {
    this.name = a
    this.type = y
    this.home = h
    this.youngones = u
    this.color = f
    this.product = v
}
//these are properties of object animal
var cow = new animal('cow', 'domestic', 'kraal', 'calves', 'blackandwhite', 'beef')
var buffalo = new animal('buffalo', 'wild', 'savanna', 'calves', 'brown', 'buffalomeat')
var goat = new animal('goat', 'domestic', 'kraal', 'kids', 'black', 'skins')
var dog = new animal('dog', 'domestic', 'kennel', 'puppies', 'purple', 'none')
var snake = new animal('snake', 'wild', 'grass', 'snakelets', 'yellow', 'snakeskin')
var hen = new animal('hen', 'domestic', 'pen', 'chicks', 'brown', 'chicken')
console.log('this highlights the instance of hen which is a property of animal' , +hen.product)


console.log('\n')
//this is a function of cloth with objects class,fabric,height,fitting,color and print as well as the properties.
function cloth(t, r, b, d, w, i) {
    this.class = t
    this.fabric = r
    this.height = b
    this.fitting = d
    this.color = w
    this.print = i
}
//these are properties of object animal
var trouser = new cloth('trouser', 'cotton', '5cm', 'skinny', 'red', 'leopard')
var shirt = new cloth('cloth', 'chiffon', '45cm', 'loose', 'fuschia', 'snakeprint')
var skirt = new cloth('skirt', 'leather', 'short', 'pleated', 'brown', 'leather')
var blouse = new cloth('blouse', 'silk', 'long', 'tight', 'pink', 'floral')
var sweater = new cloth('sweater', 'wool', 'small', 'loose', 'gray', 'stripped')
var jacket = new cloth('jacket', 'denim', '5m', 'fitting', 'blue', 'denim')
console.log('this highlights the instance of blouse which is a property of cloth' , +blouse.print)
