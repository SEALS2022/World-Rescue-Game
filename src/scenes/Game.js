import Phaser from "phaser";
// assets
import bg from "../assets/img/background-iceberg.png";
import rob from "../assets/img/player.png";
import Robot from "../objects/Player.js";
import coin from "../assets/img/coin.png"
// import Coin from "../objects/Coins";


export default class Game extends Phaser.Scene {

  constructor() {
    super("playGame");

    this.score = 0;
  }

  preload() {
    // load image
    this.load.image("background", `${bg}`);
    this.load.image("player", `${rob}`);
    this.load.image("coins", `${coin}`);
  
  }

  create() {

    

    // Load background
    this.background = this.add
      .image(0, 0, "background")
      .setOrigin(0, 0)
      .setDisplaySize(800, 600);

    this.player = new Robot(this, 0, 100, "player");
    this.player.setScale(3);
    this.physics.add.existing(this.player);
    this.physics.world.setBounds(0, 0, this.background.displayWidth, this.background.displayHeight);
    this.player.body.setCollideWorldBounds(true);

    this.scoreText = this.add.text(16,16, 'score: 0', { fontSize: '32px', fill:'#000' })



    this.coins = this.physics.add.sprite(300,0, "coins")
    this.coins.setScale(0.1)
    this.physics.add.collider(this.player, this.coins, function(player, coins){
      coins.disableBody(true, true);
    })

    // timerEvent(){}
    //   this.score = this.score +5;
    //   this.scoreText.setText(`Score: ${this.score}`);
    



    this.coins.body.setCollideWorldBounds(true)
    // this.coins = new Coin(this, 300, 0, "coins");
    // this.coins.setScale(0.1)
    // this.physics.add.existing(this.coins)
    // // this.coins.body.setCollideWorldBounds(true);
    // this.score = 0;
    // this.scoreText = this.add.text(16,16, "Score:"+ this.score, {
    //   fontSize: "32px",
    //   fill: "#000"
    // }) 

    // this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this)

    this.input = this.input.keyboard.createCursorKeys();
  }  




  update() {
    this.player.update(this.input);

 }

}
