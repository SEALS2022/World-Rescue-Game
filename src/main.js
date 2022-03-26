import Game from "./scenes/Game.js";
import Win from "../src/scenes/Win.js"
const config = {
  width: 1025,
  height: 750,
  backgroundColor: "#10a5f5",
  type: Phaser.AUTO,
  // Set Physics
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 700 },
      debug: true,
    },
  },
  scene: [Game, Win],

};

new Phaser.Game(config);
