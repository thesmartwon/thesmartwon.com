const canvasOld = document.getElementById('gameCanvasOld');
const contextOld = canvasOld.getContext('2d');
// Draw a black square on the whole canvasOld
contextOld.fillStyle = "black";
contextOld.fillRect(0, 0, canvasOld.width, canvasOld.height);

import { Player } from '../../../src/helpers/player';
const resize = canvas => {
	canvas.width = document.getElementById('content').clientWidth;
	canvas.height = 500;
};

// Grab the canvas and thing we draw on
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');
const canvas2 = document.getElementById('gameCanvas2');
const context2 = canvas2.getContext('2d');
// Resize the canvas when the window is resized
resize(canvas);
window.addEventListener('resize', () => resize(canvas));
resize(canvas2);
window.addEventListener('resize', () => resize(canvas2));

// Capture arrow key input we care about
const input = {
	UP: false,
	DOWN: false,
	LEFT: false,
	RIGHT: false
};
window.addEventListener('keydown', event => {
	if (event.key.toLowerCase() === 'w') {
		input.UP = true;
    event.preventDefault();
	} else if (event.key.toLowerCase() === 'a') {
    input.LEFT = true;
    event.preventDefault();
	} else if (event.key.toLowerCase() === 's') {
		input.DOWN = true;
    event.preventDefault();
	} else if (event.key.toLowerCase() === 'd') {
		input.RIGHT = true;
    event.preventDefault();
	}
});
window.addEventListener('keyup', event => {
	if (event.key .toLowerCase()=== 'w') {
		input.UP = false;
    event.preventDefault();
	} else if (event.key.toLowerCase() === 'a') {
    input.LEFT = false;
    event.preventDefault();
	} else if (event.key.toLowerCase() === 's') {
		input.DOWN = false;
    event.preventDefault();
	} else if (event.key.toLowerCase() === 'd') {
		input.RIGHT = false;
    event.preventDefault();
	}
});

// Make game objects
const gameObjects = {
	player: new Player()
}

function main() {
	// Update all objects with input
	Object.values(gameObjects).forEach(obj => obj.update(input));

	// Clear current canvas
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height); 
	context2.fillStyle = "black";
	context2.fillRect(0, 0, canvas2.width, canvas2.height); 

	// Draw all objects
	Object.values(gameObjects).forEach(obj => obj.draw(context));
	Object.values(gameObjects).forEach(obj => obj.draw(context2));

	// Do this loop again
	window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);
