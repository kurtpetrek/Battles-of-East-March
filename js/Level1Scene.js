Main.Level1Scene = function(game) {
        this.peopleGroup;
        this.sceneStart;
        this.screensGroup;
};

Main.Level1Scene.prototype = {
    create: function(){
        game.paused = true;
        this.input.onDown.addOnce(this.unpause, self);
        this.pauseStart = true;
        
        this.buildBackground();
        this.startScene();
        this.peopleGroup = this.add.group();
        
    },  
    
    unpause: function(){
        game.paused = false;
    },
    
    startScene: function(){
        this.textGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal',"Level 1", 90); 
        text.anchor.setTo(0.5,0.5);
        this.textGroup.add(text);
        
        var playButton = this.textGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.triggerStart,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
        this.textGroup.add(playText);
    },
    
    triggerStart: function(){
        this.textGroup.destroy();
        this.sceneStart = false;
        
        this.buildCivilians();
        this.buildSoldiers();
        this.buildPlayButton();
        this.commander;
        this.scout;
    },
    
    buildBackground: function(){
        for(var x = 0; x < 960; x += 50){
            for(var y = 0; y < 540; y += 50){
              var grass = this.add.image(x,y,'tileSet','grass.png');   
            }
        }
        var texture = this.add.image(0,0,'tileSet','grass.png');
        texture.width = 960;
        texture.height = 540;
        texture.alpha = 0.5;
        for(var t = 0; t < 5; t++){
            if(t == 0){
                var x = 59;
                var y = 145;
            }
            if(t == 1){
                var x = 670;
                var y = 35;
            }
            if(t == 2){
                var x = 529;
                var y = 465;
            }
            if(t == 3){
                var x = 209;
                var y = 115;
            }
            if(t == 4){
                var x = 899;
                var y = 345;
            }
            var tree = this.add.image(x,y,'tileSet','shrub1.png')
        }
    },
        
    buildCivilians: function(){
        for(var p = 0; p < 15; p++){
            var civilian = this.peopleGroup.create(this.rnd.integerInRange(-50,-900),this.rnd.integerInRange(240,380),'civilians','anna0.png');
            if(p < 3){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(0, 7));
            }
            if(p >= 3 && p < 6){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(8, 16));
            }
            if(p >= 6 && p < 8){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(17, 25));
            }
            if(p >= 8 && p < 10){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(26, 33));
            }
            if(p >= 10){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(34, 42));
            }
            civilian.animations.play('walk', 24, true);
            
            var tween = this.add.tween(civilian);
            tween.to({ x: 1000 }, this.rnd.integerInRange(3000, 5000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.civilianLoop, this);
        }
    },
    
    civilianLoop: function(civilian){
        
        civilian.x = this.rnd.integerInRange(-50,-300);
        civilian.y = this.rnd.integerInRange(240,380);
        
        var tween = this.add.tween(civilian);
            tween.to({ x: 1000 }, this.rnd.integerInRange(3000, 5000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.civilianLoop, this);
    }, 
    
    buildSoldiers: function(){
        for(var y = 420; y > 50; y -= 250){
            for(var x = -50; x > -300; x -= 50){   
                var soldier = this.peopleGroup.create(x, y, 'knight', 'KnightAttackEast1.png');
                soldier.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(26, 37));
                soldier.animations.play('walk', 14, true);

                var tween2 = this.add.tween(soldier);
                tween2.to({ x: 1000 }, 1000 + x *-14, 'Linear', true, 0);
                tween2.onComplete.addOnce(this.soldierLoop, this);
            }
        }
    },
    
    soldierLoop: function(soldier){
        if(this.sceneStart == false){
            this.sceneStart = true;
            this.buildText1();
        }
        
        soldier.x = -50;
        var tween2 = this.add.tween(soldier);
        tween2.to({ x: 1000 }, 3500, 'Linear', true, 0);
        tween2.onComplete.addOnce(this.soldierLoop, this);
    },
    
    buildPlayButton: function(){
        var playButton = this.add.image(this.world.centerX,504,'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380,483,'immortal','Play Level', 40);
    },
    
    playLevel: function(){
        this.state.start('LevelGo', true);
    },
    
    buildText1: function(){
        
        this.commander = this.add.sprite(-200, 100,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.commander.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(51, 58));
        this.commander.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(43, 50));
        this.commander.animations.add('stand', [43]);
        this.commander.animations.play('walk', 14, true);
        
        var tween = this.add.tween(this.commander);
        tween.to({ x: 470 }, 3000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.commanderStopped, this);
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(this.world.centerX, 200,'menuTile1');
        backing.height = 350;
        backing.width = 600;
        backing.anchor.setTo(0.5,0.5);
        
        var nextButton = this.screensGroup.create(this.world.centerX, 380,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.charactersGo,  this);
        var nextText = this.add.bitmapText(437, 360,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
        
        var titleText = this.add.bitmapText(this.world.centerX, 80,'immortal', 'The March Begins!', 54);
        titleText.anchor.setTo(0.5,0.5);
        this.screensGroup.add(titleText);
        
        var story = this.add.bitmapText(230, 127,'immortal', 'The castle at Westfall \nhas fallen and the \nsurvivors are fleeing to \nsafety!', 44);

        this.screensGroup.add(story);
    },
    
    commanderStopped: function(){
        this.commander.animations.play('stand', 14, true);
    },
    
    charactersGo: function(){
        this.screensGroup.destroy();
        
        this.scout = this.add.sprite(1100, 100,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.scout.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(75, 82));
        this.scout.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(66, 74));
        this.scout.animations.add('bow', [59,60,61,62,63,64,65,64,63,62,61,60]);
        this.scout.animations.add('stand', [66]);
        this.scout.animations.play('walk', 14, true);
        this.scout.scale.x *= -1
        
        var tween = this.add.tween(this.scout);
        tween.to({ x: 660 }, 2000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.scoutReporting, this);
    },
    
    scoutReporting: function(){
        this.scout.animations.play('talk', 14, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(650, 410,'speechBubble');
        speechBacking.width = 600;
        speechBacking.height = 310;
        speechBacking.scale.x *= -1
        speechBacking.scale.y *= -1
        
        var speech = this.add.bitmapText(330, 245,'immortal', 'Sir! There are\nenemy forces up\nahead attempting to\nblock our way.', 40);
        speech.anchor.setTo(0.5,0.5);
        this.screensGroup.add(speech);
        
        var nextButton = this.screensGroup.create(this.world.centerX, 40,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderOrdering,  this);
        var nextText = this.add.bitmapText(437, 20,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    commanderOrdering: function(){
        this.screensGroup.destroy();
        this.scout.animations.play('stand', 14, true);
        this.commander.animations.play('talk', 14, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(490, 410,'speechBubble');
        speechBacking.width = 450;
        speechBacking.height = 310;
        speechBacking.scale.y *= -1
        
        var speech = this.add.bitmapText(700, 255,'immortal', 'Form Ranks\nand prepare\nfor battle!', 40);
        speech.anchor.setTo(0.5,0.5);
        this.screensGroup.add(speech);
        
        var nextButton = this.screensGroup.create(this.world.centerX, 40,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderOrdering2,  this);
        var nextText = this.add.bitmapText(437, 20,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    commanderOrdering2: function(){
        this.screensGroup.destroy();
        this.scout.animations.play('bow', 14, true);
        this.scout.events.onAnimationLoop.addOnce(this.scoutLeave, this);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(490, 410,'speechBubble');
        speechBacking.width = 450;
        speechBacking.height = 310;
        speechBacking.scale.y *= -1
        
        var speech = this.add.bitmapText(720, 255,'immortal', 'We must not\nlet them through\nour lines!', 40);
        speech.anchor.setTo(0.5,0.5);
        this.screensGroup.add(speech);
        
    },
    
    scoutLeave:function(){
        this.scout.animations.play('walk', 14, true);
        this.scout.x = 600;
        
        this.scout.scale.x *= -1;
        
        var tween = this.add.tween(this.scout);
        tween.to({ x: 1240 }, 3000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.endScene, this);
        
    },
    
    endScene:function(){
        this.screensGroup.destroy();
        this.commander.animations.play('stand', 14, true);
        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
        
    },
    
    update:function(){
        this.peopleGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        
        if(this.pauseStart && !game.paused){
            this.pauseStart = false;
            this.triggerStart();
        }
    }
};