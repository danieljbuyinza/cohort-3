//Exercise 3.create 6 objects and 6 incidences of each.
function lipstick(name, colour, brand, type, wholesalepx, retailpx) {
    //creating properties of lipstick which 
    this.name = name
    this.colour = colour
    this.brand = brand
    this.type = type
    this.wholesalepx = wholesalepx
    this.retailpx = retailpx
}

// creating instances of the different kinds of lipstick
lead = new lipstick('lead', 'pink', 'kylie', 'liquid', 15000, 18000)
captivate = new lipstick('captivate', 'purple', 'lakme', 'matte', 20000, 25000)
zuri = new lipstick('zuri', 'dark-red', 'huddah', 'matte-liquid', 10000, 15000)
loveme = new lipstick('loveme', 'nude', 'mac', 'liquid', 50000, 70000)
frost = new lipstick('frost', 'red', 'maybelline', 'retro-matte', 20000, 25000)
power = new lipstick('power', 'blue', 'huda', 'glossy', 7000, 10000)

//2. creating musicArtist as an object.
function musicArtist(name, genre, country, age, gender, instfollowers) {
    //creating properties of a musicArtist
    this.name = name
    this.genre = genre
    this.country = country
    this.age = age
    this.gender = gender
    this.instfollowers = instfollowers
}

// creating instances of the different kinds of musicArtist
falipupa = new musicArtist('falipupa', 'lingala', 'congo', 35, 'male', 50)
davido = new musicArtist('davido', 'afrobeat', 'nigeria', 30, 'male', 1000)
blake = new musicArtist('blake', 'country', 'kenya', 43, 'male', 100)
rihanna = new musicArtist('rihanna', 'pop', 'jamaica', 32, 'female', 20)
drake = new musicArtist('drake', 'rap', 'america', 38, 'male', 250000)
bebecool = new musicArtist('bebecool', 'reggae', 'uganda', 45, 'male', 800)

//3 creating 6 properties and 6 incidences of a cake.

function cake(flavour, tier, icing, type, taste, price) {
    //creating properties of a cake
    this.flavour = flavour
    this.tier = tier
    this.icing = icing
    this.type = type
    this.taste = taste
    this.price = price
}

// creating instances of each cake
chocolate = new cake('chocolate', 2, 'butterCream', 'butter', 'sweet', 50000)
vanilla = new cake('vanilla', 5, 'fondant', 'pound', 'spicy', 200000)
strawberry = new cake('strawberry', 1, 'royal', 'sponge', 'bitter', 8000)
oranges = new cake('oranges', 2, 'royal', 'fruit', 'sweet', 70000)
pumpkin = new cake('pumpkin', 1, 'meringue', 'sponge', 'sweet', 88000)
keyLime = new cake('keyLime', 3, 'fondant', 'biscuit', 'sweet', 10000)

//4. creating 6 properties and 6 incidences of a bag.

function bag(brand, material, size, type, colour, price) {
    //creating 6 properties of a bag
    this.brand = brand
    this.material = material
    this.size = size
    this.type = type
    this.colour = colour
    this.price = price
}

// creating instances of  different bags
valentino = new bag('valentino', 'leather', 'small', 'hobo', 'maroon', 20000)
mosaic = new bag('mosaic', 'nylon', 'large', 'tote', 'black', 4000)
fendi = new bag('fendi', 'faux', 'extrasmall', 'backpack', 'blue', 800)
gucci = new bag('gucci', 'straw', 'medium', 'clutch', 'brown', 2800)
mansur = new bag('mansur', 'leather', 'large', 'crossbody', 'brown', 6500)
prada = new bag('prada', 'mesh', 'small', 'tote', 'red', 7000)

//5. creating 6 properties and 6 incidences of a fashionModel.

function fashionModel(name, shirt, eyeColour, hips, bust, waist) {
    //creating 6 properties of a fashionModel
    this.name = name
    this.shirt = shirt
    this.eyeColour = eyeColour
    this.hips = hips
    this.bust = bust
    this.waist = waist
}

// creating instances of  different fashionModels
sandra = new fashionModel('sandra', 'xsmall', 'blue', 34, 32, 25)
racheal = new fashionModel('racheal', 'xsmall', 'green', 36, 36, 25)
yash = new fashionModel('yash', 'xsmall', 'brown', 33, 34, 24)
brenda = new fashionModel('brenda', 'xsmall', 'brown', 35, 32, 23)
fanny = new fashionModel('fanny', 'xsmall', 'green', 34, 30, 25)
gloria = new fashionModel('gloria', 'xsmall', 'black', 37, 34, 28)

//6. creating 6 properties and 6 incidences of a man

function man(name, race, heightCm, shirt, weightKg, nationality) {
    //creating 6 properties of a man
    this.name = name
    this.race = race
    this.heightCm = heightCm
    this.shirt = shirt
    this.weightKg = weightKg
    this.nationality = nationality
}

// creating different instances of  different men
nicholas = new bag('nicholas', 'white', 150, 'medium', 75, 'american')
patrick = new bag('patrick', 'black', 140, 'medium', 80, 'kenyan')
jerome = new bag('jerome', 'black', 155, 'large', 70, 'ugandan')
shayo = new bag('shayo', 'asian', 200, 'small', 65, 'chinese')
emma = new bag('emma', 'asian', 170, 'xlarge', 88, 'indian')
kevin = new bag('kevin', 'white', 90, 'large', 76, 'british')
