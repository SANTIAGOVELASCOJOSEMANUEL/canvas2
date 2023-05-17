import { CanvasLocal } from './canvasLocal.js';
let canvas;
canvas = document.getElementById('circlechart');
let ctx = canvas.getContext('2d');
const canvasLocal = new CanvasLocal(ctx, canvas);
let formulario = document.querySelector('form');
let palabra;
let angulo;
let enviar;
let isDragging = false;
let startMouseX = 0;
let startMouseY = 0;
let startCanvasX = 0;
let startCanvasY = 0;
let starTrail = []; // Array para almacenar las posiciones de las estrellas en la estela
const maxTrailLength = 50; // Longitud máxima de la estela
const trailOpacity = 0.2; // Opacidad de la estela
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    palabra = document.getElementById('palabra').value;
    angulo = parseInt(document.getElementById('angulo').value);
    enviar = parseInt(document.getElementById('enviar').value);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    ctx.rotate(angulo * Math.PI / 180);
    ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
    palabra.fillStyle = 'red';
    canvasLocal.paint(palabra, enviar);
    ctx.restore();
});
canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    startMouseX = e.clientX;
    startMouseY = e.clientY;
    startCanvasX = canvas.offsetLeft;
    startCanvasY = canvas.offsetTop;
});
canvas.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startMouseX;
        const deltaY = e.clientY - startMouseY;
        const newCanvasX = startCanvasX + deltaX;
        const newCanvasY = startCanvasY + deltaY;
        canvas.style.left = newCanvasX + 'px';
        canvas.style.top = newCanvasY + 'px';
        // Agregar la posición actual al array de la estela
        starTrail.push({ x: e.clientX, y: e.clientY });
        // Limitar la longitud de la estela
        if (starTrail.length > maxTrailLength) {
            starTrail.shift();
        }
        // Dibujar la estela de estrellas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < starTrail.length; i++) {
            const { x, y } = starTrail[i];
            drawStar(x, y); // Dibujar estrella en la posición de la estela
        }
        // Dibujar las estrellas actuales
        canvasLocal.paint(palabra, enviar);
    }
});
canvas.addEventListener('mouseup', (e) => {
    isDragging = false;
    starTrail = []; // Restablecer la estela de estrellas al soltar el mouse
});
// Función para dibujar una estrella en la posición especificada
function drawStar(x, y) {
    const radius = 10; // Ajusta el tamaño de la estrella aquí
    const spikes = 5;
    const rotation = Math.PI / 2 * 3;
    const xCenter = x;
    const yCenter = y;
    ctx.beginPath();
    ctx.moveTo(xCenter + radius, yCenter);
    for (let i = 0; i < spikes; i++) {
        const x = xCenter + Math.cos(rotation + i * Math.PI / spikes) * radius;
        const y = yCenter + Math.sin(rotation + i * Math.PI / spikes) * radius;
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'red';
    ctx.fill();
}
// Función para pintar las estelas de estrellas
function paintStar(x, y) {
    const step = 30; // Ajusta la distancia entre las estrellas aquí
    for (let i = 0; i < canvas.width; i += step) {
        drawStar(x + i, y);
    }
}
/*import { CanvasLocal } from './canvasLocal.js';

let canvas;
canvas = document.getElementById('circlechart');
let ctx = canvas.getContext('2d');
const canvasLocal = new CanvasLocal(ctx, canvas);
let formulario = document.querySelector('form');
let palabra;
let angulo;
let enviar;
let isDragging = false;
let startMouseX = 0;
let startMouseY = 0;
let startCanvasX = 0;
let startCanvasY = 0;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  palabra = (<HTMLInputElement>document.getElementById('palabra')).value;
  angulo = parseInt((<HTMLInputElement>document.getElementById('angulo')).value);
  enviar = parseInt((<HTMLButtonElement>document.getElementById('enviar')).value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  ctx.translate(canvasWidth / 2, canvasHeight / 2);
  ctx.rotate(angulo * Math.PI / 180);
  ctx.translate(-canvasWidth / 2, -canvasHeight / 2);

  canvasLocal.paint(palabra, enviar);

  ctx.restore();
});

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
  startMouseX = e.clientX;
  startMouseY = e.clientY;
  startCanvasX = canvas.offsetLeft;
  startCanvasY = canvas.offsetTop;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - startMouseX;
    const deltaY = e.clientY - startMouseY;
    const newCanvasX = startCanvasX + deltaX;
    const newCanvasY = startCanvasY + deltaY;
    canvas.style.left = newCanvasX + 'px';
    canvas.style.top = newCanvasY + 'px';
  }
});

canvas.addEventListener('mouseup', (e) => {
  isDragging = false;
});


























/*import { CanvasLocal } from './canvasLocal.js';

let canvas;
canvas = document.getElementById('circlechart');
let ctx = canvas.getContext('2d');
const canvasLocal = new CanvasLocal(ctx, canvas);
let formulario = document.querySelector('form');
let palabra;
let angulo;
let enviar;
let isDragging = false;
let lastX = 0;
let lastY = 0;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  palabra = (<HTMLInputElement>document.getElementById('palabra')).value;
  angulo = parseInt((<HTMLInputElement>document.getElementById('angulo')).value);
  enviar = parseInt((<HTMLButtonElement>document.getElementById('enviar')).value);

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  ctx.translate(canvasWidth / 2, canvasHeight / 2);
  ctx.rotate(angulo * Math.PI / 180);
  ctx.translate(-canvasWidth / 2, -canvasHeight / 2);

  canvasLocal.paint(palabra, enviar);

  ctx.restore();
});

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(deltaX, deltaY);
    canvasLocal.paint(palabra, enviar);
    ctx.translate(-deltaX, -deltaY);
  }
});

canvas.addEventListener('mouseup', (e) => {
  isDragging = false;
});
**/
/*
import { CanvasLocal } from './canvasLocal.js';

let canvas;
canvas = document.getElementById('circlechart');
let ctx = canvas.getContext('2d');
const canvasLocal = new CanvasLocal(ctx, canvas);
let formulario = document.querySelector('form');
let palabra;
let angulo;
let enviar;
//let size;
let isDragging = false;

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  palabra = (<HTMLInputElement>document.getElementById('palabra')).value;
  console.log(palabra)
  angulo = parseInt((<HTMLInputElement>document.getElementById('angulo')).value);
  //size = parseInt((<HTMLInputElement>document.getElementById('size')).value);
  //console.log(size);
  enviar = parseInt((<HTMLButtonElement>document.getElementById('enviar')).value);

  ctx.beginPath();
  ctx.fillStyle = 'gray';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.clip();
  ctx.save();

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  ctx.translate(canvasWidth / 2, canvasHeight / 2);
  ctx.rotate(angulo * Math.PI / 180);
  ctx.translate(-canvasWidth / 2, -canvasHeight / 2);

  canvasLocal.paint(palabra, enviar);

  ctx.restore();



  let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
});

canvas.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const deltaX = e.clientX - lastX;
    const deltaY = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvasLocal.paint(palabra, enviar);
  }
});
canvas.addEventListener('mouseup', (e) => {
  isDragging = false;
});

});
*/
