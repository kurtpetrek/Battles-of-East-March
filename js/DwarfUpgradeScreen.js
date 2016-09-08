Main.DwarfUpgradeScreen = function (game) {
    this.mapBackground;
};

Main.DwarfUpgradeScreen.prototype = {
    
    create: function(){
        this.mapBackground = this.add.image(0, 0, 'map');
        this.buildDwarfUpgradeMenu();
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

    buildDwarfUpgradeMenu: function() {
        
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
    
    dwarfHealth: function(){
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
    
    upgradeDwarfHealth: function(){
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
    
    dwarfAttack: function(){
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
    
    upgradeDwarfAttack: function(){
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
    
    dwarfSpeed: function(){
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
    
    upgradeDwarfSpeed: function(){
        if(Main.credits >= Main.dwarfSpeedUpgradeCost){
            Main.dwarfSpeed += 10;
            Main.credits -= Main.dwarfSpeedUpgradeCost;
            Main.dwarfSpeedUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadDwarfMenu();
        }
    },
    
    dwarfMax: function(){
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
    
    upgradeDwarfMax: function(){
        if(Main.credits >= Main.dwarfMaxDwarfUpgradeCost){
            Main.maxDwarves++;
            Main.credits -= Main.dwarfMaxDwarfUpgradeCost;
            Main.dwarfMaxDwarfUpgradeCost *= 2;
            this.gruntIt();
            
            this.reloadDwarfMenu();
        }
    },
    
    dwarfBuildTime: function(){
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
    
    upgradeDwarfBuildTime: function(){
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
    

    update: function(){
        
    }
};