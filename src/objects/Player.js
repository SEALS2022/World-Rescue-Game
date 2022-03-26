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
    if(input.right.isDown){
      this.setVelocityX(200)
    }else if(input.left.isDown){
      this.setVelocityX(-200)
    }else{
      this.setVelocityX(0)
    }

    if(input.up.isDown){
      this.setVelocityY(-400)

    }

    if(this.body.velocity.x > 0){
      this.setFlipX(false)
    }else if(this.body.velocity.x < 0){
      this.setFlipX(true)
    }
  }

  // collectCoin(player, coins, score, scoreText){
  //   coins.disableBody(true, true);
  //   score += 1;
  //   scoreText.setText("score: "+ score )
  // }
}
