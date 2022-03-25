import Phaser from "phaser";

export default class Robot extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true);
  }

  preload() {}

  create() {}

  update(input) {
    // move right
    if (input.right.isDown) {
      this.x += 5;
    }
    // move left
    if (input.left.isDown) {
      this.x -= 5;
    }
    // move up
    if (input.up.isDown) {
      this.y -= 9;
    }



  }

  // collectCoin(player, coins, score, scoreText){
  //   coins.disableBody(true, true);
  //   score += 1;
  //   scoreText.setText("score: "+ score )
  // }
}
