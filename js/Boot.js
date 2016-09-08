var Main = {
    credits: 0,
    currentLevel: 1,
    highLevel: 1,
    
    sound: true,
    soundTrack: 1,
    
    defenseContract: false,
    wager: 0,
    
    warpHole: false,
    smokeScreen: false, 
    badFireMagic: false,

    knightHP: 100,
    knightSpeed: 150,
    knightDamage: 12,
    knightBuildTime: 1500,
    maxKnights: 5,
    
    warPanelHealth: 0,
    
    knightHealthUpgradeCost: 500,
    knightAttackUpgradeCost: 500,
    knightSpeedUpgradeCost: 1000,
    knightMaxKnightsUpgradeCost: 5000,
    knightBuildTimeUpgradeCost: 1000,

    archerRange: 10,
    archerBuildTime: 3000,
    archerSpeed: 200,
    archerDamage: 50,
    maxArchers: 2,
    
    archerRangeUpgradeCost: 1000,
    archerBuildTimeUpgradeCost: 1000,
    archerSpeedUpgradeCost: 1000,
    archerDamageUpgradeCost: 500,
    archerMaxArchersUpgradeCost: 5000,
    
    dwarfHP: 80,
    dwarfSpeed: 90,
    dwarfDamage: 35,
    dwarfBuildTime: 2500,
    maxDwarves: 2,
    
    dwarfHealthUpgradeCost: 500,
    dwarfAttackUpgradeCost: 1000,
    dwarfSpeedUpgradeCost: 1000,
    dwarfMaxDwarfUpgradeCost: 5000,
    dwarfBuildTimeUpgradeCost: 1000,
    
    cavalryDamage: 45,
    cavalryBuildTime: 10000,
    maxCavalry: 10,
    
    cavalryAttackUpgradeCost: 1000,
    cavalryMaxCavalryUpgradeCost: 1000,
    cavalryBuildTimeUpgradeCost: 1000,
    
    iceMagicActive: true,
    waterMagicActive: false,
    fireMagicActive: false,
    iceMagicUnlocked: true,
    waterMagicUnlocked: false,
    fireMagicUnlocked: false,
    
    dragonTrapUnlocked: true,
    dragonTrapBuildPoints: 80,
    dragonTrapDamage: 5,
    dragonTrapHealth: 50,
    dragonTrapUpgradePoints: 550,
    
    dragonAttackUnlocked: false,
    dragonAttackBuildPoints: 200,
    dragonAttackDamage: 12,
    dragonAttackHealth: 300,
    dragonAttackUpgradePoints: 3500,
    
    dragonFireUnlocked: false,
    dragonFireBuildPoints: 400,
    dragonFireDamage: 20,
    dragonFireHealth: 200,
    dragonFireUpgradePoints: 6000,
    
    totalDragonPoints: 0,
    bonusDragonPoints: 0,
    
    buildMenu: false
};

Main.Boot = function () {};

Main.Boot.prototype = {

    init: function() {
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.time.desiredFps = 50; 
    },
    
    preload : function() {
        this.load.image('map', 'images/worldMap.png');
        this.load.image('preloaderBar', 'images/loader_bar.png');
    },

    create: function () {	
        this.state.start('Preloader');
    }
};