let kalibwa=(kal1,kal2)=>
{
    if (kal1>=1200 && kal2>=1200)
    {
        let tax1=kal1*(30/100)
        let tax2=kal2*(30/100)
        let comparaison=(tax1>tax2?kal1:kal2)
        console.log(tax1)
        console.log(tax2)
        console.log("the highest pay taxable is " +comparaison)
    }
    else{
        console.log('is not taxable')
    }
}
kalibwa(1500,1800)