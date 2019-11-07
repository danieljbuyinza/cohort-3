/**assigning all elements to their appropriate methods  */
const demoId = document.getElementById('demo')
const demoClass = document.getElementsByClassName('demo')
const demoTag = document.getElementsByTagName('article')
const demoQuery = document.querySelector('#demo-query')
const demoQueryAll = document.querySelectorAll('.demo-query-all')

/** changing borer color of id demo to purple */
demoId.style.border='2px solid purple';

/** */
for(i = 0;i < demoClass.length;i++){
    demoClass[i].style.border = '2px solid orange';
}

/**hanging borers of all tags */
for(i = 0;i < demoTag.length;i++){
    demoTag[i].style.border = '2px solid green'
}
demoQuery.style.border = '2px solid blue'
demoQueryAll.forEach(query => {
    query.style.border = '2px solid green'
});
