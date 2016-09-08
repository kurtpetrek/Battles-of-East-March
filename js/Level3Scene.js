Main.Level3Scene = function(game){
    this.commander;
    this.rowan;
    this.soldier1;
    this.soldier2;
    this.archer;
    this.dwarf1;
    this.dwarf2;
};

Main.Level3Scene.prototype = {
    create: function(){
        game.paused = true;
        this.pauseStart = true;
        this.input.onDown.addOnce(this.unpause, self);
        this.buildBackground1();
        this.cutGroup;
        this.commander;
        this.rowan;
        this.soldier1;
        this.soldier2;
        this.archer;
        this.dwarf1;
        this.dwarf2;
        this.screensGroup;
    },
    
    unpause: function(){
        game.paused = false;
    },
    
    buildBackground1: function(){
        for(var x = 0; x < 960; x += 50){
            for(var y = 0; y < 540; y += 50){
              var grass = this.add.image(x,y,'tileSet','grass.png');   
            }
        }
        var texture = this.add.image(0,0,'tileSet','grass.png');
        texture.width = 960;
        texture.height = 540;
        texture.alpha = 0.5;
        
        var house3 = this.add.image(600,-40,'buildings','House2.png');
        house3.tint = 0xffff99;
        
        var castle = this.add.image(730, 10,'buildings','CastleBuilding.png');
        
        var house = this.add.image(400,50,'buildings','House.png');
        
        var house2 = this.add.image(540,240,'buildings','House2.png');
        
        var house4 = this.add.image(700,300,'buildings','House.png');
        house4.tint = 0xaaffff;
        
        var text = this.add.bitmapText(30,200,'immortal','Battle\nat Fallkirk', 100);
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.buildBackground2,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
    },
    
    buildBackground2:function(){
        for(var x = 0; x < 960; x += 50){
            for(var y = 0; y < 540; y += 50){
              var grass = this.add.image(x,y,'tileSet','grass.png');   
            }
        }
        var texture = this.add.image(0,0,'tileSet','grass.png');
        texture.width = 960;
        texture.height = 540;
        texture.alpha = 0.5;
        
        var treeNumber = 15;
            for(var i = 0; i < treeNumber; i++){
                var picker = game.rnd.integerInRange(1, 3);
                var shrub;
                if(picker == 1){
                    var shrub = this.add.image(game.rnd.integerInRange(0, 940), game.rnd.integerInRange(0, 520), 'tileSet', 'shrub1.png');
                }
                if(picker == 2)
                {var shrub = this.add.image(game.rnd.integerInRange(0, 940), game.rnd.integerInRange(0, 520), 'tileSet', 'shrub2.png');
                }
                if(picker == 3){
                    var shrub = this.add.image(game.rnd.integerInRange(0, 940), game.rnd.integerInRange(0, 520), 'tileSet', 'shrub3.png');
                }
                shrub.width = game.rnd.integerInRange(35, 50);
                shrub.height = game.rnd.integerInRange(35, 50);
            }
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
        
        this.soldier1 = this.add.sprite(-110,240,'knight', 'KnightAttackEast1.png');
        this.soldier1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.soldier1.animations.add('stand', [0]);
        this.soldier1.animations.play('walk', 14, true);
        this.soldier1.anchor.setTo(0.5, 0.5);
        
        var tween = this.add.tween(this.soldier1);
        tween.to({ x: 210 }, 1200, 'Linear', true, 0);
        tween.onComplete.addOnce(this.stopLeft, this);

        
        this.soldier2 = this.add.sprite(-150, 280,'knight', 'KnightAttackEast1.png');
        this.soldier2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.soldier2.animations.add('stand', [0]);
        this.soldier2.animations.play('walk', 14, true);
        this.soldier2.anchor.setTo(0.5, 0.5);
        
        var tween2 = this.add.tween(this.soldier2);
        tween2.to({ x: 250 }, 1200, 'Linear', true, 0);
        
        this.commander = this.add.sprite(-200, 300,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.commander.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(51, 58));
        this.commander.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(43, 50));
        this.commander.animations.add('stand', [43]);
        this.commander.animations.play('walk', 10, true);
        this.commander.anchor.setTo(0.5,0.5);
        
        var tween3 = this.add.tween(this.commander);
        tween3.to({ x: 300 }, 1200, 'Linear', true, 0);
        
        this.rowan = this.add.sprite(-150, 350,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.rowan.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(9, 16));
        this.rowan.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(0, 8));
        this.rowan.animations.add('stand', [0]);
        this.rowan.animations.play('walk', 8, true);
        this.rowan.anchor.setTo(0.5, 0.5);
        
        var tween4 = this.add.tween(this.rowan);
        tween4.to({ x: 250 }, 1200, 'Linear', true, 0);
        
        this.archer = this.add.sprite(-100, 380, 'archer', 'ArcherFallingEast1.png');
        this.archer.anchor.setTo(0.5, 0.5);
        this.archer.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(36, 43));
        this.archer.animations.add('stand', Phaser.ArrayUtils.numberArrayStep(13, 21));
        this.archer.animations.add('fire', [28,29,30,31,32,33,34,22,23,24,25,26,27]);
        this.archer.animations.play('walk', 8, true);
        
        var tween5 = this.add.tween(this.archer);
        tween5.to({ x: 200 }, 1200, 'Linear', true, 0);
        
        this.dwarf1 = this.add.sprite( 1100, 220, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf1.animations.add('stand', [0]);
        this.dwarf1.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf1.animations.play('walk', 8, true);
        this.dwarf1.scale.x *= -1;
        
        var tween6 = this.add.tween(this.dwarf1);
        tween6.to({ x: 600 }, 2000, 'Linear', true, 0);
        
        this.dwarf2 = this.add.sprite( 1100, 300, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf2.animations.add('stand', [0]);
        this.dwarf2.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf2.animations.play('walk', 8, true);
        this.dwarf2.scale.x *= -1;
        
        var tween7 = this.add.tween(this.dwarf2);
        tween7.to({ x: 600 }, 2000, 'Linear', true, 0);
        tween7.onComplete.addOnce(this.stopRight, this);
    },
    
    stopLeft: function(){
        this.archer.animations.play('stand', 8, true);
        this.commander.animations.play('talk', 8, true);
        this.rowan.animations.play('stand', 8, true);
        this.soldier1.animations.play('stand', 8, true);
        this.soldier2.animations.play('stand', 8, true); 
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(610, 150,'immortal', "It's good to see\nmore survivors from\nWestfall!", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    stopRight: function(){
        this.dwarf1.animations.play('stand', 8, true);
        this.dwarf2.animations.play('stand', 8, true);
    },
    
    dwarfTalk: function(){
        this.screensGroup.destroy();
        
        this.commander.animations.play('stand', 8, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(302, 110,'immortal', "Indeed, I'm glad the\ntop brass didn't manage\nto get everyone killed.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderTalk,  this);
        var nextText = this.add.bitmapText(237, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    commanderTalk: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "Grr, of course! Well\nit appears Fallkirk is\nin need of help.", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk2,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    dwarfTalk2: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(282, 110,'immortal', "More than you may\nknow. The enemy has\nfielded Shadow Knights.", 35);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.shadowKnightCut,  this);
        var nextText = this.add.bitmapText(237, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    shadowKnightCut: function(){
        this.screensGroup.destroy();
        this.cutGroup = this.add.group();
        
        for(var x = 0; x < 960; x += 50){
            for(var y = 0; y < 540; y += 50){
              var grass = this.cutGroup.create(x,y,'tileSet','grass.png');   
            }
        }
        var texture = this.cutGroup.create(0,0,'tileSet','grass.png');
        texture.width = 960;
        texture.height = 540;
        texture.alpha = 0.5;
        
        var playButton = this.cutGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
        this.cutGroup.add(playText);
        
        var sk = this.cutGroup.create(this.rnd.integerInRange(1050, 1100), 100, 'shadowKnight', 'ShadowKnightAttackWest1.png');
        sk.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(22, 29));
        sk.animations.play('walk', 4,true);
        sk.scale.x *= 4;
        sk.scale.y *= 4;
        sk.alpha = 0.8;
        
        var tween7 = this.add.tween(sk);
        tween7.to({ x: -400 }, this.rnd.integerInRange(8000,9000), 'Linear', true, 0);
        
        var textBacking = this.cutGroup.create(-40, 330, 'menuTile1');
        textBacking.width = 1100;
        textBacking.height = 150;
        
        var text = this.add.bitmapText(30, 350, 'immortal',"These guys are a lot stronger than those weakling\nskeletons. It's going to take a bit more to bring them\ndown. Do you have the strength of numbers?", 35);
        this.cutGroup.add(text);
        
        var nextButton = this.cutGroup.create(this.world.centerX, 40,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk,  this);
        var nextText = this.add.bitmapText(437, 20,'immortal','Next', 40);
        this.cutGroup.add(nextText);

    },
    
    rowanTalk: function(){
        this.cutGroup.destroy();
        
        this.rowan.animations.play('talk', 8, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(540, 210,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(570, 200,'immortal', "Are you kidding?\nThese guys don't even\nhave the strength of\ncommon sense.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 50, 320,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk2,  this);
        var nextText = this.add.bitmapText(487, 300,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk2: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 8, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(540, 210,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(570, 200,'immortal', "If you sober up\nyour troops and join\nus it could help\neveryone survive.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 50, 320,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderTalk2,  this);
        var nextText = this.add.bitmapText(487, 300,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    commanderTalk2: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "Careful Lieutenant,\nI've got all sorts of\ncoin in my purse.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderTalk3,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    commanderTalk3: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "Joining forces could\nbe advantageous to all\nparties involved though.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk3,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    dwarfTalk3: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(282, 110,'immortal', "Keeping your life may\nbe pretty advantageous.\nJoin forces, eh?", 35);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk4,  this);
        var nextText = this.add.bitmapText(237, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    dwarfTalk4: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(282, 110,'immortal', "It may be just enough\nto break the siege\nand get some food\nand decent drink.", 35);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 240,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk5,  this);
        var nextText = this.add.bitmapText(237, 220,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    dwarfTalk5: function(){
        this.screensGroup.destroy();
        
        this.dwarf1.animations.play('walk', 8, true);
        this.dwarf2.animations.play('walk', 8, true);
        this.dwarf1.scale.x *= -1;
        this.dwarf2.scale.x *= -1;
        
        var tween = this.add.tween(this.dwarf1);
        tween.to({ x: 1250 }, 3000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.endScene, this);
        
        var tween2 = this.add.tween(this.dwarf2);
        tween2.to({ x: 1250 }, 3000, 'Linear', true, 0);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 120,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var tween3 = this.add.tween(speechBacking);
        tween3.to({ x: 1250 }, 4000, 'Linear', true, 0);
        
        var text = this.add.bitmapText(282, 110,'immortal', "Get your game face on,\nwe're not playing in\nthe sandbox this time.", 35);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var tween4 = this.add.tween(text);
        tween4.to({ x: 1250 }, 4000, 'Linear', true, 0);
        
        
    },
    
    endScene: function(){
        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
    playLevel:function(){
        this.state.start('LevelGo',true);
    },
    
    update: function(){
        if(this.pauseStart && !game.paused){
            this.pauseStart = false;
            this.buildBackground2();
        }
    }
};