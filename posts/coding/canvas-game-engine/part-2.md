---
title: "<Canvas> Game Engine: Part 2"
date:  2019-08-07
---

## Where we were
We left off with a canvas that looked like this:

<canvas id="gameCanvasOld">
  <h1>This game doesn't work without an HTML canvas :(</h1>
</canvas>

# Where we're going
It's not very exciting (or interactive), so let's start spicing it up a bit. By the end, we should have a nicely sived canvas with a white box moving across the screen to the WASD keys like this:

<canvas id="gameCanvas">
  <h1>This game doesn't work without an HTML canvas :(</h1>
</canvas>

Let's get started!!

## Resizing the canvas
I'm assuming we want a fullscreen canvas game. In that case, write a helper function to resize the canvas whenever the window size changes like this:

```
const resize = canvas => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};
```

Now you just have to call it once and register it for when the window changes size:
```
resize(canvas);
window.addEventListener('resize', () => resize(canvas));
```

## Rendering a player
Our player will just be a white box for now. Let's create a `Player` class that also houses an X and Y variable for its location.

```
class Player {
	constructor() {
		this.x = 50;
		this.y = 50;
	}

	draw(c) {
		c.fillStyle = "white";
		c.fillRect(this.x, this.y, 50, 50); 
	}
}
```

Now we can make a new player and draw it.

```
// Make game objects
const gameObjects = {
	player: new Player()
}

// Clear current canvas
context.fillStyle = "black";
context.fillRect(0, 0, canvas.width, canvas.height); 

// Draw all objects
Object.values(gameObjects).forEach(obj => obj.draw(context));
```

## Moving the player
Now comes the hardest concept to understand for any game engine -- the concept of time. We need our game to draw a certain number of times per second. And we need some logic to check if certain keys are pressed (WASD) on each frame to move the player. Luckily, [MDN has us covered on game loops](mdn/link).

Our final drawing code should be something like this:

```
function main() {
	// Clear current canvas
	context.fillStyle = "black";
	context.fillRect(0, 0, canvas.width, canvas.height); 

	// Draw all objects
	Object.values(gameObjects).forEach(obj => obj.draw(context));

	// Do this loop again
	window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);
```

BUT we still need something to change the players' X and Y. For this we'll need some sloppy key handlers above our `function main()`...
```
// Capture key input we care about
const input = {
	UP: false,
	DOWN: false,
	LEFT: false,
	RIGHT: false
};
window.addEventListener('keydown', event => {
	if (event.keyCode === 37) {
		input.LEFT = true;
	} else if (event.keyCode === 38) {
		input.UP = true;
	} else if (event.keyCode === 39) {
		input.RIGHT = true;
	} else if (event.keyCode === 40) {
		input.DOWN = true;
	}
});
window.addEventListener('keyup', event => {
	if (event.keyCode === 37) {
		input.LEFT = false;
	} else if (event.keyCode === 38) {
		input.UP = false;
	} else if (event.keyCode === 39) {
		input.RIGHT = false;
	} else if (event.keyCode === 40) {
		input.DOWN = false;
	}
});
```

Now we need to pass this to each game object in our `main` function:
```
function main() {
	// Update all objects with input
	Object.values(gameObjects).forEach(obj => obj.update(input));

	// ...Drawing logic remains
}
```

And finally, our `Player` needs an `update` function!
```
class Player {
	update(input) {
		if (input.UP) {
			this.y -= 4;
		}
		if (input.DOWN) {
			this.y += 4;
		}
		if (input.RIGHT) {
			this.x += 4;
		}
		if (input.LEFT) {
			this.x -= 4;
		}
	}
}
```

And, voila! The start of a game:

<canvas id="gameCanvas2">
  <h1>This game doesn't work without an HTML canvas :(</h1>
</canvas>
