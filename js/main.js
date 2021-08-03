'use strict';

const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let mouseCursor = {
    x: 0,
    y: 0
}
let area;
let fontSize;
let splatterImg = new Image();
splatterImg.src = '../img/splatter.png';

const init = function () {
    canvas1.width = window.innerWidth;
    canvas1.height = window.innerHeight;
    canvas2.width = window.innerWidth;
    canvas2.height = window.innerHeight;
    fontSize = window.innerHeight / 2;
    ctx1.font = 'bold ' + fontSize + 'px serif';
    ctx1.textAlign = 'center';
    ctx2.font = 'bold ' + fontSize + 'px serif';
    ctx2.textAlign = 'center';
    ctx2.fillStyle = 'red';
    area = canvas1.getBoundingClientRect();
}
init();

document.addEventListener('mousemove', e => {
    mouseCursor.x = e.x - area.left;
    mouseCursor.y = e.y - area.top;
    ctx1.fillText('SHOW', canvas1.width / 2, canvas1.height / 2);
    ctx1.clearRect(mouseCursor.x, 0, canvas1.width, canvas1.height);
    ctx2.fillText('HIDE', canvas2.width / 2, canvas2.height / 2);
    ctx2.clearRect(0, 0, mouseCursor.x, canvas2.height);
})

window.addEventListener('resize', e => {
    init();
})