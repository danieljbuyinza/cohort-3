/*introductions to construtors
/the code below will take objects of cars 
*/
function car(price,name,years,place,about,good)
    /*this is used for creating a property of an object and assigning them to their meaning
as seen below
the properties are as below*/
{
    this.good=good
    this.about=about
    this.price=price
    this.place=place 
    this.name=name
    this.years=years
}
//initializing an instance of an object car
car1=new car('buy from toyota company',2019,'toyata','what','yes they are good','there are many options',20000000);
console.log(car1.price);
console.log(car1.place);
console.log(car1.name);
console.log(car1.years);
console.log(car1.good);
console.log(car1.about);

//initializing an instance of an object car
car2=new car('they are affordable', 2018,'corona','yes for you','spear motors','there are many options as well',25000000);

console.log(car2.about);
console.log(car2.good);
console.log(car2.price);
console.log(car2.place);
console.log(car2.name);
console.log(car2.years);

//initializing an instance of an object car
car3=new car('the seats are high are confortable',2017,40000000,'pajero','feels good to drive','they are good to drive','the speed is ');
console.log(car3.price);
console.log(car3.place);
console.log(car3.name);
console.log(car3.years);
console.log(car3.price);
console.log(car3.about);
//initializing an instance of an object car
car4=new car('the seats are high are confortable',2017,50000000,'macedess bence','feels good to drive','they are good to drive','the speed is ');
console.log(car4.price);
console.log(car4.place);
console.log(car4.name);
console.log(car4.years);
console.log(car4.price);
console.log(car4.about);
//initializing an instance of an object car
car5=new car('the seats are high are confortable',2017,40000000,'hamer','feels good to drive','they are good to drive','the speed is ');
console.log(car5.price);
console.log(car5.place);
console.log(car5.name);
console.log(car5.years);
console.log(car5.price);
console.log(car5.about);
//initializing an instance of an object car
car6=new car('the seats are high are confortable',2017,20000000,'rav4','feels good to drive','they are good to drive','the speed is ');
console.log(car6.price);
console.log(car6.place);
console.log(car6.name);
console.log(car6.years);
console.log(car6.price);
console.log(car6.about);



/*the below fuction will take objects of person and will have properties that can describe a person */
function person(vilage,name,age,school,size,town)
{
    //creating proties of object person
    this.vilage=vilage
    this.name=name
    this.age=age
    this.school=school
    this.size=size
    this.town=town
}
//initializing an instance of an object person
gloria=new person('tororo','gloria',22,'refactory international school','tall','mediam')

console.log(gloria.vilage)
console.log(gloria.school)
console.log(gloria.name)
console.log(gloria.age)
console.log(gloria.size)
console.log(gloria.town)

//initializing the second instance of an object person
emma = new person('gulu',26,'emma','refactory s.s','fat','soro')
console.log(emma.vilage)
console.log(emma.age)
console.log(emma.name)
console.log(emma.school)
console.log(emma.size)
console.log(emma.town)

//initializing the third instance of an object person
mary=new person ('mary',20,'makerere university','busia','paya','tall')

console.log(mary.vilage)
console.log(mary.age)
console.log(mary.name)
console.log(mary.school)
console.log(mary.size)
console.log(mary.town)

//initializing the forth instance of an object person
florance=new person('florance',24,'moroco','short','kisoko','makerere business institute')

console.log(florance.vilage)
console.log(florance.age)
console.log(florance.name)
console.log(florance.school)
console.log(florance.size)
console.log(florance.town)

//initializing the fifith instance of an object person
eva =new person ('eva',29,'ETC','thin','masaka','nalwenge')
console.log(eva.vilage)
console.log(eva.age)
console.log(eva.name)
console.log(eva.school)
console.log(eva.size)
console.log(eva.town)

//initializing the sixith instance of an object person
nagaba = new person ('nagaba',24,'thin','mbarara','refactory','mbuya')

console.log(nagaba.vilage)
console.log(nagaba.age)
console.log(nagaba.name)
console.log(nagaba.school)
console.log(nagaba.size)
console.log(nagaba.town)







//the below code will be containing objects of trees and how they grow
// this is also another way of writing code in constructor
//initualising the funtio

function country(villages,name,tribes,towns,location,president)
{
    //creating proties of object person
    this.villages=villages
    this.name=name
    this.tribes=tribes
    this.location=location
    this.president=president
    this.towns=towns
}
//initializing an instance of an object country
uganda =new country('kampala','uganda','bantus','east africa','H.E President Yoweri Kaguta','ndaiga')

