Main.Level6Scene = function(game){
    this.rowan;
    this.dwarf;
    this.cavalry1;
    this.cavalry2;
    this.knight;
    this.commander;
    this.screensGroup;
};

Main.Level6Scene.prototype = {
    create: function(){
        game.paused = true;
        this.pauseStart = true;
        this.input.onDown.addOnce(this.unpause, self);
        
        this.buildBackground();
        this.peopleGroup = this.add.group();
        this.startScene();
        
        
    },
    
    unpause: function(){
        game.paused = false;
    },
    
    startScene: function(){
        this.textGroup = this.add.group();
        
        var text = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal',"Level 6", 90); 
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
        this.rowanTalk();
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
        
        var playButton = this.add.image(this.world.centerX, 504, 'menuTile1');
        playButton.width = 270;
        playButton.height = 50;
        playButton.anchor.setTo(0.5,0.5);
        playButton.inputEnabled = true;
		playButton.events.onInputDown.add(this.playLevel,  this);
        var playText = this.add.bitmapText(380, 483, 'immortal', 'Play Level', 40);
    },
    
    buildCivilians: function(){
        for(var p = 0; p < 15; p++){
            var civilian = this.peopleGroup.create(this.rnd.integerInRange(1200,1700),this.rnd.integerInRange(40,430),'civilians','anna0.png');
            if(p < 5){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(0, 7));
            }
            if(p >= 5 && p < 10){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(8, 16));
            }
            if(p >= 10 && p < 15){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(17, 25));
            }
            if(p >= 15 && p < 20){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(26, 33));
            }
            if(p >= 20){
                civilian.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(34, 42));
            }
            civilian.animations.play('walk', 24, true);
            civilian.scale.x *= -1;
            civilian.anchor.setTo(0.5,0.5);
            
            var tween = this.add.tween(civilian);
            tween.to({ x: -200 }, this.rnd.integerInRange(3000, 5000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.civilianLoop, this);
        }
        
    },
    
    civilianLoop: function(civilian){
        
        civilian.x = this.rnd.integerInRange(1200,1600);
        civilian.y = this.rnd.integerInRange(90,400);
        
        var tween = this.add.tween(civilian);
            tween.to({ x: -200 }, this.rnd.integerInRange(3000, 5000), 'Linear', true, 0);
            tween.onComplete.addOnce(this.civilianLoop, this);
    },
    
    rowanTalk: function(){
        this.cavalry1 = this.peopleGroup.create(300, 100, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry1.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry1.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry1.animations.add('stand', [17]);
        this.cavalry1.animations.play('stand', 10, true);
        this.cavalry1.anchor.setTo(0.5,0.5);
        
        this.dwarf = this.peopleGroup.create(300, 170, 'dwarf', 'DwarfAttackEast01.png');
        this.dwarf.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
        this.dwarf.animations.add('stand', [0]);
        this.dwarf.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        this.dwarf.animations.play('stand', 8, true);
        this.dwarf.anchor.setTo(0.5, 0.5);
        
        this.knight = this.peopleGroup.create(300,240,'knight', 'KnightAttackEast1.png');
        this.knight.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
        this.knight.animations.add('stand', [0]);
        this.knight.animations.play('stand', 10, true);
        this.knight.anchor.setTo(0.5, 0.5);
        
        this.rowan = this.peopleGroup.create(300, 310,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.rowan.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(9, 16));
        this.rowan.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(0, 8));
        this.rowan.animations.add('stand', [0]);
        this.rowan.animations.play('talk', 8, true);
        this.rowan.anchor.setTo(0.5, 0.5);
        
        this.cavalry2 = this.peopleGroup.create(300, 380, 'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.cavalry2.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(31, 42));
        this.cavalry2.animations.add('bow', Phaser.ArrayUtils.numberArrayStep(17, 30));
        this.cavalry2.animations.add('stand', [17]);
        this.cavalry2.animations.play('stand', 10, true);
        this.cavalry2.anchor.setTo(0.5,0.5);
        
        this.commander = this.peopleGroup.create(1050, 260,'goodCharacters', 'AxeGirlTalkingEast01.png');
        this.commander.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(51, 58));
        this.commander.animations.add('talk', Phaser.ArrayUtils.numberArrayStep(43, 50));
        this.commander.animations.add('stand', [43]);
        this.commander.animations.play('walk', 14, true);
        this.commander.anchor.setTo(0.5,0.5);
        this.commander.scale.x *= -1;
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "That was more\nthan just orcs. There's\nsome bad magic at\nplay here.", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.cavalryTalk,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    cavalryTalk: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 10, true);
        this.cavalry2.animations.play('bow', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 240,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 290;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 220,'immortal', "I agree, this could\nmake the upcoming\nbattles more difficult.", 36);
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
        
        this.cavalry2.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 240,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 290;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 220,'immortal', "Wasn't there a mage\nat Westfall? Where\nare they now?", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 360,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk2,  this);
        var nextText = this.add.bitmapText(537, 340,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk2: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "There was, he had\na few words with the\ncommander and left\nafter the city fell.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk3,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk3: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('talk', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "I don't think he\nliked the way the\ncommander was \nmanaging the fight.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.knightTalk,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    knightTalk: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 100,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 90,'immortal', "Well we've been\nwinning battles since\nthen without him.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 220,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk,  this);
        var nextText = this.add.bitmapText(537, 200,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    dwarfTalk: function(){
       this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(560, 300,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 300;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.y *= -1;
        
        var text = this.add.bitmapText(580, 320,'immortal', "You still think the\ncommander is the one\ngiving out orders? Ha!", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 70, 220,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.addOnce(this.dwarfTalk2,  this);
        var nextText = this.add.bitmapText(507, 200,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    dwarfTalk2: function(){
       this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(560, 300,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 300;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.y *= -1;
        
        var text = this.add.bitmapText(580, 320,'immortal', "At this point he's just\nwalking around looking\npretty in his cape.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 70, 220,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.addOnce(this.rowanTalk4,  this);
        var nextText = this.add.bitmapText(507, 200,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk4: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "I think you're right,\nwe've been doing too\nwell, he can't be the\none giving the orders.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk45,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk45: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "Also is anyone going\nto mention all these\nhelpful dragons?", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.cavalryTalk3,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    cavalryTalk3: function(){
        this.screensGroup.destroy();
        
        this.cavalry2.animations.play('bow', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 240,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 290;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 220,'immortal', "There must be\nsomeone above guiding\nour troops to victory.", 36);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 360,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk5,  this);
        var nextText = this.add.bitmapText(537, 340,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk5: function(){
        this.screensGroup.destroy();
        
        this.cavalry2.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "Maybe so, but\nI have a feeling that\nthings are going to get\nharder from here.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderTalk,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
        this.buildCivilians();
        
        var tween = this.add.tween(this.commander);
        tween.to({ x: 550 }, 2000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.talkMe, this);
    },
    
    commanderTalk: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(260, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(250, 100,'immortal', "What are you doing\nback here!? There's a\nbattle going on up\nthere!", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 230, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.dwarfTalk3,  this);
        var nextText = this.add.bitmapText(207, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    dwarfTalk3: function(){
       this.screensGroup.destroy();
        
        this.commander.animations.play('stand', 10, true);
        this.dwarf.animations.play('fight', 10, true);
        
        this.screensGroup = this.add.group();
        var speechBacking = this.screensGroup.create(560, 300,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 300;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.y *= -1;
        
        var text = this.add.bitmapText(580, 320,'immortal', "Oh yeah? then\nthe real soldiers should\nbe up front fighting.", 35);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 70, 220,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.addOnce(this.commanderTalk2,  this);
        var nextText = this.add.bitmapText(507, 200,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    commanderTalk2: function(){
        this.screensGroup.destroy();
        
        this.dwarf.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(260, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(250, 100,'immortal', "Indeed! I have very\nimportant things to do\nelsewhere or I'd lead\nthe charge myself.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 230, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk6,  this);
        var nextText = this.add.bitmapText(207, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk6: function(){
        this.screensGroup.destroy();
        
        this.rowan.animations.play('talk', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "Right, I'm sure\nwhatever it may be\nis more important than\nsaving lives.", 33);
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
        
        this.rowan.animations.play('stand', 10, true);
        this.commander.animations.play('talk', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(260, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(250, 100,'immortal', "Some lives are more\nimportant than others.\nThey've brought fog and\nbarricaded the way.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX - 230, 230,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.rowanTalk7,  this);
        var nextText = this.add.bitmapText(207, 210,'immortal','Next', 40);
        this.screensGroup.add(nextText);
    },
    
    rowanTalk7: function(){
        this.screensGroup.destroy();
        
        this.commander.animations.play('stand', 10, true);
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(590, 160,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        
        var text = this.add.bitmapText(620, 150,'immortal', "That's bad news\nand a worse opinion.\nAttend your matters,\nwe'll attend the battle.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 280,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.commanderTalk4,  this);
        var nextText = this.add.bitmapText(537, 260,'immortal','Next', 40);
        this.screensGroup.add(nextText);
        
    },
    
    commanderTalk4: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var speechBacking = this.screensGroup.create(260, 110,'speechBubble');
        speechBacking.width = 590;
        speechBacking.height = 260;
        speechBacking.anchor.setTo(0.5, 0.5);
        speechBacking.scale.x *= -1;
        
        var text = this.add.bitmapText(250, 100,'immortal', "Thank you lieutenant,\nwe'll see who survives\nthe day to fight again.", 33);
        text.anchor.setTo(0.5,0.5);
        this.screensGroup.add(text);
        
        this.commander.animations.play('walk', 10, true);
        this.cavalry1.animations.play('walk', 10, true);
        this.cavalry2.animations.play('walk', 10, true);
        this.dwarf.animations.play('walk', 10, true);
        this.knight.animations.play('walk', 10, true);
        this.rowan.animations.play('walk', 10, true);
        
        var tween = this.add.tween(this.commander);
        tween.to({ x: -90 }, 5000, 'Linear', true, 0);
        
        var tween2 = this.add.tween(speechBacking);
        tween2.to({ x: -500 }, 6000, 'Linear', true, 0);
        
        var tween3 = this.add.tween(text);
        tween3.to({ x: -500 }, 6000, 'Linear', true, 0);
        
        var tween4 = this.add.tween(this.cavalry1);
        tween4.to({ x: 1500 }, 3000, 'Linear', true, 0);
        
        var tween5 = this.add.tween(this.dwarf);
        tween5.to({ x: 1500 }, 5000, 'Linear', true, 0);
        
        var tween6 = this.add.tween(this.knight);
        tween6.to({ x: 1500 }, 5000, 'Linear', true, 0);
        
        var tween7 = this.add.tween(this.rowan);
        tween7.to({ x: 1500 }, 5000, 'Linear', true, 0);
        
        var tween8 = this.add.tween(this.cavalry2);
        tween8.to({ x: 1500 }, 3000, 'Linear', true, 0);
        tween8.onComplete.addOnce(this.endScene, this);
    },
    
    
    
    playLevel: function(){
        this.state.start('LevelGo', true);
    },
    
    talkMe: function(it){
        it.animations.play('talk', 10, true);
    },
    
    endScene:function(){

        var fightText = this.add.bitmapText(150, 150, 'immortal', 'Ready?', 200);
        fightText.tint = 0xff0000;
        fightText.inputEnabled = true;
		fightText.events.onInputDown.add(this.playLevel,  this);
        
    },
    
    update: function(){
        this.peopleGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        if(this.pauseStart && !game.paused){
            this.pauseStart = false;
            this.triggerStart();
        }
    }
};