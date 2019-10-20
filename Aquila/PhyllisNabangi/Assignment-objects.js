/* Create 6 objects with 6 properties and 6 instances of each 
*/

/** 
 * An Object called patient with the following properties
 * name - Name of the patient
 * age - the age of the patient
 * patientNo - The Patient ID number
 * diagnosis - The Patient's diagnosis
 * billing - The billing type
**/
function  patient(name, age, gender, patientNo, diagnosis, billing) 
{
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.patientNo = patientNo;
    this.diagnosis = diagnosis;
    this.billing = billing;
}
patient1 = new patient('Dona', 13, 'Female', 'P234', 'Malaria', 'Cash');
patient2 = new patient('Hazel', 38, 'Male', 'P098', 'Cough', 'Insurance');
patient3 = new patient('Klaus', 20, 'Female', 'P005', 'UTI', 'Insurance');
patient4 = new patient('Pete', 09, 'Male', 'P207', 'Flu', 'Cash');
patient5 = new patient('Molly', 45, 'Female', 'P045', 'Malaria', 'Insurance');
patient6 = new patient('Blair', 10, 'Male', 'P087', 'Ulcers', 'Cash');




/** 
 * An Object called sibling with the following properties
 * name - Name of the sibling
 * gender - The gender's sibling
 * age - the age of the sibling
 * dob -the date of birth of the sibling
 * position - the Position of the sibling in the family
 * height - the height of each sibling
**/
function sibling(name, age, gender, dob, position, height)
{
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.dob = dob;
    this.position = position;
    this.height = height;
}

sibling1 = new sibling('Caleb', 9, 'Male', '28/12/2009', '2nd', '6ft');
sibling2 = new sibling('Elija', 7, 'Male', '06/05/2011', '4th', '7ft');
sibling3 = new sibling('Kesna', 6, 'Female', '18/09/2009', '3rd', '6ft');
sibling4 = new sibling('Kirsten', 2, 'Male', '21/06/2017', '6th', '3ft');
sibling5 = new sibling('Gracious', 3, 'Female', '30/11/2016', '5th', '3ft');
sibling6 = new sibling('Haddasar', 12, 'Female', '30/04/2007', '1st', '10ft');


/** 
 * An Object called company with the following properties
 * name - Name of the company
 * foundedDate - the Founded date of the company
 * industry -the industry of the company
 * sector - the sector of the company
 * md- the managing director of the company
 * location - Where the company is located
**/
function company(name, foundedDate, industry, sector, md, location)
{
    this.name = name;
    this.foundedDate = foundedDate;
    this.industry = industry;
    this.sector = sector;
    this.md = md;
    this.location = location;
}
company1 = new company('UEDCL', 2006, 'Energy', 'Public', 'Paul Mwesigwa', 'Nakasero');
company2 = new company('Amani', 2017, 'Education', 'NGO', 'Blessed Sabano', 'Kampala');
company3 = new company('VCS', 2010, 'Transport', 'Private', 'Kathrine Kamiza', 'Kireka');
company4 = new company('TATA', 1982, 'Consulting', 'Public', 'Abishek Yamar', 'Kochi');
company5 = new company('ERA', 2010, 'IT', 'Private', 'Loy Kamey', 'Entebbe');
company6 = new company('Flip', 2009, 'Sales', 'Private', 'Elaine Meyer', 'Kololo');



/** 
 * An Object called country with the following properties
 * cname - Name of the country
 * independenceyear - the year the country gained its independence
 * capitaCity-the capita Cityof the country
 * president- the president of the country
 * population- the country's population
 * continet -the country's continet 
**/
function country(cname, independenceYear, capitaCity, president, population, continent)
{
    this.cname = cname;
    this.independenceDate = independenceYear;
    this.capitaCity = capitaCity;
    this.president = president;
    this.population = population;
    this.continent = continent;
}
country1 = new country('Uganda', 1962, 'Kampala', 'Museveni Yoweri', '40 million', 'Africa');
country2 = new country('USA', 1845, 'Washington-DC', 'Donald Trump', '120 million', 'America');
country3 = new country('India', 1900, 'New Delhi', 'Yen Chan', '70 million', 'Asia');
country4 = new country('Hunagry', 1849, 'Budapest', 'János Áder', '10 million', 'Europe');
country5 = new country('Australia', 1903, 'Canberra', 'Pete John', '40 million', 'Oceania' )
country6 = new country('Belgium', 1830, 'Brussels', 'Charles Yves Jean','12 million', 'Europe')


/** 
 * An Object called employeewith the following properties
 * empName - Employee's name
 * empId - Employee's ID no
 * gender-Employee's gender
 * title- Employee's title
 * department- Employee's depertment
 * branch -The branch where the employee works
**/
function employee(empName, empId,  gender, title, department, branch)
{
    this.empName = empName;
    this.empId = empId;
    this.gender = gender;
    this.title = title;
    this.department = department;
    this.branch = branch;
}
employee1 = new employee('Peace Sabano', 'E001', 'Female', 'Manager', 'HR', 'Kochi');
employee2 = new employee('Priscilla Logose', 'E002', 'Female', 'Supervisor', 'Procurement', 'Kampala');
employee3 = new employee('Tadhi Caleb', 'E003','Male', 'Assistant Manager', 'IT', 'Entebbe');
employee4 = new employee('Elijah Roby', 'E004', 'Male', 'Auditor', 'Finance', 'Kampala');
employee5 = new employee('Sophia', 'E007', 'Female', 'Supervisor', 'Marketing', 'Delhi');
employee6 = new employee('Nesta Kirabo', 'E006', 'Male', 'Manager', 'Sales', 'Entebbe');



/** 
 * An Object called Book with the following properties
 * title - The title of the Book
 * ISBN- The ISBN of the Book
 * genre-The genreof the Book
 * author - The author of the Book
 * publisher- The publisher of the Book
 * country -The origin of the Book
**/
function book(title, ISBN, author, genre, publisher, country)
{
    this.title = title;
    this.ISBN = ISBN;
    this.genre = genre;
    this.author = author;
    this.publisher = publisher;
    this.country = country;
}
book1 = new book('The Hobbit', 0908609664, 'Tolkien', 'Comic book', 'Tom', 'US');
book2 = new book('Eat that Frog', 0903406664, 'Brian Tracy', 'Self Help', 'Tom', 'UK');
book3 = new book('Slinky Malinki', 0908606664, 'Lynley Dodd', 'cookbook', 'Sawyer', 'Uganda'); 
book4 = new book('Mechanical Harry', 0908783116, 'Bob Kerr', 'tutorial', 'MK', 'South Africa');
book5 = new book('Frozen',  0908606273, 'Eve Sutton', 'Fantasy', 'Mallinson Rendel', 'NZ');
book6 = new book('Your Why', 4507606273, 'Simon Sinek', 'Inspiration', 'Minds', 'USA');