console.log(uganda.name)
console.log(uganda.location)
console.log(uganda.president)
console.log(uganda.tribes)
console.log(uganda.towns)
console.log(uganda.vilages)
//initializing an instance of an object country
america = new country ('america','west','President Donal Truimp','South Corolina','Watshingtone DC')

console.log(america.name)
console.log(america.tribes)
console.log(america.vilages)
console.log(america.location)
console.log(america.towns)
console.log(america.president)
//initializing an instance of an object country
kenya = new country ('kenya','east','kikuyu','lutonyi','nairobi','H.E President uhuru kinyatta')
 
console.log(kenya.name)
console.log(kenya.tribes)
console.log(kenya.president)
console.log(kenya.towns)
console.log(kenya.lacation)
console.log(kenya.villages)

//initializing an instance of an object country
nigeria = new country('nigeria','igbo tribe','west africa','President buhari','abuja','amon')

console.log(nigeria.name)
console.log(nigeria.tribes)
console.log(nigeria.location)
console.log(nigeria.president)
console.log(nigeria.towns)
console.log(nigeria.villages)
//initializing an instance of an object country
congo = new country('congo','kwa','central','flis tskeddi')

console.log (congo.name)
console.log (congo.tribes)
console.log (congo.president)
console.log (congo.towns)
console.log (congo.villages)
console.log (congo.locations)

/*the below is abythe way code showing another method of writing a class of objects
initialising object tree and its properties 
NOTE: WHEN WRITING OGJECTS YOU DONT MAKE THEM PRURAL 
FOR example the appropiate way of writing object for trees is "tree"when initialising the object*/
var trees={
tree1:"muvle",
place:"you can get it anywhere",
good:"yes its hard and good for cooking",
size:'can be of any size',
height:'very tall sometimes',
seasons:'not so sure about the season'
}
//console.log helps you to see what you have done.you can always test it from the terminal
console.log(trees.tree1)
console.log(trees.place)
console.log(trees.good)
console.log(trees.size)
console.log(trees.height)
console.log(trees.seasons)


/*the below will be showing object of fruits
and its properties in the parenthersis or the object {}operator.*/

 function name(size,shape,price,place,color,taste){
//intitialising the properties of object fruit
this.size=size
this.shape=shape
this.price=price
this.place=place
this.color=color
this.taste=taste
//intitialising an instance of object fruit
orange =new name ('green coloe','cycle','planted in the gardens',1000,'sweet sometimes','can be big or small')
pear =new name('gray','cycle',1500,'markets','sweet','can be or small')
jackfruite=new name('green',500,'sweet','markets','cycle','big')
pinapple =new name ('yellow when ripe and green when raw','cycle',1500,'markets','sweet','can be or small')
pawpaw =new name ('yellow when ripe and green when raw','cycle',2000,'markets','sweet','can be or small')
betrude = new name ('red','cycle',3000,'markets','sweet','mediam')
 }
 //initialising the console.log to show some of the intialised properties with the 
console.log(orange.size)
console.log(betrude.color)
console.log(pinapple.taste)
console.log(pawpaw.place)
console.log(jackfruite.shape)


 /*another way of writing  aconstructing code
 // so the below code will show an object girl and 
 the properties of the objects*/
 function girl(){
     this.name='chandi',
     this.tribe='mixed of muteso and japadhola',
     this.height='tall',
     this.charactor='black and white',
     this.social='very friendly',
     this.town='kampala'
 }
 //console.log to show the work in the terminal
 console.log(girl.name)
 console.log(girl.town)
 console.log(girl.social)
 console.log(girl.charactor)
 console.log(girl.height)
 console.log(girl.tribe)


 //initializing object of creating

 function create(female,male,goat,fish,cow,sheep){
     this.female=female
     this.male=male
     this.fish=fish
     this.cow=cow
     this.goat=goat
     this.sheep=sheep

     james=new create('male','can walk','has two legs')
     lady =new create('female','has eyes','can talk')
     maet=new create('can be goats meat','has four legs',100000)
     animal=new create('can be a cow',1000000)
     wool =new create('can be from a sheep',300000)
     water=new create(1000,"market")
 }

 console.log(james.male)
 console.log(lady.female)
 console.log(maet.goat)
 console.log(animal.cow)
 console.log(wool.sheep)
 console.log(water.fish)
