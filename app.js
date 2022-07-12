const canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

let canvasSize = 15;
let canvasColor = "red";

let isTrue = false;
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e)=> {
	isTrue = true;
	x = e.offsetX;
	y = e.offsetY;
	drowCircle(x,y);

})

canvas.addEventListener("mousemove", (e)=> {
	if(isTrue){
		let x1 = e.offsetX;
		let y1 = e.offsetY;
		drowCircle(x1,y1);
		drowLine(x,y,x1,y1);
		x = x1;
		y = y1;
	}
})

canvas.addEventListener("mouseup",()=> {
	isTrue = false;

	x = undefined;
	y = undefined;
})

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