Main.Level4Scene = function(game){
    this.archer;
    this.dwarf;
    this.soldier;
    this.screensGroup;
    this.spear;
};

Main.Level4Scene.prototype = {
    create: function(){
        game.paused = true;
        this.pauseStart = true;
        this.input.onDown.addOnce(this.unpause, self);
        this.buildBackground();
        this.startScene();
        
    },
    
    unpause: function(){
        game.paused = false;
    },
    
    startScene: function(){
        this.textGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal',"Level 4", 90); 
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
        this.buildCharacters();
    },
    
    buildBackground: function(){
        for(var x = 0; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var grass = this.add.image(x, y, 'tileSet', 'mud.png');
                }
            }
            
        var texture = this.add.image(0,0, 'tileSet', 'mud.png');
        texture.alpha = 0.5;
        texture.width = 1000;
        texture.height = 540;
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
    },
    
    buildCharacters: function(){
        this.soldier = this.add.sprite(350,240,'knight', 'KnightAttackEast1.png');
        this.soldier.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.soldier.animations.add('stand', [0]);
        this.soldier.animations.play('walk', 10, true);
        this.soldier.anchor.setTo(0.5, 0.5);
        
        this.archer = this.add.sprite(350, 300, 'archer', 'ArcherFallingEast1.png');
        this.archer.anchor.setTo(0.5, 0.5);
        this.archer.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(36, 43));
        this.archer.animations.add('stand', Phaser.ArrayUtils.numberArrayStep(13, 21));
        this.archer.animations.add('fire', [28,29,30,31,32,33,34,22,23,24,25,26,27]);
        this.archer.animations.play('walk', 8, true);
        
        this.dwarf = this.add.sprite( 350, 360, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf.animations.add('stand', [0]);
        this.dwarf.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(13, 23));
        this.dwarf.animations.add('lay', [23]);
        this.dwarf.animations.play('walk', 8, true);
        
        this.dwarf.anchor.setTo(0.5, 0.5);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(660, 100,'immortal', "Remind me again why\nwe're marching already and\nnot resting at Fallkirk?", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.archerTalk,  this);
        var nextText = this.add.bitmapText(577, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    archerTalk: function(){
        this.screensGroup.destroy();
        
        var shrub = this.add.image(1200, 120, 'tileSet', 'shrub1.png');
        var tween = this.add.tween(shrub);
        tween.to({ x: -200 }, 8000, 'Linear', true, 0);
        
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 170,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(660, 160,'immortal', "Do you want to paint\na huge target on that\ntown?", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 290,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.archerTalk2,  this);
        var nextText = this.add.bitmapText(577, 270,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    archerTalk2: function(){
        this.screensGroup.destroy();
        
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 170,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(670, 170,'immortal', "They don't have the\nwalls to defend all of us.\nJust think of this as\na grand adventure.", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 290,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.soldierTalk,  this);
        var nextText = this.add.bitmapText(577, 270,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    soldierTalk: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(660, 100,'immortal', "Right, a grand adventure\nof life or death.", 38);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.archerTalk3,  this);
        var nextText = this.add.bitmapText(577, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    archerTalk3: function(){
        this.screensGroup.destroy();
        
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 170,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(670, 160,'immortal', "There is no adventure\nmore grand.", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 290,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk,  this);
        var nextText = this.add.bitmapText(577, 270,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    dwarfTalk: function(){
        this.screensGroup.destroy();

        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 250,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(670, 250,'immortal', "Don't get Dramatic!\nYou know this reminds\nme of a joke...", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 370,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk2,  this);
        var nextText = this.add.bitmapText(577, 350,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    dwarfTalk2: function(){
        this.screensGroup.destroy();
        
        this.spear = this.add.image(1000, 360, 'spear');
        this.spear.angle = -20;
        var tween = this.add.tween(this.spear);
        tween.to({ x: 360 }, 3000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.killDwarf, this);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 250,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(660, 240,'immortal', "A knight, archer and\ndwarf were walking\nthrough the swamp.", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 370,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk3,  this);
        var nextText = this.add.bitmapText(577, 350,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    dwarfTalk3: function(){
        this.screensGroup.destroy();

        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 250,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(670, 250,'immortal', "The dwarf turns to the\nknight and says...", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 370,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
    //    nextButton.inputEnabled = true;
	//	nextButton.events.onInputDown.add(this.dwarfTalk2,  this);
        var nextText = this.add.bitmapText(577, 350,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    killDwarf: function(){
        this.soldier.animations.play('stand', 8, true);
        this.archer.animations.play('stand', 8, true);
        this.archer.angle = 30;
        this.dwarf.animations.play('fall', 8, true);
        this.dwarf.events.onAnimationLoop.addOnce(this.dwarfDied, this);
        
        this.screensGroup.destroy();
        
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 170,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(670, 170,'immortal', "Did he really walk\nstraight into that\nspear?", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 290,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.soldierTalk2,  this);
        var nextText = this.add.bitmapText(577, 270,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    
    },
    
    soldierTalk2: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(660, 100,'immortal', "I can't even look.", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.soldierTalk3,  this);
        var nextText = this.add.bitmapText(577, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    soldierTalk3: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(660, 100,'immortal', "We've all been there,\nit happens.", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.archerTalk4,  this);
        var nextText = this.add.bitmapText(577, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    archerTalk4: function(){
        this.screensGroup.destroy();
        
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 170,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(670, 170,'immortal', "You know, you guys\nshould really let us\nweaken those barriers\nfor you first...", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 290,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk4,  this);
        var nextText = this.add.bitmapText(577, 270,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    dwarfTalk4: function(){
        this.screensGroup.destroy();

        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(630, 250,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(670, 250,'immortal', "It's but a flesh wound!", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 140, 370,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.endScene,  this);
        var nextText = this.add.bitmapText(577, 350,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    endScene: function(){
        this.screensGroup.destroy();
        
        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
    playLevel: function(){
        this.state.start('LevelGo',true);
    },
    
    dwarfDied: function(){
        this.dwarf.animations.play('lay', 8, true);
    },
    
    update: function(){
        if(this.pauseStart && !game.paused){
            this.pauseStart = false;
            this.triggerStart();
        }
    }
};