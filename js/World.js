Main.World = function (game) {
    this.mapBackground;
    this.upgradeMenuButton;
    this.upgradeMenu;
    this.mainButtonsGroup;
    this.upgradeMenuGroup;
    this.upgradeText;
    this.contractButton;
    this.contractText1;
    this.contractText2;
    this.colorPicker;
    this.waterAnimal;
};

Main.World.prototype = {
    
    create: function(){
        this.inMenu = false;
        this.colorPicker = 1;
        this.colorChangerRate = 1240;
        this.colorChangerLaunch = this.time.now;
        this.waterAnimalLaunch = this.time.now;
        this.mapBackground = this.add.image(0, 0, 'map');
        this.buildMainButtons();
        if(Main.sound){
            this.worldMusic = this.add.audio('worldMusic');
            this.musicRate = 19850;
            this.musicLaunch = this.time.now + 2500;
            
            this.gong = this.add.audio('grunt2');
            this.gong.volume = 0.3;
            this.gong.play();
            
        }
        
        this.dragonCheck();
        if(window.cordova){
            Main.interstitial = Cocoon.Ad.AdMob.createInterstitial("ca-app-pub-9388951531846475/3004825544");
            Main.interstitial.load();
        }
    },
    
    playMusic: function(){
        if(Main.sound){
            this.worldMusic.volume = 0.2;
            this.worldMusic.play();
        }
    },
    
    buildMainButtons: function(){
        this.mainButtonsGroup = this.add.group();
        
        if(Main.highLevel >= 1){
            if(Main.highLevel == 1){
                var startText = this.add.bitmapText(27, 470, 'immortal', "Start", 35);
                startText.tint = 0xff1111;
				startText.inputEnabled = true;
				startText.events.onInputDown.add(this.launchBattle1, this);
				
				var levelText = this.add.bitmapText(29, 400, 'immortal', "Level", 35);
                levelText.tint = 0xff1111;
				levelText.inputEnabled = true;
				levelText.events.onInputDown.add(this.launchBattle1, this);
                this.mainButtonsGroup.add(startText);
				this.mainButtonsGroup.add(levelText);
                this.buildBattleButton(50, 430, 'redCircle', this.launchBattle1, 65, 435, '1');
            } else {
                this.buildBattleButton(50, 430, 'blueCircle', this.launchBattle1, 65, 435, '1');
                this.makeDot(70,420);
                this.makeDot(72,400);
                this.makeDot(75,380);
            }
        }
        
        if(Main.highLevel >= 2){
            if(Main.highLevel == 2){
                this.buildBattleButton(60, 330, 'redCircle', this.launchBattle2, 71, 335, '2');
            } else {
                this.buildBattleButton(60, 330, 'blueCircle', this.launchBattle2, 71, 335, '2');
                this.makeDot(110, 340);
                this.makeDot(135, 330);
                this.makeDot(160, 320);
            }
        }
        
        if(Main.highLevel >= 3){
            if(Main.highLevel == 3){
                this.buildBattleButton(170, 290, 'redCircle', this.launchBattle3, 183, 295, '3');
            } else {
                this.buildBattleButton(170, 290, 'blueCircle', this.launchBattle3, 183, 295, '3');
                this.makeDot(220, 315);
                this.makeDot(245, 325);
                this.makeDot(270, 338);
            }
        }
    
        if(Main.highLevel >= 4){
            if(Main.highLevel == 4){
                this.buildBattleButton(280, 330, 'redCircle', this.launchBattle4, 291, 335, '4');
            } else {
                this.buildBattleButton(280, 330, 'blueCircle', this.launchBattle4, 291, 335, '4');
                this.makeDot(340, 348);
                this.makeDot(370, 344);
                this.makeDot(400, 340);
            }
        }
        
        if(Main.highLevel >= 5){
            if(Main.highLevel == 5){
                this.buildBattleButton(420, 310, 'redCircle', this.launchBattle5, 432, 316, '5');
            } else {
                this.buildBattleButton(420, 310, 'blueCircle', this.launchBattle5, 432, 316, '5');
                this.makeDot(425, 295);
                this.makeDot(410, 275);
                this.makeDot(395, 255);
            }
        }
        
        if(Main.highLevel >= 6){
            if(Main.highLevel == 6){
                this.buildBattleButton(360, 210, 'redCircle', this.launchBattle6, 372, 216, '6');
            } else {
                this.buildBattleButton(360, 210, 'blueCircle', this.launchBattle6, 372, 216, '6');
                this.makeDot(395, 205);
                this.makeDot(412, 190);
                this.makeDot(427, 175);
            }
        }
        
        if(Main.highLevel >= 7){
            if(Main.highLevel == 7){
                this.buildBattleButton(430, 130, 'redCircle', this.launchBattle7, 443, 136, '7');
            } else {
                this.buildBattleButton(430, 130, 'blueCircle', this.launchBattle7, 443, 136, '7');
                this.makeDot(412, 145);
                this.makeDot(385, 140);
                this.makeDot(360, 135);
            }
        }
        
        if(Main.highLevel >= 8){
            if(Main.highLevel == 8){
                this.buildBattleButton(305, 110, 'redCircle', this.launchBattle8, 318, 116, '8');
            } else {
                this.buildBattleButton(305, 110, 'blueCircle', this.launchBattle8, 318, 116, '8');
                this.makeDot(352, 99);
                this.makeDot(372, 79);
                this.makeDot(392, 59);
            }
        }
        
        if(Main.highLevel >= 9){
            if(Main.highLevel == 9){
                this.buildBattleButton(395, 20, 'redCircle', this.launchBattle9, 409, 26, '9');
            } else {
                this.buildBattleButton(395, 20, 'blueCircle', this.launchBattle9, 409, 26, '9');
                this.makeDot(450, 50);
                this.makeDot(480, 60);
                this.makeDot(510, 70);
            }
        }
        
        if(Main.highLevel >= 10){
            if(Main.highLevel == 10){
                this.buildBattleButton(530, 70, 'redCircle', this.launchBattle10, 535, 75, '10');
            } else {
                this.buildBattleButton(530, 70, 'blueCircle', this.launchBattle10, 535, 75, '10');
                this.makeDot(550, 120);
                this.makeDot(550, 150);
                this.makeDot(550, 180);
            }
        }
        
        if(Main.highLevel >= 11){
            if(Main.highLevel == 11){
                this.buildBattleButton(530, 190, 'redCircle', this.launchBattle11, 537, 195, '11');
            } else {
                this.buildBattleButton(530, 190, 'blueCircle', this.launchBattle11, 537, 195, '11');
                this.makeDot(585,210);
                this.makeDot(615,215);
                this.makeDot(645,220);
            }
        }
        
        if(Main.highLevel >= 12){
            if(Main.highLevel == 12){
                this.buildBattleButton(660, 200, 'redCircle', this.launchBattle12, 667, 205, '12');
            } else {
                this.buildBattleButton(660, 200, 'blueCircle', this.launchBattle12, 667, 205, '12');
                this.makeDot(675,180);
                this.makeDot(675,150);
                this.makeDot(675,120);
            }
        }
        
        if(Main.highLevel >= 13){
            if(Main.highLevel == 13){
                this.buildBattleButton(650, 60, 'redCircle', this.launchBattle13, 657, 65, '13');
            } else {
                this.buildBattleButton(650, 60, 'blueCircle', this.launchBattle13, 657, 65, '13');
                this.makeDot(705,60);
                this.makeDot(730,55);
                this.makeDot(755,50);
            }
        }
        
        if(Main.highLevel >= 14){
            if(Main.highLevel == 14){
                this.buildBattleButton(770, 20, 'redCircle', this.launchBattle14, 777, 25, '14');
            } else {
                this.buildBattleButton(770, 20, 'blueCircle', this.launchBattle14, 777, 25, '14');
                this.makeDot(800,65);
                this.makeDot(810,85);
                this.makeDot(820,105);
            }
        }
        
        if(Main.highLevel >= 15){
            if(Main.highLevel == 15){
                this.buildBattleButton(810, 120, 'redCircle', this.launchBattle15, 817, 125, '15');
            } else {
                this.buildBattleButton(810, 120, 'blueCircle', this.launchBattle15, 817, 125, '15');
            }
        }
        
        var menuButton = this.mainButtonsGroup.create(658 , 460, 'menuTile1');
        menuButton.width = 280;
        menuButton.height = 65;
        menuButton.inputEnabled = true;
        menuButton.events.onInputDown.add(this.buildMainMenu, this);
        var menuText = this.add.bitmapText(735, 470, 'immortal', 'Menu', 45);
        
        this.upgradeMenuButton = this.add.image(658,340,'menuTile1');
        this.upgradeMenuButton.width = 280;
        this.upgradeMenuButton.height = 120;
        this.upgradeMenuButton.inputEnabled = true;
		this.upgradeMenuButton.events.onInputDown.add(this.buildUpgradeMenu, this);
        this.upgradeText = this.add.bitmapText(675, 350, 'immortal', 'Upgrades', 55);
        var creditsText = this.add.bitmapText(676, 415, 'immortal', 'Credits:$' + Main.credits, 32);
        
        var howToPlayIslandText = this.add.bitmapText(330, 460, 'immortal', ' How To\nPlay Island', 20);
        howToPlayIslandText.inputEnabled = true;
        howToPlayIslandText.events.onInputDown.add(this.howToPlayGo, this);
        howToPlayIslandText.tint = 0x000000;
        
        if(Main.highLevel > 7){
            this.contractButton = this.mainButtonsGroup.create(790 , 267, 'menuTile1');
            this.contractButton.width = 140;
            this.contractButton.height = 70;
            this.contractButton.tint = 0xff0000;
            this.contractButton.inputEnabled = true;
            this.contractButton.events.onInputDown.add(this.defenseContractMenu, this);
            this.contractText1 = this.add.bitmapText(798, 272, 'immortal', 'Defense', 33);
            this.contractText2 = this.add.bitmapText(798, 302, 'immortal', 'Contract', 30);
            this.mainButtonsGroup.add(this.contractText1);
            this.mainButtonsGroup.add(this.contractText2);
        } 
        
        this.mainButtonsGroup.add(this.upgradeMenuButton);
        this.mainButtonsGroup.add(this.upgradeText);
        this.mainButtonsGroup.add(menuButton);
        this.mainButtonsGroup.add(menuText);
        this.mainButtonsGroup.add(howToPlayIslandText);
        this.mainButtonsGroup.add(creditsText);
        
       
    },
    
    buildMainMenu: function(){
        this.inMenu = true;
        this.mainButtonsGroup.destroy();
        this.upgradeMenuGroup = this.add.group();
    
        var backing = this.upgradeMenuGroup.create(this.world.centerX, 0, 'menuTile1');
        backing.anchor.setTo(0.5,0);
        backing.width = 460;
        backing.height = 540;
        backing.tint = 0x999999;
        
        var exitButton = this.upgradeMenuGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.killUpgradeMenu, this);
        var exitText = this.add.bitmapText(this.world.centerX, 515, 'immortal', 'Exit', 40);
        exitText.anchor.setTo(0.5,0.5);
        this.upgradeMenuGroup.add(exitText);
        
        var howToButton = this.upgradeMenuGroup.create(this.world.centerX , 230, 'menuTile1');
        howToButton.anchor.setTo(0.5,0.5);
        howToButton.width = 320;
        howToButton.height = 80;
        howToButton.inputEnabled = true;
        howToButton.events.onInputDown.add(this.howToPlayGo, this);
        var howToText = this.add.bitmapText(this.world.centerX, 235, 'immortal', 'How to Play', 45);
        howToText.anchor.setTo(0.5,0.5);
        
        var infoButton = this.upgradeMenuGroup.create(this.world.centerX - 78 , 325, 'menuTile1');
        infoButton.width = 163;
        infoButton.height = 80;
        infoButton.inputEnabled = true;
        infoButton.events.onInputDown.add(this.infoScreen, this);
        infoButton.anchor.setTo(0.5,0.5);
        var infoText = this.add.bitmapText(this.world.centerX - 78 , 330, 'immortal', 'Info', 45);
        infoText.anchor.setTo(0.5,0.5);
        
        var soundButton = this.upgradeMenuGroup.create(this.world.centerX + 78 , 325, 'menuTile1');
        soundButton.width = 163;
        soundButton.height = 80;
        soundButton.inputEnabled = true;
        soundButton.events.onInputDown.add(this.soundScreen, this);
        soundButton.anchor.setTo(0.5,0.5);
        var soundText = this.add.bitmapText(this.world.centerX + 78 , 330, 'immortal', 'Sound', 45);
        soundText.anchor.setTo(0.5,0.5);
        
        var saveButton = this.upgradeMenuGroup.create(this.world.centerX - 78 , 420, 'menuTile1');
        saveButton.width = 163;
        saveButton.height = 80;
        saveButton.inputEnabled = true;
        saveButton.anchor.setTo(0.5,0.5);
        saveButton.events.onInputDown.add(this.saveThisGame, this);
        var saveText = this.add.bitmapText(this.world.centerX - 78, 425, 'immortal', 'Save', 45);
        saveText.anchor.setTo(0.5,0.5);
        
        var loadButton = this.upgradeMenuGroup.create(this.world.centerX + 78 , 420, 'menuTile1');
        loadButton.width = 163;
        loadButton.height = 80;
        loadButton.inputEnabled = true;
        loadButton.anchor.setTo(0.5,0.5);
        loadButton.events.onInputDown.add(this.loadSavedGame, this);
        var loadText = this.add.bitmapText(this.world.centerX + 78, 425, 'immortal', 'Load', 45);
        loadText.anchor.setTo(0.5,0.5);
        
        var magePic = this.upgradeMenuGroup.create(this.world.centerX - 160, 110, 'mage', 'MageFacingSouth.png');
        magePic.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(1, 13));
        magePic.animations.play('walk', 6, true);
        magePic.anchor.setTo(0.5,0.5);
        magePic.scale.x *= 2;
        magePic.scale.y *= 2;
        magePic.alpha = 0.5;
        
        var magePic2 = this.upgradeMenuGroup.create(this.world.centerX + 160, 110, 'badMagic', 'BadIn1.png');
        magePic2.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(21, 33));
        magePic2.animations.play('spell', 8, true);
        magePic2.anchor.setTo(0.5,0.5);
        magePic2.scale.x *= 2;
        magePic2.scale.y *= 2;
        magePic2.alpha = 0.5;
        
        var headText = this.add.bitmapText(this.world.centerX, 80, 'immortal', 'Battles of', 60);
        headText.anchor.setTo(0.5,0.5);
        
        var headText2 = this.add.bitmapText(this.world.centerX, 140, 'immortal', 'Eastmarch', 60);
        headText2.anchor.setTo(0.5,0.5);
        
        
        this.upgradeMenuGroup.add(howToText);
        this.upgradeMenuGroup.add(loadText);
        this.upgradeMenuGroup.add(saveText);
        this.upgradeMenuGroup.add(infoText);
        this.upgradeMenuGroup.add(soundText);
        this.upgradeMenuGroup.add(headText);
        this.upgradeMenuGroup.add(headText2);
        
    },
    
    makeDot: function(x,y){
        var dot = this.mainButtonsGroup.create(x, y, 'redCircle');
        dot.tint = 0x000000;
        dot.width = 10;
        dot.height = 10;
        dot.anchor.setTo(0.5,0.5);
        dot.alpha = 0.7;
    },
    
    buildBattleButton: function(x, y, image, launch, numberX, numberY, number){ 
        var battle = this.mainButtonsGroup.create(x, y, image);
        battle.inputEnabled = true;
        battle.events.onInputDown.add(launch, this);
        battle.scale.x *= 1.7;
        battle.scale.y *= 1.7;
        var battleText = this.add.bitmapText(numberX, numberY, 'immortal', '' + number, 30);
        this.mainButtonsGroup.add(battleText);
    },
    
    buildUpgradeMenu: function(){
        
        this.inMenu = true;
        
        this.mainButtonsGroup.destroy();
        this.upgradeMenuGroup = this.add.group();
        var background = this.upgradeMenuGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        var backing = this.upgradeMenuGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.7;
        
        var exitButton = this.upgradeMenuGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.killUpgradeMenu, this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.upgradeMenuGroup.add(exitText);
        
        var knightButton = this.upgradeMenuGroup.create(70, 40, 'menuTile1');
        knightButton.height = 200;
        knightButton.width = 200;
        knightButton.inputEnabled = true;
		knightButton.events.onInputDown.add(this.buildKnightUpgradeMenu, this);
        var knightPic = this.upgradeMenuGroup.create(130, 80, 'knight', 'KnightStanding.png');
        knightPic.scale.x *= 2;
        knightPic.scale.y *= 2;
        
        if(Main.credits >= Main.knightAttackUpgradeCost || Main.credits >= Main.knightBuildTimeUpgradeCost || Main.credits >= Main.knightHealthUpgradeCost || Main.credits >= Main.knightMaxKnightsUpgradeCost || Main.credits >= Main.knightSpeedUpgradeCost) {
            var knightUpgradeText = this.add.bitmapText(105, 163, 'immortal', 'Upgrades\nAvaliable', 30);
            this.upgradeMenuGroup.add(knightUpgradeText);
        }
        
        var archerButton = this.upgradeMenuGroup.create(this.world.centerX, 143, 'menuTile1');
        archerButton.height = 200;
        archerButton.width = 200;
        archerButton.anchor.setTo(0.5, 0.5);
        archerButton.inputEnabled = true;
		archerButton.events.onInputDown.add(this.buildArcherUpgradeMenu, this);
        var archerPic = this.upgradeMenuGroup.create(450, 80, 'archer', 'ArcherStandingSouth.png');
        archerPic.scale.x *= 2;
        archerPic.scale.y *= 2;
        
        if(Main.credits >= Main.archerBuildTimeUpgradeCost || Main.credits >= Main.archerDamageUpgradeCost || Main.credits >= Main.archerMaxArchersUpgradeCost || Main.credits >= Main.archerRangeUpgradeCost || Main.credits >= Main.archerSpeedUpgradeCost) {
            var archerUpgradeText = this.add.bitmapText(415, 163, 'immortal', 'Upgrades\nAvaliable', 30);
            this.upgradeMenuGroup.add(archerUpgradeText);
        }
        
        var dwarfButton = this.upgradeMenuGroup.create(690, 40, 'menuTile1');
        dwarfButton.height = 200;
        dwarfButton.width = 200;
        if(Main.highLevel > 3){
            dwarfButton.inputEnabled = true;
            dwarfButton.events.onInputDown.add(this.buildDwarfUpgradeMenu, this);
            var dwarfPic = this.upgradeMenuGroup.create(755, 80, 'dwarf', 'DwarfStanding.png');
            dwarfPic.scale.x *= 2;
            dwarfPic.scale.y *= 2;

            if(Main.credits >= Main.dwarfAttackUpgradeCost || Main.credits >= Main.dwarfBuildTimeUpgradeCost || Main.credits >= Main.dwarfHealthUpgradeCost || Main.credits >= Main.dwarfMaxDwarfUpgradeCost || Main.credits >= Main.dwarfSpeedUpgradeCost) {
                var dwarfUpgradeText = this.add.bitmapText(720, 163, 'immortal', 'Upgrades\nAvaliable', 30);
                this.upgradeMenuGroup.add(dwarfUpgradeText);
            }
        } else {
            var dwarfLock = this.upgradeMenuGroup.create(766,110,'lock');
            dwarfButton.tint = 0x888888;
        }
        
        var dragonButton = this.upgradeMenuGroup.create(70, 262, 'menuTile1');
        dragonButton.height = 200;
        dragonButton.width = 200;
        dragonButton.inputEnabled = true;
		dragonButton.events.onInputDown.add(this.buildDragonUpgradeMenu, this);
        var dragonPic = this.upgradeMenuGroup.create(80, 282, 'blueDragon', 'BlueDragonFlyEast02.png');
        dragonPic.scale.x *= 1.7;
        dragonPic.scale.y *= 1.7;
        
        var cavalryButton = this.upgradeMenuGroup.create(this.world.centerX, 262, 'menuTile1');
        cavalryButton.anchor.setTo(0.5, 0);
        cavalryButton.height = 200;
        cavalryButton.width = 200;
        if(Main.highLevel > 5){
            cavalryButton.inputEnabled = true;
            cavalryButton.events.onInputDown.add(this.buildCavalryUpgradeMenu, this);
            var cavalryPic = this.upgradeMenuGroup.create(395, 292, 'cavalry', 'CavalryStandingEast.png');
            cavalryPic.scale.x *= 1.7;
            cavalryPic.scale.y *= 1.7;

            if(Main.credits >= Main.cavalryAttackUpgradeCost || Main.credits >= Main.cavalryBuildTimeUpgradeCost || Main.credits >= Main.cavalryMaxCavalryUpgradeCost) {
                var cavalryUpgradeText = this.add.bitmapText(412, 383, 'immortal', 'Upgrades\nAvaliable', 30);
                this.upgradeMenuGroup.add(cavalryUpgradeText);
            }
        } else {
            var cavalryLock = this.upgradeMenuGroup.create(460, 330,'lock');
            cavalryButton.tint = 0x888888;
        }
        
        var mageButton = this.upgradeMenuGroup.create(690, 262, 'menuTile1');
        mageButton.height = 200;
        mageButton.width = 200;
        if(Main.highLevel > 7){
            mageButton.inputEnabled = true;
            mageButton.events.onInputDown.add(this.buildMageUpgradeMenu, this);
            var magePic = this.upgradeMenuGroup.create(760, 306, 'mage', 'MageFacingSouth.png');
            magePic.scale.x *= 2;
            magePic.scale.y *= 2;
            if(Main.credits >= 10000 && (Main.waterMagicUnlocked == false || Main.fireMagicUnlocked == false || Main.waterMagicUnlocked == false)){
                var magicUpgradeText = this.add.bitmapText(723, 383, 'immortal', 'Upgrades\nAvaliable', 30);
                this.upgradeMenuGroup.add(magicUpgradeText);
            }
        } else {
            var mageLock = this.upgradeMenuGroup.create(765, 330,'lock');
            mageButton.tint = 0x888888;
        }
        
    },

    howToPlayGo: function(){
        this.stopMusic();
        this.state.start('HowToPlay', true);
    },
    
    saveThisGame: function(){
        this.stopMusic();
        this.state.start('SaveGame', true);
    },
    
    loadSavedGame: function(){
        this.stopMusic();
        this.state.start('LoadGame', true);
    },
    
    infoScreen: function(){
        this.stopMusic();
        this.state.start('GameInfo', true);
    },
    
    soundScreen: function(){
        this.stopMusic();
        this.state.start('SoundMenu', true);
    },
    
    dragonCheck: function(){
        if(Main.dragonAttackUnlocked == false && Main.totalDragonPoints >= 2000 || Main.dragonFireUnlocked == false && Main.totalDragonPoints >= 5000 || Main.totalDragonPoints >= Main.dragonTrapUpgradePoints || Main.totalDragonPoints >= Main.dragonAttackUpgradePoints || Main.totalDragonPoints >= Main.dragonFireUpgradePoints) {
            if(Main.dragonAttackUnlocked == false && Main.totalDragonPoints >= 2000){
                Main.dragonAttackUnlocked = true;
                this.dragonPopUp(this.popUpGroup1, 'Defense Dragon Unlocked!', 'goldDragon', 'GoldDragonFlyEast01.png', 0xccffff);
            }
            if(Main.dragonFireUnlocked == false && Main.totalDragonPoints >= 5000){
                Main.dragonFireUnlocked = true;
                this.dragonPopUp(this.popUpGroup1, 'Fire Dragon Unlocked!', 'redDragon', 'RedDragonFlyEast01.png', 0xffccff);
            }
    
            while(Main.totalDragonPoints >= Main.dragonTrapUpgradePoints){
                this.dragonPopUp(this.popUpGroup1, 'New Upgrades Unlocked!', 'blueDragon', 'BlueDragonFlyEast01.png', 0xffffff);
                Main.dragonTrapDamage += 1;
                Main.dragonTrapHealth += 5;
                if(Main.dragonTrapBuildPoints > 50){
                    Main.dragonTrapBuildPoints -= 2;
                }
                Main.dragonTrapUpgradePoints += 1500;
            }
            
            while(Main.totalDragonPoints >= Main.dragonAttackUpgradePoints){
                this.dragonPopUp(this.popUpGroup1, 'New Upgrades Unlocked!', 'goldDragon', 'GoldDragonFlyEast01.png', 0xccffff);
                Main.dragonAttackDamage += 2;
                Main.dragonAttackHealth += 5;
                if(Main.dragonAttackBuildPoints > 150){
                    Main.dragonAttackBuildPoints -= 5;
                }
                Main.dragonAttackUpgradePoints += 2300;
            }
            
            while(Main.totalDragonPoints >= Main.dragonFireUpgradePoints){
                this.dragonPopUp(this.popUpGroup1, 'New Upgrades Unlocked!', 'redDragon', 'RedDragonFlyEast01.png', 0xffccff);
                Main.dragonFireDamage += 3;
                Main.dragonFireHealth += 7;
                if(Main.dragonFireBuildPoints > 230){
                    Main.dragonFireBuildPoints -= 5;
                }
                Main.dragonFireUpgradePoints += 3300;
            }
        } else if(Main.buildMenu){
            this.buildUpgradeMenu();
        }
    },
    
    dragonPopUp: function(group, text, picture1, picture2, tint){
        if(this.dragonGroup){
            this.dragonGroup.destroy();
        }
        this.mainButtonsGroup.destroy();
        this.inMenu = true;
        this.dragonGroup = this.add.group();
        
        var smallBacking = this.dragonGroup.create(80,60, 'menuTile1');
        smallBacking.width = 800;
        smallBacking.height = 330;
        
        var pic = this.dragonGroup.create(480, 250, picture1, picture2);
        pic.anchor.setTo(0.5,0.5);
        pic.scale.x *= 2;
        pic.scale.y *= 2;
        pic.tint = tint;
        
        var creditsText = this.add.bitmapText(this.world.centerX, 130, 'immortal', '' + text, 50);
        creditsText.anchor.setTo(0.5,0.5);
        this.dragonGroup.add(creditsText);
        
        this.makeButton(470, 430, 'View Upgrades!', this.buildDragonUpgradeMenu, this.dragonGroup, 340);
    },

    makeButton: function(x,y, text,callMe, group, width){
        var exitButton = group.create(x, y, 'menuTile1');
        exitButton.width = 200;
        if(width){
            exitButton.width = width;
        }
        exitButton.height = 60;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(callMe, this);
        var buttonText = this.add.bitmapText(x, y + 5, 'immortal', text, 40);
        buttonText.anchor.setTo(0.5, 0.5);
        group.add(buttonText);
    },
    
    defenseContractMenu: function(){
        this.inMenu = true;
        this.mainButtonsGroup.destroy();
        
        this.upgradeMenuGroup = this.add.group();
        var background = this.upgradeMenuGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        var backing = this.upgradeMenuGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.9;
        
        var exitButton = this.upgradeMenuGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.killUpgradeMenu, this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.upgradeMenuGroup.add(exitText);
        
        var headerText = this.add.bitmapText(90,30,'immortal','Defense Contracts',90);
        var explainText = this.add.bitmapText(80, 335,'immortal','Defense contracts can help you gain money to upgrade\nyour troops between battles.', 30);
        this.upgradeMenuGroup.add(headerText);
        this.upgradeMenuGroup.add(explainText);
        
        var contract1Button = this.upgradeMenuGroup.create(80, 130, 'menuTile1');
        contract1Button.height = 200;
        contract1Button.width = 240;
        contract1Button.tint = 0x009900;
        contract1Button.inputEnabled = true;
		contract1Button.events.onInputDown.add(this.contract1Go, this);
        var contract1Text = this.add.bitmapText(98, 170, 'immortal', 'Contract 1', 40);
        var contract1Text2 = this.add.bitmapText(135, 240, 'immortal', '$5000', 45);
        this.upgradeMenuGroup.add(contract1Text);
        this.upgradeMenuGroup.add(contract1Text2);
        
        var contract2Button = this.upgradeMenuGroup.create(360, 130, 'menuTile1');
        contract2Button.height = 200;
        contract2Button.width = 240;
        contract2Button.tint = 0x999900;
        contract2Button.inputEnabled = true;
		contract2Button.events.onInputDown.add(this.contract2Go, this);
        var contract2Text = this.add.bitmapText(375, 170, 'immortal', 'Contract 2', 40);
        var contract2Text2 = this.add.bitmapText(402, 240, 'immortal', '$10000', 45);
        this.upgradeMenuGroup.add(contract2Text);
        this.upgradeMenuGroup.add(contract2Text2);
        
        var contract3Button = this.upgradeMenuGroup.create(640, 130, 'menuTile1');
        contract3Button.height = 200;
        contract3Button.width = 240;
        contract3Button.tint = 0x990000;
        contract3Button.inputEnabled = true;
		contract3Button.events.onInputDown.add(this.contract3Go, this);
        var contract3Text = this.add.bitmapText(655, 170, 'immortal', 'Contract 3', 40);
        var contract3Text2 = this.add.bitmapText(680, 240, 'immortal', '$20000', 45);
        this.upgradeMenuGroup.add(contract3Text);
        this.upgradeMenuGroup.add(contract3Text2);
    },
    
    contract1Go: function(){
        this.stopMusic();
        Main.wager = 1;
        Main.defenseContract = true;
        this.state.start('StoryScenes', true);
        Main.currentLevel = 0;
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    contract2Go: function(){
        this.stopMusic();
        Main.wager = 2;
        Main.defenseContract = true;
        this.state.start('StoryScenes', true);
        Main.currentLevel = 0;
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    contract3Go: function(){
        this.stopMusic();
        Main.wager = 3;
        Main.defenseContract = true;
        this.state.start('StoryScenes', true);
        Main.currentLevel = 0;
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    killUpgradeMenu: function(){
        this.inMenu = false;
        this.upgradeMenuGroup.destroy();
        this.buildMainButtons();
    },
    
    launchBattle1: function(){
        this.stopMusic();
        Main.currentLevel = 1;
        Main.defenseContract = false;
        this.state.start('Level1Scene', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle2: function(){
        this.stopMusic();
        Main.currentLevel = 2;
        Main.defenseContract = false;
        this.state.start('Level2Scene', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle3: function(){
        this.stopMusic();
        Main.currentLevel = 3;
        Main.defenseContract = false;
        this.state.start('Level3Scene', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle4: function(){
        this.stopMusic();
        Main.currentLevel = 4;
        Main.defenseContract = false;
        this.state.start('Level4Scene', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle5: function(){
        this.stopMusic();
        Main.currentLevel = 5;
        Main.defenseContract = false;
        this.state.start('Level5Scene', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle6: function(){
        this.stopMusic();
        Main.currentLevel = 6;
        Main.defenseContract = false;
        this.state.start('Level6Scene', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle7: function(){
        this.stopMusic();
        Main.currentLevel = 7;
        Main.defenseContract = false;
        this.state.start('Level7Scene', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle8: function(){
        this.stopMusic();
        Main.currentLevel = 8;
        Main.defenseContract = false;
        this.state.start('StoryScenes', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle9: function(){
        this.stopMusic();
        Main.currentLevel = 9;
        Main.defenseContract = false;
        this.state.start('StoryScenes', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle10: function(){
        this.stopMusic();
        Main.currentLevel = 10;
        Main.defenseContract = false;
        this.state.start('StoryScenes', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle11: function(){
        this.stopMusic();
        Main.currentLevel = 11;
        Main.defenseContract = false;
        this.state.start('StoryScenes', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle12: function(){
        this.stopMusic();
        Main.currentLevel = 12;
        Main.defenseContract = false;
        this.state.start('StoryScenes', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle13: function(){
        this.stopMusic();
        Main.currentLevel = 13;
        Main.defenseContract = false;
        this.state.start('StoryScenes', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle14: function(){
        this.stopMusic();
        Main.currentLevel = 14;
        Main.defenseContract = false;
        this.state.start('StoryScenes', true);
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    launchBattle15: function(){
        this.stopMusic();
        Main.currentLevel = 15;
        this.state.start('StoryScenes', true);
        Main.defenseContract = false;
        if(window.cordova){
            Main.interstitial.show();
        }
    },
    
    buildKnightUpgradeMenu: function() {
        
        this.upgradeMenuGroup.destroy();
        
        this.knightUpgradeMenuGroup = this.add.group();
        
        var background = this.knightUpgradeMenuGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        
        
        var backing = this.knightUpgradeMenuGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.7;
        
        
        var exitButton = this.knightUpgradeMenuGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exitKnightMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.knightUpgradeMenuGroup.add(exitText);
        
        var pictureBacking = this.knightUpgradeMenuGroup.create(30, 30, 'menuTile1');
        pictureBacking.width = 880;
        pictureBacking.height = 190;
        pictureBacking.tint = 0x0000ff;
        var knightPic = this.knightUpgradeMenuGroup.create(70, 50, 'knight', 'KnightStanding.png');
        knightPic.scale.x *= 2;
        knightPic.scale.y *= 2;
        
        var defenderPic = this.knightUpgradeMenuGroup.create(270, 10, 'redKnightStand');
        defenderPic.scale.x *= 2;
        defenderPic.scale.y *= 2;
        
        var knightText = this.add.bitmapText(125, 50, 'immortal', ' Knight\nUpgrades', 50);
        this.knightUpgradeMenuGroup.add(knightText);
        
        var creditText = this.add.bitmapText(75, 167, 'immortal', 'Credits: $' + Main.credits, 40);
        this.knightUpgradeMenuGroup.add(creditText);
        
        var statText = this.add.bitmapText(495, 50, 'immortal', 'Current Stats', 40);
        this.knightUpgradeMenuGroup.add(statText);
        
        var statText1 = this.add.bitmapText(445, 100, 'immortal', 'Health: ' + Main.knightHP + '\nAttack: ' + (Main.knightDamage - 5) + "-" + Main.knightDamage + '\nSpeed: ' + Main.knightSpeed, 30);
        this.knightUpgradeMenuGroup.add(statText1);
        
        var statText2 = this.add.bitmapText(675, 100, 'immortal', 'Max: ' + Main.maxKnights + '\nBuild Time:\n' + Main.knightBuildTime / 1000 + ' Seconds', 30);
        this.knightUpgradeMenuGroup.add(statText2);
        
        var healthButton = this.knightUpgradeMenuGroup.create(40, 230, 'menuTile1');
        healthButton.width = 400;
        healthButton.height = 60;
        healthButton.inputEnabled = true;
        healthButton.tint = 0xff0000;
        if(Main.credits >= Main.knightHealthUpgradeCost){
            healthButton.events.onInputDown.add(this.knightHealth,  this);
            healthButton.tint = 0x00ff00;
        }
        var healthText = this.add.bitmapText(65, 242, 'immortal', 'Health $' + Main.knightHealthUpgradeCost, 40);
        this.knightUpgradeMenuGroup.add(healthText);
        
        var attackButton = this.knightUpgradeMenuGroup.create(40, 320, 'menuTile1');
        attackButton.width = 400;
        attackButton.height = 60;
        attackButton.inputEnabled = true;
        attackButton.tint = 0xff0000;
        if(Main.credits >= Main.knightAttackUpgradeCost){
            attackButton.events.onInputDown.add(this.knightAttack,  this);
            attackButton.tint = 0x00ff00;
        }
        var attackText = this.add.bitmapText(65, 331, 'immortal', 'Attack $' + Main.knightAttackUpgradeCost, 40);
        this.knightUpgradeMenuGroup.add(attackText);
        
        var speedButton = this.knightUpgradeMenuGroup.create(40, 410, 'menuTile1');
        speedButton.width = 400;
        speedButton.height = 60;
        speedButton.inputEnabled = true;
        speedButton.tint = 0xff0000;
        if(Main.credits >= Main.knightSpeedUpgradeCost){
		    speedButton.events.onInputDown.add(this.knightSpeed,  this);
            speedButton.tint = 0x00ff00;
        }
        var speedText = this.add.bitmapText(65, 420, 'immortal', 'Speed $' + Main.knightSpeedUpgradeCost, 40);
        this.knightUpgradeMenuGroup.add(speedText);
        
        var maxKnightsButton = this.knightUpgradeMenuGroup.create(435, 228, 'menuTile1');
        maxKnightsButton.width = 470;
        maxKnightsButton.height = 110;
        maxKnightsButton.inputEnabled = true;
        maxKnightsButton.tint = 0xff0000;
        if(Main.credits >= Main.knightMaxKnightsUpgradeCost){
		    maxKnightsButton.events.onInputDown.add(this.knightMax,  this);
            maxKnightsButton.tint = 0x00ff00;
        }
        var maxKnightsText = this.add.bitmapText(458, 240, 'immortal', 'Increase Max\n$' + Main.knightMaxKnightsUpgradeCost, 40);
        this.knightUpgradeMenuGroup.add(maxKnightsText);
        
        var buildTimeButton = this.knightUpgradeMenuGroup.create(435, 360, 'menuTile1');
        buildTimeButton.width = 470;
        buildTimeButton.height = 110;
        buildTimeButton.inputEnabled = true;
        buildTimeButton.tint = 0xff0000;
        if(Main.credits >= Main.knightBuildTimeUpgradeCost){
		    buildTimeButton.events.onInputDown.add(this.knightBuildTime,  this);
            buildTimeButton.tint = 0x00ff00;
        }
        var buildTimeText = this.add.bitmapText(468, 370, 'immortal', 'Decrease Build Time\n$' + Main.knightBuildTimeUpgradeCost, 40);
        this.knightUpgradeMenuGroup.add(buildTimeText);
        
    },
    
    knightHealth: function(){
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeKnightHealth);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Knight Health Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 10 Health to\nKnights and Defenders\nfor $' + Main.knightHealthUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeKnightHealth: function(){
        if(Main.credits >= Main.knightHealthUpgradeCost){
            Main.knightHP += 10;
            Main.credits -= Main.knightHealthUpgradeCost;
            if(Main.knightHealthUpgradeCost < 10000){
                Main.knightHealthUpgradeCost *= 2;
            } else {
                Main.knightHealthUpgradeCost += 5000;
            }
            this.gruntIt();
            
            this.reloadKnightMenu();
            
        }
    },
    
    knightAttack: function(){
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeKnightAttack);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Knight Attack Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Attack to\nKnights and Defenders\nfor $' + Main.knightAttackUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeKnightAttack: function(){
        if(Main.credits >= Main.knightAttackUpgradeCost){
            Main.knightDamage++;
            Main.credits -= Main.knightAttackUpgradeCost;
            if(Main.knightAttackUpgradeCost < 10000){
                Main.knightAttackUpgradeCost *= 2;    
            } else {
                Main.knightAttackUpgradeCost += 5000;
            }
            this.gruntIt(); 
            
            
            this.reloadKnightMenu();
        }
    },
    
    knightSpeed: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeKnightSpeed);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Knight Speed Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 10 Speed\nfor $' + Main.knightSpeedUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeKnightSpeed: function() {
        if(Main.credits >= Main.knightSpeedUpgradeCost){
            Main.knightSpeed += 10;
            Main.credits -= Main.knightSpeedUpgradeCost;
            Main.knightSpeedUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadKnightMenu();
        }
    },
    
    knightMax: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeKnightMax);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Max Knights Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Knight\nfor $' + Main.knightMaxKnightsUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeKnightMax: function() {
        if(Main.credits >= Main.knightMaxKnightsUpgradeCost){
            Main.maxKnights++;
            Main.credits -= Main.knightMaxKnightsUpgradeCost;
            Main.knightMaxKnightsUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadKnightMenu();
        }
    },
    
    knightBuildTime: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeKnightBuildTime);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Knight Build Time', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Decrease build time\nby 0.1 seconds\nfor $' + Main.knightBuildTimeUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeKnightBuildTime: function() {
        if(Main.credits >= Main.knightBuildTimeUpgradeCost){
            Main.knightBuildTime -= 100;
            Main.credits -= Main.knightBuildTimeUpgradeCost;
            Main.knightBuildTimeUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadKnightMenu();
        }
    },
    
    popUp: function() {
        
        if(this.knightUpgradeMenuGroup) {
            this.knightUpgradeMenuGroup.destroy();
        }
        if(this.upgradeGroup) {
            this.upgradeGroup.destroy();   
        }
        
        
        this.popUpGroup = this.add.group();
        
        var background = this.popUpGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        
        var backing = this.popUpGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.9;
        
        var smallBacking = this.popUpGroup.create(130,130, 'menuTile1');
        smallBacking.width = 700;
        smallBacking.height = 330;
        
        var topBacking = this.popUpGroup.create(-10,10,'menuTile1');
        topBacking.width = 960;
        topBacking.height = 110;
        
        var creditsText = this.add.bitmapText(this.world.centerX, 400, 'immortal','Your Credits: $' + Main.credits, 40);
        creditsText.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(creditsText);
    },
    
    makeUpgradeButton: function(x,y,text,callMe) {
        var exitButton = this.popUpGroup.create(x, y, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(callMe,  this);
        var buttonText = this.add.bitmapText(x, y + 5, 'immortal', text, 40);
        buttonText.anchor.setTo(0.5, 0.5);
        this.popUpGroup.add(buttonText);
    },
    
    reloadKnightMenu: function() {
        this.popUpGroup.destroy();
        this.buildKnightUpgradeMenu();
    },
    
    exitKnightMenu: function() {
        this.knightUpgradeMenuGroup.destroy();
        this.buildUpgradeMenu();
    },
    
    buildArcherUpgradeMenu: function() {
        
        this.upgradeMenuGroup.destroy();
        
        this.upgradeGroup = this.add.group();
        
        var background = this.upgradeGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        
        
        var backing = this.upgradeGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.7;
        
        var exitButton = this.upgradeGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exitArcherMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.upgradeGroup.add(exitText);
        
        
        var pictureBacking = this.upgradeGroup.create(30, 30, 'menuTile1');
        pictureBacking.width = 880;
        pictureBacking.height = 190;
        pictureBacking.tint = 0x0000ff;
        var archerPic = this.upgradeGroup.create(80, 50, 'archer', 'ArcherStandingSouth.png');
        archerPic.scale.x *= 2;
        archerPic.scale.y *= 2;
        
        var archerText = this.add.bitmapText(165, 50, 'immortal', ' Archer\nUpgrades', 50);
        this.upgradeGroup.add(archerText);
        
        var creditText = this.add.bitmapText(75, 167, 'immortal', 'Credits: $' + Main.credits, 40);
        this.upgradeGroup.add(creditText);
        
        var statText = this.add.bitmapText(495, 50, 'immortal', 'Current Stats', 40);
        this.upgradeGroup.add(statText);
        
        var statText1 = this.add.bitmapText(445, 100, 'immortal', 'Range: ' + Main.archerRange + '\nAttack: ' + Main.archerDamage + '\nSpeed: ' + (400 - Main.archerSpeed), 30);
        this.upgradeGroup.add(statText1);

        var statText2 = this.add.bitmapText(675, 100, 'immortal', 'Max: ' + Main.maxArchers + '\nBuild Time:\n' + Main.archerBuildTime / 1000 + ' Seconds', 30);
        this.upgradeGroup.add(statText2);
        
        var rangeButton = this.upgradeGroup.create(40, 230, 'menuTile1');
        rangeButton.width = 400;
        rangeButton.height = 60;
        rangeButton.inputEnabled = true;
        rangeButton.tint = 0xff0000;
        if(Main.credits >= Main.archerRangeUpgradeCost){
		    rangeButton.events.onInputDown.add(this.archerRange,  this);
            rangeButton.tint = 0x00ff00;
        }
        var rangeText = this.add.bitmapText(65, 242, 'immortal', 'Range  $' + Main.archerRangeUpgradeCost, 40);
        this.upgradeGroup.add(rangeText);
        
        
        var attackButton = this.upgradeGroup.create(40, 320, 'menuTile1');
        attackButton.width = 400;
        attackButton.height = 60;
        attackButton.inputEnabled = true;
        attackButton.tint = 0xff0000;
        if(Main.credits >= Main.archerDamageUpgradeCost){
		    attackButton.events.onInputDown.add(this.archerAttack,  this);
            attackButton.tint = 0x00ff00;
        }
        var attackText = this.add.bitmapText(65, 331, 'immortal', 'Attack $' + Main.archerDamageUpgradeCost, 40);
        this.upgradeGroup.add(attackText);
        
        var speedButton = this.upgradeGroup.create(40, 410, 'menuTile1');
        speedButton.width = 400;
        speedButton.height = 60;
        speedButton.inputEnabled = true;
        speedButton.tint = 0xff0000;
        if(Main.credits >= Main.archerSpeedUpgradeCost){
		    speedButton.events.onInputDown.add(this.archerSpeed,  this);
            speedButton.tint = 0x00ff00;
        }
        var speedText = this.add.bitmapText(65, 420, 'immortal', 'Speed $' + Main.archerSpeedUpgradeCost, 40);
        this.upgradeGroup.add(speedText);
        
        var maxArchersButton = this.upgradeGroup.create(435, 228, 'menuTile1');
        maxArchersButton.width = 470;
        maxArchersButton.height = 110;
        maxArchersButton.inputEnabled = true;
        maxArchersButton.tint = 0xff0000;
        if(Main.credits >= Main.archerMaxArchersUpgradeCost){
		    maxArchersButton.events.onInputDown.add(this.archerMax,  this);
            maxArchersButton.tint = 0x00ff00;
        }
        var maxArchersText = this.add.bitmapText(458, 240, 'immortal', 'Increase Max\n$' + Main.archerMaxArchersUpgradeCost, 40);
        this.upgradeGroup.add(maxArchersText);
        
        var buildTimeButton = this.upgradeGroup.create(435, 360, 'menuTile1');
        buildTimeButton.width = 470;
        buildTimeButton.height = 110;
        buildTimeButton.inputEnabled = true;
        buildTimeButton.tint = 0xff0000;
        if(Main.credits >= Main.archerBuildTimeUpgradeCost){
		    buildTimeButton.events.onInputDown.add(this.archerBuildTime,  this);
            buildTimeButton.tint = 0x00ff00;
        }
        var buildTimeText = this.add.bitmapText(468, 370, 'immortal', 'Decrease Build Time\n$' + Main.archerBuildTimeUpgradeCost, 40);
        this.upgradeGroup.add(buildTimeText);
        
        
    },
    
    archerRange: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadArcherMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeArcherRange);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Range Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Range\nfor $' + Main.archerRangeUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherRange: function() {
        if(Main.credits >= Main.archerRangeUpgradeCost){
            Main.archerRange++;
            Main.credits -= Main.archerRangeUpgradeCost;
            Main.archerRangeUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadArcherMenu();
        }
    },
    
    archerAttack: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadArcherMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeArcherAttack);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Attack Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Attack\nfor $' + Main.archerDamageUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherAttack: function() {
        if(Main.credits >= Main.archerDamageUpgradeCost) {
            Main.archerDamage++;
            Main.credits -= Main.archerDamageUpgradeCost;
            Main.archerDamageUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadArcherMenu();
        }
    },
    
    archerSpeed: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadArcherMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeArcherSpeed);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Speed Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 10 Speed\nfor $' + Main.archerSpeedUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherSpeed: function() {
        if(Main.credits >= Main.archerSpeedUpgradeCost){
            Main.archerSpeed -= 10;
            Main.credits -= Main.archerSpeedUpgradeCost;
            Main.archerSpeedUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadArcherMenu();
        }
    },
    
    archerMax: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadArcherMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeArcherMax);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Max Archers Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Archer\nfor $' + Main.archerMaxArchersUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherMax: function() {
        if(Main.credits >= Main.archerMaxArchersUpgradeCost){
            Main.maxArchers++;
            Main.credits -= Main.archerMaxArchersUpgradeCost;
            Main.archerMaxArchersUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadArcherMenu();
        }
    },
    
    archerBuildTime: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadArcherMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeArcherBuildTime);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Build Time', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Decrease Build Time\nby 0.2 Seconds\nfor $' + Main.archerBuildTimeUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherBuildTime: function() {
        if(Main.credits >= Main.archerBuildTimeUpgradeCost){
            Main.archerBuildTime -= 200;
            Main.credits -= Main.archerBuildTimeUpgradeCost;
            Main.archerBuildTimeUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadArcherMenu();
        }
    },
    
    reloadArcherMenu: function() {
        this.popUpGroup.destroy();
        this.buildArcherUpgradeMenu();
    },
    
    exitArcherMenu: function() {
        this.upgradeGroup.destroy();
        this.buildUpgradeMenu();
    },
    
    buildDwarfUpgradeMenu: function() {
        
        this.upgradeMenuGroup.destroy();
        this.upgradeGroup = this.add.group();
        
        var background = this.upgradeGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        var backing = this.upgradeGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.7;
        
        
        var exitButton = this.upgradeGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exitArcherMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.upgradeGroup.add(exitText);
        
        
        var pictureBacking = this.upgradeGroup.create(30, 30, 'menuTile1');
        pictureBacking.width = 880;
        pictureBacking.height = 190;
        pictureBacking.tint = 0x0000ff;
        var dwarfPic = this.upgradeGroup.create(80, 50, 'dwarf', 'DwarfStanding.png');
        dwarfPic.scale.x *= 2;
        dwarfPic.scale.y *= 2;
        
        var archerText = this.add.bitmapText(165, 50, 'immortal', ' Dwarf\nUpgrades', 50);
        this.upgradeGroup.add(archerText);
        
        var creditText = this.add.bitmapText(75, 167, 'immortal', 'Credits: $' + Main.credits, 40);
        this.upgradeGroup.add(creditText);
        
        var statText = this.add.bitmapText(495, 50, 'immortal', 'Current Stats', 40);
        this.upgradeGroup.add(statText);
        
        var statText1 = this.add.bitmapText(445, 100, 'immortal', 'Health: ' + Main.dwarfHP + '\nAttack: ' + (Main.dwarfDamage - 5) + '-' + Main.dwarfDamage + '\nSpeed: ' + Main.dwarfSpeed, 30);
        this.upgradeGroup.add(statText1);

        var statText2 = this.add.bitmapText(675, 100, 'immortal', 'Max: ' + Main.maxDwarves + '\nBuild Time:\n' + Main.dwarfBuildTime / 1000 + ' Seconds', 30);
        this.upgradeGroup.add(statText2);
        
        var healthButton = this.upgradeGroup.create(40, 230, 'menuTile1');
        healthButton.width = 400;
        healthButton.height = 60;
        healthButton.inputEnabled = true;
        healthButton.tint = 0xff0000;
        if(Main.credits >= Main.dwarfHealthUpgradeCost){
            healthButton.events.onInputDown.add(this.dwarfHealth,  this);
            healthButton.tint = 0x00ff00;
        }
        var healthText = this.add.bitmapText(65, 242, 'immortal', 'Health  $' + Main.dwarfHealthUpgradeCost, 40);
        this.upgradeGroup.add(healthText);
        
        var attackButton = this.upgradeGroup.create(40, 320, 'menuTile1');
        attackButton.width = 400;
        attackButton.height = 60;
        attackButton.inputEnabled = true;
        attackButton.tint = 0xff0000;
        if(Main.credits >= Main.dwarfAttackUpgradeCost){
		    attackButton.events.onInputDown.add(this.dwarfAttack,  this);
            attackButton.tint = 0x00ff00;
        }
        var attackText = this.add.bitmapText(65, 331, 'immortal', 'Attack $' + Main.dwarfAttackUpgradeCost, 40);
        this.upgradeGroup.add(attackText);
        
        var speedButton = this.upgradeGroup.create(40, 410, 'menuTile1');
        speedButton.width = 400;
        speedButton.height = 60;
        speedButton.inputEnabled = true;
        speedButton.tint = 0xff0000;
        if(Main.credits >= Main.dwarfSpeedUpgradeCost){
		    speedButton.events.onInputDown.add(this.dwarfSpeed,  this);
            speedButton.tint = 0x00ff00;
        }
        var speedText = this.add.bitmapText(65, 420, 'immortal', 'Speed $' + Main.dwarfSpeedUpgradeCost, 40);
        this.upgradeGroup.add(speedText);
        
        var maxButton = this.upgradeGroup.create(435, 228, 'menuTile1');
        maxButton.width = 470;
        maxButton.height = 110;
        maxButton.inputEnabled = true;
        maxButton.tint = 0xff0000;
        if(Main.credits >= Main.dwarfMaxDwarfUpgradeCost){
		    maxButton.events.onInputDown.add(this.dwarfMax,  this);
            maxButton.tint = 0x00ff00;
        }
        var maxText = this.add.bitmapText(458, 240, 'immortal', 'Increase Max\n$' + Main.dwarfMaxDwarfUpgradeCost, 40);
        this.upgradeGroup.add(maxText);
        
        var buildTimeButton = this.upgradeGroup.create(435, 360, 'menuTile1');
        buildTimeButton.width = 470;
        buildTimeButton.height = 110;
        buildTimeButton.inputEnabled = true;
        buildTimeButton.tint = 0xff0000;
        if(Main.credits >= Main.dwarfBuildTimeUpgradeCost){
		    buildTimeButton.events.onInputDown.add(this.dwarfBuildTime,  this);
            buildTimeButton.tint = 0x00ff00;
        }
        var buildTimeText = this.add.bitmapText(468, 370, 'immortal', 'Decrease Build Time\n$' + Main.dwarfBuildTimeUpgradeCost, 40);
        this.upgradeGroup.add(buildTimeText);
        
        
    },
    
    dwarfHealth: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadDwarfMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeDwarfHealth);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Dwarf Health Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 10 Health\nfor $' + Main.dwarfHealthUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeDwarfHealth: function() {
        if(Main.credits >= Main.dwarfHealthUpgradeCost){
            Main.dwarfHP += 10;
            Main.credits -= Main.dwarfHealthUpgradeCost;
            if(Main.dwarfHealthUpgradeCost < 10000){
                Main.dwarfHealthUpgradeCost *= 2;
            } else {
                Main.dwarfHealthUpgradeCost += 5000;
            }
            this.gruntIt();
            
            this.reloadDwarfMenu();
        }
    },
    
    dwarfAttack: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadDwarfMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeDwarfAttack);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Dwarf Attack Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Attack\nfor $' + Main.dwarfAttackUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeDwarfAttack: function() {
        if(Main.credits >= Main.dwarfAttackUpgradeCost) {
            Main.dwarfDamage++;
            Main.credits -= Main.dwarfAttackUpgradeCost;
            if(Main.dwarfAttackUpgradeCost < 10000){
                 Main.dwarfAttackUpgradeCost *= 2;
            } else {
                Main.dwarfAttackUpgradeCost += 5000;
            }
            this.gruntIt();
            
           this.reloadDwarfMenu();
        }
        
    },
    
    dwarfSpeed: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadDwarfMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeDwarfSpeed);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Dwarf Speed Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 10 Speed\nfor $' + Main.dwarfSpeedUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeDwarfSpeed: function() {
        if(Main.credits >= Main.dwarfSpeedUpgradeCost){
            Main.dwarfSpeed += 10;
            Main.credits -= Main.dwarfSpeedUpgradeCost;
            Main.dwarfSpeedUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadDwarfMenu();
        }
    },
    
    dwarfMax: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadDwarfMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeDwarfMax);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Dwarf Max Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Dwarf\nfor $' + Main.dwarfMaxDwarfUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeDwarfMax: function() {
        if(Main.credits >= Main.dwarfMaxDwarfUpgradeCost){
            Main.maxDwarves++;
            Main.credits -= Main.dwarfMaxDwarfUpgradeCost;
            Main.dwarfMaxDwarfUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadDwarfMenu();
        }
    },
    
    dwarfBuildTime: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadDwarfMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeDwarfBuildTime);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Dwarf Build Time', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Decrease Build Time\nby 0.1 Seconds\nfor $' + Main.dwarfBuildTimeUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeDwarfBuildTime: function() {
        if(Main.credits >= Main.dwarfBuildTimeUpgradeCost){
            Main.dwarfBuildTime -= 100;
            Main.credits -= Main.dwarfBuildTimeUpgradeCost;
            Main.dwarfBuildTimeUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadDwarfMenu();
        }
    },
    
    
    reloadDwarfMenu: function(){
        this.popUpGroup.destroy();
        this.buildDwarfUpgradeMenu();
    },
    
    buildDragonUpgradeMenu: function(){
        if(this.upgradeMenuGroup){
            this.upgradeMenuGroup.destroy();
        }
        if(this.dragonGroup){
            this.dragonGroup.destroy();
        }
        this.upgradeGroup = this.add.group();
        
        var background = this.upgradeGroup.create(-10, 0, 'menuPanel');
        background.width = 970;
        background.height = 540;
        background.alpha = 0.9;
        
        var backing = this.upgradeGroup.create(-10, 0, 'menuTile1');
        backing.width = 970;
        backing.height = 540;
        backing.alpha = 0.7;
        
        var headingBacking = this.upgradeGroup.create(30, 20, 'menuTile1');
        headingBacking.width = 900;
        headingBacking.height = 140;
        
        var dragonHeadingText = this.add.bitmapText(this.world.centerX, 30, 'immortal', 'Dragon Stats', 55);
        dragonHeadingText.anchor.setTo(0.5,0);
        this.upgradeGroup.add(dragonHeadingText);
        
        var dragonPointsText = this.add.bitmapText(this.world.centerX, 90, 'immortal', 'Total Dragon Points: ' + Main.totalDragonPoints, 50);
        dragonPointsText.anchor.setTo(0.5,0);
        this.upgradeGroup.add(dragonPointsText);
        
        var dragonTrapBacking = this.upgradeGroup.create(40, 160, 'menuTile1');
        dragonTrapBacking.width = 300;
        dragonTrapBacking.height = 320;
        
        var dragonTrapPic = this.upgradeGroup.create(130, 230, 'blueDragon', 'BlueDragonFlyEast01.png');
        dragonTrapPic.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(0, 8));
        dragonTrapPic.animations.play('flyEast', 8, true);
        
        var dragonTrapHeading = this.add.bitmapText(90, 190, 'immortal', 'Trap Dragon', 30);
        this.upgradeGroup.add(dragonTrapHeading);
        
        var dragonTrapDamage = this.add.bitmapText(90, 300, 'immortal', 'Damage: ' + Main.dragonTrapDamage, 30);
        this.upgradeGroup.add(dragonTrapDamage);
        
        var dragonTrapHealth = this.add.bitmapText(90, 332, 'immortal', 'Health: ' + Main.dragonTrapHealth, 30);
        this.upgradeGroup.add(dragonTrapHealth);
        
        var dragonTrapCost = this.add.bitmapText(90, 364, 'immortal', 'Cost: ' + Main.dragonTrapBuildPoints, 30);
        this.upgradeGroup.add(dragonTrapCost);
        
        var nextTrapUpgrade = this.add.bitmapText(90, 396, 'immortal', 'Next Upgrade:\n' + Math.floor(Main.dragonTrapUpgradePoints) + ' Points', 30);
        this.upgradeGroup.add(nextTrapUpgrade);
        
        var dragonAttackBacking = this.upgradeGroup.create(this.world.centerX, 160, 'menuTile1');
        dragonAttackBacking.anchor.setTo(0.5,0);
        dragonAttackBacking.width = 300;
        dragonAttackBacking.height = 320;
        
        if(Main.dragonAttackUnlocked == false){
            var lockPic = this.upgradeGroup.create(410, 200, 'lock');
            lockPic.scale.x *= 3;
            lockPic.scale.y *= 3;
            var dragonAttackUnlockText = this.add.bitmapText(480, 270, 'immortal', 'Unlock with\n2000 Points', 43);
            dragonAttackUnlockText.anchor.setTo(0.5,0);
            this.upgradeGroup.add(dragonAttackUnlockText);
        } else {
            var dragonAttackPic = this.upgradeGroup.create(420, 215, 'goldDragon', 'DragonAttackEnd01.png');
            dragonAttackPic.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(18, 26));
            dragonAttackPic.animations.play('flyEast', 8, true);
            dragonAttackPic.tint = 0xccffff;

            var dragonAttackHeading = this.add.bitmapText(370, 190, 'immortal', 'Defense Dragon', 30);
            this.upgradeGroup.add(dragonAttackHeading);
            
            var dragonAttackDamage = this.add.bitmapText(380, 300, 'immortal', 'Damage: ' + Main.dragonAttackDamage, 30);
            this.upgradeGroup.add(dragonAttackDamage);
            
            var dragonAttackHealth = this.add.bitmapText(380, 332, 'immortal', 'Health: ' + Main.dragonAttackHealth, 30);
            this.upgradeGroup.add(dragonAttackHealth);
            
            var dragonAttackCost = this.add.bitmapText(380, 364, 'immortal', 'Cost: ' + Main.dragonAttackBuildPoints, 30);
            this.upgradeGroup.add(dragonAttackCost);
            
            var nextAttackUpgrade = this.add.bitmapText(380, 396, 'immortal', 'Next Upgrade:\n' + Math.floor(Main.dragonAttackUpgradePoints) + ' Points', 30);
            this.upgradeGroup.add(nextAttackUpgrade);
        
        }
        
        var dragonFireBacking = this.upgradeGroup.create(620, 160, 'menuTile1');
        dragonFireBacking.width = 300;
        dragonFireBacking.height = 320;
        
        if(Main.dragonFireUnlocked == false){
            var lockPic2 = this.upgradeGroup.create(700, 200, 'lock');
            lockPic2.scale.x *= 3;
            lockPic2.scale.y *= 3;
            var dragonFireUnlockText = this.add.bitmapText(770, 270, 'immortal', 'Unlock with\n5000 Points', 43);
            dragonFireUnlockText.anchor.setTo(0.5,0);
            this.upgradeGroup.add(dragonFireUnlockText);
        } else {
            var dragonFirePic = this.upgradeGroup.create(720, 215, 'redDragon', 'Fire1.png');
            dragonFirePic.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(12, 20));
            dragonFirePic.animations.play('flyEast', 8, true);
            dragonFirePic.tint = 0xffccff;

            var dragonFireHeading = this.add.bitmapText(680, 190, 'immortal', 'Fire Dragon', 30);
            this.upgradeGroup.add(dragonFireHeading);
            
            var dragonFireDamage = this.add.bitmapText(670, 300, 'immortal', 'Damage: ' + Main.dragonFireDamage, 30);
            this.upgradeGroup.add(dragonFireDamage);
            
            var dragonFireHealth = this.add.bitmapText(670, 332, 'immortal', 'Health: ' + Main.dragonFireHealth, 30);
            this.upgradeGroup.add(dragonFireHealth);
            
            var dragonFireCost = this.add.bitmapText(670, 364, 'immortal', 'Cost: ' + Main.dragonFireBuildPoints, 30);
            this.upgradeGroup.add(dragonFireCost);
            
            var nextFireUpgrade = this.add.bitmapText(670, 396, 'immortal', 'Next Upgrade:\n' + Math.floor(Main.dragonFireUpgradePoints) + ' Points', 30);
            this.upgradeGroup.add(nextFireUpgrade);
        }
        var exitButton = this.upgradeGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exitArcherMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.upgradeGroup.add(exitText);
    },
    
    buildCavalryUpgradeMenu: function() {
        
        this.upgradeMenuGroup.destroy();
        this.upgradeGroup = this.add.group();
        
        var background = this.upgradeGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9
        var backing = this.upgradeGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.7;
        
        
        var exitButton = this.upgradeGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exitArcherMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.upgradeGroup.add(exitText);
        
        
        var pictureBacking = this.upgradeGroup.create(30, 30, 'menuTile1');
        pictureBacking.width = 880;
        pictureBacking.height = 190;
        pictureBacking.tint = 0x0000ff;
        var cavalryPic = this.upgradeGroup.create(80, 50, 'cavalry', 'CavalryStandingEast.png');
        cavalryPic.scale.x *= 2;
        cavalryPic.scale.y *= 2;
        
        var cavalryText = this.add.bitmapText(295, 40, 'immortal', ' Cavalry\nUpgrades', 50);
        this.upgradeGroup.add(cavalryText);
        
        var creditText = this.add.bitmapText(75, 167, 'immortal', 'Credits: $' + Main.credits, 40);
        this.upgradeGroup.add(creditText);
        
        var statText = this.add.bitmapText(545, 50, 'immortal', 'Current Stats', 40);
        this.upgradeGroup.add(statText);
        
        var statText1 = this.add.bitmapText(545, 100, 'immortal', 'Attack: ' + Main.cavalryDamage + '\nBuild Time: ' + (Main.cavalryBuildTime/1000)+ ' seconds' + '\nNumber: ' + Main.maxCavalry, 30);
        this.upgradeGroup.add(statText1);
        
        var attackButton = this.upgradeGroup.create(40, 230, 'menuTile1');
        attackButton.width = 290;
        attackButton.height = 250;
        attackButton.inputEnabled = true;
        attackButton.tint = 0xff0000;
        if(Main.credits >= Main.cavalryAttackUpgradeCost){
		    attackButton.events.onInputDown.add(this.cavalryAttack,  this);
            attackButton.tint = 0x00ff00;
        }
        var attackText = this.add.bitmapText(115, 270, 'immortal', 'Attack\n\n$' + Main.cavalryAttackUpgradeCost, 40);
        this.upgradeGroup.add(attackText);
        
        
        var buildTimeButton = this.upgradeGroup.create(325, 230, 'menuTile1');
        buildTimeButton.width = 290;
        buildTimeButton.height = 250;
        buildTimeButton.inputEnabled = true;
        buildTimeButton.tint = 0xff0000;
        if(Main.credits >= Main.cavalryBuildTimeUpgradeCost){
		    buildTimeButton.events.onInputDown.add(this.cavalryBuildTime,  this);
            buildTimeButton.tint = 0x00ff00;
        }
        var buildTimeText = this.add.bitmapText(368, 270, 'immortal', 'Build Time\n\n  $' + Main.cavalryBuildTimeUpgradeCost, 40);
        this.upgradeGroup.add(buildTimeText);

        
        var maxSizeButton = this.upgradeGroup.create(610, 230, 'menuTile1');
        maxSizeButton.width = 290;
        maxSizeButton.height = 250;
        maxSizeButton.inputEnabled = true;
        maxSizeButton.tint = 0xff0000;
        if(Main.credits >= Main.cavalryMaxCavalryUpgradeCost){
		    maxSizeButton.events.onInputDown.add(this.cavalrySize,  this);
            maxSizeButton.tint = 0x00ff00;
        }
        var maxSizeText = this.add.bitmapText(630, 270, 'immortal', 'Cavalry Size\n\n   $' + Main.cavalryMaxCavalryUpgradeCost, 40);
        this.upgradeGroup.add(maxSizeText);
 
    },
    
    cavalryAttack: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadCavalryMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeAttack);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Cavalry Attack Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Attack\nfor $' + Main.cavalryAttackUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeAttack: function() {
        if(Main.credits >= Main.cavalryAttackUpgradeCost){
            Main.cavalryDamage += 1;
            Main.credits -= Main.cavalryAttackUpgradeCost;
            Main.cavalryAttackUpgradeCost *= 2;
            this.gruntIt();
            this.reloadCavalryMenu();
        }
    },
    
    cavalryBuildTime: function() {
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadCavalryMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeBuildTime);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Cavalry Build Time', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Decrease Build Time\nby 0.5 Seconds\nfor $' + Main.cavalryAttackUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeBuildTime: function() {
        if(Main.credits >= Main.cavalryBuildTimeUpgradeCost) {
            Main.cavalryBuildTime -= 500;
            Main.credits -= Main.cavalryBuildTimeUpgradeCost;
            Main.cavalryBuildTimeUpgradeCost *= 2;
            this.gruntIt();
            this.reloadCavalryMenu();
        }
    },
    
    cavalrySize: function() { 
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadCavalryMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeSize);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Cavalry Size Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Increase Size\nfor $' + Main.cavalryMaxCavalryUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeSize: function() {
        if(Main.credits >= Main.cavalryMaxCavalryUpgradeCost){
            Main.maxCavalry++;
            Main.credits -= Main.cavalryMaxCavalryUpgradeCost;
            Main.cavalryMaxCavalryUpgradeCost *= 2;
            this.gruntIt();
            this.reloadCavalryMenu();
        }
    },
    
    reloadCavalryMenu: function() {
        this.popUpGroup.destroy();
        this.buildCavalryUpgradeMenu();
    },
    
    buildMageUpgradeMenu: function() {
        
        this.upgradeMenuGroup.destroy();
        this.upgradeGroup = this.add.group();
        
        var background = this.upgradeGroup.create(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        
        var backing = this.upgradeGroup.create(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.7;
        
        
        var exitButton = this.upgradeGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exitArcherMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        this.upgradeGroup.add(exitText);
        
        var pictureBacking = this.upgradeGroup.create(30, 30, 'menuTile1');
        pictureBacking.width = 880;
        pictureBacking.height = 190;
        pictureBacking.tint = 0x0000ff;
        
        var pic = this.upgradeGroup.create(170, 50, 'mage', 'MageFacingSouth.png');
        pic.scale.x *= 2;
        pic.scale.y *= 2;
        
        var mageText = this.add.bitmapText(295, 40, 'immortal', ' Magic\nUpgrades', 50);
        this.upgradeGroup.add(mageText);
        
        var creditText = this.add.bitmapText(75, 167, 'immortal', 'Credits: $' + Main.credits, 40);
        this.upgradeGroup.add(creditText);
        
        var statText = this.add.bitmapText(565, 70, 'immortal', 'Current Magic', 40);
        this.upgradeGroup.add(statText);
        
        if(Main.iceMagicActive == false && Main.waterMagicActive == false && Main.fireMagicActive == false){
            var selectedText = this.add.bitmapText(645, 150, 'immortal', 'None', 40);
        }
        if(Main.iceMagicActive){
            var selectedText = this.add.bitmapText(625, 150, 'immortal', 'Ice Spell', 40);
        }
        if(Main.waterMagicActive){
            var selectedText = this.add.bitmapText(590, 150, 'immortal', 'Water Spell', 40);
        }
        if(Main.fireMagicActive){
            var selectedText = this.add.bitmapText(600, 150, 'immortal', 'Fire Spell', 40);
        }
        this.upgradeGroup.add(selectedText);
        
        
        
        var iceButton = this.upgradeGroup.create(40, 230, 'menuTile1');
        iceButton.width = 290;
        iceButton.height = 250;
        iceButton.inputEnabled = true;
		iceButton.events.onInputDown.add(this.iceActive,  this);
        var iceText = this.add.bitmapText(135, 270, 'immortal', ' Ice', 40);
        this.upgradeGroup.add(iceText);
        
        if(Main.iceMagicUnlocked == false){
            var iceText2 = this.add.bitmapText(115, 420, 'immortal', '$10000', 40);
            this.upgradeGroup.add(iceText2);
        }
        if(Main.iceMagicUnlocked == true && Main.iceMagicActive == false){
            var iceText2 = this.add.bitmapText(105, 420, 'immortal', 'Activate', 40);
            this.upgradeGroup.add(iceText2);
        }
        
        
        var icePic = this.upgradeGroup.create(180, 360, 'goodMagic','FireSpell1.png');
        icePic.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(4, 8));
        icePic.animations.play('spell', 4, true);
        icePic.anchor.setTo(0.5, 0.5);
        icePic.alpha = 0.8;
        if(Main.iceMagicUnlocked){
            iceButton.tint = 0x0000ff;
        }
        if(Main.iceMagicActive){
            iceButton.tint = 0x00ff00;
        }
        
        
        var waterSpellButton = this.upgradeGroup.create(325, 230, 'menuTile1');
        waterSpellButton.width = 290;
        waterSpellButton.height = 250;
        waterSpellButton.inputEnabled = true;
		waterSpellButton.events.onInputDown.add(this.waterActive,  this);
        var waterSpellText = this.add.bitmapText(412, 270, 'immortal', 'Water', 40);
        this.upgradeGroup.add(waterSpellText);
        
        if(Main.waterMagicUnlocked == false){
            var waterText2 = this.add.bitmapText(400, 420, 'immortal', '$10000', 40);
            this.upgradeGroup.add(waterText2);
            if(Main.credits < 10000){
                waterSpellButton.tint = 0xff0000;
            }
            if(Main.credits >= 10000){
                waterSpellButton.tint = 0x0000ff;
            }
            
        }
        if(Main.waterMagicUnlocked == true && Main.waterMagicActive == false){
            var waterText2 = this.add.bitmapText(400, 420, 'immortal', 'Activate', 40);
            this.upgradeGroup.add(waterText2);
        }
        
        
        var waterPic = this.upgradeGroup.create(470, 360, 'goodMagic','FireSpell1.png');
        waterPic.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(26, 35));
        waterPic.animations.play('spell', 4, true);
        waterPic.anchor.setTo(0.5, 0.5);
        waterPic.alpha = 0.8;
        if(Main.waterMagicUnlocked){
            waterSpellButton.tint = 0x0000ff;
        }
        if(Main.waterMagicActive){
            waterSpellButton.tint = 0x00ff00;
        }

        
        var fireSpellButton = this.upgradeGroup.create(610, 230, 'menuTile1');
        fireSpellButton.width = 290;
        fireSpellButton.height = 250;
        fireSpellButton.inputEnabled = true;
		fireSpellButton.events.onInputDown.add(this.fireActive,  this);
        var fireSpellText = this.add.bitmapText(710, 270, 'immortal', ' Fire', 40);
        this.upgradeGroup.add(fireSpellText);
        
        if(Main.fireMagicUnlocked == false){
            var fireText2 = this.add.bitmapText(690, 420, 'immortal', '$20000', 40);
            this.upgradeGroup.add(fireText2);
            if(Main.credits < 20000){
                fireSpellButton.tint = 0xff0000;
            }
            if(Main.credits >= 20000){
                fireSpellButton.tint = 0x0000ff;
            }
        }
        if(Main.fireMagicUnlocked == true && Main.fireMagicActive == false){
            var fireText2 = this.add.bitmapText(700, 420, 'immortal', 'Activate', 40);
            this.upgradeGroup.add(fireText2);
        }
        
        
        var firePic = this.upgradeGroup.create(760, 360, 'goodMagic','FireSpell1.png');
        firePic.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(0, 3));
        firePic.animations.play('spell', 12, true);
        firePic.anchor.setTo(0.5, 0.5);
        firePic.scale.x *= 1.5;
        firePic.scale.y *= 1.5;
        firePic.alpha = 0.7;
        if(Main.fireMagicUnlocked){
            fireSpellButton.tint = 0x0000ff;
        }
        if(Main.fireMagicActive){
            fireSpellButton.tint = 0x00ff00;
        }
    },
    
    iceActive: function(){
        if(Main.iceMagicUnlocked == false && Main.credits >= 10000){
            Main.credits -= 10000;
            Main.iceMagicUnlocked = true;
            Main.iceMagicActive = true;
            Main.waterMagicActive = false;
            Main.fireMagicActive = false;
            this.reloadMageScreen();
            this.gruntIt();
        }
        if(Main.iceMagicUnlocked == true){
            Main.iceMagicActive = true;
            Main.waterMagicActive = false;
            Main.fireMagicActive = false;
            this.reloadMageScreen();
            this.gruntIt();
        }
        
    },
    
    waterActive: function(){
        if(Main.waterMagicUnlocked == false && Main.credits >= 10000){
            Main.credits -= 10000;
            Main.waterMagicUnlocked = true;
            Main.iceMagicActive = false;
            Main.waterMagicActive = true;
            Main.fireMagicActive = false;
            this.reloadMageScreen();
            this.gruntIt();
        }
        if(Main.waterMagicUnlocked == true){
            Main.iceMagicActive = false;
            Main.waterMagicActive = true;
            Main.fireMagicActive = false;
            this.reloadMageScreen();
            this.gruntIt();
        }
    },
    
    fireActive: function(){
        if(Main.fireMagicUnlocked == false && Main.credits >= 20000){
            Main.credits -= 20000;
            Main.fireMagicUnlocked = true;
            Main.iceMagicActive = false;
            Main.waterMagicActive = false;
            Main.fireMagicActive = true;
            this.reloadMageScreen();
            this.gruntIt();
        }
        if(Main.fireMagicUnlocked == true){
            Main.iceMagicActive = false;
            Main.waterMagicActive = false;
            Main.fireMagicActive = true;
            this.reloadMageScreen();
            this.gruntIt();
        }
    },
    
    reloadMageScreen: function() {
        this.upgradeGroup.destroy();
        this.buildMageUpgradeMenu();
    },
    
    gruntIt: function(){
        if(Main.sound){
            var gruntPicker = this.rnd.integerInRange(1,2);
            if(gruntPicker === 1){
                this.grunt = this.add.audio('grunt1');
                this.grunt.volume = 0.5;
                this.grunt.play();
            } else {
                this.grunt2 = this.add.audio('grunt2');
                this.grunt2.volume = 0.5;
                this.grunt2.play();
            }
        }
    },
    
    update: function(){
        if(Main.sound){
            if(this.time.now > this.musicLaunch){
                this.playMusic();
                this.musicLaunch = this.time.now + this.musicRate;
            }
        }
        if(this.time.now > this.colorChangerLaunch){
            this.upgradeText.tint = Math.random() * 0xffffff;
            this.colorChangerLaunch = this.time.now + this.colorChangerRate;
            if(Main.highLevel > 7){
                if(this.colorPicker == 1){
                    this.colorPicker = 2;
                    this.contractButton.tint = 0x0000ff;
                    this.contractText1.tint = 0xaa0000;
                    this.contractText2.tint = 0xaa0000;
                }
                else{
                    this.colorPicker = 1;
                    this.contractButton.tint = 0xff0000;
                    this.contractText1.tint = 0xffffff;
                    this.contractText2.tint = 0xffffff;
                }
            }
        }
        if(this.time.now > this.waterAnimalLaunch){
            this.waterAnimalLaunch += this.rnd.integerInRange(2000, 5000);
            this.buildWaterAnimal();
        }
        
    },
    
    buildWaterAnimal: function(){
        if(this.inMenu === false){
            this.waterAnimal = this.add.sprite(this.rnd.integerInRange(150, 612), this.rnd.integerInRange(420, 532), 'goodMagic', 'FireSpell1.png');
            this.waterAnimal.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(26, 35));
            this.waterAnimal.animations.play('fire', this.rnd.integerInRange(10, 12), true);
            this.waterAnimal.events.onAnimationLoop.add(this.itDied, this);
            this.waterAnimal.alpha = 0.5;
            this.waterAnimal.scale.y *= 0.5;
            this.waterAnimal.scale.x *= 0.5;
        }
    },
    
    itDied: function(it){
        it.kill();  
    },
    
    stopMusic: function(){
        if(Main.sound){
            this.worldMusic.stop();
        }
    }
};