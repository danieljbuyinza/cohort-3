let taxpayer=(sal,kal)=>
//comparaison between saralaries of two people and who is more taxed
//that why we are supposed to use if else condition.
{
    if(sal>=130000){
    let payee=sal*(30/100)
    console.log('sal his tax is '+ payee)
    }
    else{
        console.log('please enjoy your salary wisely')
    }
    if(kal>=130000){
    let payer=kal*(30/100)
    console.log('kal his tax is'+ payer)
}
else{
    console.log('please enjoy your salary wisely')
}
if(sal>kal){
    console.log('sal is high taxed')
}
else{
    console.log('sal is low taxed')
}
}

taxpayer(160000,300000)