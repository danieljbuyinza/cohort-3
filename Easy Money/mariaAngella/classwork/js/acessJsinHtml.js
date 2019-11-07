
// Assigning all elements to their appropriate methods
const demoId = document.getElementById("demo")
const demoClass = document.getElementsByClassName("demo")
const demoTag = document.getElementsByTagName("article")
const demoQuery = document.querySelector("#demo-query")
const demoQueryAll = document.querySelectorAll(".demo-query-all")

//changing the border color of id to purple
demoId.style.border = "2px solid purple"

//changing border colors of all elements with class demo
for (i = 0; i<demoClass.length; i++){
    demoClass[i].style.border = "2px solid orange"
}

//changing border colors of all elements with Tag article
for (i = 0; i < demoTag.length; i++) {
    demoTag[i].style.border = "2px solid blue"
}

//changing border colors of all elements with Query selector 
demoQuery.style.border = "2px solid red"

//changing border colors of all elements with Query All using foreach loop
demoQueryAll.forEach(
    query=>{
        query.style.border = "2px solid green"
    }
);