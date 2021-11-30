let h1 = document.createElement('h1');
h1.textContent = "JavaScript Hometask 8";
h1.setAttribute('ondblclick', 'console.log(this.textContent)');
let body = document.body;
body = document.createElement('body');
body.setAttribute('oncontextmenu', 'sound.play()')
body.style.height = "2000px";
var r = 54, g = 165, b = 121, count = 0;
body.style.background = `rgb(${r}, ${g}, ${b})`;
body.style.color = 'yellow';
body.append(h1);
let sound = new Audio();
sound.preload = 'auto';
sound.src = '/1f3a1e5280f6367.mp3';
body.appendChild(sound);
window.onscroll = () => {
    sound.play().then(() => { setTimeout(this, 1000) });
};
let form = document.createElement('form');
let textIn = document.createElement('input');
textIn.setAttribute('type', 'text');
textIn.addEventListener('focus', ()=>{textIn.style.background = 'green'})
textIn.addEventListener('blur', ()=>{textIn.style.background = 'white'})
let resetIn = document.createElement('input');
resetIn.style.background = "red"
resetIn.setAttribute('type', 'reset');
resetIn.setAttribute('value', 'RESET');
form.appendChild(textIn);
form.appendChild(document.createElement('br'));
form.appendChild(resetIn);
form.onsubmit = ()=>alert("Submited!");
form.setAttribute('onreset', 'alert("Reseted!")');
body.append(form);
document.body = body;

