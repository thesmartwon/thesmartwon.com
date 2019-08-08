export class Player {
	constructor() {
		this.x = 50;
		this.y = 50;
	}

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

	draw(c) {
		c.fillStyle = "white";
		c.fillRect(this.x, this.y, 50, 50); 
	}
}