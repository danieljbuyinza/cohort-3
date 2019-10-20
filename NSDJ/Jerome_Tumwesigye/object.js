/*Object oriented programing using a constructor 
which is a special method used to initialise an instantiated object. */

//name,age,maritalStatus,residence,diagnosis,condition are propertis of the object 'patient'.
function patient(name,age,maritalStatus,residence,diagnosis,condition){ 

    //'this' is a key word used to name a property of the object (patient) and then the property can be assigned a value
    this.name=name
    this.age=age
    this.maritalStatus=maritalStatus
    this.residence=residence
    this.diagnosis=diagnosis
    this.condition=condition
}

//sarah, otim, betty are instances of the object patient
sarah=new patient("Sarah Birungi", 23, "Single", "Ibanda","Malaria", "severe")
otim=new patient("Otim John", 25, "Single", "Mayuge","Diarrhoea", "severe")
betty=new patient("Betty Olive", 29, "Married", "Gulu","Cough", "not severe")
mark=new patient("Mark Opio", 39, "Single", "Soroti","Cancer", "severe")
martin=new patient("Martin Akol", 27, "Single", "Amuriat","Flu", "not severe")
angel=new patient("Angel Kebirungi", 46, "Married", "Isingiro","HIV", "not severe")

//Command the console to output one instance of the object and its property
console.log(otim.diagnosis)
