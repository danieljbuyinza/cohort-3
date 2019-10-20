//defining object car
function car(a,b,ab,cd,ef,gh){
    this.name = a
    this.model = b
    this.color = ab
    this.fuelType = cd
    this.engineDisplacement = ef
    this.transmissionType = gh
   
}
//creating  instances of car using a constructor
motoka1 = new car("Mercedes Benz","G-class","blue","petrol",3998,"automatic");
motoka2 = new car('Mercedes Benz','E-class','black','petrol',3982,'automatic');
motoka3 = new car('RollsRoyce','phantom','white','petrol',6749,'automatic');
motoka4 = new car('Rols Royce','cullinan','grey','petrol',6739,'automatic');
motoka4 = new car('Hyundai','eon','lemon-green','petrol',814,'manual');
motoka4 = new car('Renault','kwid','coffee-brown','petrol',799,'manual');

//printing to the screen
console.log(`From the car function, this is a ` +motoka1.name+ ` from the ` +motoka1.model);

//defining object person
function person(c,d,e,qr,st,uv){
    this.name = c
    this.hairColour = d
    this.eyeColour = e
    this.nationality = qr
    this.height = st
    this.age = uv
}

//creating  instances of person using a constructor
 muntu1 = new person('Caleb','black','brown','Ugandan',5,9);
 muntu2 = new person('Dorcus','brown','black','Kenyan',12,20);
 muntu3 = new person('Zari','mermaid','blue','Tanzanian',7,3);
 muntu4 = new person('Mariah','sahara yellow','green','American',10,17);
 muntu5 = new person('Isaac','black-brown','hazel','Ugandan',7,20);
 muntu6 = new person('Gilbert','black','black','Ugandan',10,20);

 
//printing to the screen
 console.log(`He is called ` +muntu1.name+ `.He has ` +muntu1.eyeColour+ ` eyes`);

 //defining object table
 function table(f,g,h,kl,mn,op){
     this.height = f
     this.noOfLegs = g
     this.make = h
     this.color = kl
     this.size = mn
     this.width = op
 }

 //creating instances of table using a constructor
 meza1 = new table('5cm',4,'wooden','tan','small','15cm');
 meza2 = new table('50cm',4,'metallic','brown','big','30cm');
 meza3 = new table('15cm',4,'glass','colorless','medium','7cm');
 meza4 = new table('20cm',4,'aluminium','grey','medium','10cm');
 meza5 = new table('70cm',4,'metallic','black','big','50cm');
 meza6 = new table('7cm',4,'wooden','tan','small','7cm');
 
//printing to the screen
 console.log(`This ` +meza1.make+ ` table, has ` +meza2.noOfLegs+ ` legs.`);

 //defining object school
 function school(i,j,k,y,z,ij){
    this.name = i
    this.motto  = j
    this.location = k
    this.noOfTeachers = y
    this.type = z
    this.centerNo = ij
 }

 //creating  instances of school using a constructor
 somero1 = new school('Mengo Senior School','Akwana Akira Ayomba','Bukesa-Mengo', 110, 'Day school','U0053' );
 somero2 = new school('Kings College','Gakyaali mabaga','Budo', 100, 'Boarding school','U00553' );
 somero3 = new school('Summer Junior School','Success is a struggle','Lugaoba-Kawempe', 30, 'Day and Boarding school','U01153' );
 somero4 = new school('Namirembe Infants\' School','In God we Trust','Namirembe Hill', 30, 'Day and Boarding school','U11053' );
 somero5 = new school('Brethren College ','Nezikokoolima','Kiryagonja - Wakiso Road', 45, 'Day and Boarding school','U89562' );
 somero6 = new school('Kiryagonja Junior School','The fear of God brings knowledge and wisdom','Bombo-Kalule', 46, 'Day school','U458712' );


//printing to the screen
 console.log(`From the school function, ` +somero1.motto +` is the motto for ` +somero2.name);

 //defining object laptop
 function laptop(l,m,n,p,q,r){
     this.processor = l
     this.ramSize = m
     this.hardDriveSize = n
     this.screenType = p
     this.make = q
     this.color = r
 }

 //creating instances of laptop using a constructor
 pc1 = new laptop('i-5',4,500,'LED','VAIO','white');
 pc2 = new laptop('i-3',2,500,'LCD','HP','black');
 pc3 = new laptop('i-7',8,1000,'LED','ASUS','silver');
 pc4 = new laptop('i-2',4,500,'LCD','DELL','grey');
 pc5 = new laptop('i-7',16,2000,'LED','DELL ALIENWARE','white');
 pc6 = new laptop('i-5',5,700,'LED','LENOVO','lemon-green');

//printing to the screen
 console.log(`This laptop is an ` +pc1.processor+ ` with ram of ` +pc2.ramSize+ ` GB, and of course its a ` +pc3.make );

//defining object movie
 function movie(s,t,u,v,w,x){
    this.name = s
    this.genre = t
    this.duration = u
    this.producer = v
    this.countryOfOrigin = w
    this.filmEditor = x
 }

  //creating instances of movie using a constructor
 film1 = new movie('Lazer Team','Sci-fi','102 min', 'Matt Hullum', 'United States','Chris Demarais');
 film2 = new movie('Alien Warfare','Action','88 min', 'Dan O\'Bannon', 'United States','Ridley Scott');
 film3 = new movie('Roads','Adventure','99 min', 'Oliver Zieglenba', 'France','Sebastian Schipper');
 film4 = new movie('Harpoon','Thriller','82 min', 'Rob Grant', 'United Kingdom','Krill Sokolox');
 film5 = new movie('Ready to Mingle','Comedy','97 min', 'Micheal Shepherd', 'France','Anna Senn');
 film6 = new movie('Surviving Christmas with Relatives','Comedy','101 min', 'Tonny West', 'United Kingdom','James Dearden');
 
//printing to the screen
 console.log(`This movie is an ` +film3.genre+ ` with a duration of ` +film3.duration+ `  and of course its produced by ` +film3.producer );
