var max = window.innerHeight
var cap1 = document.querySelector('#cap1');
var cap1top = cap1.offsetTop;
var cap2 = document.querySelector('#cap2');
var cap2top = cap2.offsetTop;
var cap3 = document.querySelector('#cap3');
var cap3top = cap3.offsetTop;
var cap4 = document.querySelector('#cap4');
var cap4top = cap4.offsetTop;
var footer = document.querySelector('footer');
var footertop = footer.offsetTop;



function about() {
    
    window.scrollTo({top:cap2top , behavior: "smooth"})
}

function skills() {
    window.scrollTo({top:cap3top , behavior: "smooth"})
}
function project() {
    window.scrollTo({top:cap4top , behavior: "smooth"})
}
function contact() {
    window.scrollTo({top: footertop , behavior: 'smooth'})
}


function more() {
    window.scrollTo({top:cap2top , behavior: "smooth"})
}


var text = document.querySelector('.keyconts > p')


function introduce() {
    
    text.innerHTML = 'introduce'
}

function career() {
    

    text.innerHTML = 'hello'
}

var projects = document.querySelector('#cap4 .projects')
var ul = document.querySelector('#cap4 ul')
var li = document.querySelector('#cap4 li')


function prev() {
    ul.style.left = 0
}


function next() {
    ul.style.left = '-' + (projects.offsetWidth - 2) + 'px'
}