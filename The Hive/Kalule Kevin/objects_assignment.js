/* 

Create 6 objects(classes)  and then create 6 instances of each object 
    with 6 properties each

EXAMPLES 
    1. Vehicle
    2. Bank Account
    3. House
    4. Football Team
    5. Country
    6. Song
*/

//------------------------------------------FIRST OBJECT  CREATION - VEHICLE OBJECT--------------------------------------------
function vehicle("name","color","manufacturer_brand","number_of_seats","transmission","country"){
    //object properties
    this.name = name
    this.color = color
    this.type = type
    this.number_of_seats = number_of_seats
    this.transmission = transmission
    this.country = country
    
    }
    

//OBJECT INSTANTIATION USING 'new' constructor keyword

var fortuner = new vehicle("Fortuner","silver","Toyota","8","automatic","japan")
var Ford = new vehicle("Ford","grey","Nissan","5","manual","japan")
var Nadia = new vehicle("Nadia","white","Toyota","5","automatic","japan")
var Toureg = new vehicle("Toureg","black","VW","6","automatic","Germany")
var Range_rover = new vehicle("Ranger Rover","Dark Green","Land Rover","5","automatic","United Kingdom")
var Regius = new vehicle("Regius","white","Toyota","8","automatic","japan")



//------------------------------------------SECOND OBJECT  CREATION - VEHICLE OBJECT--------------------------------------------
function bank_account("account_holder","account_name","account_number","account_type","bank","account_balance"){
    //object properties
    this.account_holder = account_holder
    this.account_name = account_name
    this.account_number = account_number
    this.account_type = account_type
    this.bank = bank
    this.account_balance = account_balance
    
    }
    

//OBJECT INSTANTIATION USING 'new' constructor keyword

var account1 = new bank_account("Kalule Kevin","Kalule Kevin Kamanzi","0041522369985","savings","DFCU","100000")
var account2 = new bank_account("Osman Ozzy","Ozzy","112366987452369","current","Bank Of Africa","20000000")
var account3 = new bank_account("FOWA","FOWA Investments","00111223366998845","savings","ORIENT BANK","15000000")
var account4 = new bank_account("CIU","Clarke International University","114789605758462","current","ABSA","2000000000")
var account5 = new bank_account("Melvin Akampa","Akampa Melvin Gabriel","017456358796321456","fixed deposit","Stanbic Bank","800000")
var account6 = new bank_account("Kakuba Albert","Bainomugisha Albert Kakuba","001178964532469","savings","Centenary Bank","1000000")




//-----------------------------THIRD OBJECT  CREATION - HOUSE OBJECT---------------------------------------------------
function house("registered_owner","type","number_of_rooms","type_of_roof","paint_color","location"){
    //object properties
    this.registered_owner = registered_owner
    this.type = type
    this.number_of_rooms = number_of_rooms
    this.type_of_roof = type_of_roof
    this.paint_color = paint_color
    this.location = location
    
    }
    

//OBJECT INSTANTIATION USING 'new' constructor keyword

var house1 = new house("Kalule Kevin","bungalow","7","iron sheets","brown","ntinda")
var house2 = new house("Gloria Chandi","bungalow","8","tiled","brown","kisasi")
var house3 = new house("Kakuba Tina","flat","10","tiled","lime green","Kira")
var house4 = new house("Lelia Bangirana","bungalow","6","tiled","orange","Gayaza")
var house5 = new house("Kansiime Angel","bungalow","4","iron sheets","purple","Kyanja")
var house6 = new house("Juliet Tamutambo","flat","9","tiled","white","Bugolobi")




//----------------------------------------------------FOURTH OBJECT  CREATION - FOOTBALL TEAM OBJECT--------------------------------------------------
function football_team("team_name","coach","goal_keeper","defender","midfielder","striker"){
    //object properties
    this.team_name = team_name
    this.coach = coach
    this.goal_keeper = goal_keeper
    this.defender = defender
    this.midfielder = midfielder
    this.striker = striker
    
    }    

//OBJECT INSTANTIATION USING 'new' constructor keyword
var Arsenal = new football_team("Arsenal","Uni Emry","Leno","Chambers","Ceballos","Aubumeyang")
var Chelsea = new football_team("Chelsea","Frank Lampard","Kepa","Rudiger","Kante","Abraham")
var Juventus = new football_team("Juventus","Maurizio Sarri","Scheszny","Chiellini","Ramsey","Ronaldo")
var Real_madrid = new football_team("Real Madrid","Zidane","Courtois","Ramos","Isco","Benzema")
var Barcelona = new football_team("Barcelona","Ernesto Valverde","Ter ger sten","Pique","Rakitic","Suarez")
var Manchester_city = new football_team("Manchester City","Pep Guardiola","Ederson","Otamendi","De Bryne","Aguero")



//---------------------------------------------------------FIFTH OBJECT  CREATION - COUNTRY OBJECT--------------------------------------------
function country("name","continent", "president","capital_city","national_language","independence_date"){
    //object properties
    this.name = name
    this.continent = continent
    this.president = president
    this.capital_city = capital_city
    this.national_language = national_language
    this.independence_date = independence_date    
    }
    

//OBJECT INSTANTIATION USING 'new' constructor keyword

var Uganda = new country("Uganda","Africa","H.E Yoweri Kaguta Museveni","Kampala","Luganda","9 October")
var Kenya = new country("Kenya","Africa","H.E Uhuru Kenyatta","Nairobi","Kiswahili","12 December")
var Tanzania = new country("Tanzania","Africa","H.E Mangufuli John","Dodoma","Kiswahili","9 December")
var Rwanda = new country("Rwanda","Africa","H.E Kagame Paul","Kigali","Rwandese","1 July")
var USA = new vehicle("United States Of America","America","H.E Donald Trump","Washington D.C","English","4 July")
var Italy = new vehicle("Italy","Europe","H.E Sergio Matarella","Rome","Italian","17 March")

//--------------------------------------------------------SIXTH OBJECT  CREATION - SONG OBJECT---------------------------------------------
function vehicle("name","artist","album","genre","year_of_release","duration"){
    //object properties
    this.name = name
    this.artist = artist
    this.album = album
    this.genre = genre
    this.year_of_release = year_of_release
    this.duration = duration
    
    }
    

//OBJECT INSTANTIATION USING 'new' constructor keyword

var song1 = new song("Forever","Chris Brown","Exclusive: The Forever Edition","Dance-pop","2008","4:38")
var song2 = new song("Anaconda","Nicki Minaj","Pinkprint","Hip Hop","2014","4:20")
var song3 = new song("Watchu Say","Jason Derulo","Jason Derulo","Contemporary R&B","2010","3:46")
var song4 = new song("Coward of the county","Kenny Rogers","Kenny","Country","1979","4:20")
var song5 = new song("Love You Everyday","Bebe Cool","Go Mama","Raggae","2015","3:56")
var song6 = new song("Ballerina Girl","Lionel Richie","Dancing On The Ceiling","Pop , R&B","1986","3:38")