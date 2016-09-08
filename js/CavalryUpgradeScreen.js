Main.CavalryUpgradeScreen = function (game) {
    this.mapBackground;
};

Main.CavalryUpgradeScreen.prototype = {
    
    create: function(){
        this.mapBackground = this.add.image(0, 0, 'map');
        this.buildCavalryUpgradeMenu();
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

    buildCavalryUpgradeMenu: function() {
        
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
    
    cavalryAttack: function(){
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeAttack);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Cavalry Attack Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Add 1 Attack\nfor $' + Main.cavalryAttackUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeAttack: function(){
        if(Main.credits >= Main.cavalryAttackUpgradeCost){
            Main.cavalryDamage += 1;
            Main.credits -= Main.cavalryAttackUpgradeCost;
            Main.cavalryAttackUpgradeCost *= 2;
            this.state.start('CavalryUpgradeScreen', true);
        }
    },
    
    cavalryBuildTime: function(){
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeBuildTime);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Cavalry Build Time', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Decrease Build Time\nby 0.5 Seconds\nfor $' + Main.cavalryAttackUpgradeCost + '?', 50);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeBuildTime: function(){
        if(Main.credits >= Main.cavalryBuildTimeUpgradeCost) {
            Main.cavalryBuildTime -= 500;
            Main.credits -= Main.cavalryBuildTimeUpgradeCost;
            Main.cavalryBuildTimeUpgradeCost *= 2;
            this.state.start('CavalryUpgradeScreen', true);
        }
    },
    
    cavalrySize: function(){
        this.popUp();
        this.makeUpgradeButton(300,500, 'Back', this.reloadKnightMenu);
        this.makeUpgradeButton(660,500, 'Purchase', this.upgradeSize);
        var text = this.add.bitmapText(this.world.centerX,70,'immortal','Cavalry Size Upgrade', 75);
        text.anchor.setTo(0.5,0.5);
        var text2 = this.add.bitmapText(this.world.centerX, 250,'immortal','Increase Size\nfor $' + Main.cavalryMaxCavalryUpgradeCost + '?', 55);
        text2.anchor.setTo(0.5,0.5);
        this.popUpGroup.add(text);
        this.popUpGroup.add(text2);
    },
    
    upgradeSize: function(){
        if(Main.credits >= Main.cavalryMaxCavalryUpgradeCost){
            Main.maxCavalry++;
            Main.credits -= Main.cavalryMaxCavalryUpgradeCost;
            Main.cavalryMaxCavalryUpgradeCost *= 2;
            this.state.start('CavalryUpgradeScreen', true);
        }
    },
    
    reloadKnightMenu: function(){
        this.popUpGroup.destroy();
        this.buildCavalryUpgradeMenu();
    },
    


    update: function(){
        
    }
};