Main.KnightUpgradeScreen = function (game) {
    this.mapBackground;
    this.knightUprageMenuGroup;
};

Main.KnightUpgradeScreen.prototype = {
    
    create: function(){
        this.mapBackground = this.add.image(0, 0, 'map');
        this.buildKnightUpgradeMenu();
        
    },

    buildKnightUpgradeMenu: function() {
        
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
            
            this.reloadKnightMenu();
        }
    },
    
    knightSpeed: function(){
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
    
    upgradeKnightSpeed: function(){
        if(Main.credits >= Main.knightSpeedUpgradeCost){
            Main.knightSpeed += 10;
            Main.credits -= Main.knightSpeedUpgradeCost;
            Main.knightSpeedUpgradeCost *= 2;
            
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
            
            this.reloadKnightMenu();
        }
    },
    
    knightMax: function(){
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
    
    upgradeKnightMax: function(){
        if(Main.credits >= Main.knightMaxKnightsUpgradeCost){
            Main.maxKnights++;
            Main.credits -= Main.knightMaxKnightsUpgradeCost;
            Main.knightMaxKnightsUpgradeCost *= 2;
            
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
            
            this.reloadKnightMenu();
        }
    },
    
    knightBuildTime: function(){
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
    
    upgradeKnightBuildTime: function(){
        if(Main.credits >= Main.knightBuildTimeUpgradeCost){
            Main.knightBuildTime -= 100;
            Main.credits -= Main.knightBuildTimeUpgradeCost;
            Main.knightBuildTimeUpgradeCost *= 2;
            
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
            
            this.reloadKnightMenu();
        }
    },
    
    popUp: function(){
        this.knightUpgradeMenuGroup.destroy();
        
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
    
    makeUpgradeButton: function(x,y,text,callMe){
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
    
    reloadKnightMenu: function(){
        this.popUpGroup.destroy();
        this.buildKnightUpgradeMenu();
    },
    
    exitKnightMenu: function(){
        this.knightUpgradeMenuGroup.destroy();
        this.buildUpgradeMenu();
    },

    update: function(){
        
    }
};