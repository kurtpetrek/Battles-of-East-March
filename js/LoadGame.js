Main.LoadGame = function (game) {
    this.screensGroup;
};

Main.LoadGame.prototype = {
    create: function(){
        this.mapBackground = this.add.image(0, 0, 'map');
        var background = this.add.image(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        var backing = this.add.image(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.9;
        
        this.screensGroup = this.add.group();
        
        var loadGameText = this.add.bitmapText(40,70,'immortal','Load Game?',140);
        this.screensGroup.add(loadGameText);
        
        var saveGameText2 = this.add.bitmapText(this.world.centerX + 10, 320,'immortal','Load last save\non this device?',45);
        saveGameText2.anchor.setTo(0.5,0.5);
        this.screensGroup.add(saveGameText2);
    
        var loadButton = this.screensGroup.create(this.world.centerX + 160, 465,'menuTile1');
        loadButton.width = 215;
        loadButton.height = 80;
        loadButton.anchor.setTo(0.5,0.5);
        loadButton.inputEnabled = true;
		loadButton.events.onInputDown.add(this.loadIt,  this);
        var loadText = this.add.bitmapText(555, 430,'immortal','Load', 70);
        this.screensGroup.add(loadText);
        
        var exitButton = this.screensGroup.create(this.world.centerX - 150, 465,'menuTile1');
        exitButton.width = 180;
        exitButton.height = 80;
        exitButton.anchor.setTo(0.5,0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exit,  this);
        var exitText = this.add.bitmapText(265, 430,'immortal','Exit', 70);
        this.screensGroup.add(exitText);
    },
    
    loadIt: function(){
        
        if(window.cordova){
            NativeStorage.getItem("eoeBoemSaveData", this.getSuccess, this.getError);
            
        } else {
            var saveInfo = JSON.parse(localStorage.getItem('eoeBoemSaveData'));
        
        
        Main.credits = saveInfo.credits;
        Main.credits = saveInfo.credits;
        Main.highLevel = saveInfo.highLevel;
        Main.sound = saveInfo.sound;

        Main.knightHP = saveInfo.knightHP;
        Main.knightSpeed = saveInfo.knightSpeed;
        Main.knightDamage = saveInfo.knightDamage;
        Main.knightBuildTime = saveInfo.knightBuildTime;
        Main.maxKnights = saveInfo.maxKnights;

        Main.knightHealthUpgradeCost = saveInfo.knightHealthUpgradeCost;
        Main.knightAttackUpgradeCost = saveInfo.knightAttackUpgradeCost;
        Main.knightSpeedUpgradeCost = saveInfo.knightSpeedUpgradeCost;
        Main.knightMaxKnightsUpgradeCost = saveInfo.knightMaxKnightsUpgradeCost;
        Main.knightBuildTimeUpgradeCost = saveInfo.knightBuildTimeUpgradeCost;

        Main.archerRange = saveInfo.archerRange;
        Main.archerBuildTime = saveInfo.archerBuildTime;
        Main.archerSpeed = saveInfo.archerSpeed;
        Main.archerDamage = saveInfo.archerDamage;
        Main.maxArchers = saveInfo.maxArchers;

        Main.archerRangeUpgradeCost = saveInfo.archerRangeUpgradeCost;
        Main.archerBuildTimeUpgradeCost = saveInfo.archerBuildTimeUpgradeCost;
        Main.archerSpeedUpgradeCost = saveInfo.archerSpeedUpgradeCost;
        Main.archerDamageUpgradeCost = saveInfo.archerDamageUpgradeCost;
        Main.archerMaxArchersUpgradeCost = saveInfo.archerMaxArchersUpgradeCost;

        Main.dwarfHP = saveInfo.dwarfHP;
        Main.dwarfSpeed = saveInfo.dwarfSpeed;
        Main.dwarfDamage = saveInfo.dwarfDamage;
        Main.dwarfBuildTime = saveInfo.dwarfBuildTime;
        Main.maxDwarves = saveInfo.maxDwarves;

        Main.dwarfHealthUpgradeCost = saveInfo.dwarfHealthUpgradeCost;
        Main.dwarfAttackUpgradeCost = saveInfo.dwarfAttackUpgradeCost;
        Main.dwarfSpeedUpgradeCost = saveInfo.dwarfSpeedUpgradeCost;
        Main.dwarfMaxDwarfUpgradeCost = saveInfo.dwarfMaxDwarfUpgradeCost;
        Main.dwarfBuildTimeUpgradeCost = saveInfo.dwarfBuildTimeUpgradeCost;

        Main.cavalryDamage = saveInfo.cavalryDamage;
        Main.cavalryBuildTime = saveInfo.cavalryBuildTime;
        Main.maxCavalry = saveInfo.maxCavalry;

        Main.cavalryAttackUpgradeCost = saveInfo.cavalryAttackUpgradeCost;
        Main.cavalryMaxCavalryUpgradeCost = saveInfo.cavalryMaxCavalryUpgradeCost;
        Main.cavalryBuildTimeUpgradeCost = saveInfo.cavalryBuildTimeUpgradeCost;

        Main.iceMagicActive = saveInfo.iceMagicActive;
        Main.waterMagicActive = saveInfo.waterMagicActive;
        Main.fireMagicActive = saveInfo.fireMagicActive;
        Main.iceMagicUnlocked = saveInfo.iceMagicUnlocked;
        Main.waterMagicUnlocked = saveInfo.waterMagicUnlocked;
        Main.fireMagicUnlocked = saveInfo.fireMagicUnlocked;
        
        Main.dragonTrapUnlocked = saveInfo.dragonTrapUnlocked;
        Main.dragonTrapBuildPoints = saveInfo.dragonTrapBuildPoints;
        Main.dragonTrapDamage = saveInfo.dragonTrapDamage;
        Main.dragonTrapHealth = saveInfo.dragonTrapHealth;
        Main.dragonTrapUpgradePoints = saveInfo.dragonTrapUpgradePoints;

        Main.dragonAttackUnlocked = saveInfo.dragonAttackUnlocked;
        Main.dragonAttackBuildPoints = saveInfo.dragonAttackBuildPoints;
        Main.dragonAttackDamage = saveInfo.dragonAttackDamage;
        Main.dragonAttackHealth = saveInfo.dragonAttackHealth;
        Main.dragonAttackUpgradePoints = saveInfo.dragonAttackUpgradePoints;

        Main.dragonFireUnlocked = saveInfo.dragonFireUnlocked;
        Main.dragonFireBuildPoints = saveInfo.dragonFireBuildPoints;
        Main.dragonFireDamage = saveInfo.dragonFireDamage;
        Main.dragonFireHealth = saveInfo.dragonFireHealth;
        Main.dragonFireUpgradePoints = saveInfo.dragonFireUpgradePoints;

        Main.totalDragonPoints = saveInfo.totalDragonPoints;
        Main.bonusDragonPoints = saveInfo.bonusDragonPoints;
        
        }
        
        
        
        this.screensGroup.destroy();
        this.screensGroup = this.add.group();
        
        var saveGameText = this.add.bitmapText(30,100,'immortal','Game Loaded',130);
        this.screensGroup.add(saveGameText);
        
        var exitButton = this.screensGroup.create(this.world.centerX , 465,'menuTile1');
        exitButton.width = 180;
        exitButton.height = 80;
        exitButton.anchor.setTo(0.5,0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exit,  this);
        var exitText = this.add.bitmapText(415, 430,'immortal','Exit', 70);
        this.screensGroup.add(exitText);
    },
    
    getSuccess: function (saveInfo) {
        console.log(saveInfo.name);
        
        Main.credits = saveInfo.credits;
        Main.credits = saveInfo.credits;
        Main.highLevel = saveInfo.highLevel;
        Main.sound = saveInfo.sound;

        Main.knightHP = saveInfo.knightHP;
        Main.knightSpeed = saveInfo.knightSpeed;
        Main.knightDamage = saveInfo.knightDamage;
        Main.knightBuildTime = saveInfo.knightBuildTime;
        Main.maxKnights = saveInfo.maxKnights;

        Main.knightHealthUpgradeCost = saveInfo.knightHealthUpgradeCost;
        Main.knightAttackUpgradeCost = saveInfo.knightAttackUpgradeCost;
        Main.knightSpeedUpgradeCost = saveInfo.knightSpeedUpgradeCost;
        Main.knightMaxKnightsUpgradeCost = saveInfo.knightMaxKnightsUpgradeCost;
        Main.knightBuildTimeUpgradeCost = saveInfo.knightBuildTimeUpgradeCost;

        Main.archerRange = saveInfo.archerRange;
        Main.archerBuildTime = saveInfo.archerBuildTime;
        Main.archerSpeed = saveInfo.archerSpeed;
        Main.archerDamage = saveInfo.archerDamage;
        Main.maxArchers = saveInfo.maxArchers;

        Main.archerRangeUpgradeCost = saveInfo.archerRangeUpgradeCost;
        Main.archerBuildTimeUpgradeCost = saveInfo.archerBuildTimeUpgradeCost;
        Main.archerSpeedUpgradeCost = saveInfo.archerSpeedUpgradeCost;
        Main.archerDamageUpgradeCost = saveInfo.archerDamageUpgradeCost;
        Main.archerMaxArchersUpgradeCost = saveInfo.archerMaxArchersUpgradeCost;

        Main.dwarfHP = saveInfo.dwarfHP;
        Main.dwarfSpeed = saveInfo.dwarfSpeed;
        Main.dwarfDamage = saveInfo.dwarfDamage;
        Main.dwarfBuildTime = saveInfo.dwarfBuildTime;
        Main.maxDwarves = saveInfo.maxDwarves;

        Main.dwarfHealthUpgradeCost = saveInfo.dwarfHealthUpgradeCost;
        Main.dwarfAttackUpgradeCost = saveInfo.dwarfAttackUpgradeCost;
        Main.dwarfSpeedUpgradeCost = saveInfo.dwarfSpeedUpgradeCost;
        Main.dwarfMaxDwarfUpgradeCost = saveInfo.dwarfMaxDwarfUpgradeCost;
        Main.dwarfBuildTimeUpgradeCost = saveInfo.dwarfBuildTimeUpgradeCost;

        Main.cavalryDamage = saveInfo.cavalryDamage;
        Main.cavalryBuildTime = saveInfo.cavalryBuildTime;
        Main.maxCavalry = saveInfo.maxCavalry;

        Main.cavalryAttackUpgradeCost = saveInfo.cavalryAttackUpgradeCost;
        Main.cavalryMaxCavalryUpgradeCost = saveInfo.cavalryMaxCavalryUpgradeCost;
        Main.cavalryBuildTimeUpgradeCost = saveInfo.cavalryBuildTimeUpgradeCost;

        Main.iceMagicActive = saveInfo.iceMagicActive;
        Main.waterMagicActive = saveInfo.waterMagicActive;
        Main.fireMagicActive = saveInfo.fireMagicActive;
        Main.iceMagicUnlocked = saveInfo.iceMagicUnlocked;
        Main.waterMagicUnlocked = saveInfo.waterMagicUnlocked;
        Main.fireMagicUnlocked = saveInfo.fireMagicUnlocked;
        
        Main.dragonTrapUnlocked = saveInfo.dragonTrapUnlocked;
        Main.dragonTrapBuildPoints = saveInfo.dragonTrapBuildPoints;
        Main.dragonTrapDamage = saveInfo.dragonTrapDamage;
        Main.dragonTrapHealth = saveInfo.dragonTrapHealth;
        Main.dragonTrapUpgradePoints = saveInfo.dragonTrapUpgradePoints;

        Main.dragonAttackUnlocked = saveInfo.dragonAttackUnlocked;
        Main.dragonAttackBuildPoints = saveInfo.dragonAttackBuildPoints;
        Main.dragonAttackDamage = saveInfo.dragonAttackDamage;
        Main.dragonAttackHealth = saveInfo.dragonAttackHealth;
        Main.dragonAttackUpgradePoints = saveInfo.dragonAttackUpgradePoints;

        Main.dragonFireUnlocked = saveInfo.dragonFireUnlocked;
        Main.dragonFireBuildPoints = saveInfo.dragonFireBuildPoints;
        Main.dragonFireDamage = saveInfo.dragonFireDamage;
        Main.dragonFireHealth = saveInfo.dragonFireHealth;
        Main.dragonFireUpgradePoints = saveInfo.dragonFireUpgradePoints;

        Main.totalDragonPoints = saveInfo.totalDragonPoints;
        Main.bonusDragonPoints = saveInfo.bonusDragonPoints;
        
    },
    
    getError: function (error) {
        console.log(error.code);
        if (error.exception !== "") console.log(error.exception);
    },
    
    exit: function(){
        Main.buildMenu = false;
        this.state.start('World', true);
    },
    
    
    update: function(){
        
    }
};
    