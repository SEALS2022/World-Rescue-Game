import Phaser from "phaser";
// assets
import bg from "../assets/img/background-iceberg.png";

export default class Game extends Phaser.Scene {
  preload() {
    // load image
    this.load.image("background", `${bg}`);
  }

  create() {
    // Load background
    this.background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setDisplaySize(800, 600);
  }

  update() {}
}
