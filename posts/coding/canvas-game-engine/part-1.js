const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Draw a black square on the whole canvas
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height);
