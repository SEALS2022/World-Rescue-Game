import Game from "./scenes/Game";

const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  // Set Physics
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 700 },
      debug: false,
    },
  },
  scene: [Game],
};

new Phaser.Game(config);
