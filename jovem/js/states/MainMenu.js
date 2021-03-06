(function(){
'use strict';

/* global GameCtrl */
GameCtrl.MainMenu = function (/*game*/) {
    this.music = null;
    this.playButton = null;
};

GameCtrl.MainMenu.prototype = {


        preload: function(){
                
        },

        create: function () {
                //this.backgroundColor = '#ccc';
                this.game.stage.backgroundColor = '#606060';
                
        
                /*var starsmenu=this.game.add.sprite(130, 100, 'starsmenu');
                starsmenu.scale.x =5;
                starsmenu.scale.y =5;*/

                var logo=this.game.add.sprite(250, 170, 'logo');
                logo.scale.x=0.8;
                logo.scale.y=0.8;
                

                //this.playButton = this.add.button(this.game.width / 2 - 160, this.game.height / 2 - 120, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');


                var textstyle = {
                  font : '50px "Roboto"',
                  fill : '#9d1d2c',
                  align : 'center'
                };
                //var textobj = 
                this.startText=this.game.add.text(this.game.width / 2 - 180, this.game.height / 2 + 200, frase, textstyle);

                this.game.physics.startSystem(Phaser.Physics.ARCADE);
                
                
                //Posicao na tela
                var clown= this.game.add.sprite(100, 650, 'clown');
                clown.scale.x =0.4;
                clown.scale.y =0.4;
                this.game.physics.enable(clown, Phaser.Physics.ARCADE);

                clown.body.velocity.x =60;

                

               // clown.animations.add('run', Phaser.Animation.generateFrameNames('clown', 0, 2, '', 4), 10 /*fps */, true); Original
                clown.animations.add('run', Phaser.Animation.generateFrameNames('urso', 0, 15, '', 4), 10 /*fps */, true);
                clown.animations.play('run', 8, true);
    //clown.animations.stope()


                this.enterPressed=false;
        },
        update: function () {
            //this.game.state.start('Stage02');
            // TODO remover esto!
            //    this.startGame();

                if(!this.enterPressed && this.game.input.keyboard.isDown(Phaser.Keyboard.ENTER)){
                    this.enterPressed=true;
                    
                    this.blinkedTimes=-1;
                    this.timerBlinker=setInterval(function(_this){
                            _this.blinkedTimes++;
                            if(_this.blinkedTimes>10){
                                    clearInterval(_this.timerBlinker);
                                    //GameCtrl.data={textToRender:'STAGE 01', nextState:'Stage01' };
                                    GameCtrl.data={textToRender:'SLACKLINE!!!', nextState:'Stage02' };
                                    _this.game.state.start('Prestage');

                            }
                            _this.startText.visible = !_this.startText.visible;
                    },30, this);
                }

        },

};

})();