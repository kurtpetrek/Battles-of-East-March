Main.ArcherUpgradeScreen = function (game) {
    this.mapBackground;
};

Main.ArcherUpgradeScreen.prototype = {
    
    create: function(){
        this.mapBackground = this.add.image(0, 0, 'map');
        this.buildArcherUpgradeMenu();
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

    buildArcherUpgradeMenu: function() {
        var background = this.add.image(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        
        
        var backing = this.add.image(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.7;
        
        this.upgradeGroup = this.add.group();
        
        var exitButton = this.upgradeGroup.create(this.world.centerX, 510, 'menuTile1');
        exitButton.width = 200;
        exitButton.height = 50;
        exitButton.anchor.setTo(0.5, 0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exitMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        
        
        var pictureBacking = this.add.image(30, 30, 'menuTile1');
        pictureBacking.width = 880;
        pictureBacking.height = 190;
        pictureBacking.tint = 0x0000ff;
        var archerPic = this.add.image(80, 50, 'archer', 'ArcherStandingSouth.png');
        archerPic.scale.x *= 2;
        archerPic.scale.y *= 2;
        
        var archerText = this.add.bitmapText(165, 50, 'immortal', ' Archer\nUpgrades', 50);
        
        var creditText = this.add.bitmapText(75, 167, 'immortal', 'Credits: $' + Main.credits, 40);
        
        var statText = this.add.bitmapText(495, 50, 'immortal', 'Current Stats', 40);
        
        var statText1 = this.add.bitmapText(445, 100, 'immortal', 'Range: ' + Main.archerRange + '\nAttack: ' + Main.archerDamage + '\nSpeed: ' + (400 - Main.archerSpeed), 30);

        var statText2 = this.add.bitmapText(675, 100, 'immortal', 'Max: ' + Main.maxArchers + '\nBuild Time:\n' + Main.archerBuildTime / 1000 + ' Seconds', 30);
        
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

        
        
    },
    
    archerRange: function(){
        this.popUp();
        this.makeButton(300,500, 'Back', this.reloadMenu);
        this.makeButton(660,500, 'Purchase', this.upgradeArcherRange);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Range Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Range\nfor $' + Main.archerRangeUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherRange: function(){
        if(Main.credits >= Main.archerRangeUpgradeCost){
            Main.archerRange++;
            Main.credits -= Main.archerRangeUpgradeCost;
            Main.archerRangeUpgradeCost *= 2;
            this.state.start('ArcherUpgradeScreen', true);
        }
    },
    
    archerAttack: function(){
        this.popUp();
        this.makeButton(300,500, 'Back', this.reloadMenu);
        this.makeButton(660,500, 'Purchase', this.upgradeArcherAttack);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Attack Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Attack\nfor $' + Main.archerDamageUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherAttack: function(){
        if(Main.credits >= Main.archerDamageUpgradeCost) {
            Main.archerDamage++;
            Main.credits -= Main.archerDamageUpgradeCost;
            Main.archerDamageUpgradeCost *= 2;
            this.state.start('ArcherUpgradeScreen', true);
        }
    },
    
    archerSpeed: function(){
        this.popUp();
        this.makeButton(300,500, 'Back', this.reloadMenu);
        this.makeButton(660,500, 'Purchase', this.upgradeArcherSpeed);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Speed Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 10 Speed\nfor $' + Main.archerSpeedUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherSpeed: function(){
        if(Main.credits >= Main.archerSpeedUpgradeCost){
            Main.archerSpeed -= 10;
            Main.credits -= Main.archerSpeedUpgradeCost;
            Main.archerSpeedUpgradeCost *= 2;
            this.state.start('ArcherUpgradeScreen', true);
        }
    },
    
    archerMax: function(){
        this.popUp();
        this.makeButton(300,500, 'Back', this.reloadMenu);
        this.makeButton(660,500, 'Purchase', this.upgradeArcherMax);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Max Archers Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Archer\nfor $' + Main.archerMaxArchersUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherMax: function(){
        if(Main.credits >= Main.archerMaxArchersUpgradeCost){
            Main.maxArchers++;
            Main.credits -= Main.archerMaxArchersUpgradeCost;
            Main.archerMaxArchersUpgradeCost *= 2;
            this.state.start('ArcherUpgradeScreen', true);
        }
    },
    
    archerBuildTime: function(){
        this.popUp();
        this.makeButton(300,500, 'Back', this.reloadMenu);
        this.makeButton(660,500, 'Purchase', this.upgradeArcherBuildTime);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Archer Build Time', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Decrease Build Time\nby 0.2 Seconds\nfor $' + Main.archerBuildTimeUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeArcherBuildTime: function(){
        if(Main.credits >= Main.archerBuildTimeUpgradeCost){
            Main.archerBuildTime -= 200;
            Main.credits -= Main.archerBuildTimeUpgradeCost;
            Main.archerBuildTimeUpgradeCost *= 2;
            this.state.start('ArcherUpgradeScreen', true);
        }
    },
    
    popUp: function(){
        this.upgradeGroup.destroy();
        
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
    
    makeButton: function(x,y,text,callMe){
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
    
    reloadMenu: function(){
        this.popUpGroup.destroy();
        this.buildArcherUpgradeMenu();
    },
    
    exitMenu: function(){
        Main.buildMenu = true;
        this.state.start('World', true);
    },

    update: function(){
        
    }
};