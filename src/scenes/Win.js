import Phaser from "phaser";
import win from "../assets/img/win.png"


export default class GameOver extends Phaser.Scene{
    constructor(){
        super('win')
    }

    preload(){
        this.load.image('Win', `${win}`);
    }



    onObjectClicked() {

        window.location.reload()
    
    }

    create(){
        this.cameras.main.setBackgroundColor('#0da675');
        let replay = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2).setDepth(2).setScale(0.1,0.1);
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 4, 'Win').setDepth(1);
        this.add.text(0, 0, "You win")
       
    
        replay.setInteractive();
    
        this.input.on('gameobjectdown', this.onObjectClicked, this);

        
    
        document.getElementsByClassName('game-over')[0].classList.add('visible');
    }

}