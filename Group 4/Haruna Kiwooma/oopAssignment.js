/* create six objects of and six instance of each
@param means parameter
 */

/**
 * This is an object called book with the following instances
 *
 * @param {Book title} title
 * @param {Name of author} author
 * @param {Total number of pages} pages
 * @param {International Standard Book Number} isbn
 * @param {book edition} edition
 * @param {the date it was released} releaseDate
 */
function book(title, author, pages, isbn, edition, releaseDate) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isbn = isbn;
  this.edition = edition;
  this.releaseDate = releaseDate;
}
let ai = new book(
  "Artificial Intelligence",
  "George F. Luger and William A. Stubblefield",
  "852pages",
  "0-805-31190-3",
  "3Rd Edition",
  1998
);
let robot = new book(
  "Anatomy of a Rrobot",
  "Charles M Bergren",
  "321pages",
  "0-07-142930-1",
  "1st Edition",
  2003
);
let mechantronics = new book(
  "Mechantronics An Introduction",
  "Robert H Bishop",
  "285pages",
  "0-8493-6358-6",
  "None",
  1957
);
let programming = new book(
  "C++ Programming From Problem Analysis to Program Design",
  "D.S. Malik",
  "1392pages",
  "0-538-79808-4",
  "5th Edition",
  2011
);
let linux = new book(
  "Linux Command Line and Shell Scripting Bible",
  "Richard Blum, Christine Bresnahan",
  "818pages",
  "978-1-118-98384-3",
  "3Rd Edition",
  2015
);
let javaScript = new book(
  "JavaScript - A Beginner’s Guide",
  "John Pollock",
  "529pages",
  "978-0-071-80938-2",
  "4th Edition ",
  "April 2013"
);

/**
 * This is an object called vehicle with the following instances
 *
 * @param {the person who manufactured the vehicle } manufacturer
 * @param {color of vehicle} color
 * @param {the vehicle type should either be Left Hand Drive or Right Hand Drive} type
 * @param {the vehicle's top speed} speed
 * @param {number seater in the vehicle} seaters
 * @param {price of the vehicle on the market} price
 */
function vehicle(manufacturer, color, type, speed, seaters, price) {
  this.manufacturer = manufacturer;
  this.color = color;
  this.type = type;
  this.speed = speed;
  this.seaters = seaters;
  this.price = price;
}
let benz = new vehicle("Mercedes", "Black", "LHD", "300km/hr", 4, "$3000");
let nadia = new vehicle("Toyota", "Gray", "RHD", "180km/hr", 5, "$800");
let fuso = new vehicle("Toyota", "White", "RHD", "180km/hr", 3, "$1000");
let cherooke = new vehicle("Jeep", "Gray", "LHD", "240km/hr", 5, "$1200");
let vista = new vehicle("Toyota", "Green", "RHD", "180km/hr", 5, "$900");
let golf = new vehicle("Golf", "Black", "LHD", "220km/hr", 5, "$1000");
console.log(benz);
console.log(benz.color);

/**
 * This is an object called school with the following instances
 * @param {name of the school} name
 * @param {level of education the school holds} level
 * @param {number of class rooms} classroom
 * @param {total number of students a school holds} students
 * @param {total number of teachers a school holds} teachers
 * @param {where the school is located} location
 */
function school(name, level, classroom, students, teachers, location) {
  this.name = name;
  this.level = level;
  this.classroom = classroom;
  this.students = students;
  this.teachers = teachers;
  this.location = location;
}
let oldKampala = new school(
  "Old Kampala SS",
  "Secondary Level",
  "12 rooms",
  "1600 students",
  "59 teachers",
  "Kampala"
);
let lubiri = new school(
  "Lubiri SS",
  "Secondary Level",
  "20 rooms",
  "1200 students",
  "70 teachers",
  "Kampala"
);
let sirApollo = new school(
  "Sir Apollo ps",
  "Primary Level",
  "12 rooms",
  "1800 students",
  "51 teachers",
  "Kampala"
);
let godfrey = new school(
  "Godfrey founddation ps",
  "Primary Level",
  "8 rooms",
  "900 students",
  "31 teachers",
  "Wakiso"
);
let gombe = new school(
  "Gombe SS",
  "Secondary Level",
  "30 rooms",
  "1800 students",
  "65 teachers",
  "Gomba"
);
let goodHope = new school(
  "Good Hope Nusery",
  "Nusery Level",
  "5 rooms",
  "200 students",
  "20 teachers",
  "Mukono"
);

