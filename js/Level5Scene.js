Main.Level5Scene = function(game){
    this.cavalry1;
    this.cavalry2;
    this.cavalry3;
    this.rowan;
    this.commander;
    this.dwarf;
    this.screensGroup;
};

Main.Level5Scene.prototype = {
    create: function(){
        game.paused = true;
        this.pauseStart = true;
        this.input.onDown.addOnce(this.unpause, self);
        this.buildBackground();
    },
    
    unpause: function(){
        game.paused = false;
    },
    
    buildBackground: function(){
        for(var x = 0; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'grass.png');
                    }
                    if(pickMe >= 48){
                        var grass = this.add.image(x, y, 'tileSet', 'grassWithSoil.png');
                    }
                }
            }

            var texture = this.add.image(0,0, 'tileSet', 'grass.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;

            var treeNumber = 40;
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
        
        var castle = this.add.image(350, -180,'buildings','CastleBuilding.png');
        
        var house3 = this.add.image(600,-40,'buildings','House.png');
        house3.tint = 0xffff99;
        
        var house = this.add.image(400,50,'buildings','House.png');
        house.tint = 0xcccccc;
        
        var house5 = this.add.image(780,120,'buildings','House.png');
        house5.tint = 0xccffaa;
        
        var house2 = this.add.image(540,240,'buildings','House2.png');
        
        var house4 = this.add.image(700,360,'buildings','House2.png');
        house4.tint = 0xaaffff;
        
        var text = this.add.bitmapText(30,50,'immortal','Battle\nat\nTidespeek', 110);
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.buildBackground2,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
    },
    
    buildBackground2: function(){
        for(var x = 0; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'grass.png');
                    }
                    if(pickMe >= 48){
                        var grass = this.add.image(x, y, 'tileSet', 'grassWithSoil.png');
                    }
                }
            }

            var texture = this.add.image(0,0, 'tileSet', 'grass.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;

            var treeNumber = 40;
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
        
        this.dwarf = this.add.sprite(300, 220, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf.animations.add('stand', [0]);
        this.dwarf.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf.animations.play('stand', 8, true);
        this.dwarf.anchor.setTo(0.5, 0.5);
        
        this.commander = this.add.sprite(300, 300,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.commander.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(51, 58));
        this.commander.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(43, 50));
        this.commander.animations.add('stand', [43]);
        this.commander.animations.play('stand', 10, true);
        this.commander.anchor.setTo(0.5,0.5);
        
        this.rowan = this.add.sprite(300, 370,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.rowan.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(9, 16));
        this.rowan.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(0, 8));
        this.rowan.animations.add('stand', [0]);
        this.rowan.animations.play('stand', 8, true);
        this.rowan.anchor.setTo(0.5, 0.5);
        
        
        this.cavalry1 = this.add.sprite(1150, 240, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry1.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry1.animations.add('stand', [17]);
        this.cavalry1.animations.play('walk', 10, true);
        this.cavalry1.anchor.setTo(0.5,0.5);
        this.cavalry1.scale.x *= -1;
        
        var tween = this.add.tween(this.cavalry1);
        tween.to({ x: 600 }, 1000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.cavalryTalk, this);
        
        this.cavalry2 = this.add.sprite(1100, 300, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry2.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry2.animations.add('stand', [17]);
        this.cavalry2.animations.play('walk', 10, true);
        this.cavalry2.anchor.setTo(0.5,0.5);
        this.cavalry2.scale.x *= -1;
        
        var tween2 = this.add.tween(this.cavalry2);
        tween2.to({ x: 550 }, 1000, 'Linear', true, 0);
        
        this.cavalry3 = this.add.sprite(1150, 360, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry3.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry3.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry3.animations.add('stand', [17]);
        this.cavalry3.animations.play('walk', 10, true);
        this.cavalry3.anchor.setTo(0.5,0.5);
        this.cavalry3.scale.x *= -1;
        
        var tween3 = this.add.tween(this.cavalry3);
        tween3.to({ x: 600 }, 1000, 'Linear', true, 0);
    },
    
    cavalryTalk: function(){
        this.cavalry1.animations.play('stand', 10, true);
        this.cavalry2.animations.play('bow', 10, true);
        this.cavalry2.events.onAnimationLoop.addOnce(this.stopCavalryBow, this);
        this.cavalry3.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(295, 150,'immortal', "Greetings travelers!\nOr is it refugees?\nEither way, the path to\nTidespeek is not safe.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderTalk,  this);
        var nextText = this.add.bitmapText(237, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);  
    },
    
    commanderTalk: function(){
        this.screensGroup.destroy();
        
        this.commander.animations.play('talk', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "Well that's part of\nthe reason we're here.\nWe've come to rescue\nyou!", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk: function(){
        this.screensGroup.destroy();
        
        this.commander.animations.play('stand', 10, true);
        this.rowan.animations.play('talk', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 240,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 230,'immortal', "Right, and the other\npart is our city is now\na pile of rubble.", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 360,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.cavalryTalk2,  this);
        var nextText = this.add.bitmapText(537, 340,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    cavalryTalk2: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(295, 150,'immortal', "You've come from\nWestfall? So you are\nindeed refugees.", 37);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk,  this);
        var nextText = this.add.bitmapText(237, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);  
    },
    
    dwarfTalk: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 100,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 90,'immortal', "We could also be saviors.\nThe enemy we face is\nstrong. We must stand\nunited to defeat them.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 220,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.cavalryTalk3,  this);
        var nextText = this.add.bitmapText(537, 200,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    cavalryTalk3: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(290, 150,'immortal', "The enemy we face is also\nswift. Orcs have come out\nfrom all angles to attack.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.orcCutScene,  this);
        var nextText = this.add.bitmapText(237, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);  
    },
    
    orcCutScene: function(){
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
        
        var sk = this.cutGroup.create(this.rnd.integerInRange(1050, 1100), 100, 'orc', 'OrcAttackWest1.png');
        sk.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(26, 33));
        sk.animations.play('walk', 4,true);
        sk.scale.x *= 3;
        sk.scale.y *= 3;

        
        var tween7 = this.add.tween(sk);
        tween7.to({ x: this.rnd.integerInRange(sk.x - 50, sk.x - 100), y: this.rnd.integerInRange(sk.y + 50, sk.y - 50) }, this.rnd.integerInRange(300,600), 'Linear', true, 0);
        tween7.onComplete.addOnce(this.loopOrc, this);
        
        var textBacking = this.cutGroup.create(-40, 330, 'menuTile1');
        textBacking.width = 1100;
        textBacking.height = 150;
        
        var text = this.add.bitmapText(30, 350, 'immortal',"These orcs are fast and change directions in\nunexpected ways, very dangerous for standing archers.\nYou will need our help to clear the field.", 35);
        this.cutGroup.add(text);
        
        var nextButton = this.cutGroup.create(this.world.centerX, 40,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk2,  this);
        var nextText = this.add.bitmapText(437, 20,'immortal','Next', 40);
        this.cutGroup.add(nextText);
    },
    
    dwarfTalk2: function(){
        this.screensGroup.destroy();
        this.cutGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 100,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 90,'immortal', "What? You pony boys\nwon't charge a shield\nwall?", 38);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 220,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.cavalryTalk4,  this);
        var nextText = this.add.bitmapText(537, 200,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    cavalryTalk4: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(275, 150,'immortal', "We'll clear out the attackers.\nYou grunts will still have to\ntake out the enemy defenders.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.cavalryTalk5,  this);
        var nextText = this.add.bitmapText(237, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);  
    },
    
    cavalryTalk5: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(290, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(275, 150,'immortal', "We can't hurt barricades\nor attack their defenders.\nThat's what you grunts\nare for.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 200, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk2,  this);
        var nextText = this.add.bitmapText(237, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);  
    },
    
    rowanTalk2: function(){
        this.screensGroup.destroy();
        
        this.commander.animations.play('stand', 10, true);
        this.rowan.animations.play('talk', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 240,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 230,'immortal', "Alright! They clear the field,\narchers establish control and\nthe grunts do the leg work.", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 360,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk3,  this);
        var nextText = this.add.bitmapText(537, 340,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk3: function(){
        this.screensGroup.destroy();
        
        this.commander.animations.play('stand', 10, true);
        this.rowan.animations.play('talk', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(590, 240,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 230,'immortal', "Let's do this\nboys and girls!", 40);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 360,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.endScene,  this);
        var nextText = this.add.bitmapText(537, 340,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    endScene: function(){
        this.screensGroup.destroy();
        
        this.commander.animations.play('walk', 10, true);
        this.rowan.animations.play('walk', 10, true);
        this.dwarf.animations.play('walk', 10, true);
        this.cavalry1.animations.play('walk', 10, true);
        this.cavalry2.animations.play('walk', 10, true);
        this.cavalry3.animations.play('walk', 10, true);
        
        this.cavalry1.scale.x *= -1;
        this.cavalry2.scale.x *= -1;
        this.cavalry3.scale.x *= -1;
        
        var tween = this.add.tween(this.cavalry1);
        tween.to({ x: 1550 }, 2000, 'Linear', true, 0);
        
        var tween1 = this.add.tween(this.cavalry2);
        tween1.to({ x: 1550 }, 2000, 'Linear', true, 0);
        
        var tween2 = this.add.tween(this.cavalry3);
        tween2.to({ x: 1550 }, 2000, 'Linear', true, 0);
        
        var tween3 = this.add.tween(this.rowan);
        tween3.to({ x: 1550 }, 5000, 'Linear', true, 0);
        
        var tween4 = this.add.tween(this.commander);
        tween4.to({ x: 1550 }, 5000, 'Linear', true, 0);
        
        var tween5 = this.add.tween(this.dwarf);
        tween5.to({ x: 1550 }, 5000, 'Linear', true, 0);
        
        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
    playLevel: function(){
        this.state.start('LevelGo', true);
    },
    
    stopCavalryBow: function(){
        this.cavalry2.animations.play('stand', 10, true);
    },
    
    loopOrc: function(sk){
        var tween7 = this.add.tween(sk);
        tween7.to({ x: this.rnd.integerInRange(sk.x - 50, sk.x - 100), y: this.rnd.integerInRange(sk.y + 20, sk.y - 20) }, this.rnd.integerInRange(200,400), 'Linear', true, 0);
        tween7.onComplete.addOnce(this.loopOrc, this);
    },
    
    update: function(){
        if(this.pauseStart && !game.paused){
            this.pauseStart = false;
            this.buildBackground2();
        }
    }

};