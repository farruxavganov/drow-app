const canvas = document.getElementById("canvas");
const dicr = document.querySelector(".dicr");
const incr = document.querySelector(".incr");
const sizeNumber = document.querySelector(".count");
const color = document.querySelector(".color");
const clear = document.querySelector(".clear");

let ctx = canvas.getContext("2d");

let canvasSize = 15;
let canvasColor = "#000";

let isTrue = false;
let x = undefined;
let y = undefined;

sizeShow();
canvas.addEventListener("pointerdown", drowStart);
canvas.addEventListener("pointermove", drowMove);
canvas.addEventListener("pointerup", drowEnd);
incr.addEventListener("click", sizeIncr);
dicr.addEventListener("click", sizeDicr)
color.addEventListener("change", changeColor);
clear.addEventListener("click", clearWindow);

function drowStart(e) {
	isTrue = true;
	x = e.offsetX;
	y = e.offsetY;
	drowCircle(x,y);
}

function drowMove(e) {
	if(isTrue){
		let x1 = e.offsetX;
		let y1 = e.offsetY;
		drowCircle(x1,y1);
		drowLine(x,y,x1,y1);
		x = x1;
		y = y1;
	}
}

function drowEnd() {
	isTrue = false;

	x = undefined;
	y = undefined;
}

function sizeIncr() {
	canvasSize++;

	if(canvasSize > 50){
		canvasSize = 50;
	}

	sizeShow();
}

function sizeDicr() {
	canvasSize--;

	if(canvasSize < 0) {
		canvasSize = 1;
	}

	sizeShow();
}

function sizeShow() {
	sizeNumber.innerHTML = canvasSize;
}

function changeColor(e){
	canvasColor = e.currentTarget.value;
}

function clearWindow() {
	ctx.clearRect(0,0,canvas.width,canvas.height);
}

function drowLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineWidth = canvasSize * 2;
	ctx.strokeStyle = canvasColor;
	ctx.stroke()
}

function drowCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x,y, canvasSize, 0, 2 * Math.PI);
	ctx.fillStyle = canvasColor;
	ctx.fill();
}