/**
 * This is an object called country with the following instances
 *
 * @param {name of country} name
 * @param {continent of the country} continent
 * @param {nation language} language
 * @param {what the country citizens are called} citizen
 * @param {country currency} currency
 * @param {name of president} president
 */
function country(name, continent, language, citizen, currency, president) {
  this.name = name;
  this.continent = continent;
  this.language = language;
  this.citizen = citizen;
  this.currency = currency;
  this.president = president;
}
let uganda = country(
  "Uganda",
  "Africa",
  "English",
  "Ugandan",
  "USH",
  "Museveni"
);
let kenya = country("Kenya", "Africa", "Swahili", "Kenyan", "KSH", "Kinyatta");
let tanzania = country(
  "Tanzania",
  "Africa",
  "Swahili",
  "Tanzanian",
  "TSH",
  "Magafuli"
);
let usa = country(
  "United States of America",
  "North America",
  "English",
  "American",
  "USD",
  "Tramp"
);
let britian = country("Britian", "Europe", "English", "English", "Pound", "");
let germany = country(
  "Germany",
  "Europe",
  "German",
  "German",
  "Greman pound",
  ""
);

/**
 * This is an object called phone with the following instances
 *
 * @param {name of the phone} name
 * @param {brand of the phone} brand
 * @param {software version} version
 * @param {screen size} screenSize
 * @param {weight of the phone} weight
 * @param {size of random access memory} memory
 */
function phone(name, brand, version, screenSize, weight, memory) {
  this.name = name;
  this.brand = brand;
  this.version = version;
  this.screenSize = screenSize;
  this.weight = weight;
  this.memory = memory;
}
let apple = phone("Apple 6", "apple", "xos", "6.o inches", "0.54 g", "4 GB");
let tecno = phone(
  "Tecno W3",
  "Tecno",
  "Andriod 6.0",
  "4.5 inches",
  "0.9 g",
  "1 GB"
);
let sumsang = phone(
  "Note 6",
  "sumsang",
  "andriod 6.0",
  "5 inches",
  "0.7 g",
  "2 GB"
);
let sony = phone(
  "Xperia C200",
  "Sony Xperia",
  "andriod 5.0",
  "5 inches",
  "0.62 g",
  "1 GB"
);
let alactel = phone(
  "Alactel 5.0",
  "Alactel",
  "Andriod 4.2",
  "4.0 inches",
  "0.95 g",
  "512 MB"
);
let motorolla = phone(
  "Motorolla 7",
  "Motorolla",
  "Andriod 4.1",
  "3.5 inches",
  "0.98 g",
  "256 MB"
);

/**
 * This is an object called film with the following instances
 *
 * @param {title of the movie} title
 * @param {the time take watching} duration
 * @param {the movie director} director
 * @param {the movie producer} producer
 * @param {boolean in case the movie has a copyright} copyright
 * @param {catergory of the movie} genre
 */
function film(title, duration, director, producer, copyright, genre) {
  this.title = title;
  this.duration = duration;
  this.director = director;
  this.producer = producer;
  this.copyright = copyright;
  this.genre = genre;
}
let rise = country(
  "The Rise of Scar",
  "1:23hr",
  "Haruna",
  "Kiwooma",
  "@2019",
  "Animation"
);
let naruto = country(
  "Naruto Shippuden",
  "13:20hr",
  "Yasika",
  "Sasuke",
  "@2008",
  "Animation"
);
let boruto = country(
  "Boruto",
  "7:23hr",
  "Suzuki",
  "Kyamoto",
  "@2018",
  "Animation"
);
let underworld = country(
  "Underworld 3",
  "2:37hr",
  "Chris",
  "Rachel",
  "@2010",
  "Action"
);
let mirror = country(
  "Mirrors",
  "2:15hr",
  "Patrick",
  "Henry",
  "@1995",
  "Love Story"
);
let avenges = country(
  "Civil War",
  "2:23hr",
  "Stark",
  "Malik",
  "@2014",
  "Science Fiction"
);
