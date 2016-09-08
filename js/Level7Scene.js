Main.Level7Scene = function(game){
    this.rowan;
    this.dwarf;
    this.cavalry;
    this.knight;
    this.mage;
    this.screensGroup;
};

Main.Level7Scene.prototype = {
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
                        var grass = this.add.image(x, y, 'tileSet', 'mud.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture1.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(0,0, 'tileSet', 'mud.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
            
            var treeNumber = game.rnd.integerInRange(15, 30);
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
        
        var house2 = this.add.image(290,-140,'buildings','House.png');
        
        var house3 = this.add.image(600,-40,'buildings','House2.png');
        house3.tint = 0xccff99;
        
        var house = this.add.image(400,50,'buildings','House2.png');
        house.tint = 0xccffcc;
        
        var house5 = this.add.image(780,120,'buildings','House.png');
        house5.tint = 0x99ffdd;
        
        
        var castle = this.add.image(450, 180,'buildings','CastleBuilding.png');
        
        var house4 = this.add.image(700,360,'buildings','House.png');
        house4.tint = 0xaaffff;
        
        var text = this.add.bitmapText(30, 50,'immortal','Battle\nat\nPoloska', 110);
        
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
                        var grass = this.add.image(x, y, 'tileSet', 'mud.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture1.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(0,0, 'tileSet', 'mud.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
            
            var treeNumber = game.rnd.integerInRange(15, 30);
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
        
        this.buildCharacters();
        this.rowanTalk();
    },
    
    buildCharacters: function(){
        this.peopleGroup = this.add.group();
        this.cavalry = this.peopleGroup.create(400, 250, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry.animations.add('stand', [17]);
        this.cavalry.animations.play('stand', 10, true);
        this.cavalry.anchor.setTo(0.5,0.5);
        this.cavalry.scale.x *= -1;
        
        this.dwarf = this.peopleGroup.create(300, 250, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf.animations.add('stand', [0]);
        this.dwarf.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf.animations.play('stand', 10, true);
        this.dwarf.anchor.setTo(0.5, 0.5);
        
        this.knight = this.peopleGroup.create(400,340,'knight', 'KnightAttackEast1.png');
        this.knight.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.knight.animations.add('stand', [0]);
        this.knight.animations.play('stand', 10, true);
        this.knight.anchor.setTo(0.5, 0.5);
        this.knight.scale.x *= -1;
        
        this.rowan = this.peopleGroup.create(300, 340,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.rowan.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(9, 16));
        this.rowan.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(0, 8));
        this.rowan.animations.add('stand', [0]);
        this.rowan.animations.play('stand', 10, true);
        this.rowan.anchor.setTo(0.5, 0.5);
        
        
    },
    
    rowanTalk: function(){
        this.screensGroup = this.add.group();
        this.buildTalk(600, 200, "There are reports of\nstrange things ahead.\nThere must be a shadow\nmage with these attackers.", 30, this.cavalryTalk);
    },
    
    cavalryTalk: function(){
        this.buildTalk(700, 100, "You may be right, someone's\nplaying with magic though\nthey haven't shown themselves...", 30, this.mageGo);
    },
    
    mageGo: function(){
        this.mage = this.peopleGroup.create(140, 300, 'mage', 'MageFacingSouth.png');
        this.mage.anchor.setTo(0.5, 0.5);
        this.mage.animations.add('magic', Phaser.ArrayUtils.numberArrayStep(1, 13));
        this.mage.animations.add('stand', [1]);
        this.mage.animations.play('magic', 10, true);
        
        var mageIn = this.add.sprite(140, 300, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        mageIn.events.onAnimationLoop.add(this.itDied, this);
        
        this.buildTalk(410, 150, "Did someone say\nMAGIC!", 38, this.rowanTalk2);
        
        this.dwarf.scale.x *= -1;
        this.rowan.scale.x *= -1;
    },
    
    rowanTalk2: function(){
        this.mage.animations.play('stand', 10, true);
        this.rowan.animations.play('talk', 10, true);
        this.buildTalk(600, 200, "It's about time you\nshowed up. Where have\nyou been?", 33, this.mageTalk);
    },
    
    mageTalk: function(){
        this.buildTalk(410, 150, "I've been out saving\nlives. I've already led one\ngroup of survivors to\nLife's Gate.", 32, this.mageTalk2);
        this.rowan.animations.play('stand', 10, true);
    },
    
    mageTalk2: function(){
        this.buildTalk(410, 150, "I see you've taken\nan interesting path.\nAt least you made\nit this far.", 32, this.knightTalk);
    },
    
    knightTalk: function(){
        this.buildTalk(700, 200, "Interesting indeed, but\nnow with you here\nthings will be easy!", 33, this.mageTalk3);
    },
    
    mageTalk3: function(){
        this.buildTalk(410, 150, "I wouldn't count on\nthat. The enemy has magic\nof it's own.", 32, this.warpCutScene);
    },
    
    warpCutScene: function(){
        this.cutGroup = this.add.group();
        
        for(var x = 0; x < 960; x += 50){
            for(var y = 0; y < 540; y += 50){
              var grass = this.cutGroup.create(x,y,'tileSet','mud.png');   
            }
        }
        var texture = this.cutGroup.create(0,0,'tileSet','mud.png');
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
        
        var hole = this.cutGroup.getFirstDead(true, 300, 190, 'badMagic', 'BadIn1.png');
        hole.animations.add('warp', Phaser.ArrayUtils.numberArrayStep(34, 37));
        hole.animations.play('warp', 13, true);
        hole.anchor.setTo(0.5, 0.5);
        hole.scale.x *= 2;
        hole.scale.y *= 2;
        hole.alpha = 0.5;
        
        var hole2 = this.cutGroup.getFirstDead(true, 700, 50, 'badMagic', 'BadIn1.png');
        hole2.animations.add('warp', Phaser.ArrayUtils.numberArrayStep(34, 37));
        hole2.animations.play('warp', 15, true);
        hole2.anchor.setTo(0.5, 0.5);
        hole2.scale.x *= -2;
        hole2.scale.y *= 2;
        hole2.alpha = 0.5;
        
        var textBacking = this.cutGroup.create(-40, 330, 'menuTile1');
        textBacking.width = 1100;
        textBacking.height = 150;
        
        var text = this.add.bitmapText(30, 350, 'immortal',"There is much more ahead than just some fog to block your\nsight. The enemy has launched warp portals which will suck\nyou into the abyss! I recommend you try to avoid them...", 30);
        this.cutGroup.add(text);
        
        var nextButton = this.cutGroup.create(this.world.centerX, 40,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.mageTalk4,  this);
        var nextText = this.add.bitmapText(437, 20,'immortal','Next', 40);
        this.cutGroup.add(nextText);
    },
    
    mageTalk4: function(){
        this.cutGroup.destroy();
        this.buildTalk(410, 150, "I will support you in battle\nwith my magic but we must\nclear the enemy surronding\nPoloska before we continue.", 32, this.dwarfTalk);
    },
    
    dwarfTalk: function(){
        this.buildTalk(600, 100, "You don't have to convince\nme to fight, I'm in this\ntill the end!", 33, this.mageTalk5);
        this.dwarf.animations.play('fight',12,true);
    },
    
    mageTalk5: function(){
        this.dwarf.animations.play('stand',12,true);
        this.mage.animations.play('magic',12,true);
        
        this.buildTalk(410, 150, "Excellent, I will see you\non the battlefield then.", 36, this.knightTalk2);
    },
    
    knightTalk2: function(){
        var mageIn = this.add.sprite(140, 300, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        mageIn.events.onAnimationLoop.add(this.endThis, this);
        
        this.mage.kill();
        
        this.buildTalk(700, 200, "Oh, I guess we're walking?", 33, false);
    },
    
    endThis: function(it){
        it.kill();
        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
    
    playLevel: function(){
        this.state.start('LevelGo', true);
    },
    
    update: function(){
        if(this.pauseStart && !game.paused){
            this.pauseStart = false;
            this.buildBackground2();
        }
    },
    
    itDied: function(it){
        it.kill();
    },
    
    buildTalk: function(x, y, message, fontSize, nextScene, flip){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var z = 0;
        
        var speechBacking = this.screensGroup.create(x, y,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        if(flip){
            speechBacking.scale.x *= -1;
            z = 30;
        }
        
        var text = this.add.bitmapText(x + 30 - z, y - 10,'immortal', message, fontSize);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        if(nextScene){
        
        var nextButton = this.screensGroup.create(x, y + 120,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(nextScene,  this);
        var nextText = this.add.bitmapText(x - 43, y + 100,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        }
    }
    

};