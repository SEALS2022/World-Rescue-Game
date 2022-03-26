import Phaser from "phaser";
// assets
import bg from "../assets/img/background-iceberg.png";
import rob from "../assets/img/player.png";
import Robot from "../objects/Player.js";
import coin from "../assets/img/coin.png";
import penguin from "../assets/img/Penguin.png"
// import Coin from "../objects/Coins";
// import Win from '../scenes/Win.js'

export default class Game extends Phaser.Scene {
  constructor() {
    super("playGame");

    this.score = 0;
  }

  preload() {
    // load image
    this.load.image("player", `${rob}`);
    this.load.image("coins", `${coin}`);
    this.load.image("animal", `${penguin}`)
    // load tilemap and tileset we used
    this.load.image("tileset", "assets/icemap-tilesheet.png");
    this.load.tilemapTiledJSON("icemap", "assets/ice-world.json");

    // const platforms = map.createStaticLayer('platform', tileset, 0, 200 )
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
    this.player.setPosition(0, 1400).setScale(1);
    this.player.setCollideWorldBounds(true);


//     playerWonText = this.add.text(
//   this.physics.world.bounds.width / 2,
//   this.physics.world.bounds.height / 2,
//   'You won!',
//   {
//     fontFamily: 'Monaco, Courier, monospace',
//     fontSize: '50px',
//     fill: '#fff'
//   },
// );

// playerWonText.setOrigin(0.5);

// // Make it invisible until the player wins
// playerWonText.setVisible(false);


    //penguin
    this.animal = this.physics.add.sprite(300, 0, "animal");
    this.animal.setPosition(1040,0).setScale(0.2);
    this.physics.add.collider(this.player, this.animal, () => {
      if (true)
      {
        // this.player.x = 10
        this.scene.start('win')
        console.log("you win") 
      }
    });
    this.animal.setCollideWorldBounds(true);
    // score board
    this.scoreText = this.add.text(16, 16, "Score: 0", {
      fontSize: "32px",
      fill: "#000",
    });

    this.physics.world.setBounds( 0, 1400, );

    this.physics.add.collider(this.player, iceWorld);
    this.physics.add.collider(this.animal, iceWorld);

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




    //   this.spikes = this.physics.add.group({
    //     allowGravity: false,
    //     immovable: true
    //   });

    //   map.getObjectLayer('Spikes').objects.forEach((spike) => {
    //     // Add new spikes to our sprite group
    //     const spikeSprite = this.spikes.create(spike.x, spike.y, 'spike').setOrigin(0);
    // });
        
    // inputs
    this.input = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.player.update(this.input);
  }
}
