
const config = {
  width: 1920,
  height: 480,
  backgroundColor: "#90EE90",
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