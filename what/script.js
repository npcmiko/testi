// 1.
function miau(){
    const button = document.getElementById("pushed").innerHTML = "Pushed";
    }
// 2.    
function changeColor(color) {
    document.body.style.background = color;
}
function moi() {
    changeColor('green');
}
function changeColor(color) {
    document.body.style.background = color;
}

function moi2() {
    changeColor('yellow');
}
function changeColor(color) {
    document.body.style.background = color;
}

function moi3() {
    changeColor('white');
}
//3.
document.addEventListener('mousemove', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});
// 4.
const cls = document.getElementsByClassName('teksti');
function clickFn(ev) {
    ev.target.style.color = "red";
}
for (i = 0; i < cls.length; i++) {
    cls[i].addEventListener('click', clickFn)
}
// 5.
const list = ["joo", "kiva", "moi", "wau", "what"];
const olList = document.getElementById('animals');

list.forEach(listfunc);
    function listfunc(el) {
        const li = document.createElement('li');
        li.innerHTML = el;
        olList.appendChild(li);
    }
