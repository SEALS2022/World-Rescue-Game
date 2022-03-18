import Phaser from "phaser";
// assets
import bg from "../assets/img/background-iceberg.png";
import ship from "../assets/img/ship.png";
import bulletImg from "../assets/img/final_duc.jpg"

import Robot from "../objects/Player";
class BulletGroup extends Phaser.Physics.Group{
  
}
export default class Game extends Phaser.Scene {

  constructor() {
    super("playGame")
  }


  preload() {
    // load image
    this.load.image("background", `${bg}`);
    this.load.image("player", `${ship}`)
    this.load.image("bullet", `${bulletImg}`)
  }

  create() {
    // Load background
    this.background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setDisplaySize(800, 600);

    this.player = new Robot(this, 0, 100, "player");
    this.player.setScale(0.1);
    this.physics.add.existing(this.player);
    this.physics.world.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);
    this.player.body.setCollideWorldBounds(true);
    
    this.input = this.input.keyboard.createCursorKeys();
  }  




  update() {
    this.player.update(this.input);
 }
}
