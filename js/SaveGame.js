Main.SaveGame = function (game) {
    this.screensGroup;
};

Main.SaveGame.prototype = {
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
        
        var saveGameText = this.add.bitmapText(60,70,'immortal','Save Game?',140);
        this.screensGroup.add(saveGameText);
        
        var saveGameText2 = this.add.bitmapText(this.world.centerX + 10, 320,'immortal','This will overwrite previous\nsave data on this device.',45);
        saveGameText2.anchor.setTo(0.5,0.5);
        this.screensGroup.add(saveGameText2);
        
        var saveButton = this.screensGroup.create(this.world.centerX + 150, 465,'menuTile1');
        saveButton.width = 198;
        saveButton.height = 80;
        saveButton.anchor.setTo(0.5,0.5);
        saveButton.inputEnabled = true;
		saveButton.events.onInputDown.add(this.saveIt,  this);
        var saveText = this.add.bitmapText(555, 430,'immortal','Save', 70);
        this.screensGroup.add(saveText);
        
        var exitButton = this.screensGroup.create(this.world.centerX - 150, 465,'menuTile1');
        exitButton.width = 180;
        exitButton.height = 80;
        exitButton.anchor.setTo(0.5,0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exit,  this);
        var exitText = this.add.bitmapText(265, 430,'immortal','Exit', 70);
        this.screensGroup.add(exitText);
        
        Main.saveInfo = {
            name: 'saveData',
            credits: Main.credits,
            highLevel: Main.highLevel,
            sound: Main.sound,
            
            knightHP: Main.knightHP,
            knightSpeed: Main.knightSpeed,
            knightDamage: Main.knightDamage,
            knightBuildTime: Main.knightBuildTime,
            maxKnights: Main.maxKnights,
            knightHealthUpgradeCost: Main.knightHealthUpgradeCost,
            knightAttackUpgradeCost: Main.knightAttackUpgradeCost,
            knightSpeedUpgradeCost: Main.knightSpeedUpgradeCost,
            knightMaxKnightsUpgradeCost: Main.knightMaxKnightsUpgradeCost,
            knightBuildTimeUpgradeCost: Main.knightBuildTimeUpgradeCost,
            
            archerRange: Main.archerRange,
            archerBuildTime: Main.archerBuildTime,
            archerSpeed: Main.archerSpeed,
            archerDamage: Main.archerDamage,
            maxArchers: Main.maxArchers,
            archerRangeUpgradeCost: Main.archerRangeUpgradeCost,
            archerBuildTimeUpgradeCost: Main.archerBuildTimeUpgradeCost,
            archerSpeedUpgradeCost: Main.archerSpeedUpgradeCost,
            archerDamageUpgradeCost: Main.archerDamageUpgradeCost,
            archerMaxArchersUpgradeCost: Main.archerMaxArchersUpgradeCost,
            
            dwarfHP: Main.dwarfHP,
            dwarfSpeed: Main.dwarfSpeed,
            dwarfDamage: Main.dwarfDamage,
            dwarfBuildTime: Main.dwarfBuildTime,
            maxDwarves: Main.maxDwarves,
            dwarfHealthUpgradeCost: Main.dwarfHealthUpgradeCost,
            dwarfAttackUpgradeCost: Main.dwarfAttackUpgradeCost,
            dwarfSpeedUpgradeCost: Main.dwarfSpeedUpgradeCost,
            dwarfMaxDwarfUpgradeCost: Main.dwarfMaxDwarfUpgradeCost,
            dwarfBuildTimeUpgradeCost: Main.dwarfBuildTimeUpgradeCost,
            
            cavalryDamage: Main.cavalryDamage,
            cavalryBuildTime: Main.cavalryBuildTime,
            maxCavalry: Main.maxCavalry,
            cavalryAttackUpgradeCost: Main.cavalryAttackUpgradeCost,
            cavalryMaxCavalryUpgradeCost: Main.cavalryMaxCavalryUpgradeCost,
            cavalryBuildTimeUpgradeCost: Main.cavalryBuildTimeUpgradeCost,
            
            iceMagicActive: Main.iceMagicActive,
            waterMagicActive: Main.waterMagicActive,
            fireMagicActive: Main.fireMagicActive,
            iceMagicUnlocked: Main.iceMagicUnlocked,
            waterMagicUnlocked: Main.waterMagicUnlocked,
            fireMagicUnlocked: Main.fireMagicUnlocked,
            
            dragonTrapUnlocked: Main.dragonTrapUnlocked,
            dragonTrapBuildPoints: Main.dragonTrapBuildPoints,
            dragonTrapDamage: Main.dragonTrapDamage,
            dragonTrapHealth: Main.dragonTrapHealth,
            dragonTrapUpgradePoints: Main.dragonTrapUpgradePoints,

            dragonAttackUnlocked: Main.dragonAttackUnlocked,
            dragonAttackBuildPoints: Main.dragonAttackBuildPoints,
            dragonAttackDamage: Main.dragonAttackDamage,
            dragonAttackHealth: Main.dragonAttackHealth,
            dragonAttackUpgradePoints: Main.dragonAttackUpgradePoints,

            dragonFireUnlocked: Main.dragonFireUnlocked,
            dragonFireBuildPoints: Main.dragonFireBuildPoints,
            dragonFireDamage: Main.dragonFireDamage,
            dragonFireHealth: Main.dragonFireHealth,
            dragonFireUpgradePoints: Main.dragonFireUpgradePoints,

            totalDragonPoints: Main.totalDragonPoints,
            bonusDragonPoints: Main.bonusDragonPoints
        };
    },
    
    
    
    saveIt: function(){
        Main.saveInfo = {
            name: 'saveData',
            credits: Main.credits,
            highLevel: Main.highLevel,
            sound: Main.sound,
            
            knightHP: Main.knightHP,
            knightSpeed: Main.knightSpeed,
            knightDamage: Main.knightDamage,
            knightBuildTime: Main.knightBuildTime,
            maxKnights: Main.maxKnights,
            knightHealthUpgradeCost: Main.knightHealthUpgradeCost,
            knightAttackUpgradeCost: Main.knightAttackUpgradeCost,
            knightSpeedUpgradeCost: Main.knightSpeedUpgradeCost,
            knightMaxKnightsUpgradeCost: Main.knightMaxKnightsUpgradeCost,
            knightBuildTimeUpgradeCost: Main.knightBuildTimeUpgradeCost,
            
            archerRange: Main.archerRange,
            archerBuildTime: Main.archerBuildTime,
            archerSpeed: Main.archerSpeed,
            archerDamage: Main.archerDamage,
            maxArchers: Main.maxArchers,
            archerRangeUpgradeCost: Main.archerRangeUpgradeCost,
            archerBuildTimeUpgradeCost: Main.archerBuildTimeUpgradeCost,
            archerSpeedUpgradeCost: Main.archerSpeedUpgradeCost,
            archerDamageUpgradeCost: Main.archerDamageUpgradeCost,
            archerMaxArchersUpgradeCost: Main.archerMaxArchersUpgradeCost,
            
            dwarfHP: Main.dwarfHP,
            dwarfSpeed: Main.dwarfSpeed,
            dwarfDamage: Main.dwarfDamage,
            dwarfBuildTime: Main.dwarfBuildTime,
            maxDwarves: Main.maxDwarves,
            dwarfHealthUpgradeCost: Main.dwarfHealthUpgradeCost,
            dwarfAttackUpgradeCost: Main.dwarfAttackUpgradeCost,
            dwarfSpeedUpgradeCost: Main.dwarfSpeedUpgradeCost,
            dwarfMaxDwarfUpgradeCost: Main.dwarfMaxDwarfUpgradeCost,
            dwarfBuildTimeUpgradeCost: Main.dwarfBuildTimeUpgradeCost,
            
            cavalryDamage: Main.cavalryDamage,
            cavalryBuildTime: Main.cavalryBuildTime,
            maxCavalry: Main.maxCavalry,
            cavalryAttackUpgradeCost: Main.cavalryAttackUpgradeCost,
            cavalryMaxCavalryUpgradeCost: Main.cavalryMaxCavalryUpgradeCost,
            cavalryBuildTimeUpgradeCost: Main.cavalryBuildTimeUpgradeCost,
            
            iceMagicActive: Main.iceMagicActive,
            waterMagicActive: Main.waterMagicActive,
            fireMagicActive: Main.fireMagicActive,
            iceMagicUnlocked: Main.iceMagicUnlocked,
            waterMagicUnlocked: Main.waterMagicUnlocked,
            fireMagicUnlocked: Main.fireMagicUnlocked,
            
            dragonTrapUnlocked: Main.dragonTrapUnlocked,
            dragonTrapBuildPoints: Main.dragonTrapBuildPoints,
            dragonTrapDamage: Main.dragonTrapDamage,
            dragonTrapHealth: Main.dragonTrapHealth,
            dragonTrapUpgradePoints: Main.dragonTrapUpgradePoints,

            dragonAttackUnlocked: Main.dragonAttackUnlocked,
            dragonAttackBuildPoints: Main.dragonAttackBuildPoints,
            dragonAttackDamage: Main.dragonAttackDamage,
            dragonAttackHealth: Main.dragonAttackHealth,
            dragonAttackUpgradePoints: Main.dragonAttackUpgradePoints,

            dragonFireUnlocked: Main.dragonFireUnlocked,
            dragonFireBuildPoints: Main.dragonFireBuildPoints,
            dragonFireDamage: Main.dragonFireDamage,
            dragonFireHealth: Main.dragonFireHealth,
            dragonFireUpgradePoints: Main.dragonFireUpgradePoints,

            totalDragonPoints: Main.totalDragonPoints,
            bonusDragonPoints: Main.bonusDragonPoints
        };
        
        if(window.cordova){
            NativeStorage.setItem("eoeBoemSaveData", Main.saveInfo, this.getSuccess, this.getError);
        } else {
            localStorage.setItem('eoeBoemSaveData', JSON.stringify(Main.saveInfo));
        }
        
        this.screensGroup.destroy();
        this.screensGroup = this.add.group();
        
        var saveGameText = this.add.bitmapText(40,100,'immortal','Game Saved',140);
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
    
    getSuccess: function (obj) {
        console.log(obj.name);
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
    