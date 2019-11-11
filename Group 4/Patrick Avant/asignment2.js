// // this  is  the  object  i  created  about  my  Computer 
function Computer(Work_Group, Window, Harddisc, RAM, Processor, Sytem_type) {
    this.Work_Group = Work_Group
    this.Window = Window
    this.Harddisc = Harddisc
    this.RAM = RAM
    this.Processor = Processor
    this.Sytem_type = Sytem_type

}

Laptop = new Computer('WORK GROUP', 'My PC Is Window10 Pro', 'Hard disc Capasity is 500GB', 'RAM Is 8GB', 'Processor i5', '64-bit Operating System')

console.log(Laptop.Window)
console.log(Laptop.Harddisc)
console.log(Laptop.RAM)
console.log(Laptop.Sytem_type)
console.log(Laptop.Work_Group)




// Object here is  a room 
function Room(bedSize, Numbers_of_Chairs, Door_color, wall, Table_type, Notice_board) {
    this.bedSize = bedSize
    this.Numbers_of_Chairs = Numbers_of_Chairs
    this.Door_color = Door_color
    this.wall = wall
    this.Table_type = Table_type
    this.Notice_board = Notice_board
}
home = new Room('4X6 Bed size', '2 Reading room chairs', 'Brown Door ', 'A wide wall', 'Computer table', 'White notice Board')
console.log(home.bedSize)
console.log(home.Numbers_of_Chairs)
console.log(home.Door_color)
console.log(home.wall)
console.log(home.Table_type)
console.log(home.Notice_board)





// // i created personal detail
function Personality(height, Skin_color, Job, Religion, Tribe, Status) {
    this.height = height
    this.Skin_color = Skin_color
    this.Job = Job
    this.Religion = Religion
    this.Tribe = Tribe
    this.Status = Status
}
opio = new Personality('7 feet Tall', 'Dark skin', 'Software developer', 'A Christian', 'Longo by tribe', 'In relationship with Stella Mukoya')
console.log(opio.height)
console.log(opio.Skin_color)
console.log(opio.Job)
console.log(opio.Religion)
console.log(opio.Tribe)
console.log(opio.Status)


// // console.log('I Am 'Gentleman)

function Folders(Favorite, Selected, Family, Downloads, Document, Academics) {
    this.Favorite = Favorite
    this.Selected = Selected
    this.Family = Family
    this.Downloads = Downloads
    this.Document = Document
    this.Academics = Academics
}
Files = new Folders('Best Gospel Songs', 'Tutorial', 'Family_photos', 'Movies', 'UACE and Other Academics documents', 'reafactory facilitators')
console.log(Files.Favorite)
console.log(Files.Selected)
console.log(Files.Family)
console.log(Files.Downloads)
console.log(Files.Document)
console.log(Files.Academics)





// // property of  the  campusses in uganda 
function Continents(Asia, Africa, North_America, Australia, Antarctica, Europe, ) {
    this.Asia = Asia
    this.Africa = Africa
    this.North_America = North_America
    this.Australia = Australia
    this.Antarctica = Antarctica
    this.Europe = Europe
}
Population = new Continents('Asia  the  total populstion of 4,611,292,100', 'Africa total  population  30,370,000', 'North America  total  population  588,659,900', 'Australia total population 42,265,500', 'Antarctica No pamarnent population', 'Europe   and the  population is 747,296,100')
console.log(Population.Asia)
console.log(Population.Africa)
console.log(Population.North_America)
console.log(Population.Australia)
console.log(Population.Antarctica)
console.log(Population.Europe)


// i  considereed the behavior  and detail of  my  lecturer .  so iput it  under aproperty,. 

function Osman(nik_name, Employment, home, character, maritual_status, hobbies) {
    this.nik_name = nik_name
    this.Employment = Employment
    this.home = home
    this.character = character
    this.maritual_status = maritual_status
    this.hobbies = hobbies
}
Facilitator = new Osman('OZZY', 'Facilitataor and Ambassador of Python Africa', 'Jinja', 'Awsome and  loving Facilitator', 'Loves party after party', 'He loves lecturing  and dancing')

console.log(Facilitator.nik_name)
console.log(Facilitator.Employment)
console.log(Facilitator.home)
console.log(Facilitator.character)
console.log(Facilitator.maritual_status)
console.log(Facilitator.hobbies)



// // //FUNCTION (REGION,SUB)
// // {this.Region=region
// // }
// // mbale=new district('western','bagishu',5000,'34km')
// // console.log(mbale.region)