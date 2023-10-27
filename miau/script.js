function miau(){
    const button = document.getElementById("pushed").innerHTML = "Pushed";
    }
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
document.addEventListener('mousemove', (event) => {
	console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
});