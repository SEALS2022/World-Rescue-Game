import Phaser from "phaser";

export default class Coin extends Phaser.GameObjects.Image {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);
        scene.add.existing(this);
      }

      preload(){}

      create(){}

      update(){}

}