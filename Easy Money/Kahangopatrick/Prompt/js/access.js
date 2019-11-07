//assigning all elements to their appropriate methods
const demoId = document .getElementById('demo')
const demoClass = document .getElementsByClassName('demo')
const demoTag = document .getElementsByTagName('article')
const demoQery = document .querySelector('#demo-query')
const demoQeryAll = document .querySelectorAll('.demo-query-all')

//Changing the border color of id demo to purple
demoId.style.border = '2px solid purple'

//changing border color of all tags
for (i = 0; i<demoClass.length; i++){
    demoClass[i].style.border = '2px solid orange'
}

for (i = 0; i<demoTag.length; i++){
    demoTag[i].style.border= '2px solid blue'
}

demoQery.style.border = '2px solid red'
demoQeryAll.forEach(
query=>  {
query.style.border = '2px solid green'
});
