(() => {
  // posts/coding/canvas-game-engine/part-1.js
  var canvas = document.getElementById("gameCanvas");
  var context = canvas.getContext("2d");
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
})();
