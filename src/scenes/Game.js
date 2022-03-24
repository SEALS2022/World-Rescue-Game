import Phaser from "phaser";
// assets
import bg from "../assets/img/background-iceberg.png";
import rob from "../assets/img/player.png";
import Robot from "../objects/Player.js";
import coin from "../assets/img/coin.png";
// import Coin from "../objects/Coins";

export default class Game extends Phaser.Scene {
  constructor() {
    super("playGame");

    this.score = 0;
  }

  preload() {
    // load image
    this.load.image("player", `${rob}`);
    this.load.image("coins", `${coin}`);
    // load tilemap and tileset we used
    this.load.image("tileset", "assets/icemap-tilesheet.png");
    this.load.tilemapTiledJSON("icemap", "assets/ice-world.json");
  }

  create() {
    // map
    const map = this.make.tilemap({ key: "icemap" });
    const tileset = map.addTilesetImage("icemap-tilesheet", "tileset");
    // bring map to life
    const iceWorld = map.createLayer("iceLevel", tileset, 0, 0);
    iceWorld.setCollisionByExclusion(-1, true);

    this.score = 0;
    // player
    this.player = new Robot(this, 0, 100, "player");
    this.physics.add.sprite(this.player);
    this.player.setPosition(0, 1600).setScale(1);
    // score board
    this.scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "32px",
      fill: "#000",
    });

    // objects
    // this.coins = this.physics.add.sprite(300, 0, "coins");
    // this.coins.setScale(0.1);
    // this.physics.add.collider(this.player, this.coins, (player, coins) => {
    //   coins.disableBody(true, true);
    //   // update score here
    //   this.score += 10;
    //   this.scoreText.setText("Score: " + this.score);
    // });
    // this.coins.body.setCollideWorldBounds(true);

    // Set world bounds
    this.physics.world.setBounds(
      0,
      0,
      iceWorld.displayWidth,
      iceWorld.displayHeight
    );

    // set camera to player always
    this.cameras.main
      .setBounds(0, 0, iceWorld.displayWidth, iceWorld.displayHeight)
      .startFollow(this.player)
      .setZoom(1);

    this.physics.add.collider(this.player, iceWorld);
    // inputs
    this.input = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.update(this.input);
  }
}
