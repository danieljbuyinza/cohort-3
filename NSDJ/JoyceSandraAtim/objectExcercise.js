// create a list of cars
function car(color, seat, tyre, price, make, model) {
  //we use 'this' to create an a property of an object
  //this property name should be the same as the parameter.
  this.color = color;
  this.seat = seat;
  this.tyre = tyre;
  this.price = price;
  this.make = make;
  this.model = model;
}

// we use 'new' to create copies of an object.
// intializing intances of different kinds of objects.
car1 = new car("orange", 2, 4, 5000000, 1990, "x3");
car2 = new car("blue", 3, 60, 600000, 1992, "x5");
car3 = new car("pink", 8, 10, 7000000, 1994, "x6");
car4 = new car("yellow", 7, 14, 8000000, 1996, "v8");
car5 = new car("grey", 14, 16, 1000000, 1998, "v9");
car6 = new car("white", 30, 20, 12000000, 20000, "A5");
// a number should not have a string becoz it will print 1 & 4 not 14.

// create a list of shoes
function shoe(make, color, size, material, style, price) {
  //we use 'this' to create an a property of an object
  //this property name should be the same as the parameter.
  this.make = make;
  this.color = color;
  this.size = size;
  this.material = material;
  this.style = style;
  this.price = price;
}

// intializing intances of different kinds of objects.
shoe1 = new shoe(1960, "orange", 5, "leather", "sneakers", 5000);
shoe2 = new shoe(1965, "silver", 6, "rubber", "ballet", 10000);
shoe3 = new shoe(1970, "blue", 8, "craft", "wedge", 15000);
shoe4 = new shoe(1972, "white", 9, "plastic", "flat", 20000);
shoe5 = new shoe(1980, "pink", 10, "hide", "hill", 25000);
shoe6 = new shoe(2000, "yellow", 12, "nylon", "sandle", 30000);
// a number should not have a string becoz it will print 2 & 0 not 20.

// create lists of dresses
function dress(color, make, size, material, style, price) {
  //we use 'this' to create an a property of an object
  //this property name should be the same as the parameter.
  this.color = color;
  this.make = make;
  this.size = size;
  this.material = material;
  this.style = style;
  this.price = price;
}

// intializing intances of different kinds of objects.
// a number should not have a string becoz it will print 2 & 0 not 20.
dress1 = new dress("pink", 2000, 5, "nylon", "threads", 5000);
dress2 = new dress("blue", 2001, 6, "cotton", "straight", 10000);
dress3 = new dress("purple", 2005, 7, "wool", "long", 15000);
dress4 = new dress("brown", 2007, 8, "hide", "short", 20000);
dress5 = new dress("black", 2010, 10, "leather", "medium", 25000);
dress6 = new dress("yellow", 2015, 12, "fabric", "top", 30000);

// create fruits"
function fruit(name, color, price, location, size, origin) {
  //we use 'this' to create an a property of an object
  //this property name should be the same as the parameter.
  this.name = name;
  this.color = color;
  this.price = price;
  this.size = size;
  this.origin = origin;
  this.location = location;
}

// intializing intances of different kinds of objects.
fruit1 = new fruit("orange", "yellow", 500, "small", "kampala");
fruit2 = new fruit("mango", "orange", 1000, "medium", "mbale");
fruit3 = new fruit("apple", "green", 2000, "big", "lira");
fruit4 = new fruit("berry", "brown", 3000, "tinny", "gulu");
fruit5 = new fruit("grape", "purlpe", 4000, "large", "jinja");
fruit6 = new fruit("melon", "red", 5000, "long", "kasese");
// a number should not have a string becoz it will print 5 & 0 not 500.

// create bags
function bag(style, color, size, brand, material, price) {
  //we use 'this' to create an a property of an object
  //this property name should be the same as the parameter.
  this.color = color;
  this.size = size;
  this.brand = brand;
  this.material = material;
  this.price = price;
  this.style = style;
}
// intializing intances of different kinds of objects.
bag1 = new bag("pink", "small", "clava", "donnasharp", 10000, "tote");
bag2 = new bag("blue","Compact","clairechase","waterproof",20000,"crossbody");
bag3 = new bag("green", "Medium", "everest", "textile", 30000, "satchels");
bag4 = new bag("brown", "large", "Cabin", "leather", 40000, "clutch");
bag5 = new bag("maroon", "mid-size", "ebags", "oxford", 50000, "bucket");
bag6 = new bag("green","extra-large","oldtrend","fabric",60000,"Hobo Bags");
// a number should not have a string becoz it will print 1 & 0 not 100.

// create phones
function phone(style, color, size, name, price, origin) {
  //we use 'this' to create an a property of an object
  //this property name should be the same as the parameter.
  phone1.style = style;
  phone2.name = name;
  phone3.color = color;
  phone4.size = size;
  phone5.origin = origin;
  phone6.price = price;
}

// intializing intances of different kinds of objects.
style = new phone("samsung", "galaxy", "pink", 5, 1884, 50000);
name = new phone("apple", "note", "blue", 6, 1925, 100000);
color = new phone("huawei", "fairphone", "brown", 7, 1927, 300000);
size = new phone("nokia", "lumigon", "pitch", 8, 1901, 200000);
origin = new phone("Sony", "desay", "green", 9, 1866, 400000);
price = new phone("infinix", "pantech", "maroon", 10, 1990, 500000);
// a number should not have a string becoz it will print 1 & 0 not 100.
