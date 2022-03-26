import Phaser from "phaser";
import win from "../assets/img/win.png"
import penguin from "../assets/img/Penguin.png"

export default class Game extends Phaser.Scene{
    constructor(){
        super('win')
    }

    preload(){
        this.load.image('Win', `${win}`);
        this.load.image('pengu', `${penguin}`)
    }




    create(){
        this.cameras.main.setBackgroundColor('#000');
        // this.add.image(200, 200, 'Win').setDepth(1); 
        const winTitle = this.add.text(200, 200, "You win, You saved all the penguins!!")
        winTitle.setFontSize(32)
        const penguin = this.add.image(1025 / 2, 750 / 2, "pengu") 
    }

}