Main.HowToPlay = function(game){
    this.knightText;
    this.archerText;
    this.screensGroup;
    
    this.knight;
    this.skeleton;
};

Main.HowToPlay.prototype = {
    create: function(){
        this.buildBackground();
        
        this.goodBarrierGroup = this.add.group();
        this.fallGroup = this.add.group();
        this.knightGroup = this.add.group();
        this.skeletonGroup = this.add.group();
        this.explosionGroup = this.add.group();
        this.goodArrowGroup = this.add.group();
        this.pointsGroup = this.add.group();
        this.redDragonGroup = this.add.group();
        
        if(Main.sound == true){
            this.shieldSound = this.add.audio('shield');
            this.bowSound = this.add.audio('bow');
            this.explosionSound = this.add.audio('explosion');
            this.axeSound = this.add.audio('axe');
            this.iceSound = this.add.audio('ice');
            this.flameSound = this.add.audio('flame');
            this.trollSound = this.add.audio('troll');
            this.cavalrySound = this.add.audio('cavalry');
            this.mageInSound = this.add.audio('mageIn');
            this.gong = this.add.audio('gong');
            this.bellHigh = this.add.audio('bellHigh');
            this.bellLow = this.add.audio('bellLow');
            this.dragonSound = this.add.audio('dragon');
            this.shadowMageSound = this.add.audio('shadowMageSound');
            
            this.musicStart = true;
            
            
            this.battleMusicPart1 = this.add.audio('battleMusic7Part1');
            this.battleMusicPart2 = this.add.audio('battleMusic7Part2');
            this.battleMusicPart3 = this.add.audio('battleMusic7Part3');
            this.battleMusicPart1.volume = 0.2;
            this.battleMusicPart2.volume = 0.2;
            this.battleMusicPart3.volume = 0.2;
            this.battleMusicRate = 8000;
            this.battleMusicLaunch = this.time.now + this.battleMusicRate;
            
            this.playBattleMusic();
        }
        
        this.buildWarPanel();
        this.buildKnightDefenders();
        this.buildSkeletonDefenders();
        this.screen1();
    },
    
    playBattleMusic: function(){
        var gongPicker = this.rnd.integerInRange(1,2);
        if(gongPicker == 1){
            this.gong.volume = 0.4;
            this.gong.play();
        }
        
            if(this.musicStart == true){
                this.musicStart = false;
                this.battleMusicPart1.volume = 0.2;
                this.battleMusicPart1.play();
                this.gong.volume = 0.2;
                this.gong.play();
            } else {
                var gongPicker = this.rnd.integerInRange(1,2);
                if(gongPicker == 1){
                    this.gong.volume = 0.05;
                    this.gong.play();
                }
                var musicPicker = this.rnd.integerInRange(1,15);
                if(musicPicker < 5){
                    this.battleMusicPart1.play();
                }
                 else if(musicPicker > 4 && musicPicker < 10){
                    this.battleMusicPart2.play();
                } else {
                    this.battleMusicPart3.play();
                }
            }
    },
    
    buildBackground: function(){
        for(var x = 260; x < 1000; x += 50){
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

            var texture = this.add.image(270,0, 'tileSet', 'grass.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;

            var treeNumber = game.rnd.integerInRange(3, 5);
            for(var i = 0; i < treeNumber; i++){
                var picker = game.rnd.integerInRange(1, 3);
                var shrub;
                if(picker == 1){
                    var shrub = this.add.image(game.rnd.integerInRange(270, 940), game.rnd.integerInRange(0, 520), 'tileSet', 'shrub1.png');
                }
                if(picker == 2)
                {var shrub = this.add.image(game.rnd.integerInRange(270, 940), game.rnd.integerInRange(0, 520), 'tileSet', 'shrub2.png');
                }
                if(picker == 3){
                    var shrub = this.add.image(game.rnd.integerInRange(270, 940), game.rnd.integerInRange(0, 520), 'tileSet', 'shrub3.png');
                }
                shrub.width = game.rnd.integerInRange(35, 50);
                shrub.height = game.rnd.integerInRange(35, 50);
            }
        
        this.healthBar = this.add.sprite(400, 10,'preloaderBar');
        this.healthBar.tint = 0xff0000;
        this.healthBar.height = 30;
        this.healthBar.alpha = 0.6;
        this.healthBar.width = 380;
        
        var healthText = this.add.bitmapText(545, 10, 'immortal', 'Health');
        healthText.alpha = 0.7;
        
        this.pointsThisRound = 0;
        this.currentPointsThisRound = 0;
        this.pointsCounter = this.add.bitmapText(580,500, 'immortal', 'Dragon Points: ' + this.pointsThisRound);
        this.pointsCounter.anchor.setTo(0.5, 0.5);
    },
    
    buildWarPanel: function(){
        this.warPanelBacking = this.add.image(-10, -15, 'menuPanel');
        this.warPanelBacking.width = 280;
        this.warPanelBacking.height = 570; 
        
        this.knightButton = this.add.image(10, 20, 'menuTile1');
        this.knightButton.width = 120;
        this.knightButton.height = 100;
        var knightPic = this.add.image(20, 30, 'knight', 'KnightStanding.png');
        knightPic.scale.x *= 1.3;
        knightPic.scale.y *= 1.3;
        this.knightText = this.add.bitmapText(90, 20, 'immortal', '' + Main.maxKnights, 40);
        var underKnightText = this.add.bitmapText(90, 30, 'immortal', '_\n' + Main.maxKnights, 40);
        
        this.dragonTrapButton = this.add.image(130, 20, 'menuTile1');
        this.dragonTrapButton.width = 120;
        this.dragonTrapButton.height = 100;
        var dragonTrapPic = this.add.image(140, 25, 'blueDragon', 'BlueDragonFlyEast01.png');
        dragonTrapPic.scale.x *= 0.9;
        dragonTrapPic.scale.y *= 0.9;
        var dragonTrapText2 = this.add.bitmapText(150, 90, 'immortal', 'Points', 30);
        this.dragonTrapText = this.add.bitmapText(190, 20, 'immortal', '' + Main.dragonTrapBuildPoints, 30);
        this.dragonTrapText.anchor.setTo(0.5,0);
    
        
        this.archerButton = this.add.image(10, 130, 'menuTile1');
        this.archerButton.width = 120;
        this.archerButton.height = 100;
        var archerPic = this.add.image(25, 140, 'archer', 'ArcherStandingSouth.png');
        archerPic.scale.x *= 1.2;
        archerPic.scale.y *= 1.2;
        this.archerText = this.add.bitmapText(90, 130, 'immortal', '' + Main.maxArchers, 40);
        var underArcherText = this.add.bitmapText(90, 140, 'immortal', '_\n' + Main.maxArchers, 40);
        
        this.dragonAttackButton = this.add.image(130, 130, 'menuTile1');
        this.dragonAttackButton.width = 120;
        this.dragonAttackButton.height = 100;
        var dragonAttackLock = this.add.image(168, 147,'lock');
        
    
        
        
        this.dwarfButton = this.add.image(10, 240, 'menuTile1');
        this.dwarfButton.width = 120;
        this.dwarfButton.height = 100;
        var dwarfLock = this.add.image(48, 255,'lock');
        
        
        this.dragonFireButton = this.add.image(130, 240, 'menuTile1');
        this.dragonFireButton.width = 120;
        this.dragonFireButton.height = 100;     
        var dragonFireLock = this.add.image(168, 257,'lock');
        
        

        this.cavalryButton = this.add.image(10, 350, 'menuTile1');
        this.cavalryButton.width = 120;
        this.cavalryButton.height = 100;
        var cavalryLock = this.add.image(48, 367,'lock');
        
        
        this.mageButton = this.add.image(130, 350, 'menuTile1');
        this.mageButton.width = 120;
        this.mageButton.height = 100;
        var mageLock = this.add.image(168, 367,'lock');
        
        
        var pauseBacking = this.add.image(7, 460, 'menuTile1');
        pauseBacking.width = 247;
        pauseBacking.height = 60;
        pauseBacking.inputEnabled = true;
        pauseBacking.events.onInputDown.add(this.backToWorldMap, this);
        var pauseText = this.add.bitmapText(30, 474, 'immortal', 'Exit Demo', 40);
    },
    
    backToWorldMap: function(){
        if(Main.sound){        
            this.battleMusicPart1.stop();
            this.battleMusicPart2.stop();
            this.battleMusicPart3.stop();
        }
        Main.buildMenu = false;
        this.state.start('World', true);
    },
    
    buildKnightDefenders: function(){
        for(var y = 34; y < 520; y += 60){
            var knightDefender = this.knightGroup.create(310, y, 'redKnight', 'RedKnight2Attack01.png');
            this.physics.arcade.enable(knightDefender, Phaser.Physics.ARCADE);
            knightDefender.anchor.setTo(0.5, 0.5);
            knightDefender.body.immovable = true;
            knightDefender.animations.add('wait', [0]);
            knightDefender.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
            knightDefender.animations.play('wait', 24, true);
            knightDefender.body.enable = true;
            knightDefender.knightDefender = true;
            knightDefender.dwarf = false;
            knightDefender.knight = false;
            knightDefender.archer = false;
            knightDefender.attack = Main.knightDamage;
            knightDefender.speed = Main.knightSpeed;
            knightDefender.hp = Main.knightHP * 2;
            knightDefender.countDown;
        }
    },
    
    buildSkeletonDefenders: function(){
        for(var y = 30; y < 520; y += 60){
            var skeletonDefender = this.skeletonGroup.create(870, y, 'skeleton', 'SkeletonAttackWest1');
            this.physics.arcade.enable(skeletonDefender, Phaser.Physics.ARCADE);
            skeletonDefender.anchor.setTo(0.5, 0.5);
            skeletonDefender.animations.add('wait', [0]);
            skeletonDefender.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 9));
            skeletonDefender.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(10, 18));
            skeletonDefender.skeletonDefender = true;
            skeletonDefender.skeleton = false;
            skeletonDefender.ogre = false;
            skeletonDefender.orc = false;
            skeletonDefender.skeletonArcher = false;
            skeletonDefender.shadowKnight = false;
            skeletonDefender.speed = 0;
            skeletonDefender.body.immovable = true;
            skeletonDefender.hp = 100;
            skeletonDefender.countDown = 0;
            skeletonDefender.attack = 13;
        }
    },
    
    screen1: function(){
        this.knightButton.tint = 0x00ff00;
        this.archerButton.tint = 0x0000ff;
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 100, 'immortal', "Welcome\nto the\nbattlefield\ncommander!", 60);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen2); 
    },
    
    screen2: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 100, 'immortal', "Our forces could\nreally use the\nguidance of a\ncompetent leader\nsuch as yourself.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen3);
    },
    
    screen3: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 100, 'immortal', "What?!?!", 60);
        this.screensGroup.add(text);
        
        var text2 = this.add.bitmapText(420, 200, 'immortal', "You have no\nidea what\nyou're doing?", 45);
        this.screensGroup.add(text2);
        
        this.makeButton(this.screen4);
    },
    
    screen4: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "You must have\nreally hit your\nhead hard falling\nfrom the wall...\nNo matter, you'll\nbe winning battles\nin no time.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen45);
    },
    
    screen45: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "Just sit back\nfor now and\nI'll explain how\nthis works.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen5); 
    },
    
    screen5: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "First off,\nthese are the\ngood guys.", 50);
        this.screensGroup.add(text);
        
        var pop = this.screensGroup.create(330,300,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(470,300,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.scale.x *= -1;
        pointer.tint = 0x444444;
        
        
        this.makeButton(this.screen6);
    },
    
    screen6: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "That makes\nthem the\nbad guys.", 50);
        this.screensGroup.add(text);
        
        var pop = this.screensGroup.create(860,300,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(740,300,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.tint = 0x444444;
        
        
        this.makeButton(this.screen7);
    },
    
    screen7: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "Lucky for you\nyou're on the\ngood side.\n\nNow for your\nbasic training.", 45);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen8);  
    },
    
    screen8: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var pop = this.screensGroup.create(860,100,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(740,100,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.tint = 0x444444;
        
        var pop = this.screensGroup.create(860,300,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(740,300,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.tint = 0x444444;
        
        var pop = this.screensGroup.create(860,500,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(740,500,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.tint = 0x444444;
        
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "Our objective\nis to destroy their\nline of defenders.\nIf this happens\nwe win the battle\nand get credits\nfor upgrades.", 40);
        this.screensGroup.add(text);
        
        
        this.makeButton(this.screen9); 
    },
    
    screen9: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var pop = this.screensGroup.create(260,100,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(390,100,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.scale.x *= -1;
        pointer.tint = 0x444444;
        
        var pop = this.screensGroup.create(260,300,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(390,300,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.scale.x *= -1;
        pointer.tint = 0x444444;
        
        var pop = this.screensGroup.create(260,500,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(390,500,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.scale.x *= -1;
        pointer.tint = 0x444444;
        
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "The enemy's\nobjective is\nto get past our\ndefenders and\nattack our rear.", 40);
        this.screensGroup.add(text);
        
        
        this.makeButton(this.screen10);  
    },
    
    screen10: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        
        var pop = this.screensGroup.create(400,20,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(400,160,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.angle = -90;
        pointer.tint = 0x444444;
        
        
        
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "If that happens\nour health goes\ndown.\n\nIf our health\ngets depleted\nwe lose the battle.", 40);
        this.screensGroup.add(text);
        
        
        this.makeButton(this.screen11);  
    },
    
    screen11: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        
        var text2 = this.add.bitmapText(420, 100, 'immortal', "Now let's\ntalk troop\ndeployment!", 50);
        this.screensGroup.add(text2);
        
        this.makeButton(this.screen12);  
    },
    
    screen12: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "Start by selecting\nthe icon for\nthe type of\nunit you want\nto send out.\nWe'll start with\nknights.", 40);
        this.screensGroup.add(text);
        
        this.knightButton.tint = 0x00ff00;
        
        var pop = this.screensGroup.create(90,100,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(230,100,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.scale.x *= -1;
        pointer.tint = 0x444444;
        
        
        this.makeButton(this.screen13);  
    },
    
    screen13: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "Notice there are\ncurrently 5 of 5\nknights ready for\nbattle.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen14); 
    },
    
    screen14: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "With a unit type\nselected tap the\nscreen to send\nout troops.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen15);  
        
        var pop = this.screensGroup.create(600,140,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        this.knightText.text = '' + Main.maxKnights - 1;
        this.buildKnight(140);
        
    },
    
    screen15: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "A knight will\ngo towards your\nselected position\nand attack.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen16); 
    },
    
    screen16: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "Your avaliable\ntroops will go\ndown for a\nmoment.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen17);
    },
    
    screen17: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 170, 'menuTile1');
        backing.height = 260;
        var text = this.add.bitmapText(420, 180, 'immortal', "Soon more troops\nare ready for\nyou to tap\nthe screen to\nlaunch.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen18);  
        
        this.knightText.text = '' + Main.maxKnights;
    },
    
    screen18: function(){
        this.screensGroup.destroy();
        
        this.buildKnight(145);
        this.buildKnight(150);
        this.buildKnight(180);
        
        this.screensGroup = this.add.group();
        
        var pop = this.screensGroup.create(600,140,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pop1 = this.screensGroup.create(620,145,'pop','goodIn01.png');
        pop1.anchor.setTo(0.5,0.5);
        pop1.animations.add('pop', [0,1,2,3]);
        pop1.animations.play('pop', 4, true);
        pop1.alpha = 0.5;
        
        var pop2 = this.screensGroup.create(640,180,'pop','goodIn01.png');
        pop2.anchor.setTo(0.5,0.5);
        pop2.animations.add('pop', [0,1,2,3]);
        pop2.animations.play('pop', 4, true);
        pop2.alpha = 0.5;
        
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "Launching troops\nin groups can\nbe a good\nstrategy.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen19);  
        
        this.knightText.text = '' + Main.maxKnights - 3;
    },
    
    screen19: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        backing.width = 430;
        var text = this.add.bitmapText(420, 230, 'immortal', "A hole has\nformed! But there\nare many more\ndefenders to defeat!", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen20);
        
        this.knightText.text = '' + Main.maxKnights - 2;
    },
    
    screen20: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "Archers are a\nranged attack unit\ngood for offense\nand defense.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen21);
        
        this.knightText.text = '' + Main.maxKnights - 1;
    },
    
    screen21: function(){
        this.knightButton.tint = 0x0000ff;
        this.archerButton.tint = 0x00ff00;
        
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "To change your\nselected unit type\ntap the archer\nicon to the left.\nThe selected unit\ntype will show\ngreen.", 40);
        this.screensGroup.add(text);
        
        var pop = this.screensGroup.create(90,200,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(230,200,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.scale.x *= -1;
        pointer.tint = 0x444444;
        
        this.makeButton(this.screen22);
        
        this.knightText.text = '' + Main.maxKnights;
    },
    
    screen22: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "Tap the screen\nand an avaliable\narcher will move\ninto position.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen23);
        
        var pop = this.screensGroup.create(740,140,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        
        this.archerText.text = '' + Main.maxArchers -1;
        this.buildArcher(140,740);
        
    },
    
    screen23: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(414, 230, 'immortal', "Archers fire volleys\nof arrows at\nenemies from their\nposition.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen24);
        
    
    },
    
    screen24: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(414, 230, 'immortal', "Beware of\nenemy attacks!", 50);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen25);
        
        this.buildSkeleton(160);
        this.buildSkeleton(175);
    
    },
    
    screen25: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(414, 230, 'immortal', "Archers are\nvulnerable against\nattackers so use\nthem wisely.", 38);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen251);
        
        this.archerText.text = '' + Main.maxArchers;
    },
    
    screen251: function(){
        this.screensGroup.destroy();
        this.screensGroup = this.add.group();
        
        var pop = this.screensGroup.create(610,500,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.4;
    
        
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "Notice as enemies\nare vanquished\nyou gain more\nDragon Points.\nThese can be\nused to summon\nvarious dragons.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen252);
        
    },
    
    screen252: function(){
        this.screensGroup.destroy();
        this.screensGroup = this.add.group();
        
        var pop = this.screensGroup.create(190,70,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
        var pointer = this.screensGroup.create(330,70,'pointer');
        pointer.anchor.setTo(0.5,0.5);
        pointer.width = 250;
        pointer.height = 90;
        pointer.scale.x *= -1;
        pointer.tint = 0x444444;
        
        
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "To summon a\ndragon tap the\nunit icon on\nthe left.\nSummoning a\ndragon requires\nDragon Points.", 40);
        this.screensGroup.add(text);
        
        this.placingDragonTrap = true;
        this.knightButton.tint = 0x0000ff;
        this.archerButton.tint = 0x0000ff;
        
        this.makeButton(this.screen253);
        
    },
    
    screen253: function(){
        this.screensGroup.destroy();
        this.screensGroup = this.add.group();
        
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "At first only\nthe Trap Dragon\nwill be avaliable\nbut others will\nbe unlocked\nautomatically\nas you play.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen254);
        
    },
    
    screen254: function(){
        this.screensGroup.destroy();
        this.screensGroup = this.add.group();
        
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "Trap Dragons\nwill deploy\nbarriers that\ncan help slow\nattackers and\ndefend archers.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen255);
        
    },
    
    screen255: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "Tap the screen\nto position\nthe trap.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen256);
        
        this.buildDragonTrap(500,170);
        
        var pop = this.screensGroup.create(500,170,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 4, true);
        pop.alpha = 0.5;
        
    },
    
    screen256: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 220, 'menuTile1');
        backing.height = 210;
        var text = this.add.bitmapText(420, 230, 'immortal', "This will subtract\nfrom this rounds\navaliable Dragon\nPoints.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen26);
        
    },
    
    screen26: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        var text = this.add.bitmapText(420, 80, 'immortal', "As long as you\ntake out all their\ndefenders without\nlosing all your\nhealth you'll win!\nWin battles to\nearn credits.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen27);
    },
    
    screen27: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        backing.width = 440;
        var text = this.add.bitmapText(420, 80, 'immortal', "Use credits to\nupgrade units\nbetween battles.\nYou can refight\nold battles to get\nmore credits if\nthings get too hard.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen271); 
    },
    
    screen271: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        backing.width = 440;
        var text = this.add.bitmapText(420, 80, 'immortal', "Dragons will\nbe automatically\nupgraded as you\nplay but be sure\nto upgrade your\nother troops\nbetween battles.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen272); 
    },
    
    screen272: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        backing.width = 440;
        var text = this.add.bitmapText(420, 80, 'immortal', "You can save and\nload your progress\nthrough the Menu\non the World Map\nor disable the music\nand sound effects\nif you like.", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen28); 
    },
    
    screen28: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        backing.width = 440;
        var text = this.add.bitmapText(420, 80, 'immortal', "Well that's the gist\nof it. There may\nbe a bit more but\nyou'll figure it out.\n\nOr die trying...", 40);
        this.screensGroup.add(text);
        
        this.makeButton(this.screen29);
    },
    
    screen29: function(){
        this.screensGroup.destroy();
        
        this.screensGroup = this.add.group();
        var backing = this.screensGroup.create(390, 50, 'menuTile1');
        backing.width = 440;
        var text = this.add.bitmapText(420, 80, 'immortal', "Now go forth\nand lead these\ndopes to safety!", 50);
        this.screensGroup.add(text);
        
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 480,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(this.backToWorldMap,  this);
        var nextText = this.add.bitmapText(537, 460,'immortal','Exit', 40);
        this.screensGroup.add(nextText);  
    },
    
    
    walkItOut: function(it) {
        if(it.archer == false || it.skeletonArcher == false){
            if(it.skeletonDefender == false || it.knightDefender == false){
                if(game.time.now > it.countDown + 500){
                    it.animations.play('walk', 14, true);
                    it.body.velocity.x = it.speed;
                    it.countDown = 1;
                }
            }
        }
        if(it.knightDefender == true || it.skeletonDefender == true){
            if(game.time.now > it.countDown + 500){
                it.animations.play('wait', 14, true);
                it.countDown = 1;
            }
        }
        if(it.y < -30 || it.y > 600 || it.x < 0 || it.x > 1900){
            it.kill();
        }
            
    },
    
    buildKnight: function(y){
        var knight = this.knightGroup.getFirstDead(true, 270, y, 'knight', 'KnightAttackEast1.png');
            this.physics.arcade.enable(knight, Phaser.Physics.ARCADE);
            knight.anchor.setTo(0.5, 0.5);
            knight.body.bounce.setTo(0, 0);
            knight.body.setSize(40, 50);
            knight.body.maxVelocity.y = 0;
            knight.knight = true;
            knight.dwarf = false;
            knight.archer = false;
            knight.knightDefender = false;
            knight.body.immovable = false;
            knight.speed = Main.knightSpeed;
            knight.hp = Main.knightHP;
            knight.attackSpeed = Main.knightSpeed / 2;
            knight.attack = Main.knightDamage;
            knight.angle = 0;
            knight.countDown;
            knight.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(27, 37));
            knight.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 11));
            knight.animations.play('walk', 14, true);
            knight.body.velocity.x = Main.knightSpeed;
            knight.checkWorldBounds = true;
            knight.events.onOutOfBounds.add(this.thingDied, this);
            knight.events.onAnimationLoop.removeAll();
    },
    
    buildArcher: function(y, x) {

            var archer = this.knightGroup.getFirstDead(true, 280, y, 'archer', 'ArcherFallingEast1.png');
            this.physics.arcade.enable(archer, Phaser.Physics.ARCADE);
            archer.anchor.setTo(0.5, 0.5);
            archer.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(36, 43));
            archer.animations.add('stand', Phaser.ArrayUtils.numberArrayStep(13, 21));
            archer.animations.add('fire', [28,29,30,31,32,33,34,22,23,24,25,26,27]);
            archer.animations.play('walk', 20, true);
            archer.dwarf = false;
            archer.knight = false;
            archer.archer = true;
            archer.knightDefender = false;
            archer.body.immovable = false;
            archer.events.onAnimationLoop.removeAll();
            archer.angle = 0;
            archer.hp = Main.knightHP;
            archer.archer = true;
            
            archer.fireMarker = 0;
            archer.waitMarker = 0;
            archer.arrowAngle = -20;
            archer.arrowDirection = -150;
            
            var tween = this.add.tween(archer);
            tween.to({ x: x }, 3 + x * (Main.archerSpeed / 100), 'Linear', true, 0);
            tween.onComplete.addOnce(this.archerInPosition, this);

    },
    
    archerInPosition: function(archer){
        archer.animations.play('fire', 15, true);
        archer.events.onAnimationLoop.add(this.archerFire, this);
        archer.angle = archer.arrowAngle / 4;
        archer.body.velocity.x = 0;
        if(archer.alive == true){
            var arrow = this.goodArrowGroup.getFirstDead(true, archer.x, archer.y, 'arrow', 'arrow1.png');
            arrow.animations.add('go', [0]);
            arrow.animations.play('go', 20, true);
            this.physics.arcade.enable(arrow, Phaser.Physics.ARCADE);
            arrow.anchor.setTo(0.5, 0.5);
            arrow.body.velocity.x = 200;
            arrow.body.velocity.y = archer.arrowDirection;
            arrow.angle = archer.arrowAngle;
            arrow.attack = Main.archerDamage;
            arrow.range = Main.archerRange;
            arrow.countDown = 0;
            archer.arrowDirection += 75;
            archer.arrowAngle += 10;
            arrow.events.onAnimationLoop.add(this.arrowGo, this);
        }
    },
    
    arrowGo: function(arrow){
        arrow.countDown++;
        if(arrow.countDown > arrow.range){
            arrow.kill();
        }
    },
    
    archerFire: function(archer){
        if(archer.fireMarker < 4) {
            
            var arrow = this.goodArrowGroup.getFirstDead(true, archer.x, archer.y, 'arrow', 'arrow1.png');
            arrow.animations.add('go', [0]);
            arrow.animations.play('go', 20, true);
            
            this.physics.arcade.enable(arrow, Phaser.Physics.ARCADE);
            arrow.anchor.setTo(0.5, 0.5);
            arrow.body.velocity.x = 200;
            arrow.body.velocity.y = archer.arrowDirection;
            arrow.angle = archer.arrowAngle;
            arrow.attack = Main.archerDamage;
            archer.arrowDirection += 75;
            archer.arrowAngle += 10;
            arrow.countDown = 0;
            arrow.range = Main.archerRange;
            arrow.events.onAnimationLoop.add(this.arrowGo, this);
            
            archer.fireMarker++;
            archer.angle = archer.arrowAngle / 2;
        } else {
            archer.events.onAnimationLoop.removeAll();
            archer.arrowAngle = -20;
            archer.arrowDirection = -150;
            archer.waitMarker = 0;
            archer.fireMarker = 0;
            archer.angle = 0;
            archer.animations.play('stand', 10, true);
            archer.events.onAnimationLoop.add(this.archerWait, this);
        }
    },
    
    archerWait: function(archer) {
        archer.waitMarker++;
        if(archer.waitMarker > 3) {
            archer.events.onAnimationLoop.removeAll();
            archer.waitMarker = 0;
            this.archerInPosition(archer);         
        }
    },
    
    buildSkeleton: function(y){
            var skeleton = this.skeletonGroup.getFirstDead(true, 1000, y, 'skeleton', 'ShadowKnightAttackWest1.png');
            this.physics.arcade.enable(skeleton, Phaser.Physics.ARCADE);
            skeleton.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(19, 27));
            skeleton.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 9));
            skeleton.body.setSize(40, 50);
            skeleton.angle = 0;
            skeleton.speed = -130;
            skeleton.skeleton = true;
            skeleton.shadowKnight = false;
            skeleton.orc = false;
            skeleton.ogre = false;
            skeleton.skeletonDefender = false;
            skeleton.skeletonArcher = false;
            skeleton.body.immovable = false;
            skeleton.hp = 130;
            skeleton.attackSpeed = skeleton.speed / 2;
            skeleton.countDown;
            skeleton.attack = 10;
            skeleton.animations.play('walk', game.rnd.integerInRange(12, 16), true);
            skeleton.body.bounce.setTo(0, 0);
            skeleton.anchor.setTo(0.5, 0.5);
            skeleton.body.velocity.x = skeleton.speed;
            skeleton.events.onAnimationLoop.removeAll();
    },
    
    buildDragonTrap: function(x, y){
            this.currentPointsThisRound -= Main.dragonTrapBuildPoints;
            
            var blueDragon = this.redDragonGroup.getFirstDead(true, -50, y, 'blueDragon', 'BlueDragonFlyEast01.png');
            blueDragon.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(0, 8));
            blueDragon.animations.add('land', Phaser.ArrayUtils.numberArrayStep(18, 26));
            blueDragon.animations.add('launch', [35,34,33,32,31,30,29,28,27]);
            blueDragon.animations.add('flyWest', Phaser.ArrayUtils.numberArrayStep(9, 17));
            blueDragon.animations.play('flyEast', 8, true);
            blueDragon.events.onAnimationLoop.removeAll();
            
            blueDragon.counter = 0;   
            blueDragon.attackDragon = false;
            blueDragon.anchor.setTo(0.5, 0.5);

            var tween = this.add.tween(blueDragon);
            tween.to({ x: x }, 1000, 'Linear', true, 0);
            tween.onComplete.addOnce(this.dragonInTrapPosition, this);
        
    },
    
    dragonInTrapPosition: function(blueDragon){
        blueDragon.animations.play('land', 8, true);
        blueDragon.events.onAnimationLoop.addOnce(this.dragonTrapLaunch, this);
    },
    
    dragonTrapLaunch: function(blueDragon){
        blueDragon.animations.play('launch', 8, true);
        blueDragon.events.onAnimationLoop.addOnce(this.dragonFlyAway, this);
        
        var dragonTrap = this.goodBarrierGroup.getFirstDead(true, blueDragon.x, blueDragon.y, 'blueDragon', 'spikes.png');
        this.physics.arcade.enable(dragonTrap, Phaser.Physics.ARCADE);
        dragonTrap.body.immovable = true;
        dragonTrap.attack = Main.dragonTrapDamage;
        dragonTrap.hp = Main.dragonTrapHealth;
        dragonTrap.anchor.setTo(0.5, 0.5);
    },
    
    dragonFlyAway: function(blueDragon){
        blueDragon.animations.play('flyWest', 8, true);
        var tween = this.add.tween(blueDragon);
        tween.to({ x: blueDragon.x - 900}, 1000, 'Linear', true, 0);
        tween.onComplete.addOnce(this.thingDied, this);
    },
    
    thingDied: function(thing) {
        thing.kill();
    },
    
    bamItA: function(it) {
        var bam = this.explosionGroup.getFirstDead(true, it.x, it.y, 'explosionA', 'explosionA01.png');
        bam.anchor.setTo(0.5, 0.5);
        bam.animations.add('bam', Phaser.ArrayUtils.numberArrayStep(0, 4));
        bam.animations.play('bam', 8, true);
        bam.events.onAnimationLoop.add(this.thingDied, this); 
        bam.alpha = 1.0;
    },
    
    bleedItA: function(it){
        var blood = this.explosionGroup.getFirstDead(true, it.x, it.y, 'bloodA', 'blood1.png');
        blood.anchor.setTo(0.5, 0.5);
        blood.animations.add('bleed', Phaser.ArrayUtils.numberArrayStep(0, 4));
        blood.animations.play('bleed', 8, true);
        blood.events.onAnimationLoop.add(this.thingDied, this); 
        blood.alpha = 0.7;
    },
    
    makeButton: function(nextScene){
        var nextButton = this.screensGroup.create(this.world.centerX + 100, 450,'menuTile1');
        nextButton.width = 150;
        nextButton.height = 50;
        nextButton.anchor.setTo(0.5,0.5);
        nextButton.inputEnabled = true;
		nextButton.events.onInputDown.add(nextScene,  this);
        var nextText = this.add.bitmapText(537, 430,'immortal','Next', 40);
        this.screensGroup.add(nextText);  
    },
    
    update: function(){
        this.knightGroup.forEachExists(this.walkItOut, this);
        
        this.physics.arcade.collide(this.knightGroup, this.skeletonGroup, this.knightHitSkeleton, null, this);
        this.physics.arcade.overlap(this.goodArrowGroup, this.skeletonGroup, this.arrowHitIt, null, this);
        
        
        this.knightGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        this.skeletonGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        
        this.pointsCounter.text = 'Dragon Points: ' + this.currentPointsThisRound;
        
        if(this.currentPointsThisRound >= Main.dragonTrapBuildPoints){
            this.dragonTrapButton.tint = 0x0000ff;
        }
        if(this.currentPointsThisRound < Main.dragonTrapBuildPoints){
            this.dragonTrapButton.tint = 0x404040;
        }
        if(this.currentPointsThisRound >= Main.dragonTrapBuildPoints && this.placingDragonTrap){
            this.dragonTrapButton.tint = 0x88ff88;
        }  
        
        if(Main.sound){
            if(this.time.now > this.battleMusicLaunch){
                this.battleMusicLaunch = this.battleMusicRate + this.time.now;
                this.playBattleMusic();
            }
        }
    },
    
    knightHitSkeleton: function(knight, skeleton){
        if(knight.archer == false && skeleton.skeletonArcher == false && knight.knightDefender == false && skeleton.skeletonDefender == false) {
            if(knight.hp > 0 && skeleton.hp > 0){
                var blastIt = game.rnd.integerInRange(0, 100)
                if(blastIt < 2){
                    this.bleedItA(skeleton);
                }
                if(blastIt > 98){
                    this.bleedItA(knight);
                }

                knight.body.velocity.x = knight.attackSpeed;
                skeleton.body.velocity.x = skeleton.attackSpeed;
                knight.animations.play('fight', 14, true);
                knight.hp -= game.rnd.integerInRange(skeleton.attack - 5, skeleton.attack) / 10;
                skeleton.animations.play('fight', 14, true);
                skeleton.hp -= game.rnd.integerInRange(knight.attack - 5, knight.attack) / 10;
                skeleton.countDown = game.time.now;
                knight.countDown = game.time.now;
            }
            if(knight.hp <= 0) {
                if(knight.knight == true) {
                    this.killThisKnight(knight);
                    knight.kill();
                }

                skeleton.animations.play('walk', 14, true);
                skeleton.body.velocity.x = skeleton.speed;
            }
            if(skeleton.hp <= 0) {
                if(skeleton.skeleton == true) {
                    this.killThisSkeleton(skeleton);
                    skeleton.kill();
                }

                knight.animations.play('walk', 14, true);
                knight.body.velocity.x = Main.knightSpeed;
            }
        }
        
        if(knight.archer == true){
            this.killThisArcher(knight);
            knight.kill();
            }
        
        if(skeleton.skeletonArcher == true){
            this.killThisSkeletonArcher(skeleton);
            skeleton.kill();
        }
        
        if(skeleton.skeletonDefender == true && knight.archer == false){
            if(knight.hp > 0 && skeleton.hp > 0){
                var blastIt = game.rnd.integerInRange(0, 100)
                if(blastIt < 2){
                    this.bleedItA(knight);
                }
                if(blastIt > 98){
                    this.bleedItA(skeleton);
                }

                knight.body.velocity.x = knight.attackSpeed;
                knight.animations.play('fight', 14, true);
                knight.hp -= game.rnd.integerInRange(skeleton.attack - 5, skeleton.attack) / 10;
                skeleton.animations.play('fight', 14, true);
                skeleton.hp -= game.rnd.integerInRange(knight.attack - 5, knight.attack) / 10;
                skeleton.countDown = game.time.now;
                knight.countDown = game.time.now;
            }
            if(knight.hp <= 0){
                if(knight.knight == true){
                    this.killThisKnight(knight);
                    knight.kill();
                }
            
                skeleton.animations.play('wait', 14, true);
            }
            if(skeleton.hp <= 0){
                this.killThisSkeleton(skeleton);
                skeleton.kill();
                knight.animations.play('walk', 14, true);
                knight.body.velocity.x = knight.speed;
            }
        }
        
        if(knight.knightDefender == true && skeleton.skeletonArcher == false){
            if(skeleton.hp > 0 && knight.hp > 0){
                var blastIt = game.rnd.integerInRange(0, 100)
                if(blastIt < 2){
                    this.bleedItA(skeleton);
                }
                if(blastIt > 98){
                    this.bleedItA(knight);
                }

                skeleton.body.velocity.x = skeleton.attackSpeed;
                skeleton.animations.play('fight', 14, true);
                skeleton.hp -= game.rnd.integerInRange(knight.attack - 5, knight.attack) / 10;
                knight.animations.play('fight', 14, true);
                knight.hp -= game.rnd.integerInRange(skeleton.attack - 5, skeleton.attack) / 10;
                knight.countDown = game.time.now;
                skeleton.countDown = game.time.now;
            }
            if(skeleton.hp <= 0){
                if(skeleton.skeleton == true){
                    this.killThisSkeleton(skeleton);
                    skeleton.kill();
                }
                knight.animations.play('wait', 14, true);
            }
            if(knight.hp <= 0){
                this.killThisRedKnight(knight);
                knight.kill();
                skeleton.animations.play('walk', 14, true);
                skeleton.body.velocity.x = skeleton.speed;
            }
        }
    },
    
    arrowHitIt: function(arrow, it){
        it.body.velocity.x = it.body.velocity.x * 0.9;
        if(it.skeletonDefender === true || it.barrier === true){
            it.hp -= (arrow.attack / 2);
        } else {
            it.hp -= arrow.attack;
        }
        this.bamItA(it);
        arrow.kill();

        if(it.knight == true && it.hp <= 0){
            this.killThisKnight(it);
            it.kill();
        }
        
        if(it.archer == true && it.hp <= 0){
            this.killThisArcher(it);
            it.kill();
        }
        
        
        if(it.skeleton == true && it.hp <= 0){
            this.killThisSkeleton(it);
            it.kill();
        }
        
        if(it.skeletonArcher == true && it.hp <= 0){
            this.killThisSkeletonArcher(it);
            it.kill();
        }
        
        if(it.skeletonDefender && it.hp <= 0){
            this.killThisSkeleton(it);
            it.kill();
        }
        if(it.knightDefender && it.hp <= 0){
            this.killThisKnight(it);
            it.kill();
        }
        
        
    },
    
    killThisKnight: function(knight){
        var fall = this.fallGroup.getFirstDead(true, knight.x, knight.y, 'knight', 'KnightAttackEast1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(12, 25));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
    },
    
    killThisRedKnight: function(knight){
        var fall = this.fallGroup.getFirstDead(true, knight.x, knight.y, 'redKnight', 'RedKnight2Attack01.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(13, 21));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
    },
    
    killThisSkeleton: function(skeleton){
        var fall = this.fallGroup.getFirstDead(true, skeleton.x, skeleton.y, 'skeleton', 'SkeletonAttackWest1');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(10, 18));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
        if(skeleton.skeletonDefender){
            this.makePoints('50Points.png', skeleton);
            this.pointsThisRound += 50;
            this.currentPointsThisRound += 50;
        }else {
            this.makePoints('10Points.png', skeleton);
            this.pointsThisRound += 10;
            this.currentPointsThisRound += 10;
        }
    },
    
    killThisArcher: function(archer){
        var fall = this.fallGroup.getFirstDead(true, archer.x, archer.y, 'archer', 'ArcherFallingEast1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(0, 11));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
    },
    
    killThisSkeletonArcher: function(skeletonArcher){
        var fall = this.fallGroup.getFirstDead(true, skeletonArcher.x, skeletonArcher.y, 'skeletonArcher', 'SkeletonArcherFallingWest1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(0, 8));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
    },
    
    makePoints: function(image, it){
        var points = this.pointsGroup.getFirstDead(true, it.x, it.y, 'points', image);
            points.anchor.setTo(0.5, 0.5);
            points.width = 56;
            points.height = 35;
            points.alpha = 0.85;
        
        var tween = this.add.tween(points);
            tween.to({ y: it.y - 50 }, 1000, 'Linear', true, 0);
            tween.onComplete.addOnce(this.thingDied, this);
    }
};