Main.StoryScenes = function(game){
    this.peopleGroup;
    this.screensGroups;
};

Main.StoryScenes.prototype = {
    create: function(){
        if(Main.currentLevel <= 15 || Main.defenseContract){
            game.paused = true;
            this.pauseStart = true;
            this.input.onDown.addOnce(this.unpause, self);
        }
        
        this.multiScreen = false;
        this.buildBackground();
        this.fallGroup = this.add.group();
        this.peopleGroup = this.add.group();
        this.dragonGroup = this.add.group();
        this.screensGroup = this.add.group();
        
        
        if(Main.currentLevel === 8){
            this.levelPrompt8();
        }
        if(Main.currentLevel === 9){
            this.levelPrompt9();
        }
        if(Main.currentLevel === 10){
            this.level10Scene1();
        }
        if(Main.currentLevel === 11){
            this.level11Scene1();
        }
        if(Main.currentLevel === 12){
            
            this.level12Scene1();
        }
        if(Main.currentLevel === 13){
            
            this.levelPrompt13();
        }
        if(Main.currentLevel === 14){
            
            this.levelPrompt14();
        }
        if(Main.currentLevel === 15){
            this.level15Scene1();
        }
        if(Main.currentLevel === 16){
            this.buildAllCharacters();
            this.finalScene1();
        }
    },
    
    unpause: function(){
        game.paused = false;
    },
    
    buildAllCharacters: function(){
        this.commander = this.peopleGroup.create(-200, -100,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.commander.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(51, 58));
        this.commander.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(43, 50));
        this.commander.animations.add('stand', [43]);
        this.commander.animations.play('walk', 14, true);
        this.commander.anchor.setTo(0.5,0.5);
        
        this.scout = this.peopleGroup.create(-100, -100,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.scout.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(75, 82));
        this.scout.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(66, 74));
        this.scout.animations.add('bow', [59,60,61,62,63,64,65,64,63,62,61,60]);
        this.scout.animations.add('stand', [66]);
        this.scout.animations.play('walk', 14, true);
        this.scout.anchor.setTo(0.5,0.5);
        
        this.greySoldier1 = this.peopleGroup.create(-300, -200,'knight', 'KnightAttackEast1.png');
        this.greySoldier1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.greySoldier1.animations.add('stand', [0]);
        this.greySoldier1.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 11));
        this.greySoldier1.animations.play('walk', 14, true);
        this.greySoldier1.anchor.setTo(0.5, 0.5);
        
        this.greySoldier2 = this.peopleGroup.create(-300, -270,'knight', 'KnightAttackEast1.png');
        this.greySoldier2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.greySoldier2.animations.add('stand', [0]);
        this.greySoldier2.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 11));
        this.greySoldier2.animations.play('walk', 14, true);
        this.greySoldier2.anchor.setTo(0.5, 0.5);
        
        this.rowan = this.peopleGroup.create(-100, -250,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.rowan.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(9, 16));
        this.rowan.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(0, 8));
        this.rowan.animations.add('stand', [0]);
        this.rowan.animations.play('walk', 8, true);
        this.rowan.anchor.setTo(0.5, 0.5);
        
        this.archer = this.peopleGroup.create(-100, -380, 'archer', 'ArcherFallingEast1.png');
        this.archer.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(36, 43));
        this.archer.animations.add('stand', Phaser.ArrayUtils.numberArrayStep(13, 21));
        this.archer.animations.add('fire', [28,29,30,31,32,33,34,22,23,24,25,26,27]);
        this.archer.animations.play('walk', 8, true);
        this.archer.anchor.setTo(0.5, 0.5);
        
        this.dwarf1 = this.peopleGroup.create(-100, -220, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf1.animations.add('stand', [0]);
        this.dwarf1.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf1.animations.play('walk', 8, true);
        this.dwarf1.anchor.setTo(0.5, 0.5);
        
        this.dwarf2 = this.peopleGroup.create(-100, -220, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf2.animations.add('stand', [0]);
        this.dwarf2.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf2.animations.play('walk', 8, true);
        this.dwarf2.anchor.setTo(0.5, 0.5);
        
        this.cavalry1 = this.peopleGroup.create(-150, -240, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry1.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry1.animations.add('stand', [17]);
        this.cavalry1.animations.play('walk', 10, true);
        this.cavalry1.anchor.setTo(0.5,0.5);
        
        this.cavalry2 = this.peopleGroup.create(-150, -240, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry2.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry2.animations.add('stand', [17]);
        this.cavalry2.animations.play('walk', 10, true);
        this.cavalry2.anchor.setTo(0.5,0.5);
        
        this.cavalry3 = this.peopleGroup.create(-150, -240, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry3.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry3.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry3.animations.add('stand', [17]);
        this.cavalry3.animations.play('walk', 10, true);
        this.cavalry3.anchor.setTo(0.5,0.5);
        
        this.goodMage = this.peopleGroup.create(-140, -300, 'mage', 'MageFacingSouth.png');
        this.goodMage.animations.add('magic', Phaser.ArrayUtils.numberArrayStep(1, 13));
        this.goodMage.animations.add('stand', [1]);
        this.goodMage.animations.play('magic', 10, true);
        this.goodMage.anchor.setTo(0.5, 0.5);
        
        /*
        var mageIn = this.add.sprite(-140, -300, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        */
        
        this.redKnight1 = this.peopleGroup.create(-310, -300, 'redKnight', 'RedKnight2Attack01.png');
        this.redKnight1.animations.add('stand', [0]);
        this.redKnight1.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.redKnight1.animations.play('stand', 24, true);
        
        this.redKnight2 = this.peopleGroup.create(-310, -300, 'redKnight', 'RedKnight2Attack01.png');
        this.redKnight2.animations.add('stand', [0]);
        this.redKnight2.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.redKnight2.animations.play('stand', 24, true);
    },
    
    levelPrompt8: function(){
        this.buildLevelPrompt(this.level8Scene1);
    },
    levelPrompt9: function(){
        this.buildLevelPrompt(this.level9Scene1);
    },
    levelPrompt13: function(){
        this.buildLevelPrompt(this.level13Scene1);
    },
    levelPrompt14: function(){
        this.buildLevelPrompt(this.level14Scene1);
    },
    
/*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 8 SCENE !!!!!!!!!!!!!!!!!!!!! */    
    
    
    level8Scene1: function(){
        this.buildAllCharacters();
        this.textGroup.destroy();
        this.goodMage.x = 210;
        this.goodMage.y = 260;
        this.goodMage.animations.play('stand', 10, true);
        
        this.cavalry1.x = 530;
        this.cavalry1.y = 100;
        this.cavalry1.scale.x *= -1;
        this.cavalry1.animations.play('stand', 10, true);
        
        this.cavalry2.x = 530;
        this.cavalry2.y = 400;
        this.cavalry2.scale.x *= -1;
        this.cavalry2.animations.play('stand', 10, true);
        
        this.greySoldier1.x = 490;
        this.greySoldier1.y = 300;
        this.greySoldier1.scale.x *= -1;
        this.greySoldier1.animations.play('stand', 10, true);
        
        this.greySoldier2.x = 490;
        this.greySoldier2.y = 200;
        this.greySoldier2.scale.x *= -1;
        this.greySoldier2.animations.play('stand', 10, true);
        
        this.archer.x = 530;
        this.archer.y = 250;
        this.archer.scale.x *= -1;
        this.archer.animations.play('stand', 10, true);
        
        this.rowan.x = 420;
        this.rowan.y = 220;
        this.rowan.scale.x *= -1;
        this.rowan.animations.play('stand', 10, true);
        
        this.dwarf1.x = 420;
        this.dwarf1.y = 280;
        this.dwarf1.scale.x *= -1;
        this.dwarf1.animations.play('stand', 10, true);
        
        this.redKnight1.x = 590;
        this.redKnight1.y = 140;
        this.redKnight1.scale.x *= -1;
        this.redKnight1.animations.play('stand', 10, true);
        
        this.redKnight2.x = 590;
        this.redKnight2.y = 310;
        this.redKnight2.scale.x *= -1;
        this.redKnight2.animations.play('stand', 10, true);
        
        this.buildTalk(500,130,'We have broken the siege\nat the gates, and secured\nthe town but there is\nstill much to do.', 34, this.level8Scene2);
        
    },
    
    level8Scene2:function(){
        this.buildTalk(500,130,'However, before we continue\nthere are some issues\nwhich must be discussed.', 34, this.level8Scene3);
    },
    
    level8Scene3:function(){
        this.buildTalk(500,130,'Before I left Westfall I\ncame upon one with the\ntounge of the dragon and\ntasked them with leading\nyour group.', 33, this.level8Scene4, false, false, 280);
    },
    
    level8Scene4:function(){
        this.buildTalk(500,130,'I did this because\nI beleive the commander\nhas betrayed us to the\nenemy.', 33, this.level8Scene5);
    },
    
    level8Scene5:function(){
        this.buildTalk(270, 230,'And what proof do you\nhave to support such a\nclaim?', 36, this.level8Scene6, true);
    },
    
    level8Scene6:function(){
        this.buildTalk(500,130,'My proof is the rubble of\nWestfall.  The wall would\nhave held if the southern\nsection had been repaired.', 33, this.level8Scene7);
    },
    
    level8Scene7:function(){
        this.buildTalk(500,130,"Who continually postponed\nthose repairs? It wasn't me.\nIt was the commander.", 33, this.level8Scene8);
    },
    
    level8Scene8:function(){
        this.buildTalk(500,130,"It doesn't take magic\nto figure this out!", 37, this.level8Scene9);
        this.goodMage.animations.play('magic', 10, true);
        
        var tween2 = this.add.tween(this.rowan);
        tween2.to({ x: 210 }, 1000, 'Linear', true, 0);
        tween2.onComplete.addOnce(this.rowanStand, this);
        this.rowan.animations.play('walk', 10, true);
    },
    
    level8Scene9:function(){
        this.goodMage.animations.play('stand', 10, true);
        this.rowan.animations.play('talk', 10, true);
        this.rowan.scale.x *= -1;
        this.buildTalk(500,100,"He's right, we've been\nbetrayed. If not outright than\nthrough incompentence.", 34, this.level8Scene10);
    },
    
    level8Scene10:function(){
        this.rowan.animations.play('stand', 10, true);
        this.buildTalk(500,100,"Where is the commander?\nHe should answer for these\ncharges.", 34, this.level8Scene11);
    },
    
    level8Scene11:function(){
        this.buildTalk(500,130,"Oh he ran away when I\nshowed up again. I just\nwanted to let everyone know\nwhat's going on.", 33, this.level8Scene12);
    },
    
    level8Scene12:function(){
        this.buildTalk(720,160,"Then we must\nhunt him down!", 44, this.level8Scene13);
        this.dwarf1.animations.play('fight', 10, true);
    },
    
    level8Scene13:function(){
        this.dwarf1.animations.play('stand', 10, true);
        this.buildTalk(270, 230,'The desert was\npretty bad... maybe\nwe should find him.', 36, this.level8Scene14, true);
    },
    
    level8Scene14:function(){
        this.buildTalk(500,130,"There are more important\nmatters at hand. We must\nclear the enemy north\nof Poloska.", 33, this.level8Scene15);
    },
    
    level8Scene15:function(){
        this.buildTalk(500,130,"We cannot let the\nnorthen reach be raided\nand burned!", 40, false);
        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
/*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 9 SCENE !!!!!!!!!!!!!!!!!!!!! */    
    
    
    level9Scene1: function(){
        this.buildAllCharacters();
        this.textGroup.destroy();
        this.greySoldier2.x = 380;
        this.greySoldier2.y = 280;
//        this.greySoldier2.scale.x *= -1;
        this.greySoldier2.animations.play('stand', 10, true);
        
        this.archer.x = 550;
        this.archer.y = 260;
        this.archer.scale.x *= -1;
        this.archer.animations.play('stand', 10, true);
        
        this.dwarf1.x = 550;
        this.dwarf1.y = 340;
        this.dwarf1.scale.x *= -1;
        this.dwarf1.animations.play('stand', 10, true);
        
        this.buildTalk(670,150,"Great, so the commander\nled us through the desert\nnow this mage is taking\nus through the snow.\nWhich is worse?", 33, this.level9Scene2);
    },
    
    level9Scene2: function(){
        this.buildTalk(240, 130,"Well at least this time\nwe have a purpose.\nLast time we were just\nrunning the wrong way.", 33, this.level9Scene3, true);
    },
    
    level9Scene3: function(){
        this.buildTalk(670,150,"True but those ice\nbarriers are tough!\nI think it's time\nwe start heading home.", 33, this.level9Scene4);
    },
    
    level9Scene4: function(){
        this.buildTalk(240, 130,"And what home might\nthat be? Remember that\nWestfall is in ruins...", 33, this.level9Scene5, true);
    },
    
    level9Scene5: function(){
        this.buildTalk(670,150,"We'll make a new home\nat Life's Gate until\nwe have the strength to\ntake back Westfall.", 33, this.level9Scene6);
    },
    
    level9Scene6: function(){
        this.buildTalk(240, 220,"We must stop the spread\nbefore we attack the source.\nIt has been a long journey\nbut there is still more we\nmust do.", 33, this.level9Scene7, true);
    },
    
    level9Scene7: function(){
        this.buildTalk(670,150,"You may be right.\nAll roads will lead us\nhome in death or life.", 33, this.level9Scene8);
    },
    
    level9Scene8: function(){
        var smoke = this.add.sprite(780, 270, 'smoke', 'blackSmoke00.png');
        smoke.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(0, 14));
        smoke.animations.play('walk', 15, true);
        smoke.alpha = 0.5;
        smoke.width = 600;
        smoke.height = 300;
        smoke.anchor.setTo(0.5, 0.5);
        
        var smoke = this.add.sprite(280, 110, 'smoke', 'blackSmoke00.png');
        smoke.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(0, 14));
        smoke.animations.play('walk', 15, true);
        smoke.alpha = 0.5;
        smoke.width = 600;
        smoke.height = 300;
        smoke.anchor.setTo(0.5, 0.5);
        
        this.screensGroup.destroy();
        
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(590, 20, 'menuTile1');
        backing.height = 200;
        backing.width = 370;
        var text = this.add.bitmapText(620, 50, 'immortal', "The road will be\ncovered in shadow\n(Ominous Voice)", 36);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(770, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
        nextButton.events.onInputDown.add(this.level9Scene9,  this);
        var nextText = this.add.bitmapText(725, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
        
    },
    
    level9Scene9: function(){
        this.buildTalk(670,150,"You know I've heard\nteleporting can be\na great way to travel...", 33, false);
        
        var fightText = this.add.bitmapText(150, 180, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
/*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 10 SCENE !!!!!!!!!!!!!!!!!!!!! */        
    
    level10Scene1: function(){
        this.buildingGroup = this.add.group();
        
        var castle = this.buildingGroup.create(350, -180,'buildings','CastleBuilding.png');
        
        var house3 = this.buildingGroup.create(600,-40,'buildings','House.png');
        house3.tint = 0xffff99;
        
        var house = this.buildingGroup.create(400,50,'buildings','House.png');
        house.tint = 0xcccccc;
        
        var house5 = this.buildingGroup.create(780,120,'buildings','House.png');
        house5.tint = 0xccffaa;
        
        var house2 = this.buildingGroup.create(540,240,'buildings','House2.png');
        
        var house4 = this.buildingGroup.create(700,360,'buildings','House2.png');
        house4.tint = 0xaaffff;
        
        var text = this.add.bitmapText(30,50,'immortal','Battle\nat\nCincitus', 110); 
        this.buildingGroup.add(text);
        
        var playButton = this.buildingGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.level10Scene2,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
        this.buildingGroup.add(playText);
    },
    
    level10Scene2: function(){
        this.buildAllCharacters();
        this.buildingGroup.destroy();
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
        playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
        
        this.goodMage.x = 310;
        this.goodMage.y = 280;
        this.goodMage.animations.play('stand', 10, true);
        
        this.rowan.x = 560;
        this.rowan.y = 280;
        this.rowan.scale.x *= -1;
        this.rowan.animations.play('stand', 10, true);
        
        this.buildTalk(610,130,"The road ahead will be\ndifficult. The shadow mage's\nstrength is growing and I\ncan feel him getting closer.", 33, this.level10Scene3);
    },
    
    level10Scene3: function(){
        this.buildTalk(270, 130,"Let him get closer.\nOur soldiers and dragons\ngrow stronger with each\nbattle. We can face him.", 33, this.level10Scene4, true);
        this.rowan.animations.play('talk', 10, true);
    },
    
    level10Scene4: function(){
        this.rowan.animations.play('stand', 10, true);
        this.buildTalk(610,130,"Maybe so but I fear\nthere are bigger dragons\nand stronger magic that\nwill soon come against\nus.", 33, this.level10Scene5);
    },
    
    level10Scene5: function(){
        this.buildTalk(270, 130,"I've heard stories of\nlarge dragons sweeping\naway entire armies. How\nlong until our dragons\ngrow that large?", 33, this.level10Scene6, true);
    },
    
    level10Scene6: function(){
        this.buildTalk(610,130,"Not soon enough.\nUpgrade your troops wisely.\nThis battle is only\na precursor of what's\nto come.", 33, this.level10Scene7);
    },
    
    level10Scene7: function(){
        
        var mageIn = this.add.sprite(this.goodMage.x, this.goodMage.y, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        mageIn.events.onAnimationLoop.add(this.itDied, this);
        
        this.goodMage.x = -100;
        this.goodMage.y = -100;
        
        var fightText = this.add.bitmapText(150, 180, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
        
        this.screensGroup.destroy();
    },
    
/*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 11 SCENE !!!!!!!!!!!!!!!!!!!!! */    
    
    level11Scene1: function(){
        
        this.buildingGroup = this.add.group();
        
        var house3 = this.buildingGroup.create(600,-40,'buildings','House.png');
        house3.tint = 0xffff99;
        house3.anchor.setTo(0.5,0.5);
        
        var house6 = this.buildingGroup.create(880, 0,'buildings','House2.png');
        house6.anchor.setTo(0.5,0.5);
        
        var castle = this.buildingGroup.create(650, 80,'buildings','CastleBuilding.png');
        castle.anchor.setTo(0.5,0.5);
        
        var house = this.buildingGroup.create(400,50,'buildings','House.png');
        house.tint = 0xcccccc;
        house.anchor.setTo(0.5,0.5);
        
        var house5 = this.buildingGroup.create(860,210,'buildings','House.png');
        house5.tint = 0xccffaa;
        house5.anchor.setTo(0.5,0.5);
        
        var house2 = this.buildingGroup.create(480,240,'buildings','House2.png');
        house2.anchor.setTo(0.5,0.5);
        
        var house4 = this.buildingGroup.create(700,360,'buildings','House2.png');
        house4.tint = 0xaaffff;
        house4.anchor.setTo(0.5,0.5);
        
        var text = this.add.bitmapText(30,50,'immortal','Battle\nat\nMosbeth', 110); 
        this.buildingGroup.add(text);
        
        var playButton = this.buildingGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.level11Scene2,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
        this.buildingGroup.add(playText);
    },
    
    level11Scene2: function(){
        this.buildAllCharacters();
        this.buildingGroup.destroy();
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
        playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
        
        this.goodMage.x = 310;
        this.goodMage.y = 260;
        this.goodMage.animations.play('stand', 10, true);
        
        this.rowan.x = 310;
        this.rowan.y = 360;
        this.rowan.animations.play('stand', 10, true);
        
        this.cavalry1.x = 530;
        this.cavalry1.y = 100;
        this.cavalry1.scale.x *= -1;
        this.cavalry1.animations.play('stand', 10, true);
        
        this.cavalry2.x = 530;
        this.cavalry2.y = 400;
        this.cavalry2.scale.x *= -1;
        this.cavalry2.animations.play('stand', 10, true);
        
        this.greySoldier1.x = 490;
        this.greySoldier1.y = 300;
        this.greySoldier1.scale.x *= -1;
        this.greySoldier1.animations.play('stand', 10, true);
        
        this.greySoldier2.x = 490;
        this.greySoldier2.y = 200;
        this.greySoldier2.scale.x *= -1;
        this.greySoldier2.animations.play('stand', 10, true);
        
        this.archer.x = 530;
        this.archer.y = 250;
        this.archer.scale.x *= -1;
        this.archer.animations.play('stand', 10, true);
        
        this.dwarf1.x = 420;
        this.dwarf1.y = 280;
        this.dwarf1.scale.x *= -1;
        this.dwarf1.animations.play('stand', 10, true);
        
        this.redKnight1.x = 590;
        this.redKnight1.y = 140;
        this.redKnight1.scale.x *= -1;
        this.redKnight1.animations.play('stand', 10, true);
        
        this.redKnight2.x = 590;
        this.redKnight2.y = 310;
        this.redKnight2.scale.x *= -1;
        this.redKnight2.animations.play('stand', 10, true);
        
        this.buildTalk(610,130,"Our victory has given us\nstrength. The strong must\nprotect the innocent.", 33, this.level11Scene3);
    },
    
    level11Scene3: function(){
        this.buildTalk(610,130,"The town of Mosbeth\nis under siege. We\ncannot let them starve\nand die.", 33, this.level11Scene4);
    },
    
    level11Scene4: function(){
        this.buildTalk(610,210,"We must take out the\nenemy wherever they may\nbe. We cannot run away\nand let another town fall.", 33, this.level11Scene5);
        this.rowan.animations.play('talk', 10, true);
    },
    
    level11Scene5: function(){
        
        var redDragon = this.dragonGroup.create(-150, 150, 'redDragon', 'Fire1.png');
        redDragon.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(12, 20));
        redDragon.animations.play('flyEast', 8, true);
        redDragon.tint = 0xffccff;
        
        var tween = this.add.tween(redDragon);
        tween.to({ x: 180 }, 1500, 'Linear', true, 0);
        
        var goldDragon = this.dragonGroup.create(-150, 260, 'goldDragon', 'DragonAttackEnd01.png');
        goldDragon.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(18, 26));
        goldDragon.animations.play('flyEast', 8, true);
        goldDragon.tint = 0xccffff;
        
        var tween = this.add.tween(goldDragon);
        tween.to({ x: 110 }, 1800, 'Linear', true, 0);
        
        var blueDragon = this.dragonGroup.create(-150, 370, 'blueDragon', 'BlueDragonFlyEast01.png');
        blueDragon.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(0, 8));
        blueDragon.animations.play('flyEast', 8, true);
        
        var tween = this.add.tween(blueDragon);
        tween.to({ x: 160 }, 1300, 'Linear', true, 0);
        
        this.buildTalk(610,210,"We are strong and\ngetting stronger. Let us\nshow the enemy our\nstrength.", 33, this.level11Scene6);
    },
    
    level11Scene6: function() {
        this.buildTalk(390, 90,"Horay!", 37, false, true,200,200);
        this.multiScreen = true;
        this.buildTalk(700, 230,"Freedom!", 37, false, false, 250, 200);
        this.goodMage.animations.play('magic', 10, true);
        this.cavalry1.animations.play('bow', 10, true);
        this.cavalry2.animations.play('bow', 11, true);
        this.greySoldier1.animations.play('fight', 11, true);
        this.greySoldier2.animations.play('fight', 10, true);
        this.archer.animations.play('fire', 10, true);
        this.dwarf1.animations.play('fight', 10, true);
        this.redKnight1.animations.play('fight', 10, true);
        this.redKnight2.animations.play('fight', 10, true);
        
        var fightText = this.add.bitmapText(150, 180, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
        
    },
    
 /*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 12 SCENE !!!!!!!!!!!!!!!!!!!!! */       
    
    level12Scene1: function(){
        
        this.buildingGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal','Battle of the Beach', 90);
        text.anchor.setTo(0.5,0.5);
        this.buildingGroup.add(text);
        
        var playButton = this.buildingGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.level12Scene2,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
        this.buildingGroup.add(playText);
    },
    
    level12Scene2: function(){
        this.buildAllCharacters();
        this.buildingGroup.destroy();
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
        playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
        
        this.goodMage.x = 310;
        this.goodMage.y = 260;
        this.goodMage.animations.play('stand', 10, true);
        
        this.rowan.x = 310;
        this.rowan.y = 360;
        this.rowan.animations.play('stand', 10, true);
        
        this.cavalry1.x = 360;
        this.cavalry1.y = 100;
        this.cavalry1.animations.play('stand', 10, true);

        this.greySoldier1.x = 270;
        this.greySoldier1.y = 390;
        this.greySoldier1.animations.play('stand', 10, true);
        
        this.archer.x = 270;
        this.archer.y = 250;
        this.archer.animations.play('stand', 10, true);
        
        this.dwarf1.x = 270;
        this.dwarf1.y = 320;
        this.dwarf1.animations.play('stand', 10, true);
        
        this.redKnight1.x = 270;
        this.redKnight1.y = 140;
        this.redKnight1.animations.play('stand', 10, true);
        
        this.scout.x = 1300;
        this.scout.y = 310;
        this.scout.scale.x *= -1;
        this.scout.animations.play('walk', 10, true);
        
        var tween = this.add.tween(this.scout);
        tween.to({ x: 450 }, 1500, 'Linear', true, 0);
        tween.onComplete.addOnce(this.scoutStand, this);
        
        this.buildTalk(610,130,"We have liberated Mosbeth\nfrom the enemy. Now we\nmust press on to\nLife's Gate.", 33, this.level12Scene3);
    },
    
    level12Scene3: function(){
        this.scout.animations.play('talk', 10, true);
        
        this.buildTalk(760,170,"Reports are coming\nin of a large enemy\nforce ahead!", 33, this.level12Scene4);
    },
    
    level12Scene4: function(){
        this.buildTalk(760,170,"Life's Gate is under\nsiege and the enemy\nis using the beach\nahead as a landing\narea.", 33, this.level12Scene5);
    },
    
    level12Scene5: function(){
        this.buildTalk(610,220,"We must cut off\ntheir ability to gain more\nreinforcements for their\nattack. The beach must\nbe cleared!", 33, this.level12Scene6);
        
        this.scout.animations.play('stand', 10, true);
        this.rowan.animations.play('talk', 10, true);
    },
    
    level12Scene6: function(){
        this.rowan.animations.play('stand', 10, true);
        this.buildTalk(760,170,"There's something else...\nA shadow mage is\nthere. I saw him\nmyself...", 33, this.level12Scene7);
    },
    
    level12Scene7: function(){
        this.peopleGroup.destroy();
        this.buildBackground();
        
        this.peopleGroup = this.add.group();
        
        this.cutGroup = this.add.group();
        
        var textBacking = this.cutGroup.create(-40, 330, 'menuTile1');
        textBacking.width = 1100;
        textBacking.height = 150;
        
        var text = this.add.bitmapText(30, 340, 'immortal',"The strength of the enemey swells as their numbers\ngrow. There is ancient magic in this shadow mage.\nWe have yet to see his true strength...", 35);
        this.cutGroup.add(text);
        
        for(var n = 0; n < 15; n++){
            var skeleton = this.peopleGroup.create(this.rnd.integerInRange(-100, 0), this.rnd.integerInRange(0, 510), 'skeleton', 'SkeletonAttackWest1');
            skeleton.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(19, 27));
            skeleton.animations.play('walk', game.rnd.integerInRange(12, 16), true);
            skeleton.scale.x *= -1;
            skeleton.anchor.setTo(0.5,0.5);
            
            var tween = this.add.tween(skeleton);
            tween.to({ x: 1100 }, this.rnd.integerInRange(1400, 2400), 'Linear', true, 0);
            tween.onComplete.addOnce(this.eastWestLoop, this);
        }
        
        for(var n = 0; n < 6; n++){
            var shadowKnight = this.peopleGroup.create(this.rnd.integerInRange(-300, -100), game.rnd.integerInRange(0, 510), 'shadowKnight', 'ShadowKnightAttackWest1.png');
            shadowKnight.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(22, 29));
            shadowKnight.animations.play('walk', game.rnd.integerInRange(11, 14), true);
            shadowKnight.scale.x *= -1;
            shadowKnight.anchor.setTo(0.5,0.5);
            
            var tween = this.add.tween(shadowKnight);
            tween.to({ x: 1100 }, this.rnd.integerInRange(2000, 3000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.eastWestLoop, this);
        }
        
        for(var n = 0; n < 3; n++){
            var ogre = this.peopleGroup.create(this.rnd.integerInRange(-300, -500), this.rnd.integerInRange(0, 310), 'ogre', 'OgreAttackingWest1.png');
            ogre.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(22, 29));
            ogre.animations.play('walk', 10, true);
            ogre.scale.x *= -1;
            ogre.anchor.setTo(0.5,0.5);
            
            var tween = this.add.tween(ogre);
            tween.to({ x: 1100 }, this.rnd.integerInRange(2000, 3000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.eastWestLoop, this);
        }
        
        
        
        var mage = this.peopleGroup.create(300, 200, 'badMagic', 'BadIn1.png');
        mage.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(21, 33));
        mage.animations.play('spell', 8, true);
        mage.endCount = 0;
        mage.events.onAnimationLoop.add(this.endCount, this);
        mage.anchor.setTo(0.5, 0.5);
        mage.scale.x *= -1;

        var mageIn = this.add.sprite(mage.x, mage.y, 'badMagic', 'BadIn1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(0, 4));
        mageIn.animations.play('fire', 10, true);
        mageIn.events.onAnimationLoop.add(this.itDied, this);
        mageIn.alpha = 0.8;
        mageIn.anchor.setTo(0.6, 0.6);
    },
    
    /*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 13 SCENE !!!!!!!!!!!!!!!!!!!!! */       
    
    level13Scene1: function(){
        this.buildAllCharacters();
        this.textGroup.destroy();
        this.goodMage.x = 310;
        this.goodMage.y = 240;
        this.goodMage.animations.play('stand', 10, true);
        
        this.rowan.x = 560;
        this.rowan.y = 240;
        this.rowan.scale.x *= -1;
        this.rowan.animations.play('stand', 10, true);
        
        this.cavalry1.x = 560;
        this.cavalry1.y = 340;
        this.cavalry1.scale.x *= -1;
        this.cavalry1.animations.play('stand', 10, true);
        
        this.redKnight1.x = 300;
        this.redKnight1.y = 320;
        this.redKnight1.animations.play('stand', 10, true);
        
        this.buildTalk(610,130,"We have broken the\nenemy on the beach and\nstopped the enemies ability\nto reinforce their attack!", 33, this.level13Scene2);
    },
    
    level13Scene2: function(){
        this.buildTalk(610,130,"However, the shadow\nmage has escaped and\nis now leading the siege\non Life's Gate to the north.", 33, this.level13Scene3);
    },
    
    level13Scene3: function(){
        this.buildTalk(610,130,"We should sneak around\nthe enemy and attack\nthem from behind to\nbreak the siege.", 33, this.level13Scene4);
    },
    
    level13Scene4: function(){
        this.buildTalk(270, 130,"Yes, we shall ambush\nthem and stop their\nevil from spreading further!\nLife's Gate must not fall.", 33, this.level13Scene5, true);
        this.rowan.animations.play('talk', 10, true);
    },
    
    level13Scene5: function(){
        for(var i = 80; i < 950; i += this.rnd.integerInRange(100, 200)){
            var dragon = this.add.sprite(i, this.rnd.integerInRange(500,800), 'dragon', 'DragonFlyingNorth01.png');
            dragon.anchor.setTo(0.5, 0.5);
            dragon.animations.add('fly', Phaser.ArrayUtils.numberArrayStep(0, 7));
            dragon.animations.play('fly', 14, true);
            dragon.tint = 0x000000;
            dragon.alpha = 0.5;

            var tween = this.add.tween(dragon);
            tween.to({ y: -450 }, this.rnd.integerInRange(1500,2800), 'Linear', true, 0);
            tween.onComplete.addOnce(this.level13Scene6, this);
        }
        
        if(Main.sound == true){
            this.dragonSound = this.add.audio('dragon');
            this.dragonSound.volume = 0.7;
            this.dragonSound.play();            
        }
        
        this.screensGroup.destroy();
        this.rowan.animations.play('stand', 10, true);
    },
    
    level13Scene6: function(){
        this.screensGroup = this.add.group();
        this.buildTalk(610,200,"Did someone say ambush...?", 30, false);
        
        var fightText = this.add.bitmapText(150, 180, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
        
        this.cavalry1.animations.play('bow', 10, true);
    },
    
    /*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 14 SCENE !!!!!!!!!!!!!!!!!!!!! */      
    
    level14Scene1: function(){
        this.textGroup.destroy();
        this.buildAllCharacters();
        var skeleton = this.peopleGroup.create(1100, 200, 'skeleton', 'SkeletonAttackWest1');
        skeleton.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(19, 27));
        skeleton.animations.play('walk', game.rnd.integerInRange(12, 16), true);
        skeleton.anchor.setTo(0.5,0.5);

        var tween = this.add.tween(skeleton);
        tween.to({ x: 500 }, 1500, 'Linear', true, 0);
        tween.onComplete.addOnce(this.skeltonHit, this);
        
        var skeleton2 = this.peopleGroup.create(1100, 400, 'skeleton', 'SkeletonAttackWest1');
        skeleton2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(19, 27));
        skeleton2.animations.play('walk', game.rnd.integerInRange(12, 16), true);
        skeleton2.anchor.setTo(0.5,0.5);

        var tween = this.add.tween(skeleton2);
        tween.to({ x: 500 }, 1400, 'Linear', true, 0);
        tween.onComplete.addOnce(this.skeltonHit, this);
        
        
        this.cavalry1.x = -150;
        this.cavalry1.y = 200;
        this.cavalry1.animations.play('walk', 10, true);
        
        var tween = this.add.tween(this.cavalry1);
        tween.to({ x: 600 }, 1600, 'Linear', true, 0);
        tween.onComplete.addOnce(this.cavalryStand, this);
        
        this.cavalry2.x = -150;
        this.cavalry2.y = 400;
        this.cavalry2.animations.play('walk', 10, true);
        
        var tween = this.add.tween(this.cavalry2);
        tween.to({ x: 600 }, 1600, 'Linear', true, 0);
        tween.onComplete.addOnce(this.cavalryStand, this);
        tween.onComplete.addOnce(this.level14Scene2, this);
        
    },
    
    level14Scene2: function(){
        this.goodMage.x = 310;
        this.goodMage.y = 240;
        this.goodMage.animations.play('stand', 10, true);
        
        var mageIn = this.add.sprite(310, 240, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        mageIn.events.onAnimationLoop.add(this.itDied, this);
        
        this.rowan.x = 310;
        this.rowan.y = 340;
        this.rowan.animations.play('stand', 10, true);
        
        var mageIn = this.add.sprite(310, 340, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        mageIn.events.onAnimationLoop.add(this.itDied, this);
        
        this.buildTalk(610,200,"We've broken through!", 40, this.level14Scene3);
    },
    
    level14Scene3: function(){
        this.buildTalk(610,120,"Indeed! And now is the\ntime to press the\nattack!", 40, this.level14Scene4);
    },
    
    level14Scene4: function(){
        this.buildTalk(610,120,"Move Forward! They\nwill not expect a\ncounter attack!", 40, false);
        this.goodMage.animations.play('magic', 14, true);
        this.goodMage.endCount = 0;
        this.goodMage.events.onAnimationLoop.add(this.endCount, this);
        
        for(var n = 0; n < 10; n++){
            var knight = this.peopleGroup.create(this.rnd.integerInRange(-300, 0), this.rnd.integerInRange(0, 510),'knight', 'KnightAttackEast1.png');
            knight.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
            knight.animations.play('walk', 14, true);
            knight.anchor.setTo(0.5, 0.5);
            
            var tween = this.add.tween(knight);
            tween.to({ x: 1100 }, this.rnd.integerInRange(1900, 4400), 'Linear', true, 0);
            tween.onComplete.addOnce(this.eastWestLoop, this);
        }
        
        for(var n = 0; n < 7; n++){
            var dwarf1 = this.peopleGroup.create(this.rnd.integerInRange(-400, 0), this.rnd.integerInRange(0, 510), 'dwarf', 'DwarfAttackEast01.png');
            dwarf1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
            dwarf1.animations.play('walk', 8, true);
            dwarf1.anchor.setTo(0.5, 0.5);
            
            var tween = this.add.tween(dwarf1);
            tween.to({ x: 1100 }, this.rnd.integerInRange(2400, 5000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.eastWestLoop, this);
        }
        
        for(var n = 0; n < 5; n++){
            var cavalry = this.peopleGroup.create(this.rnd.integerInRange(-400, 0), this.rnd.integerInRange(0, 610), 'goodCharacters', 'AxeGirlTalkingEast01.png');
            cavalry.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
            cavalry.animations.play('walk', 10, true);
            cavalry.anchor.setTo(0.5,0.5);
            
            var tween = this.add.tween(cavalry);
            tween.to({ x: 1100 }, this.rnd.integerInRange(2400, 4000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.eastWestLoop, this);
        }
    },
    
    /*!!!!!!!!!!!!!!!!!!!!!!! LEVEL 15 SCENE !!!!!!!!!!!!!!!!!!!!! */
    
    level15Scene1: function(){
        
        this.buildingGroup = this.add.group();
        
        var n = 0;
        for(var x = 0; x < 1100; x += 285){
            for(var y = 0; y < 600; y += 285){
                var castle8 = this.buildingGroup.create(x,y,'buildings','CastleBuilding.png');
                castle8.anchor.setTo(0.5,0.5);
                n++;
                if(n%2 === 0){
                    castle8.scale.x *= -1;
                }
            }
        }
        
        for(var x = 125; x < 1100; x += 285){
            for(var y = 125; y < 600; y += 285){
                var castle8 = this.buildingGroup.create(x,y,'buildings','CastleBuilding.png');
                castle8.anchor.setTo(0.5,0.5);
                n++;
                if(n%2 === 0){
                    castle8.scale.x *= -1;
                }
            }
        }
        
 
        this.textGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal',"Battle of Life's Gate", 90); 
        text.anchor.setTo(0.5,0.5);
        this.textGroup.add(text);
        
        var playButton = this.textGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.level15Scene2,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
        this.textGroup.add(playText);
    },
    
    level15Scene2: function(){
        this.buildAllCharacters();
        this.buildingGroup.destroy();
        this.textGroup.destroy();
        
        this.goodMage.x = 370;
        this.goodMage.y = 240;
        this.goodMage.animations.play('stand', 10, true);
        this.goodMage.scale.x *= -1;
        
        this.rowan.x = 370;
        this.rowan.y = 340;
        this.rowan.animations.play('stand', 10, true);
        this.rowan.scale.x *= -1;
        
        this.cavalry1.x = 350;
        this.cavalry1.y = 180;
        this.cavalry1.animations.play('stand', 10, true);
        this.cavalry1.scale.x *= -1;
        
        this.cavalry2.x = 350;
        this.cavalry2.y = 400;
        this.cavalry2.animations.play('stand', 10, true);
        this.cavalry2.scale.x *= -1;
        
        for(var x = 20; x < 90; x += 60){
            for(var y = 30; y < 560; y += 120){
                var knight = this.peopleGroup.create(x, y,'knight', 'KnightAttackEast1.png');
                knight.animations.add('stand', [0]);
                knight.animations.play('stand', 14, true);
                knight.anchor.setTo(0.5, 0.5);
            }
        }
        
        for(var x = 20; x < 90; x += 60){
            for(var y = 90; y < 560; y += 120){
                var dwarf = this.peopleGroup.create(x, y, 'dwarf', 'DwarfAttackEast01.png');
                dwarf.animations.add('stand', [0]);
                dwarf.animations.play('stand', 8, true);
                dwarf.anchor.setTo(0.5, 0.5);
            }
        }
        
        for(var y = 30; y < 560; y += 60){
            var redKnight = this.peopleGroup.create(210, y, 'redKnight', 'RedKnight2Attack01.png');
            redKnight.animations.add('stand', [0]);
            redKnight.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
            redKnight.animations.play('stand', 24, true);
            redKnight.anchor.setTo(0.5, 0.5);
        }
        
        for(var y = 30; y < 560; y += 60){
            var archer = this.peopleGroup.create(150, y, 'archer', 'ArcherFallingEast1.png');
            archer.animations.add('stand', Phaser.ArrayUtils.numberArrayStep(13, 21));
            archer.animations.play('stand', 8, true);
            archer.anchor.setTo(0.5, 0.5);
        }
        
        this.buildTalk(660,120,"We have reached the\nend of our journey!", 42, this.level15Scene3);
    },
    
    level15Scene3: function(){
        this.buildTalk(660,120,"Yet Life's Gate lies\nunder siege before us.\nWe cannot let the\ncity fall.", 37, this.level15Scene4);
    },
    
    level15Scene4: function(){
        this.buildTalk(660,210,"Now is the time\nto rally our full\nstrength and defeat the\nenemy!", 37, this.level15Scene5);
        this.rowan.animations.play('talk', 8, true);
        
        this.commander.x = 1100;
        this.commander.y = 270;
        this.commander.scale.x *= -1;
        this.commander.animations.play('walk', 10, true);
        
        var tween = this.add.tween(this.commander);
        tween.to({ x: 600 }, 1300, 'Linear', true, 0);
        
        this.cavalry1.scale.x *= -1;
        this.cavalry2.scale.x *= -1;
        this.cavalry1.animations.play('walk', 10, true);
        this.cavalry2.animations.play('walk', 10, true);
        
        var tween = this.add.tween(this.cavalry1);
        tween.to({ x: 450 }, 700, 'Linear', true, 0);
        tween.onComplete.addOnce(this.cavalryStand, this);
        
        var tween = this.add.tween(this.cavalry2);
        tween.to({ x: 450 }, 700, 'Linear', true, 0);
        tween.onComplete.addOnce(this.cavalryStand, this);
    },
    
    level15Scene5: function(){
        this.rowan.animations.play('stand', 8, true);
        this.rowan.scale.x *= -1;
        this.goodMage.scale.x *= -1;
        
        this.commander.animations.play('talk', 8, true);
        
        this.buildTalk(310,150,"It's about time you\nall showed up!", 37, this.level15Scene6, true);
    },
    
    level15Scene6: function(){
        this.buildTalk(660,210,"Indeed, we could\nsay the same for\nyou commander.", 37, this.level15Scene7);
        this.commander.animations.play('stand', 8, true);
        
        this.rowan.animations.play('talk', 8, true);
    },
    
    level15Scene7: function(){
        this.buildTalk(660,120,"There are many things\nyou must answer for,\nthough I didn't think to find\nyou until after the battle.", 33, this.level15Scene8);
        
        this.rowan.animations.play('stand', 8, true);
    },
    
    level15Scene8: function(){
        this.commander.animations.play('talk', 8, true);
        
        this.buildTalk(310,150,"I've come to warn you!\nThe enemy's strength has\nbeen fully concentrated,\nyou are too late.", 33, this.level15Scene9, true);
    },
    
    level15Scene9: function(){
        this.buildTalk(310,150,"The shadow mage has\nmarshalled his forces\nand summoned his dragons.", 33, this.level15Scene10, true);
    },
    
    level15Scene10: function(){
        this.commander.animations.play('stand', 8, true);
        this.buildTalk(310,150,"It may be wise\nto turn back...", 33, this.level15Scene11, true);
    },
    
    level15Scene11: function(){
        this.buildTalk(660,120,"Where would we turn\nback to? And who then\nwould Life's Gate turn to\nfor aid?", 34, this.level15Scene12);
    },
    
    level15Scene12: function(){
        this.buildTalk(660,120,"No, we will not run today.", 34, this.level15Scene13);
    },
    
    level15Scene13:function(){
        this.buildTalk(660,120,"I do not know whether\nyour warning is fair or\nfoul, nor do I have\nthe time for you now.", 34, this.level15Scene14);
    },
    
    level15Scene14: function(){
        this.goodMage.animations.play('magic', 8, true);
        this.goodMage.events.onAnimationLoop.addOnce(this.level15Scene15, this);
        
        var mageIn = this.add.sprite(this.commander.x, this.commander.y, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        mageIn.events.onAnimationLoop.add(this.itDied, this);
        
        this.commander.x = -100;
        this.commander.y = -1000;
        
        this.screensGroup.destroy();
    },
    
    level15Scene15: function(){
        this.buildTalk(660,120,"We must move forward!\nBut beware the shadow mage\nand his dark dragons!", 34, this.level15Scene16);
        this.goodMage.animations.play('stand', 8, true);
        this.goodMage.scale.x *= -1;
        this.rowan.scale.x *= -1;
        this.cavalry1.scale.x *= -1;
        this.cavalry2.scale.x *= -1;
    },
    
    level15Scene16: function(){
        this.buildTalk(660,120,"If the commander is telling\nthe truth we should hold\nour attacks until the field\nis clear of magic.", 34, this.level15Scene17);
    },
    
    level15Scene17: function(){
        this.buildTalk(660,120,"Hold your strength and\ndo not waste your life.\nThe fate of the entire\nkingdom may be at stake!", 34, this.level15Scene18);
    },
    
    level15Scene18: function(){
        this.buildTalk(660,120,"The day must be ours!", 40, false);
        
        var fightText = this.add.bitmapText(150, 180, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
    },
    
    /*!!!!!!!!!!!!!!!!!!!!!!! FINAL SCENE !!!!!!!!!!!!!!!!!!!!! */
    
    finalScene1: function(){
        this.goodMage.x = 280;
        this.goodMage.y = 340;
        this.goodMage.animations.play('magic', 10, true);
		this.goodMage.events.onAnimationLoop.addOnce(this.finalScene2, this);
		this.goodMage.scale.x *= 2;
		this.goodMage.scale.y *= 2;
		
		var mageIn = this.add.sprite(this.goodMage.x, this.goodMage.y, 'goodMagic', 'FireSpell1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
        mageIn.animations.play('fire', 10, true);
        mageIn.anchor.setTo(0.5, 0.5);
        mageIn.events.onAnimationLoop.add(this.itDied, this);
		mageIn.scale.x *= 2;
		mageIn.scale.y *= 2;
		
		this.badMage = this.peopleGroup.create(640, 340, 'badMagic', 'BadIn1.png');
        this.badMage.animations.add('magic', Phaser.ArrayUtils.numberArrayStep(21, 33));
		this.badMage.animations.add('stand', [21]);
        this.badMage.animations.play('stand', 8, true);
        this.badMage.anchor.setTo(0.5, 0.5);
		this.badMage.scale.x *= 2;
		this.badMage.scale.y *= 2;
        
    },
	
	finalScene2: function(){
		this.goodMage.animations.play('stand', 10, true);
		
		this.buildTalk(600,170,"Your army has been defeated\nand your attack has failed!\nThere are many terrible acts\nwhich you must now answer\nfor. What say you?", 32, this.finalScene3);
	},
	
	finalScene3: function(){	
		this.buildTalk(300,170,"One city in ruins, one city\nhalf starved. I'm not sure if\nI'd call it a failure. This\ncampaign has ended but\nthe war is just beginning.", 32, this.finalScene4, true);
	},
	
	finalScene4: function(){
		this.buildTalk(600,170,"My order now knows\nyou live. You will be\nhunted and destroyed.", 36, this.finalScene5);
	},
	
	finalScene5: function(){	
		this.buildTalk(300,170,"I have been hunted for\nmillennia yet never killed.\nYour simple spells do\nnot scare me!", 32, this.finalScene6, true);
	},
	
	finalScene6: function(){	
		this.buildTalk(300,170,"Soon I will raise a faster\nand stronger army, how soon\nuntil your city is rebuilt\nor your injured healed?", 32, this.finalScene7, true);
	},
	
	finalScene7: function(){	
		this.buildTalk(300,170,"The tides have shifted,\nthe flows have changed.\nYou have seen the signs\nyourself, a shadow falls.", 32, this.finalScene8, true);
	},
	
	finalScene8: function(){
		this.buildTalk(600,170,"There is always hope!\nA way will be found!", 36, this.finalScene9);
	},
	
	finalScene9: function(){
		this.screensGroup.destroy();
		
		this.goodMage.animations.play('magic', 10, true);
		
		this.waterMagic = this.add.sprite(-100, 340, 'goodMagic', 'FireSpell1.png');
		this.waterMagic.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(26, 35));
		this.waterMagic.animations.play('fire', 10, true);                   
		this.waterMagic.alpha = 0.8;                    
		this.waterMagic.anchor.setTo(0.5, 0.5);
		this.waterMagic.scale.x *= 2;
		this.waterMagic.scale.y *= 2;
		
		var tween = this.add.tween(this.waterMagic);
        tween.to({ x: 350 }, 700, 'Linear', true, 0);
        tween.onComplete.addOnce(this.finalScene10, this);                    		
	},
    
	finalScene10: function(){
		var tween = this.add.tween(this.waterMagic);
        tween.to({ x: 500 }, 300, 'Linear', true, 0);
        tween.onComplete.addOnce(this.finalScene11, this);
		
		this.goodMage.animations.play('stand', 10, true);
		
		this.badMage.animations.play('magic', 10, true);
		this.badMage.events.onAnimationLoop.addOnce(this.finalScene12, this);
	},
	
	finalScene11: function(){
		var fire = this.add.sprite(this.waterMagic.x, this.waterMagic.y, 'badMagic', 'BadIn1.png');
		fire.animations.add('burn', Phaser.ArrayUtils.numberArrayStep(5, 16));
		fire.animations.play('burn', this.rnd.integerInRange(10, 20), true);
		fire.alpha = 0.7;
		fire.anchor.setTo(0.5,0.5);
		fire.events.onAnimationLoop.add(this.itDied, this);
		
		this.waterMagic.kill();
	},
	
	finalScene12: function(){
		this.badMage.animations.play('stand', 10, true);
		
		this.buildTalk(300,170,"A nice attempt but\nyou will only get\nlucky once today.", 32, this.finalScene13, true);
	},
	
	finalScene13: function(){
		var mageIn = this.add.sprite(this.badMage.x, this.badMage.y, 'badMagic', 'BadIn1.png');
        mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(0, 4));
        mageIn.animations.play('fire', 10, true);
        mageIn.events.onAnimationLoop.add(this.finalScene14, this);
        mageIn.alpha = 0.8;
        mageIn.anchor.setTo(0.6, 0.6);
		mageIn.scale.x *= 2;
		mageIn.scale.y *= 2;
		
		this.badMage.x = -1000;
		this.badMage.y = -1000;
		
		this.cavalry1.x = -100;
        this.cavalry1.y = 240;  
        this.cavalry1.animations.play('walk', 10, true);
		this.cavalry1.scale.x *= 2;
		this.cavalry1.scale.y *= 2;
		
		this.cavalry2.x = -100;
        this.cavalry2.y = 460;        
        this.cavalry2.animations.play('walk', 10, true);
		this.cavalry2.scale.x *= 2;
		this.cavalry2.scale.y *= 2;
		
		var tween = this.add.tween(this.cavalry1);
        tween.to({ x: 500 }, 1000, 'Linear', true, 0);
		tween.onComplete.addOnce(this.cavalryStand, this);
		
		var tween = this.add.tween(this.cavalry2);
        tween.to({ x: 500 }, 1000, 'Linear', true, 0);
		tween.onComplete.addOnce(this.cavalryStand, this);
		
	},
	
	finalScene14: function(it){
		
		it.kill();
		
		this.buildTalk(600,170,"Until next time!", 44);
		
		var fightText = this.add.bitmapText(this.world.centerX, this.world.centerY + 25, 'immortal', 'Victory!', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.worldMapGo,  this);
		fightText.anchor.setTo(0.5,0.5);
		
		var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
            playButton.width = 270;
            playButton.height = 50;
            playButton.anchor.setTo(0.5,0.5);
            playButton.inputEnabled = true;
            playButton.events.onInputDown.add(this.worldMapGo,  this);
            var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
	},
	
    update: function(){
        this.peopleGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        if(Main.currentLevel === 15 || Main.currentLevel === 0){
            this.buildingGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        }
        if(this.pauseStart && !game.paused){
            if(Main.currentLevel === 8){
                this.pauseStart = false;
                this.level8Scene1();
            }
            if(Main.currentLevel === 9){
                this.pauseStart = false;
                this.level9Scene1();
            }
            if(Main.currentLevel === 10){
                this.pauseStart = false;
                this.level10Scene2();
            }
            if(Main.currentLevel === 11){
                this.pauseStart = false;
                this.level11Scene2();
            }
            if(Main.currentLevel === 12){
                this.pauseStart = false;
                this.level12Scene2();
            }
            if(Main.currentLevel === 13){
                this.pauseStart = false;
                this.level13Scene1();
            }
            if(Main.currentLevel === 14){
                this.pauseStart = false;
                this.level14Scene1();
            }
            if(Main.currentLevel === 15){
                this.pauseStart = false;
                this.level15Scene2();
            }
            if(Main.currentLevel === 0){
                this.pauseStart = false;
                this.playLevel();
            } 
        }

    },
    
    buildTalk: function(x, y, message, fontSize, nextScene, flip, width, height){
        
        if(this.multiScreen === false){
            this.screensGroup.destroy();

            this.screensGroup = this.add.group();
        }
        
        var z = 0;
        
        var speechBacking = this.screensGroup.create(x, y,'talkBox');
        if(width){
            speechBacking.width = width;
        } else {
            speechBacking.width = 590;
        }
        if(height){
            speechBacking.height = height;
        } else {
            speechBacking.height = 260;
        }
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
    },
    
    buildBackground: function(){
        
        if(Main.currentLevel === 12){
            for(var x = 0; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'desert.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'desertTexture1.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'desertTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(0,0, 'tileSet', 'desert.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
        }
        
        if(Main.currentLevel === 11 || Main.currentLevel === 14){
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
            
        }
        
        if(Main.currentLevel === 8 || Main.currentLevel === 9 || Main.currentLevel === 10 || Main.currentLevel === 13){
            for(var x = 0; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var snow = this.add.image(x, y, 'tileSet', 'snow.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var snow = this.add.image(x, y, 'tileSet', 'snowTexture1.png');
                    }
                    if(pickMe == 50){
                        var snow = this.add.image(x, y, 'tileSet', 'snowTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(0,0, 'tileSet', 'snow.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
            
        }
        
        if(Main.currentLevel == 15){
            for(var x = 0; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'grass.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'grassWithSoil.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'grassWithSand.png');
                    }
                }
            }

            var texture = this.add.image(0,0, 'tileSet', 'grass.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;

        } 
		
		if(Main.currentLevel == 16){
            for(var x = 0; x < 1000; x += 100){
                for(var y = 0; y < 600; y += 100){                               
					var grass = this.add.image(x, y, 'tileSet', 'grass.png'); 
					grass.scale.x *= 2;
					grass.scale.y *= 2;
                }
            }

            var texture = this.add.image(0,0, 'tileSet', 'grass.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;

        } 
        
        // !!!!!!!!!!!!!!1 Play Button !!!!!!!!!!!!!!!!!    
        if(Main.currentLevel === 8 || Main.currentLevel === 9 || Main.currentLevel === 12 || Main.currentLevel === 13 || Main.currentLevel === 14 || Main.currentLevel === 15){
            var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
            playButton.width = 270;
            playButton.height = 50;
            playButton.anchor.setTo(0.5,0.5);
            playButton.inputEnabled = true;
            playButton.events.onInputDown.add(this.playLevel,  this);
            var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
        }
        
        if(Main.currentLevel === 0){
            this.buildingGroup = this.add.group();
        
        var n = 0;
        for(var x = 0; x < 1100; x += 285){
            for(var y = 0; y < 600; y += 285){
                var castle8 = this.buildingGroup.create(x,y,'buildings','CastleBuilding.png');
                castle8.anchor.setTo(0.5,0.5);
                n++;
                if(n%2 === 0){
                    castle8.scale.x *= -1;
                }
            }
        }
        
        for(var x = 125; x < 1100; x += 285){
            for(var y = 125; y < 600; y += 285){
                var castle8 = this.buildingGroup.create(x,y,'buildings','CastleBuilding.png');
                castle8.anchor.setTo(0.5,0.5);
                n++;
                if(n%2 === 0){
                    castle8.scale.x *= -1;
                }
            }
        }
        
 
        this.textGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY - 130,'immortal',"Defense Contract", 110); 
        text.anchor.setTo(0.5,0.5);
        this.textGroup.add(text);
            
        if(Main.wager === 1){    
            var fillInText = "Easy";
        }
        if(Main.wager === 2){    
            var fillInText = "Challenging";
        }
        if(Main.wager === 3){    
            var fillInText = "Hard";
        }
            
        var text3 = this.add.bitmapText(this.world.centerX,this.world.centerY + 25,'immortal',"Difficulty:", 70); 
        text3.anchor.setTo(0.5,0.5);
        this.textGroup.add(text3);
        
            
        var text2 = this.add.bitmapText(this.world.centerX,this.world.centerY + 120,'immortal',"" + fillInText, 70); 
        text2.anchor.setTo(0.5,0.5);
        this.textGroup.add(text2);
        
        var playButton = this.textGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
        this.textGroup.add(playText);
        }
    },
    
    rowanStand: function(){
        this.rowan.animations.play('stand', 10, true);
    },
    
    scoutStand: function(){
        this.scout.animations.play('stand', 10, true);
    },
    
    eastWestLoop: function(it){
        
        it.x = -100;
        it.y = this.rnd.integerInRange(0, 410);
        
        var tween = this.add.tween(it);
        tween.to({ x: 1100 }, this.rnd.integerInRange(1400, 2400), 'Linear', true, 0);
        tween.onComplete.addOnce(this.eastWestLoop, this);
    },
    
    cavalryStand: function(cavalry){
        cavalry.animations.play('stand', 14, true);
    },
    
    skeltonHit: function(skeleton){    
        var fall = this.fallGroup.create(skeleton.x,skeleton.y,'skeleton', 'SkeletonAttackWest1');
        fall.anchor.setTo(0.5,0.5);
        fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(10, 18));
        fall.animations.play('fall', 14, true);
        fall.events.onAnimationLoop.add(this.itDied, this);
        
        skeleton.kill();
    },
    
    itDied: function(it){
        it.kill();
    },
    
    endCount: function(mage){
        mage.endCount++;
        if(mage.endCount > 5){
            var fightText = this.add.bitmapText(150, 100, 'immortal', 'Ready?', 200);
            fightText.tint = 0xff0000;
            fightText.inputEnabled = true;
		    fightText.events.onInputDown.add(this.playLevel,  this);
        }
    },
	
	worldMapGo:function(){
		this.state.start('World', true);
	},
    
    buildLevelPrompt: function(next){
        this.textGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal',"Level " + Main.currentLevel, 90); 
        text.anchor.setTo(0.5,0.5);
        this.textGroup.add(text);
        
        var playButton = this.textGroup.create(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(next,  this);
        var playText = this.add.bitmapText(400, 483, 'immortal', 'Continue', 40);
        this.textGroup.add(playText);
    },
    
    playLevel: function(){
        this.state.start('LevelGo', true);
    }
};