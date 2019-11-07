const demoId = document.getElementById('demo')
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('article')
const demoQuery = document.querySelector('demo-query')
const demoQueryAll= document.querySelectorAll('.demo-query-all')

//var is for global variable, to give a variable a constant value we use const
//we are accessing DOM elements with diffferent methods
//assigning all elements to different javascript methods
/*getElementById
getElementsByClassName
getElementsByTagName
getElementsBySelector(to access css properties)
getElementsBySelectorAll */
//changing the border color of id demo to purple
demoId.style.border='2px solid purple'
//changing border color of all elements with class "demo"
for (i=0; i<demoClass.length; i++){
    demoClass[i].style.border = "2px solid orange"
}
//changing border color of all tags with class "demo"
for (i=0; i<demoTag.length; i++){
    demoClass[i].style.border = "2px solid blue"
}
demoQuery.style.border ='2px solid red'
demoQueryAll.forEach(
    query=>{
        this.style.border='2px solid green'

    });



