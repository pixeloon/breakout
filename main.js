var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // clears the previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    // makes it move
    x += dx;
    y += dy;
    // detect collision on the sides
    if (x + dx > canvas.width || x + dx < 0) {
        dx = -dx;
    }
    // detect collision on the top and bottom
    if (y + dy > canvas.height || y + dy < 0) {
        dy = -dy;
    }
}
setInterval(draw, 10);
