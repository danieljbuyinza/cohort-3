// create a list of cars
function car (color, seat, tyre, price, make, model) {
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
color = new car("orange", "blue", "silver", "white", "pink", "yellow");
seat = new car(2, 4, 5, 7, 14, 32);
tyre = new car(4, 6, 8, 10, 14, 18);
price = new car(5000000, 6000000, 7000000, 8000000, 10000000, 12000000);
make = new car("germany", "japan", "brazil", "china", "england", "uganda");
model = new car("x3", "x4", "x5", "A3", "A4", "A5");
// a number should not have a string becoz it will print 1 & 4 not 14.


// create a list of shoes
function shoe (made, color, size, material, style, price) 
{
  
  //we use 'this' to create an a property of an object
  //this property name should be the same as the parameter.
  this.made = made;
  this.color = color;
  this.size = size;
  this.material = material;
  this.style = style;
  this.price = price;
}


// intializing intances of different kinds of objects.
made = new shoe("england", "china", "india", "kenya", "uganda", "tanzania");
color = new shoe("orange", "blue", "silver", "white", "pink", "yellow");
size = new shoe(6, 7, 8, "small", "medium", "large");
material = new shoe("leather", "craft", "plastic", "rubber", "hide");
style = new shoe("sandle", "wedge", "flat", "hill", "sport", "medium");
price = new shoe(2000, 4000, 5000, 10000, 15000, 20000);
// a number should not have a string becoz it will print 2 & 0 not 20.

// create lists of dresses
function dress (color, made, size, material, style, price) 
{

  //we use 'this' to create an a property of an object
//this property name should be the same as the parameter.
  this.color = color;
  this.made = made;
  this.size = size;
  this.material = material;
  this.style = style;
  this.price = price;
}

// intializing intances of different kinds of objects.
// a number should not have a string becoz it will print 2 & 0 not 20.
color = new dress("pink", "blue", "yellow", "purple", "brown", "black");
made = new dress("england", "china", "zaire", "kenya", "nigeria", "tanzania");
size = new dress(7, 8, "small", "medium", "large", "extralarge");
material = new dress("nylon", "cotton", "wool", "hide", "leather","threads");
price = new dress(2000, 4000, 5000, 10000, 15000, 20000);
style = new dress("round", "short", "long", "straight", "medium");

// create fruits
function fruit (name, color, price, location, size, origin) 
{

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
name = new fruit("orange", "mango", "apple", "berry", "grape", "melon");
color = new fruit("yellow", "orange", "green", "brown", "purlpe", "red");
price = new fruit(500, 1000, 2000, 3000, 5000, 8000);
size = new fruit("small", "medium", "big", "tinny", "long", "short");
origin = new fruit("southafrica","kenya","uganda","sudan","tanzania","rwanda");
location = new fruit("kampala", "jinja", "gulu", "lira", "mbale", "soroti");
// a number should not have a string becoz it will print 5 & 0 not 500.


// create bags
function bag(style,color,size,brand,material,price)
{

//we use 'this' to create an a property of an object
//this property name should be the same as the parameter.
  this.style=style
  this.color=color
  this.size=size
  this.brand=brand
  this.material=material
  this.price=price

}
// intializing intances of different kinds of objects.
style=new bag ("tote","crossbody","satchels","clutch","bucket","Hobo Bags")
color=new bag ("pink","blue","brown","pitch","green","maroon")
size=new bag ("Large","Medium","Compact","Cabin","Cabin","mid-size")
brand=new bag ("clava","clairechase","everest","donnasharp","ebags","oldtrend")
material=new bag ("waterproof","textile","leather","oxford","flocking","fabric")
price=new bag (10000,20000,30000,40000,50000,60000)
// a number should not have a string becoz it will print 1 & 0 not 100.


// create phones
function phone (style,color,size,name,price,origin)
{
//we use 'this' to create an a property of an object
//this property name should be the same as the parameter.
  this.style=style
  this.name=name
  this.color=color
  this.size=size
  this.origin=origin
  this.price=price
}

// intializing intances of different kinds of objects.
style=new phone ("samsung","apple","huawei","nokia","Sony","infinix")
name=new phone  ("galaxy","note","fairphone","lumigon","desay","pantech")
color=new phone ("pink","blue","brown","pitch","green","maroon")
size=new phone (5,6,7,8,10,11)
origin=new phone (1884,1925,1927,1901,1866,1990)
price=new phone (50000,100000,200000,300000,400000,500000)
// a number should not have a string becoz it will print 1 & 0 not 100.
