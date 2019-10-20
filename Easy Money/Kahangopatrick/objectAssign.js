
//Car brands and types 
function cars (brand, type, model,Transmission,Seats,COO){
    
    this.brand = brand
    this.type = type
    this.model = model
    this.Transmission = Transmission
    this.Seats = Seats
    this.COO = COO
}
ipsum= new cars('ipsum','salon',2007, 'Manual', '5 Seater','Japan')
Progress= new cars('Progress','salon',2010, 'Automatic', '5 Seater','Japan')
Ford= new cars('Ford','SUV',2015, 'hybrid', '8 Seater','America')
Camry= new cars('Camry','salon',2003, 'Auto', '5 Seater','Japan')
Benz= new cars('Benz','SUV',2018, 'Hybrid', '5 Seater','Germany')
Vitz= new cars('Vitz','salon',2014, 'Auto', '5 Seater','Japan')
console.log('this car was made in the year\t' +ipsum.model)

//Countries allover the world
function country (continent, ethnicity, leader,population,seasons,language){
    
    this.continent = continent
    this.ethnicity = ethnicity
    this.leader = leader
    this.population = population
    this.seasons = seasons
    this.language= language
}
Uganda= new country('Africa','black','President', '41m', 'Dry and wet','Luganda')
Kenya= new country('Africa','black','President', '50m', '4 Seasons','English')
England= new country('Europe','White','Prime Minister', 'hybrid', '8 Seater','America')
india= new country('Asia','Asians','Asians', 'prime minister', 'Dry and wet','Hindi')
Australia= new country('Australia','white','president','60m', '3 seasons', 'English')
America= new country('North America','white','president', '100m', '4 seasons','English')

//Institutions of higher learning
function university (name, country, continent,ranking,ownership,language){
    
    this.name = name
    this.country =country
    this.continent = continent
    this.ranking = ranking
    this.ownership = ownership
    this.language= language
}
makerere= new university('makerere','uganda','Africa', '250th', 'Public','English')
Stanford= new university('stanford','usa','north america', '2nd', '4','public','English')
oxford= new university('oxford','england','Europe', '4th', 'public','english')
peking= new university('peking','china','Asia', '22nd', 'public','mandarin')
columbia= new university('columbia','usa','north america','18th', 'public', 'English')
yale= new university('yale','white','usa', 'north america', '17th', 'public','English')


//Smartphone types and properties
function smartphone (brand, country,os,YOM,company,charging){
    
    this.brand = brand
    this.country =country
    this.os = os
    this.YOM= YOM
    this.company = company
    this.charging= charging
}
iphone= new smartphone('iphone','usa','ios', '2007', 'apple','type-c')
polparty= new smartphone('nokia','Finland','android/windows', '2018', 'FIH', 'type-c')
pixar= new smartphone('pixar','usa','android', '2011', 'Google','type-b')
huawei= new smartphone('huawei','china','android', '2012', 'huawei','type-b/c')
blackberry= new smartphone('blackberry','canada','blackberry os/android','2008', 'RIM', 'type-b')
tecno= new smartphone('tecno','china','android', '2011', 'Transsion','type-b')


//Political parties in Uganda
function polparty (name, founder,year,members,location,status){
    
    this.name = name
    this.founder =founder
    this.year = year
    this.members= members
    this.location = location
    this.status= status
}
polparty1= new polparty('nrm','museveni','1980', '10m', 'kyadondo','operational')
polparty2= new polparty('fdc','besigye','2000', '8m', 'Najjanakumbi', 'operational')
polparty3= new polparty('upc','obote','1950', '6m', 'ugnada house','operational')
polparty4= new polparty('DP','musaazi','1955','7m', 'kampala', 'operational')
polparty5= new polparty('KY','Kabaka','1945','20m', 'kampala', 'defunct')
polparty6= new polparty('conservative party','Lukyamuzi','200k', 'rubaga','operational')


//Male people with their information
function boyid (name, age,tribe,origin,home_area,school){
    
    this.name = name
    this.age =age
    this.tribe = tribe
    this.origin= origin
    this.home_area = home_area
    this.school= school
}
reagan= new boyid('reagan','23','muganda', 'masaka', 'bwaise','iuea')
judah= new boyid('judah','2','mutoro', 'fort portal', 'nansana', 'heritage')
kalyango= new boyid('kalyango','12','muganda', 'luwero', 'ntinda','nakasero')
kevin= new boyid('kevin','19','itesot','mbale', 'muyenga', 'refactory')
boniface= new boyid('boniface','25','munyankole','Mbarara','nakawa','must')
chris= new boyid('chris','26','acholi', 'gulu','bugolobi','operational')






