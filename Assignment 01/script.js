var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Starting coordinates
var x = 200;
var y = 250;
var dx = 2;
var dy = -2;
var ballRadius = 10;

// Paddle settings
var pWidth = 80;
var pHeight = 10;
var pX = 160;

var score = 0;
var lives = 3;

var rightKey = false;
var leftKey = false;

// Check for key presses (39 is Right, 37 is Left)
document.onkeydown = function(e) {
    if(e.keyCode == 39) {
        rightKey = true;
    }
    if(e.keyCode == 37) {
        leftKey = true;
    }
};

document.onkeyup = function(e) {
    if(e.keyCode == 39) {
        rightKey = false;
    }
    if(e.keyCode == 37) {
        leftKey = false;
    }
};

function mainLoop() {
    // Clear the canvas every frame
    ctx.clearRect(0, 0, 400, 300);

    // Draw the Ball
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();

    // Draw the Paddle
    ctx.fillStyle = "blue";
    ctx.fillRect(pX, 290, pWidth, pHeight);

    // Bounce off left/right walls
    if(x + dx > 400 - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    
    // Bounce off top wall
    if(y + dy < ballRadius) {
        dy = -dy;
    } 
    // Handle hitting the bottom
    else if(y + dy > 300 - ballRadius) {
        // If it hits the paddle
        if(x > pX && x < pX + pWidth) {
            dy = -dy;
            score = score + 1;
            document.getElementById("scr").innerHTML = score;
        } else {
            lives = lives - 1;
            document.getElementById("lvs").innerHTML = lives;
            
            if(lives == 0) {
                alert("Game Over! Your score was: " + score);
                location.reload();
            } else {
                // Reset ball position
                x = 200;
                y = 250;
                dx = 2;
                dy = -2;
                pX = 160;
            }
        }
    }

    // Moving the paddle
    if(rightKey == true && pX < 320) {
        pX = pX + 5;
    }
    if(leftKey == true && pX > 0) {
        pX = pX - 5;
    }

    // Update ball movement
    x = x + dx;
    y = y + dy;
}

// Start the game every 10ms
setInterval(mainLoop, 10);