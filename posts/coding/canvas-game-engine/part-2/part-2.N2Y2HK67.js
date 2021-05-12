(() => {
  // src/helpers/player.js
  var Player = class {
    constructor() {
      this.x = 50;
      this.y = 50;
    }
    update(input2) {
      if (input2.UP) {
        this.y -= 4;
      }
      if (input2.DOWN) {
        this.y += 4;
      }
      if (input2.RIGHT) {
        this.x += 4;
      }
      if (input2.LEFT) {
        this.x -= 4;
      }
    }
    draw(c) {
      c.fillStyle = "white";
      c.fillRect(this.x, this.y, 50, 50);
    }
  };

  // posts/coding/canvas-game-engine/part-2.js
  var canvasOld = document.getElementById("gameCanvasOld");
  var contextOld = canvasOld.getContext("2d");
  contextOld.fillStyle = "black";
  contextOld.fillRect(0, 0, canvasOld.width, canvasOld.height);
  var resize = (canvas3) => {
    canvas3.width = document.getElementById("content").clientWidth;
    canvas3.height = 500;
  };
  var canvas = document.getElementById("gameCanvas");
  var context = canvas.getContext("2d");
  var canvas2 = document.getElementById("gameCanvas2");
  var context2 = canvas2.getContext("2d");
  resize(canvas);
  window.addEventListener("resize", () => resize(canvas));
  resize(canvas2);
  window.addEventListener("resize", () => resize(canvas2));
  var input = {
    UP: false,
    DOWN: false,
    LEFT: false,
    RIGHT: false
  };
  window.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "w") {
      input.UP = true;
      event.preventDefault();
    } else if (event.key.toLowerCase() === "a") {
      input.LEFT = true;
      event.preventDefault();
    } else if (event.key.toLowerCase() === "s") {
      input.DOWN = true;
      event.preventDefault();
    } else if (event.key.toLowerCase() === "d") {
      input.RIGHT = true;
      event.preventDefault();
    }
  });
  window.addEventListener("keyup", (event) => {
    if (event.key.toLowerCase() === "w") {
      input.UP = false;
      event.preventDefault();
    } else if (event.key.toLowerCase() === "a") {
      input.LEFT = false;
      event.preventDefault();
    } else if (event.key.toLowerCase() === "s") {
      input.DOWN = false;
      event.preventDefault();
    } else if (event.key.toLowerCase() === "d") {
      input.RIGHT = false;
      event.preventDefault();
    }
  });
  var gameObjects = {
    player: new Player()
  };
  function main() {
    Object.values(gameObjects).forEach((obj) => obj.update(input));
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context2.fillStyle = "black";
    context2.fillRect(0, 0, canvas2.width, canvas2.height);
    Object.values(gameObjects).forEach((obj) => obj.draw(context));
    Object.values(gameObjects).forEach((obj) => obj.draw(context2));
    window.requestAnimationFrame(main);
  }
  window.requestAnimationFrame(main);
})();
