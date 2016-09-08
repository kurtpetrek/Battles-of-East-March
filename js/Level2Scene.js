Main.Level2Scene = function(game){
    this.soldier1;
    this.soldier2;
    this.scout;
    this.rowan;
};

Main.Level2Scene.prototype = {
    create: function(){
        game.paused = true;
        this.pauseStart = true;
        this.input.onDown.addOnce(this.unpause, self);
        this.buildBackground();
        this.sceneStart();
        
        this.soldier1;
        this.soldier2;
        this.scout;
        this.rowan;
        this.screensGroup;
    },
    
    unpause: function(){
        game.paused = false;
    },
    
    sceneStart: function(){
        this.textGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal',"Level 2", 90); 
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
        this.soldiersGo();
        this.buildPlayButton();  
    },
    
    buildBackground:function(){
        for(var x = 0; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'desert.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'desert.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'desert.png');
                    }
                }
            }
            
            var texture = this.add.image(0,0, 'tileSet', 'desert.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
    },
    
    soldiersGo: function(){
        this.soldier1 = this.add.sprite(300,200,'knight', 'KnightAttackEast1.png');
        this.soldier1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.soldier1.animations.add('stand', [0]);
        this.soldier1.animations.play('walk', 14, true);
        this.soldier1.anchor.setTo(0.5, 0.5);
        
        this.soldier2 = this.add.sprite(300,270,'knight', 'KnightAttackEast1.png');
        this.soldier2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.soldier2.animations.add('stand', [0]);
        this.soldier2.animations.play('walk', 14, true);
        this.soldier2.anchor.setTo(0.5, 0.5);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 130,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(580, 110,'immortal', "So maybe marching\ninto the desert\nwasn't a great idea.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 70, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.soldierTalk,  this);
        var nextText = this.add.bitmapText(507, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    soldierTalk: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 310,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.y *= -1;
        
        var text = this.add.bitmapText(580, 320,'immortal', "Nothing to be done\nabout it now.", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 70, 220,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.addOnce(this.soldierTalk2,  this);
        var nextText = this.add.bitmapText(507, 200,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    soldierTalk2: function(){
        
        this.scout = this.add.sprite(1100, 240,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.scout.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(75, 82));
        this.scout.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(66, 74));
        this.scout.animations.add('bow', [59,60,61,62,63,64,65,64,63,62,61,60]);
        this.scout.animations.add('stand', [66]);
        this.scout.animations.play('walk', 14, true);
        this.scout.anchor.setTo(0.5, 0.5);
        this.scout.scale.x *= -1
        
        var tween = this.add.tween(this.scout);
        tween.to({ x: 420 }, 3000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.scoutReporting, this);
        
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 400;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(610, 110,'immortal', "I hope whoever's in\ncharge of directions \nknows what they're\ndoing...", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 70, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.killScreens,  this);
        var nextText = this.add.bitmapText(507, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
        
        
    },
    
    scoutReporting:function(){
        this.screensGroup.destroy();
        this.scout.animations.play('talk', 14, true);
        this.soldier1.animations.play('stand', 14, true);
        this.soldier2.animations.play('stand', 14, true);
        
        this.rowan = this.add.sprite(-100, 250,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.rowan.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(9, 16));
        this.rowan.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(0, 8));
        this.rowan.animations.add('stand', [0]);
        this.rowan.animations.play('walk', 8, true);
        this.rowan.anchor.setTo(0.5, 0.5);
        
        
        var tween = this.add.tween(this.rowan);
        tween.to({ x: 210 }, 3000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.stopMe, this);

        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(720, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(740, 110,'immortal', "There's water ahead\nbut it's defended\nby enemy forces.", 38);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 230, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.scoutReporting2,  this);
        var nextText = this.add.bitmapText(667, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    scoutReporting2:function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(720, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(740, 110,'immortal', "They've fortified their\npositions with spear\nbarriers!", 38);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 230, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.soldierTalk3,  this);
        var nextText = this.add.bitmapText(667, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    soldierTalk3: function(){
        this.screensGroup.destroy();
        this.screensGroup = this.add.group();
        this.scout.animations.play('stand', 14, true);
        var speechBacking = this.screensGroup.create(590, 130,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(580, 110,'immortal', "I'm out...", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 70, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk,  this);
        var nextText = this.add.bitmapText(507, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk:function(){
        this.screensGroup.destroy();
        this.soldier1.scale.x *= -1;
        this.soldier2.scale.x *= -1;
        
        this.rowan.animations.play('talk', 8, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(500, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(520, 110,'immortal', "Hello Boys!", 50);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 10, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk2,  this);
        var nextText = this.add.bitmapText(447, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk2:function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 8, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(500, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(520, 110,'immortal', "We're going to take\nthat water and leave\nthis desert!", 38);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 10, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk3,  this);
        var nextText = this.add.bitmapText(447, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk3:function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(500, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(540, 110,'immortal', "My archers can\nweaken the barriers and\nattack the defenders.", 38);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 10, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk4,  this);
        var nextText = this.add.bitmapText(447, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk4:function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(500, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(520, 110,'immortal', "Hopefully you dopes\nhave been upgraded\nsince the last fight.", 38);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 10, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk5,  this);
        var nextText = this.add.bitmapText(447, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk5:function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('talk', 8, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(500, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(520, 110,'immortal', "Prepare for Battle!", 45);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 10, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.charactersLeave,  this);
        var nextText = this.add.bitmapText(447, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    charactersLeave: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('walk', 8, true);
        this.rowan.scale.x *= -1;
        var tween = this.add.tween(this.rowan);
        tween.to({ x: -210 }, 2000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.lastWords, this);

        this.scout.animations.play('walk', 14, true);
        this.scout.scale.x *= -1;
        var tween2 = this.add.tween(this.scout);
        tween2.to({ x: 1210 }, 3000, 'Linear', true, 0);

        
    },
    
    lastWords: function(){
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 130,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(580, 110,'immortal', "She doesn't just mean\nus two, right?", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
    buildPlayButton: function(){
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
    },
    
    killScreens: function(){
        this.screensGroup.destroy();
    },
    
    stopMe: function(){
        this.rowan.animations.play('stand', 14, true);
    },
    
    playLevel: function(){
        this.state.start('LevelGo', true);
    },
    
    update: function(){
        if(this.pauseStart && !game.paused){
            this.pauseStart = false;
            this.triggerStart();
        }
    }
    
};