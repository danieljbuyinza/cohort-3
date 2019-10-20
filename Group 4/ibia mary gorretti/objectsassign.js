//objects with their properties and different instances

function girl(name,age,weight,motherName,fatherName,location){
    this.name = name
    this.age = age
    this.weight = weight
    this.motherName = motherName
    this.fatherName = fatherName
    this.location = location
}

liz = new girl('liz',12,40,'Jane','Simon','kampala')
zoe = new girl('zoe',2,7,'Marion','Andrew','seeta')
caro = new girl('caro',15,45,'naka','oga','kenya')
mercy= new girl('mercy',20,60,'Dorothy','Joseph','uk')
cathy = new girl('cathy',16,55,'mary','opio','mukono')
nancy = new girl('nancy',20,65,'Joy','James','Mbale')
console.log(liz.age)

//fruit object
function fruit(name,shape,colour,type,tree,area){
    this.name=name
    this.shape=shape
    this.colour=colour
    this.type=type
    this.tree=tree
    this.area=area
}
mango = new fruit('mango','sickle','yellow','succulent','mango tree','eastern')
orange = new fruit('orange','round','green','succulent','orange tree','eastern')
date = new fruit ('date','oval','brown','dry','date tree','saudi')
pawpaw = new fruit('pawpaw','oval','green','succulent','pawpaw tree','central')
banana = new fruit('banana','sickle','yellow','succulent','banana tree','western')
Apple = new fruit('Apple','round','green','succulent','apple tree','western')
console.log(Apple.type)

//university object
function university(name,colleges,courses,location,viceChancellor,academicRegistrar)
{
    this.name=name
    this.colleges=colleges
    this.courses=courses
    this.location=location
    this.viceChancellor=viceChancellor
    this.academicRegistrar=academicRegistrar
}
university1 = new university('makerere','cocis','software engineering','kampala','ibia','jeus')
university2 = new university('kyambogo','education','languages','kampala','nassaka','adonai')
university3 = new university('kiu','medicine','pharmacy','ishaka','isaac','rety')
university4 = new university('iuiu','public health','nursing','mbale','ishiagi','sonal')
university5 = new university('soroti university','medicine','human medicine','soroti','okello','ajambo')
university6 = new university('lango','law','law','lira','okallo','ayo')
console.log(university1.name)

//party object
function district(name,location,mp,tribe,stapleFood,language)
{
    this.name
    this.location
    this.mp
    this.tribe
    this.stapleFood
    this.womanMp
}

district1 = new district('kampala', 'central', 'kiiza', 'baganda', 'matooke', 'luganda')
district2 = new district('mukono', 'central', 'bruno', 'baganda', 'matooke', 'luganda')
district3 = new district('jinja', 'central', 'naiga', 'basoga', 'potatoes', 'lusoga')
district4 = new district('soroti', 'eastern', 'ariko', 'iteso', 'g/nuts', 'ateso')
district5 = new district('mbale', 'eastern', 'makoko', 'bagisu', 'irish', 'gishu')
district6 = new district('mbarara', 'western', 'byaruhanga', 'cassava', 'irish', 'runyankore')
console.log(district1.name)

//boy object
function boy(name, age, weight, motherName, fatherName, location)
{
    this.name
    this.age
    this.weight
    this.motherName
    this.fatherName
    this.location
}
boy1 = new boy('john', 12, 40, 'Jane', 'Simon', 'kampala')
boy2 = new boy('mark', 2, 7, 'Marion', 'Andrew', 'seeta')
boy3 = new boy('hezekiel', 15, 45, 'naka', 'oga', 'kenya')
boy4 = new boy('job', 20, 60, 'Dorothy', 'Joseph', 'uk')
boy5 = new boy('samuel', 16, 55, 'mary', 'opio', 'mukono')
boy6 = new boy('godfrey', 20, 65, 'Joy', 'James', 'Mbale')


//tree object
function tree(name, height, fruits, age, type, leafSize)
{
    this.name
    this.height
    this.fruits
    this.age
    this.type
    this.name
}
tree1 = new tree('mangoTree', 12, 'mangoes', 2, 'mango', 'small')
tree2 = new tree('orangeTree', 2, 'oranges', 3, 'orange','small')
tree3 = new tree('pawpawTree', 15, 'pawpaws', 1, 'pawpaw','large')
tree4 = new tree('tamarindTree', 20,'tamarinds', 3,'tamarind', 'small')
tree5 = new tree('bananaTree', 16, 'bananas',4,'banana','wide')
tree6 = new tree('appletree', 20, 'apples', 5,'apple','small')
