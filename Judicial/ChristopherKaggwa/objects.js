/**
 * Declare an object bottle with six parameters
 * Use this key word to make a constructor
 */
function bottle(color, owner, material, transparency, size, bottleNumber) {
	this.color = color;
	this.owner = owner;
	this.material = material;
	this.transparency = transparency;
	this.size = size;
	this.bottleNumber = bottleNumber;
}
// Create instances of the bottle object with corresponding arguments
bottle1 = new bottle("blue", "chris", "plastic", true, "big", 67);
bottle2 = new bottle("red", "chris", "metallic", false, "small", 64);
bottle3 = new bottle("black", "chris", "plastic", true, "medium", 37);
bottle4 = new bottle("yellow", "chris", "plastic", false, "small", 44);
bottle5 = new bottle("purple", "chris", "plastic", true, "medium", 78);
bottle6 = new bottle("pink", "chris", "plastic", true, "big", 95);

/**
 * Declare an object house with six parameters
 * Use this key word to make a constructor
 */
function house(
	paintColor,
	roofingType,
	owner,
	bedrooms,
	windowsMaterial,
	flooring
) {
	this.paintColor = paintColor;
	this.roofingType = roofingType;
	this.bedrooms = bedrooms;
	this.windowsMaterial = windowsMaterial;
	this.flooring = flooring;
	this.owner = owner;
}
// Create instances of the house object with corresponding arguments

house1 = new house("red", "Racheal", "ironSheets", 5, "glass", "tiles");
house2 = new house("black", "Chris", "grass", 6, "wood", "cowDung");
house3 = new house(
	"yellow",
	"Yashmin",
	"roofingTiles",
	9,
	"Aluminiun",
	"redOxide"
);
house4 = new house("pink", "Phyllis", "wood", 4, "glass", "mud");
house5 = new house("purple", "Haruna", "roofingTiles", 2, "glass", "cement");
house6 = new house("grey", "SlayJaJa", "glass", 3, "glass", "tiles");

/**
 * Declare an object dog with six parameters
 * Use this key word to make a constructor
 */
function dog(name, color, breed, puppies, owner, age) {
	this.name = name;
	this.color = color;
	this.breed = breed;
	this.puppies = puppies;
	this.owner = owner;
	this.age = age;
}
// Create instances of the dog object with corresponding arguments

dog1 = new dog("wiwi", "brown", "local", 5, "Racheal", 56);
dog2 = new dog("garfield", "blue", "exotic", 8, "Haruna", 5);
dog3 = new dog("scooby", "green", "hybrid", 7, "Chris", 54);
dog4 = new dog("max", "maroon", "halfcaste", 3, "Yashim", 66);
dog5 = new dog("jopy", "white", "crossbreed", 5, "Maria", 12);
dog6 = new dog("penny", "yellow", "European", 4, "Phyllis", 26);
/**
 * Declare an object cat with six parameters
 * Use this key word to make a constructor
 */

function cat(name, color, breed, kittens, owner, age) {
	this.name = name;
	this.color = color;
	this.breed = breed;
	this.kittens = kittens;
	this.owner = owner;
	this.age = age;
}
// Create instances of the cat object with corresponding arguments

cat1 = new cat("wiwi", "brown", "local", 5, "Racheal", 56);
cat2 = new cat("garfield", "blue", "exotic", 8, "Haruna", 5);
cat3 = new cat("scooby", "green", "hybrid", 7, "Chris", 54);
cat4 = new cat("max", "maroon", "halfcaste", 3, "Yashim", 66);
cat5 = new cat("jopy", "white", "crossbreed", 5, "Maria", 12);
cat6 = new cat("penny", "yellow", "European", 4, "Phyllis", 26);

/**
 * Declare an object goat with six parameters
 * Use this key word to make a constructor
 */
function goat(name, color, breed, kids, owner, age) {
	this.name = name;
	this.color = color;
	this.breed = breed;
	this.kids = kids;
	this.owner = owner;
	this.age = age;
}
// Create instances of the goat object with corresponding arguments

goat1 = new goat("wiwi", "brown", "local", 5, "Racheal", 56);
goat2 = new goat("garfield", "blue", "exotic", 8, "Jessy", 5);
goat3 = new goat("scooby", "green", "hybrid", 7, "Chris", 54);
goat4 = new goat("max", "maroon", "halfcaste", 3, "lili", 66);
goat5 = new goat("jopy", "white", "crossbreed", 5, "Maria", 12);
goat6 = new goat("penny", "yellow", "European", 4, "Phyllis", 26);

/**
 * Declare an object cow with six parameters
 * Use this key word to make a constructor
 */
function cow(name, color, breed, calves, owner, age) {
	this.name = name;
	this.color = color;
	this.breed = breed;
	this.calves = calves;
	this.owner = owner;
	this.age = age;
}
// Create instances of the cow object with corresponding arguments

cow1 = new cow("wiwi", "brown", "local", 5, "Racheal", 56);
cow2 = new cow("garfield", "blue", "exotic", 8, "Haruna", 5);
cow3 = new cow("scooby", "green", "hybrid", 7, "Chris", 54);
cow4 = new cow("max", "maroon", "halfcaste", 3, "Yashim", 66);
cow5 = new cow("jopy", "white", "crossbreed", 5, "Maria", 12);
cow6 = new cow("penny", "yellow", "European", 4, "Phyllis", 26);
