// for loop for displaying only odd numbers
for (num = 0;num<=5; num++)
{
var c = (num%2 ==0)?num:

console.log("this is an odd number \t" + c)
}



// var and let difference
for (num = 0;num<=5; num++)
{
let c = (num%2 ==0)?num:

console.log("this is an odd number \t" + num)
}




//difference between while loop and for loop that do the exact thing

var ab = 0
while(ab<=5){
    console.log(ab)
    ab++
}

for (var ab =0; ab<=5; ab++){
    console.log(ab)
}

// do while is the least used
var ac =0 
do{
    console.log(ac)
    ac++
}
while (ac<=5)









