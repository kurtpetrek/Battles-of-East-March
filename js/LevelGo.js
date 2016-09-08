Main.LevelGo = function(game) {
    this.grassTile;
    this.warPanelBacking;
    this.fallGroup;
    this.knightButton;
    this.knightGroup;
    this.goodArrowGroup;
    this.goodMagicGroup;
    this.archerButton;
    this.placingKnight;
    this.placingArcher;
    this.knightReserves;
    this.badArrowGroup;
    this.knightText;
    this.cavalryGroup;
    this.cavalryText;
    this.cavalryTimer;
    this.cavalryReady;
    this.placingDwarf;
    this.cavalryBar;
    this.archerReserves;
    this.levelOver;
    this.skeletonArcherRate;
    this.skeletonArcherLaunch;
    this.archerText;
    this.skeletonGroup;
    this.skeletonSpeed;
    this.skeletonAttack;
    this.skeletonHP;
    this.skeletonRate;
    this.skeletonLaunch;
    this.dwarfText;
    this.explosionGroup;
    this.dwarfReserves;
    this.dwarfTimer;
    this.badMagicGroup;
    this.mageBar;
    this.healthBar;
    this.barrierGroup;
    this.skeletonLineCounter;
    this.trapButton;
    this.dragonTrapButton;
    this.dragonAttackButton;
    this.dragonFireButton;
    this.skeletonHolder;
    this.skeletonArcherHolder;
    this.shadowKnightHolder;
    this.ogreHolder;
    this.orcHolder;
    this.knightHolder;
    this.archerHolder;
    this.dwarfHolder;
    this.cavalryHolder;
    this.goodMagicHolder;
    this.dragonHolder;
    this.warpHolder;
    this.badMagicHolder;
    this.smokeHolder;
};

Main.LevelGo.prototype = {
    
    create: function(){
        this.gameWasPaused = false;
        if(Main.defenseContract == false){
            Main.warPanelHealth = Main.knightHP * 9;
        }
        if(Main.defenseContract == true){
            Main.warPanelHealth = 1;
        }
        this.levelOver = false;
        this.victory = false;
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.buildBackground();
        this.pointsThisRound = Main.bonusDragonPoints;
        this.currentPointsThisRound = Main.bonusDragonPoints;
        this.pointsCounter;
        
        this.placingKnight = true;
        this.placingArcher = false;
        this.placingDwarf = false;
        this.cavalryReady = false;
        this.placingDragonTrap = false;
        this.placingDragonAttack = false;
        this.placingDragonFire = false;
        this.mageReady = false;
        this.dragonTrapReady = false;
        this.dragonAttackReady = false;
        this.dragonFireReady = false;
        this.skeletonLineCounter = 9;
        
        this.knightReserves = Main.maxKnights;
        this.archerReserves = Main.maxArchers;
        this.dwarfReserves = Main.maxDwarves;
        
        this.knightTimer = this.time.now + Main.knightBuildTime;
        this.archerTimer = this.time.now + Main.archerBuildTime;
        this.dwarfTimer = this.time.now + Main.dwarfBuildTime;
        this.cavalryTimer = this.time.now + Main.cavalryBuildTime;
        this.mageRate = 20000;
        this.mageLaunch = this.time.now + this.mageRate;
        
        this.knightKey = this.input.keyboard.addKey(Phaser.Keyboard.A);
        this.archerKey = this.input.keyboard.addKey(Phaser.Keyboard.S);
        this.dwarfKey = this.input.keyboard.addKey(Phaser.Keyboard.D);
        this.cavalryKey = this.input.keyboard.addKey(Phaser.Keyboard.F);
        this.mageKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        this.badMagicGroup = this.add.group();
        this.bottomBarrierGroup = this.add.group();
        this.goodBarrierGroup = this.add.group();
        this.fallGroup = this.add.group();
        this.knightGroup = this.add.group();
        this.barrierGroup = this.add.group();
        this.skeletonGroup = this.add.group();
        this.goodArrowGroup = this.add.group();
        this.badArrowGroup = this.add.group();
        this.cavalryGroup = this.add.group();
        this.mageGroup = this.add.group();
        
        this.goodMagicGroup = this.add.group();
        this.redDragonGroup = this.add.group();
        this.explosionGroup = this.add.group();
        
        this.wallGroup = this.add.group();
        this.dragonGroup = this.add.group();
        this.dragonFireGroup = this.add.group();
        this.smokeGroup = this.add.group();
        this.pointsGroup = this.add.group();
        
        this.dragon = false;
        
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
            
            var musicPicker = this.rnd.integerInRange(1,5);
            while(musicPicker == Main.soundTrack){
                musicPicker = this.rnd.integerInRange(1,5);
            }
            Main.soundTrack = musicPicker;
         //   musicPicker = 5;
            if(musicPicker === 1){
                this.battleMusicPart1 = this.add.audio('battleMusic2Part1');
                this.battleMusicPart2 = this.add.audio('battleMusic2Part2');
                this.battleMusicPart3 = this.add.audio('battleMusic2Part3');
                this.battleMusicPart1.volume = 0.5;
                this.battleMusicPart2.volume = 0.5;
                this.battleMusicPart3.volume = 0.5;
                this.battleMusicRate = 10800;
                this.battleMusicLaunch = this.time.now + this.battleMusicRate;
            }
            if(musicPicker === 2){
                this.battleMusicPart1 = this.add.audio('battleMusic3Part1');
                this.battleMusicPart2 = this.add.audio('battleMusic3Part2');
                this.battleMusicPart3 = this.add.audio('battleMusic3Part3');
                this.battleMusicPart1.volume = 0.9;
                this.battleMusicPart2.volume = 0.9;
                this.battleMusicPart3.volume = 0.9;
                
                this.battleMusicRate = 8000;
                this.battleMusicLaunch = this.time.now + this.battleMusicRate;
            }
            if(musicPicker === 3){
                this.battleMusicPart1 = this.add.audio('battleMusic5Part1');
                this.battleMusicPart2 = this.add.audio('battleMusic5Part2');
                this.battleMusicPart3 = this.add.audio('battleMusic5Part3');
                this.battleMusicPart1.volume = 0.5;
                this.battleMusicPart2.volume = 0.5;
                this.battleMusicPart3.volume = 0.5;
                this.battleMusicRate = 8000;
                this.battleMusicLaunch = this.time.now + this.battleMusicRate;
            }
            if(musicPicker === 4){
                this.battleMusicPart1 = this.add.audio('battleMusic6Part1');
                this.battleMusicPart2 = this.add.audio('battleMusic6Part2');
                this.battleMusicPart3 = this.add.audio('battleMusic6Part3');
                this.battleMusicPart1.volume = 0.5;
                this.battleMusicPart2.volume = 0.5;
                this.battleMusicPart3.volume = 0.5;
                this.battleMusicRate = 8000;
                this.battleMusicLaunch = this.time.now + this.battleMusicRate;
            }
            if(musicPicker === 5){
                this.battleMusicPart1 = this.add.audio('battleMusic7Part1');
                this.battleMusicPart2 = this.add.audio('battleMusic7Part2');
                this.battleMusicPart3 = this.add.audio('battleMusic7Part3');
                this.battleMusicPart1.volume = 0.5;
                this.battleMusicPart2.volume = 0.5;
                this.battleMusicPart3.volume = 0.5;
                this.battleMusicRate = 8000;
                this.battleMusicLaunch = this.time.now + this.battleMusicRate;
            }
            this.playBattleMusic();
        }
        
        if(Main.defenseContract == false){
            if(Main.currentLevel === 1){
                this.skeletonSpeed = -140;
                this.skeletonAttack = 9;
                this.skeletonHP = 140;
                this.skeletonRate = 8000;
                this.skeletonNumber = 2;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 30;
                this.skeletonArcherHP = 150;
                this.skeletonArcherRange = 12;
                this.skeletonArcherRate = 11000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -170;
                this.shadowKnightAttack = 20;
                this.shadowKnightHP = 230;
                this.shadowKnightRate = 20000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = false;

                this.orcSpeed = -170;
                this.orcAttack = 10;
                this.orcHP = 130;
                this.orcRate = 24000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = false;

                this.ogreSpeed = -100;
                this.ogreAttack = 40;
                this.ogreHP = 230;
                this.ogreRate = 33000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = false;

                Main.warpHole = false;
                Main.smokeScreen = false;
                Main.badFireMagic = false;
            }

            if(Main.currentLevel === 2){
                this.skeletonSpeed = -170;
                this.skeletonAttack = 10;
                this.skeletonHP = 150;
                this.skeletonRate = 7000;
                this.skeletonNumber = 2;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 40;
                this.skeletonArcherHP = 150;
                this.skeletonArcherRange = Main.archerRange;
                this.skeletonArcherRate = 15000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -170;
                this.shadowKnightAttack = 20;
                this.shadowKnightHP = 230;
                this.shadowKnightRate = 20000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = false;

                this.orcSpeed = -170;
                this.orcAttack = 10;
                this.orcHP = 130;
                this.orcRate = 24000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = false;

                this.ogreSpeed = -100;
                this.ogreAttack = 40;
                this.ogreHP = 230;
                this.ogreRate = 33000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = false;

                this.spearWallHP = 100;
                this.spearWallAttack = 12;
                this.spearWallNumber = 2;
                this.buildSpearWall();

                Main.warpHole = false;
                Main.smokeScreen = false;
                Main.badFireMagic = false;
            }

            if(Main.currentLevel === 3){
                this.skeletonSpeed = -140;
                this.skeletonAttack = 13;
                this.skeletonHP = 170;
                this.skeletonRate = 9000;
                this.skeletonNumber = 2;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -120;
                this.skeletonArcherAttack = 45;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 1;
                this.skeletonArcherRate = 11000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -170;
                this.shadowKnightAttack = 30;
                this.shadowKnightHP = 220;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -170;
                this.orcAttack = 10;
                this.orcHP = 130;
                this.orcRate = 24000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = false;

                this.ogreSpeed = -100;
                this.ogreAttack = 40;
                this.ogreHP = 230;
                this.ogreRate = 33000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = false;

                Main.warpHole = false;
                Main.smokeScreen = false;
                Main.badFireMagic = false;
            }

            if(Main.currentLevel === 4){
                this.skeletonSpeed = -160;
                this.skeletonAttack = 14;
                this.skeletonHP = 190;
                this.skeletonRate = 4000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 45;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 7000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -170;
                this.shadowKnightAttack = 30;
                this.shadowKnightHP = 250;
                this.shadowKnightRate = 19000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -170;
                this.orcAttack = 10;
                this.orcHP = 130;
                this.orcRate = 24000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = false;

                this.ogreSpeed = -100;
                this.ogreAttack = 40;
                this.ogreHP = 230;
                this.ogreRate = 33000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = false;

                Main.warpHole = false;
                Main.smokeScreen = false;
                Main.badFireMagic = false;

                this.spearWallHP = 150;
                this.spearWallAttack = 17;
                this.spearWallNumber = 3;
                this.buildSpearWall();
            }

            if(Main.currentLevel === 5){
                this.skeletonSpeed = -140;
                this.skeletonAttack = 15;
                this.skeletonHP = 250;
                this.skeletonRate = 6000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 40;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 11000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -190;
                this.shadowKnightAttack = 30;
                this.shadowKnightHP = 280;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -170;
                this.orcAttack = 10;
                this.orcHP = 210;
                this.orcRate = 6000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 40;
                this.ogreHP = 280;
                this.ogreRate = 34000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = false;

                Main.warpHole = false;
                Main.smokeScreen = true;
                Main.badFireMagic = false;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;
            }

            if(Main.currentLevel === 6){
                this.skeletonSpeed = -140;
                this.skeletonAttack = 16;
                this.skeletonHP = 270;
                this.skeletonRate = 6000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 50;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 11000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -190;
                this.shadowKnightAttack = 32;
                this.shadowKnightHP = 290;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -170;
                this.orcAttack = 12;
                this.orcHP = 220;
                this.orcRate = 9000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 40;
                this.ogreHP = 280;
                this.ogreRate = 34000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = false;

                Main.warpHole = false;
                Main.smokeScreen = true;
                Main.badFireMagic = false;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;

                this.spearWallHP = 200;
                this.spearWallAttack = 20;
                this.spearWallNumber = 4;
                this.buildSpearWall();
            }

            if(Main.currentLevel === 7){
                this.skeletonSpeed = -140;
                this.skeletonAttack = 16;
                this.skeletonHP = 280;
                this.skeletonRate = 6000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 50;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 10000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -190;
                this.shadowKnightAttack = 35;
                this.shadowKnightHP = 300;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -170;
                this.orcAttack = 12;
                this.orcHP = 220;
                this.orcRate = 9000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 40;
                this.ogreHP = 350;
                this.ogreRate = 34000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                Main.warpHole = true;
                Main.smokeScreen = false;
                Main.badFireMagic = false;

                this.spearWallHP = 250;
                this.spearWallAttack = 20;
                this.spearWallNumber = 5;
                this.buildSpearWall();

                this.warpHoleRate = this.rnd.integerInRange(10000,2000);
                this.warpHoleLaunch = this.time.now;

            }

            if(Main.currentLevel === 8){
                this.skeletonSpeed = -170;
                this.skeletonAttack = 17;
                this.skeletonHP = 340;
                this.skeletonRate = 5000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 50;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 8000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -190;
                this.shadowKnightAttack = 35;
                this.shadowKnightHP = 440;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -190;
                this.orcAttack = 15;
                this.orcHP = 270;
                this.orcRate = 9000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 50;
                this.ogreHP = 450;
                this.ogreRate = 39000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.iceWallHP = 1500;
                this.iceWallAttack = 25;
                this.iceWallNumber = 4;
                this.buildIceWall();

                Main.smokeScreen = false;
                Main.warpHole = false;
                Main.badFireMagic = false;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;

            }

            if(Main.currentLevel === 9){
                this.skeletonSpeed = -150;
                this.skeletonAttack = 18;
                this.skeletonHP = 390;
                this.skeletonRate = 5000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 50;
                this.skeletonArcherHP = 230;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 8000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -180;
                this.shadowKnightAttack = 38;
                this.shadowKnightHP = 420;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -200;
                this.orcAttack = 15;
                this.orcHP = 280;
                this.orcRate = 9000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 55;
                this.ogreHP = 550;
                this.ogreRate = 40000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.iceWallHP = 1700;
                this.iceWallAttack = 25;
                this.iceWallNumber = 4;
                this.buildIceWall();

                Main.smokeScreen = true;
                Main.warpHole = false;
                Main.badFireMagic = false;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;

            }

            if(Main.currentLevel === 10){
                this.skeletonSpeed = -150;
                this.skeletonAttack = 20;
                this.skeletonHP = 420;
                this.skeletonRate = 5000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 70;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 10000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -160;
                this.shadowKnightAttack = 40;
                this.shadowKnightHP = 450;
                this.shadowKnightRate = 13000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -190;
                this.orcAttack = 17;
                this.orcHP = 290;
                this.orcRate = 9000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 55;
                this.ogreHP = 600;
                this.ogreRate = 40000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.iceWallHP = 1700;
                this.iceWallAttack = 25;
                this.iceWallNumber = 4;
                this.buildIceWall();

                Main.smokeScreen = true;
                Main.warpHole = true;
                Main.badFireMagic = false;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;

                this.warpHoleRate = this.rnd.integerInRange(10000,2000);
                this.warpHoleLaunch = this.time.now;

            }

            if(Main.currentLevel === 11){
                this.skeletonSpeed = -150;
                this.skeletonAttack = 20;
                this.skeletonHP = 450;
                this.skeletonRate = 9000;
                this.skeletonNumber = 2;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 60;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 6000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -150;
                this.shadowKnightAttack = 40;
                this.shadowKnightHP = 480;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -190;
                this.orcAttack = 17;
                this.orcHP = 290;
                this.orcRate = 8000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 55;
                this.ogreHP = 700;
                this.ogreRate = 34000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.spearWallHP = 500;
                this.spearWallAttack = 40;
                this.spearWallNumber = 7;
                this.buildSpearWall();

                Main.smokeScreen = false;
                Main.warpHole = false;
                Main.badFireMagic = false;

            }

            if(Main.currentLevel === 12){
                this.skeletonSpeed = -150;
                this.skeletonAttack = 20;
                this.skeletonHP = 470;
                this.skeletonRate = 5000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 60;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 9000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -150;
                this.shadowKnightAttack = 41;
                this.shadowKnightHP = 500;
                this.shadowKnightRate = 13000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -180;
                this.orcAttack = 17;
                this.orcHP = 310;
                this.orcRate = 8000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 55;
                this.ogreHP = 700;
                this.ogreRate = 26000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.spearWallHP = 700;
                this.spearWallAttack = 45;
                this.spearWallNumber = 5;
                this.buildSpearWall();

                Main.smokeScreen = false;
                Main.warpHole = false;
                Main.badFireMagic = true;

                this.badFireMagicRate = this.rnd.integerInRange(15000, 30000);
                this.badFireMagicLaunch = this.time.now + this.badFireMagicRate;
            //    this.buildBadFireMagic();
            }

            if(Main.currentLevel === 13){
                this.skeletonSpeed = -150;
                this.skeletonAttack = 22;
                this.skeletonHP = 390;
                this.skeletonRate = 7000;
                this.skeletonNumber = 2;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 60;
                this.skeletonArcherHP = 200;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 8000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -150;
                this.shadowKnightAttack = 40;
                this.shadowKnightHP = 420;
                this.shadowKnightRate = 12000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -180;
                this.orcAttack = 18;
                this.orcHP = 300;
                this.orcRate = 8000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 55;
                this.ogreHP = 620;
                this.ogreRate = 22000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.iceWallHP = 2000;
                this.iceWallAttack = 30;
                this.iceWallNumber = 5;
                this.buildIceWall();

                Main.smokeScreen = true;
                Main.warpHole = false;
                Main.badFireMagic = false;
                this.dragon = true;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;
                
                this.dragonRate = this.rnd.integerInRange(10000,15000);
                this.dragonLaunch = this.time.now;
            }

            if(Main.currentLevel === 14){
                this.skeletonSpeed = -150;
                this.skeletonAttack = 24;
                this.skeletonHP = 350;
                this.skeletonRate = 6000;
                this.skeletonNumber = 2;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 70;
                this.skeletonArcherHP = 300;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 8000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -150;
                this.shadowKnightAttack = 42;
                this.shadowKnightHP = 450;
                this.shadowKnightRate = 12000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -180;
                this.orcAttack = 19;
                this.orcHP = 300;
                this.orcRate = 8000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 60;
                this.ogreHP = 650;
                this.ogreRate = 16000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.spearWallHP = 750;
                this.spearWallAttack = 40;
                this.spearWallNumber = 5;
                this.buildSpearWall();

                Main.smokeScreen = true;
                Main.warpHole = true;
                Main.badFireMagic = false;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;

                this.warpHoleRate = this.rnd.integerInRange(10000,2000);
                this.warpHoleLaunch = this.time.now;

            }

            if(Main.currentLevel === 15){
                this.skeletonSpeed = -150;
                this.skeletonAttack = 24;
                this.skeletonHP = 380;
                this.skeletonRate = 4000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = 70;
                this.skeletonArcherHP = 300;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 8000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -150;
                this.shadowKnightAttack = 45;
                this.shadowKnightHP = 470;
                this.shadowKnightRate = 12000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -180;
                this.orcAttack = 20;
                this.orcHP = 310;
                this.orcRate = 8000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = 60;
                this.ogreHP = 700;
                this.ogreRate = 16000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                this.spearWallHP = 950;
                this.spearWallAttack = 50;
                this.spearWallNumber = 6;
                this.buildSpearWall();

                Main.smokeScreen = true;
                Main.warpHole = true;
                Main.badFireMagic = true;
                this.dragon = true;

                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;

                this.warpHoleRate = this.rnd.integerInRange(10000,2000);
                this.warpHoleLaunch = this.time.now + 2000;
                
                this.dragonRate = this.rnd.integerInRange(10000,15000);
                this.dragonLaunch = this.time.now + 4000;

                this.badFireMagicRate = this.rnd.integerInRange(10000, 30000);
                this.badFireMagicLaunch = this.time.now + 7000;
               // this.buildBadFireMagic();

            }
            
            this.buildSkeletonDefenders();
        }
        
        if(Main.defenseContract == true){
            if(Main.wager == 1){
                this.skeletonSpeed = -140;
                this.skeletonAttack = Main.knightDamage;
                this.skeletonHP = Main.knightHP + 50;
                this.skeletonRate = 6000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = Main.archerDamage;
                this.skeletonArcherHP = Main.knightHP;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 10000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -190;
                this.shadowKnightAttack = Main.dwarfDamage;
                this.shadowKnightHP = Main.knightHP + 50;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -170;
                this.orcAttack = Main.knightDamage;
                this.orcHP = Main.knightHP;
                this.orcRate = 8000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = Main.dwarfDamage;
                this.ogreHP = Main.knightHP * 2.3;
                this.ogreRate = 27000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                Main.warpHole = false;
                Main.smokeScreen = true;
                Main.badFireMagic = false;
                
                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;
                
                this.victoryTime = this.time.now + 90000;
            }
            
            if(Main.wager == 2){
                this.skeletonSpeed = -140;
                this.skeletonAttack = Main.knightDamage;
                this.skeletonHP = Main.knightHP + 70;
                this.skeletonRate = 5000;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = -140;
                this.skeletonArcherAttack = Main.archerDamage + 10;
                this.skeletonArcherHP = Main.knightHP;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = 9000;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -190;
                this.shadowKnightAttack = Main.dwarfDamage;
                this.shadowKnightHP = Main.knightHP + 100;
                this.shadowKnightRate = 14000;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -170;
                this.orcAttack = Main.knightDamage;
                this.orcHP = Main.knightHP;
                this.orcRate = 7000;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = Main.dwarfDamage;
                this.ogreHP = Main.knightHP * 3;
                this.ogreRate = 24000;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                Main.warpHole = true;
                Main.smokeScreen = true;
                Main.badFireMagic = false;
                
                this.smokeScreenRate = this.rnd.integerInRange(5000,1500);
                this.smokeScreenLaunch = this.time.now;
                
                this.warpHoleRate = this.rnd.integerInRange(10000,2000);
                this.warpHoleLaunch = this.time.now;
                
                this.victoryTime = this.time.now + 180000;
            }
            
            if(Main.wager == 3){
                this.skeletonSpeed = Main.knightSpeed * -1;
                this.skeletonAttack = Main.knightDamage;
                this.skeletonHP = Main.knightHP + 100;
                this.skeletonRate = Main.knightBuildTime * 5;
                this.skeletonNumber = 1;
                this.skeletonLaunch = this.time.now + this.skeletonRate;
                this.skeletonsOn = true;

                this.skeletonArcherSpeed = Main.knightSpeed * -1;
                this.skeletonArcherAttack = Main.archerDamage + 10;
                this.skeletonArcherHP = Main.knightHP;
                this.skeletonArcherRange = Main.archerRange + 2;
                this.skeletonArcherRate = Main.archerBuildTime * 3;
                this.skeletonArcherLaunch = this.time.now + this.skeletonArcherRate;
                this.skeletonArchersOn = true;

                this.shadowKnightSpeed = -170;
                this.shadowKnightAttack = Main.dwarfDamage;
                this.shadowKnightHP = Main.knightHP + 200;
                this.shadowKnightRate = Main.knightBuildTime * 11;
                this.shadowKnightLaunch = this.time.now + this.shadowKnightRate;
                this.shadowKnightsOn = true;

                this.orcSpeed = -190;
                this.orcAttack = Main.knightDamage;
                this.orcHP = Main.knightHP;
                this.orcRate = Main.knightBuildTime * 8;
                this.orcLaunch = this.time.now + this.orcRate;
                this.orcsOn = true;

                this.ogreSpeed = -100;
                this.ogreAttack = Main.dwarfDamage;
                this.ogreHP = Main.knightHP * 3;
                this.ogreRate = Main.knightBuildTime * 18;
                this.ogreLaunch = this.time.now + this.ogreRate;
                this.ogresOn = true;

                Main.warpHole = true;
                Main.smokeScreen = true;
                Main.badFireMagic = false;
                this.dragon = true;
                
                this.smokeScreenRate = this.rnd.integerInRange(3000,7000);
                this.smokeScreenLaunch = this.time.now;
                
                this.warpHoleRate = this.rnd.integerInRange(10000,15000);
                this.warpHoleLaunch = this.time.now;
                /*
                this.badFireMagicRate = this.rnd.integerInRange(30000, 50000);
                this.badFireMagicLaunch = this.time.now + this.badFireMagicRate;
                */
                this.dragonRate = this.rnd.integerInRange(10000,15000);
                this.dragonLaunch = this.time.now;
                
                this.victoryTime = this.time.now + 300000;
            }
             
        }
        
        
        
        this.buildKnightDefenders();
        this.buildWarPanel();
        this.buildSkeletons();
        this.buildSkeletonArchers();
        this.activateKnight();
        
    },
    
    playBattleMusic: function(){
        var gongPicker = this.rnd.integerInRange(1,2);
        if(gongPicker == 1){
            this.gong.volume = 0.4;
            this.gong.play();
        }
        
            if(this.musicStart == true){
                this.musicStart = false;
                this.battleMusicPart1.volume = 0.5;
                this.battleMusicPart1.play();
                this.gong.volume = 0.3;
                this.gong.play();
            } else {
                var gongPicker = this.rnd.integerInRange(1,2);
                if(gongPicker == 1){
                    this.gong.volume = 0.4;
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
        var backgroundPicker = 0;
        if(Main.defenseContract){
            Main.currentLevel = 0;
            backgroundPicker = this.rnd.integerInRange(1,8);
        }
        if(Main.currentLevel === 1 || backgroundPicker == 1){
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
        }
        
        if(Main.currentLevel === 2 || Main.currentLevel === 12 || backgroundPicker == 2){
            for(var x = 260; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'desert.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'desertTexture1.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'desertTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(270,0, 'tileSet', 'desert.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
        }
        
        if(Main.currentLevel === 3 || backgroundPicker == 3){
            for(var x = 260; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var grass = this.add.image(x, y, 'tileSet', 'grass.png');
                    
                }
            }

            var texture = this.add.image(270,0, 'tileSet', 'grass.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;

            var treeNumber = game.rnd.integerInRange(7, 11);
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
        }
        
        if(Main.currentLevel === 4 || Main.currentLevel === 11 || Main.currentLevel === 14 || backgroundPicker == 4){
            for(var x = 260; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'mud.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture1.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(270,0, 'tileSet', 'mud.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
            
            if(Main.currentLevel === 4 || Main.currentLevel === 11){
                var treeNumber = this.rnd.integerInRange(25, 50);
                for(var i = 0; i < treeNumber; i++){
                var picker = this.rnd.integerInRange(1, 3);
                var shrub;
                if(picker == 1){
                    var shrub = this.add.image(game.rnd.integerInRange(270, 940), this.rnd.integerInRange(0, 520), 'tileSet', 'shrub1.png');
                }
                if(picker == 2)
                {var shrub = this.add.image(game.rnd.integerInRange(270, 940), this.rnd.integerInRange(0, 520), 'tileSet', 'shrub2.png');
                }
                if(picker == 3){
                    var shrub = this.add.image(game.rnd.integerInRange(270, 940), this.rnd.integerInRange(0, 520), 'tileSet', 'shrub3.png');
                }
                shrub.width = this.rnd.integerInRange(35, 50);
                shrub.height = this.rnd.integerInRange(35, 50);
            }
            }
        }
        
        if(Main.currentLevel === 5 || Main.currentLevel === 6 || backgroundPicker == 5){
            for(var x = 260; x < 1000; x += 50){
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

            var texture = this.add.image(270,0, 'tileSet', 'grass.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;

            var treeNumber = game.rnd.integerInRange(25, 50);
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
        }
        
        if(Main.currentLevel === 7 || backgroundPicker == 6){
            for(var x = 260; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var grass = this.add.image(x, y, 'tileSet', 'mud.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture1.png');
                    }
                    if(pickMe == 50){
                        var grass = this.add.image(x, y, 'tileSet', 'mudTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(270,0, 'tileSet', 'mud.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
            
            var treeNumber = game.rnd.integerInRange(15, 30);
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
        }
        
        if(Main.currentLevel === 8 || Main.currentLevel === 9 || Main.currentLevel === 10 || Main.currentLevel === 13 || backgroundPicker == 7){
            for(var x = 260; x < 1000; x += 50){
                for(var y = 0; y < 600; y += 50){
                    var pickMe = this.rnd.integerInRange(0,50);
                    if(pickMe < 48){
                        var snow = this.add.image(x, y, 'tileSet', 'snow.png');
                    }
                    if(pickMe == 48 || pickMe == 49){
                        var snow = this.add.image(x, y, 'tileSet', 'snowTexture1.png');
                    }
                    if(pickMe == 50){
                        var snow = this.add.image(x, y, 'tileSet', 'snowTexture2.png');
                    }
                }
            }
            
            var texture = this.add.image(270,0, 'tileSet', 'snow.png');
            texture.alpha = 0.5;
            texture.width = 1000;
            texture.height = 540;
            
            if(Main.currentLevel == 13){
                var treeNumber = game.rnd.integerInRange(3, 7);
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
            }
        }
        
        if(Main.currentLevel == 15 || backgroundPicker == 8){
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

            var treeNumber = game.rnd.integerInRange(5, 10);
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
        }
        
        if(Main.defenseContract == false){
            this.healthBar = this.add.sprite(400, 10,'preloaderBar');
            this.healthBar.tint = 0xff0000;
            this.healthBar.height = 30;
            this.healthBar.alpha = 0.6;
 
            var healthText = this.add.bitmapText(545, 10, 'immortal', 'Health');
            healthText.alpha = 0.7;
        }
        
        if(Main.defenseContract == true){
            var healthText = this.add.bitmapText(525, 10, 'immortal', 'Sudden Death');
            healthText.alpha = 0.7;
            var victoryText = this.add.bitmapText(470,40,'immortal','Victory Countdown:')
            this.victoryBar = this.add.sprite(400, 80,'preloaderBar');
            this.victoryBar.tint = 0x0000ff;
            this.victoryBar.height = 30;
            this.victoryBar.alpha = 0.6;
        }
        
        this.pointsCounter = this.add.bitmapText(580,500, 'immortal', 'Dragon Points: ' + this.pointsThisRound);
        this.pointsCounter.anchor.setTo(0.5, 0.5);
        if(Main.currentLevel === 2 || Main.currentLevel === 12 || backgroundPicker == 2 || Main.currentLevel === 8 || Main.currentLevel === 9 || Main.currentLevel === 10 || Main.currentLevel === 13 || backgroundPicker == 7){
            this.pointsCounter.tint = 0x000000;
        } 
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
            skeletonDefender.hp = this.skeletonHP * 2;
            skeletonDefender.countDown = 0;
            skeletonDefender.attack = this.skeletonAttack;
        }
    },
    
    buildWarPanel: function(){
        this.warPanelBacking = this.wallGroup.create(-10, -15, 'menuPanel');
        this.warPanelBacking.width = 280;
        this.warPanelBacking.height = 570;
        this.physics.arcade.enable(this.warPanelBacking, Phaser.Physics.ARCADE);
        this.warPanelBacking.hp = Main.warPanelHealth; 
        
        this.knightButton = this.add.image(10, 20, 'menuTile1');
        this.knightButton.width = 120;
        this.knightButton.height = 100;
        this.knightButton.inputEnabled = true;
        this.knightButton.events.onInputDown.add(this.activateKnight, this);
        var knightPic = this.add.image(20, 30, 'knight', 'KnightStanding.png');
        knightPic.scale.x *= 1.3;
        knightPic.scale.y *= 1.3;
        this.knightText = this.add.bitmapText(90, 20, 'immortal', '0/5', 40);
        var underKnightText = this.add.bitmapText(90, 30, 'immortal', '_\n' + Main.maxKnights, 40);
        
        this.dragonTrapButton = this.add.image(130, 20, 'menuTile1');
        this.dragonTrapButton.width = 120;
        this.dragonTrapButton.height = 100;
        this.dragonTrapButton.inputEnabled = true;
        this.dragonTrapButton.events.onInputDown.add(this.activateDragonTrap, this);
        var dragonTrapPic = this.add.image(140, 25, 'blueDragon', 'BlueDragonFlyEast01.png');
        dragonTrapPic.scale.x *= 0.9;
        dragonTrapPic.scale.y *= 0.9;
        var dragonTrapText2 = this.add.bitmapText(150, 90, 'immortal', 'Points', 30);
        this.dragonTrapText = this.add.bitmapText(190, 20, 'immortal', '' + Main.dragonTrapBuildPoints, 30);
        this.dragonTrapText.anchor.setTo(0.5,0);
    
        
        this.archerButton = this.add.image(10, 130, 'menuTile1');
        this.archerButton.width = 120;
        this.archerButton.height = 100;
        this.archerButton.inputEnabled = true;
        this.archerButton.events.onInputDown.add(this.activateArcher, this);
        var archerPic = this.add.image(25, 140, 'archer', 'ArcherStandingSouth.png');
        archerPic.scale.x *= 1.2;
        archerPic.scale.y *= 1.2;
        this.archerText = this.add.bitmapText(90, 130, 'immortal', '0/5', 40);
        var underArcherText = this.add.bitmapText(90, 140, 'immortal', '_\n' + Main.maxArchers, 40);
        
        this.dragonAttackButton = this.add.image(130, 130, 'menuTile1');
        this.dragonAttackButton.width = 120;
        this.dragonAttackButton.height = 100;
        if(Main.dragonAttackUnlocked){
            this.dragonAttackButton.inputEnabled = true;
            this.dragonAttackButton.events.onInputDown.add(this.activateDragonAttack, this);
            var dragonAttackPic = this.add.image(140, 135, 'goldDragon', 'GoldDragonFlyEast04.png');
            dragonAttackPic.tint = 0xccffff;
            dragonAttackPic.scale.x *= 0.8;
            dragonAttackPic.scale.y *= 0.8;
            var dragonAttackText2 = this.add.bitmapText(190, 130, 'immortal', '' + Main.dragonAttackBuildPoints, 30);
            dragonAttackText2.anchor.setTo(0.5,0);
            this.dragonAttackText = this.add.bitmapText(150, 200, 'immortal', 'Points' , 30);
        } else {
            var dragonAttackLock = this.add.image(168, 147,'lock');
        }
    
        
        
        this.dwarfButton = this.add.image(10, 240, 'menuTile1');
        this.dwarfButton.width = 120;
        this.dwarfButton.height = 100;
        if(Main.currentLevel >= 3 || Main.defenseContract == true){
            this.dwarfButton.inputEnabled = true;
            this.dwarfButton.events.onInputDown.add(this.activateDwarf, this);
            var dwarfPicture = this.add.image(20, 250, 'dwarf', 'DwarfStanding.png');
            dwarfPicture.scale.x *= 1.3;
            dwarfPicture.scale.y *= 1.3;
            this.dwarfText = this.add.bitmapText(90, 240, 'immortal', '0/5', 40);
            var underDwarfText = this.add.bitmapText(90, 250, 'immortal', '_\n' + Main.maxDwarves, 40);
        } else {
            var dwarfLock = this.add.image(48, 255,'lock');
        }
        
        this.dragonFireButton = this.add.image(130, 240, 'menuTile1');
        this.dragonFireButton.width = 120;
        this.dragonFireButton.height = 100;
        if(Main.dragonFireUnlocked){
            this.dragonFireButton.inputEnabled = true;
            this.dragonFireButton.events.onInputDown.add(this.activateDragonFire, this);
            var dragonFirePicture = this.add.image(135, 250, 'redDragon', 'RedDragonHoverEast04.png');
            dragonFirePicture.tint = 0xffccff;
            dragonFirePicture.scale.x *= 0.8;
            dragonFirePicture.scale.y *= 0.8;
            var dragonFireText2 = this.add.bitmapText(190, 240, 'immortal', '' + Main.dragonFireBuildPoints, 30);
            dragonFireText2.anchor.setTo(0.5,0);
            this.dragonFireText = this.add.bitmapText(150, 310, 'immortal', 'Points' , 30);
        } else {
            var dragonFireLock = this.add.image(168, 257,'lock');
        }
        
        
        this.cavalryButton = this.add.image(10, 350, 'menuTile1');
        this.cavalryButton.width = 120;
        this.cavalryButton.height = 100;
        if(Main.currentLevel >= 5 || Main.defenseContract == true){
            this.cavalryButton.tint = 0x404040;
            this.cavalryButton.inputEnabled = true;
            this.cavalryButton.events.onInputDown.add(this.buildCavalry, this);
            var cavalryPic = this.add.image(20, 360, 'cavalry', 'CavalryStandingEast.png');
            this.cavalryBar = this.add.sprite(25,420,'preloaderBar');
            this.cavalryBar.tint = 0xff0000;
            this.cavalryBar.height = 20;
            this.cavalryText = this.add.bitmapText(25, 410, 'immortal', '' , 30);
        } else {
            var cavalryLock = this.add.image(48, 367,'lock');
        }
        
        this.mageButton = this.add.image(130, 350, 'menuTile1');
        this.mageButton.width = 120;
        this.mageButton.height = 100;
        if(Main.currentLevel >= 7 || Main.defenseContract == true){
            this.mageButton.tint = 0x404040;
            this.mageButton.inputEnabled = true;
            this.mageButton.events.onInputDown.add(this.buildMage, this);
            var magePic = this.add.image(163, 355, 'mage', 'MageFacingSouth.png');
            magePic.scale.x *= 1.8;
            magePic.scale.y *= 1.5;
            this.mageBar = this.add.sprite(140,420,'preloaderBar');
            this.mageBar.tint = 0x00ff00;
            this.mageBar.height = 20;
            this.mageText = this.add.bitmapText(140, 410, 'immortal', '' , 30);
        } else {
            var mageLock = this.add.image(168, 367,'lock');
        }
        
        var pauseBacking = this.add.image(10, 460, 'menuTile1');
        pauseBacking.width = 120;
        pauseBacking.height = 60;
        pauseBacking.inputEnabled = true;
        pauseBacking.events.onInputDown.add(this.pauseGame, this);
        var pauseText = this.add.bitmapText(22, 475, 'immortal', 'Pause', 35);
        
        var runBacking = this.add.image(130, 460, 'menuTile1');
        runBacking.width = 120;
        runBacking.height = 60;
        runBacking.inputEnabled = true;
        runBacking.events.onInputDown.add(this.goToWorldMap, this);
        var runText = this.add.bitmapText(154, 475, 'immortal', 'Quit', 35);
    },
    
    activateKnight: function(){
        this.placingKnight = true;
        this.placingArcher = false;
        this.placingDwarf = false;
        this.placingDragonTrap = false;
        this.placingDragonAttack = false;
        this.placingDragonFire = false;
        this.input.onDown.add(this.buildKnight, this);
        this.knightButton.tint = 0x00ff00;
        this.archerButton.tint = 0x0000ff;
        if(Main.currentLevel >= 3 || Main.defenseContract){
            this.dwarfButton.tint = 0x0000ff;
        }
    },
    
    buildKnight: function(pointer) {
        if(this.placingKnight == true && pointer.x > 270 && this.knightReserves > 0 && this.gameWasPaused == false) {
            this.highlightPointer(pointer);
            this.knightReserves--;
            var knight = this.knightGroup.getFirstDead(true, 270, pointer.y, 'knight', 'KnightAttackEast1.png');
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
        }
    },
    
    activateArcher: function(){
        this.placingArcher = true;
        this.placingKnight = false;
        this.placingDwarf = false;
        this.placingDragonTrap = false;
        this.placingDragonAttack = false;
        this.placingDragonFire = false;
        this.input.onDown.add(this.buildArcher, this);
        this.knightButton.tint = 0x0000ff;
        this.archerButton.tint = 0x00ff00;
        if(Main.currentLevel >= 3 || Main.defenseContract){
            this.dwarfButton.tint = 0x0000ff;
        }
    },
    
    buildArcher: function(pointer) {
        if(this.placingArcher == true && pointer.x > 270 && this.archerReserves > 0 && this.gameWasPaused == false) {
            this.highlightPointer(pointer);
            this.archerReserves--;
            var xPosition;
            if(pointer.x < 380) {
                xPosition = 380;
            } else if(pointer.x > 760) {
                xPosition = 760;
            } else { xPosition = pointer.x}
            var archer = this.knightGroup.getFirstDead(true, 280, pointer.y, 'archer', 'ArcherFallingEast1.png');
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
            tween.to({ x: xPosition }, 3 + xPosition * (Main.archerSpeed / 100), 'Linear', true, 0);
            tween.onComplete.addOnce(this.archerInPosition, this);
        }
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
            if(Main.sound == true && this.levelOver == false){
                this.bowSound.volume = 0.1;
                this.bowSound.play();
            }
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
            
            if(Main.sound == true && this.levelOver == false){
                this.bowSound.volume = 0.1;
                this.bowSound.play();
            }
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
    
    activateDwarf: function(){
        this.placingDwarf = true;
        this.placingArcher = false;
        this.placingKnight = false;
        this.placingDragonTrap = false;
        this.placingDragonAttack = false;
        this.placingDragonFire = false;
        this.input.onDown.add(this.buildDwarf, this);
        this.knightButton.tint = 0x0000ff;
        this.archerButton.tint = 0x0000ff;
        this.dwarfButton.tint = 0x00ff00;
    },
    
    buildDwarf: function(pointer){
        if(this.placingDwarf == true && pointer.x > 270 && this.dwarfReserves > 0 && this.gameWasPaused == false) {
            this.highlightPointer(pointer);
            this.dwarfReserves--;
            var dwarf = this.knightGroup.getFirstDead(true, 270, pointer.y, 'dwarf', 'DwarfAttackEast01.png');
            this.physics.arcade.enable(dwarf, Phaser.Physics.ARCADE);
            dwarf.anchor.setTo(0.5, 0.5);
            dwarf.body.bounce.setTo(0, 0);
            dwarf.body.setSize(40, 50);
            dwarf.body.maxVelocity.y = 0;
            dwarf.dwarf = true;
            dwarf.knight = false;
            dwarf.archer = false;
            dwarf.knightDefender = false;
            dwarf.body.immovable = false;
            dwarf.angle = 0;
            dwarf.speed = Main.dwarfSpeed;
            dwarf.hp = Main.dwarfHP;
            dwarf.attackSpeed = Main.dwarfSpeed / 2;
            dwarf.attack = Main.dwarfDamage;
            dwarf.countDown;
            dwarf.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(25, 32));
            dwarf.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
            dwarf.animations.play('walk', 14, true);
            dwarf.body.velocity.x = dwarf.speed;
            dwarf.checkWorldBounds = true;
            dwarf.events.onOutOfBounds.add(this.thingDied, this);
            dwarf.events.onAnimationLoop.removeAll();
        }
    },
    
    buildCavalry: function(){
        if(this.cavalryReady == true && this.gameWasPaused == false) {
            this.cavalryButton.tint = 0x000000;
            this.cavalryTimer = this.time.now + Main.cavalryBuildTime;
            this.cavalryReady = false;
            if(Main.sound == true && this.levelOver == false){
                this.cavalrySound.volume = 0.7;
                this.cavalrySound.play();
            }
            for(var i = 0; i < Main.maxCavalry; i++){
                var cavalry = this.cavalryGroup.getFirstDead(true, game.rnd.integerInRange(400, 800), (game.rnd.integerInRange(30,100) * -1), 'cavalry', 'CavalryRunningSouth1.png');
                this.physics.arcade.enable(cavalry, Phaser.Physics.ARCADE);
                cavalry.anchor.setTo(0.5, 0.5);
                cavalry.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(0, 11));
                cavalry.animations.add('runAway', Phaser.ArrayUtils.numberArrayStep(13, 24));
                cavalry.animations.play('walk', 14, true);
                cavalry.body.velocity.y = this.rnd.integerInRange(220,300);
                cavalry.attack = Main.cavalryDamage;
                cavalry.cavalry = true;
                cavalry.events.onAnimationLoop.add(this.killCavalry, this);  
            }
        }
    },
    
    killCavalry: function(cavalry){
        if(cavalry.y > 600 || cavalry.y < -500){
            cavalry.kill();
        }
    },
    
    buildMage: function(){
        if(this.mageReady && this.gameWasPaused == false){
            this.mageButton.tint = 0x000000;
            this.mageReady = false;
            this.mageLaunch = this.time.now + this.mageRate;
            var mage = this.mageGroup.getFirstDead(true, 360, 260, 'mage', 'MageFacingSouth.png');
            mage.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(1, 13));
            mage.animations.play('walk', 8, true);
            mage.counter = 0;
            mage.mage = true;
            mage.events.onAnimationLoop.add(this.mageGo, this);            
            mage.anchor.setTo(0.5, 0.5);
            var mageIn = this.goodMagicGroup.getFirstDead(true, mage.x, mage.y, 'goodMagic', 'FireSpell1.png');
            mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
            mageIn.animations.play('fire', 10, true);
            mageIn.events.onAnimationLoop.removeAll();
            mageIn.events.onAnimationLoop.add(this.thingDied, this);
            mageIn.alpha = 0.8;
            mageIn.anchor.setTo(0.5, 0.5);
            
            if(Main.sound == true && this.levelOver == false){
                this.mageInSound.volume = 0.6;
                this.mageInSound.play();
            }

            if(Main.iceMagicActive){
                for(var i = 0; i < 8; i++){
                    var ice = this.goodMagicGroup.getFirstDead(true, this.rnd.integerInRange(350, 820), this.rnd.integerInRange(10, 520), 'goodMagic', 'FireSpell1.png');
                    this.physics.arcade.enable(ice, Phaser.Physics.ARCADE);
                    ice.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(4, 8));
                    ice.animations.play('fire', this.rnd.integerInRange(3, 8), true);
                    ice.events.onAnimationLoop.removeAll();
                    ice.ice = true;
                    ice.attack = 75;
                    ice.events.onAnimationLoop.add(this.thingDied, this);
                    ice.alpha = 0.8;
                    ice.anchor.setTo(0.5, 0.5);
                    
                }
            }

            if(Main.waterMagicActive){
                mage.counter = 2;
                for(var i = this.rnd.integerInRange(30, 60); i < 520; i += this.rnd.integerInRange(70, 100)){
                    var water = this.goodMagicGroup.getFirstDead(true, 200, i, 'goodMagic', 'FireSpell1.png');
                    this.physics.arcade.enable(water, Phaser.Physics.ARCADE);
                    water.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(26, 35));
                    water.animations.play('fire', this.rnd.integerInRange(10, 12), true);
                    water.events.onAnimationLoop.removeAll();
                    water.alpha = 0.8;
                    water.water = true;
                    water.attack = 100;
                    water.anchor.setTo(0.5, 0.5);
                    water.body.velocity.x = 300;
                    water.counter = 1;
                    water.events.onAnimationLoop.add(this.magicGo, this);
                }
            }

            if(Main.fireMagicActive){
                mage.counter = 2;
                for(var i = 0; i < 15; i++ ){
                    var fire = this.goodMagicGroup.getFirstDead(true, mage.x, mage.y, 'goodMagic', 'FireSpell1.png');
                    this.physics.arcade.enable(fire, Phaser.Physics.ARCADE);
                    fire.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(0, 3));
                    fire.animations.play('fire', this.rnd.integerInRange(9, 14), true);
                    fire.events.onAnimationLoop.removeAll();
                    fire.alpha = 0.6;
                    fire.width = 70;
                    fire.height = 80;
                    fire.fire = true;
                    fire.attack = 300;
                    fire.anchor.setTo(0.5, 0.5);
                    fire.body.velocity.x = this.rnd.integerInRange(0,200);
                    fire.body.velocity.y = this.rnd.integerInRange(-250, 250);
                    fire.counter = -1;
                    fire.events.onAnimationLoop.add(this.magicGo, this);
                }
                if(Main.sound){
                        this.flameSound.volume = 0.9;
                        this.flameSound.play();
                }
            }
        }
    },
    
    mageGo: function(mage){
        mage.counter++;
        if(Main.iceMagicActive){
            for(var i = 0; i < 8; i++){
                var ice = this.goodMagicGroup.getFirstDead(true, this.rnd.integerInRange(350, 780), this.rnd.integerInRange(10, 520), 'goodMagic', 'FireSpell1.png');
                this.physics.arcade.enable(ice, Phaser.Physics.ARCADE);
                ice.anchor.setTo(0.5, 0.5);
                ice.attack = 75;
                ice.ice = true;
                ice.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(4, 8));
                ice.animations.play('fire', this.rnd.integerInRange(3, 8), true);
                ice.events.onAnimationLoop.removeAll();
                ice.events.onAnimationLoop.add(this.thingDied, this);
                ice.alpha = 0.8;
                
                
                
            }
        }
            
        if(mage.counter > 2){
            if(mage.mage == true){
                var mageIn = this.goodMagicGroup.getFirstDead(true, mage.x, mage.y, 'goodMagic', 'FireSpell1.png');
                mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(9, 19));
                mageIn.animations.play('fire', 10, true);
                mageIn.events.onAnimationLoop.removeAll();
                mageIn.events.onAnimationLoop.add(this.thingDied, this);
                mageIn.alpha = 0.8;
                mageIn.anchor.setTo(0.5, 0.5);
            }
            mage.kill();
        }
    },
    
    magicGo: function(magic){
        if(magic.x > 600 || magic.y < -10 || magic.y > 560){
            magic.kill();
        }
    },
    
    activateDragonTrap: function(){
        if(Main.dragonTrapUnlocked && this.currentPointsThisRound >= Main.dragonTrapBuildPoints){
            this.placingKnight = false;
            this.placingArcher = false;
            this.placingDwarf = false;
            this.placingDragonTrap = true;
            this.placingDragonAttack = false;
            this.placingDragonFire = false;
            this.input.onDown.add(this.buildDragonTrap, this);
            this.knightButton.tint = 0x0000ff;
            this.archerButton.tint = 0x0000ff;
            if(Main.currentLevel >= 3 || Main.defenseContract){
                this.dwarfButton.tint = 0x0000ff;
            }
        }
    },
    
    buildDragonTrap: function(pointer){
        if(this.placingDragonTrap && pointer.x > 310 && this.currentPointsThisRound >= Main.dragonTrapBuildPoints && this.gameWasPaused == false){
            this.currentPointsThisRound -= Main.dragonTrapBuildPoints;
            this.highlightPointer(pointer);
            var x = pointer.x;
            if(x > 700){
                x = 700;
            }
            var blueDragon = this.redDragonGroup.getFirstDead(true, -50, pointer.y, 'blueDragon', 'BlueDragonFlyEast01.png');
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
        }
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
    
    activateDragonAttack: function(){
        if(Main.dragonAttackUnlocked && this.currentPointsThisRound >= Main.dragonAttackBuildPoints){
            this.placingKnight = false;
            this.placingArcher = false;
            this.placingDwarf = false;
            this.placingDragonTrap = false;
            this.placingDragonAttack = true;
            this.placingDragonFire = false;
            this.input.onDown.add(this.buildDragonAttack, this);
            this.knightButton.tint = 0x0000ff;
            this.archerButton.tint = 0x0000ff;
            if(Main.currentLevel >= 3 || Main.defenseContract){
                this.dwarfButton.tint = 0x0000ff;
            }
        }
    },
    
    buildDragonAttack: function(pointer){
        if(this.placingDragonAttack && pointer.x > 340 && this.currentPointsThisRound >= Main.dragonAttackBuildPoints && this.gameWasPaused == false){
            this.currentPointsThisRound -= Main.dragonAttackBuildPoints;
            var x = pointer.x;
            if(x>700){
                x = 700;
            }
            this.highlightPointer(pointer);
            var goldDragon = this.redDragonGroup.getFirstDead(true, -50, pointer.y, 'goldDragon', 'DragonAttackEnd01.png');
            this.physics.arcade.enable(goldDragon, Phaser.Physics.ARCADE);
            goldDragon.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(18, 26));
            goldDragon.animations.add('flyWest', Phaser.ArrayUtils.numberArrayStep(27, 35));
            goldDragon.animations.add('attack', Phaser.ArrayUtils.numberArrayStep(0, 17));
            goldDragon.animations.play('flyEast', 8, true);
            goldDragon.tint = 0xccffff;
            goldDragon.events.onAnimationLoop.removeAll();
            goldDragon.body.setSize(100, 60);
            goldDragon.anchor.setTo(0.5, 0.5);
            goldDragon.attack = Main.dragonAttackDamage;
            goldDragon.hp = Main.dragonAttackHealth;
            goldDragon.attackReady = true;
            goldDragon.countDown = 0;
            goldDragon.body.immovable = true;
            goldDragon.attackDragon = true;

            var tween = this.add.tween(goldDragon);
            tween.to({ x: x }, 1000, 'Linear', true, 0);
        }
    },
    
    activateDragonFire: function(){
        if(Main.dragonFireUnlocked && this.currentPointsThisRound >= Main.dragonFireBuildPoints){
            this.placingKnight = false;
            this.placingArcher = false;
            this.placingDwarf = false;
            this.placingDragonTrap = false;
            this.placingDragonAttack = false;
            this.placingDragonFire = true;
            this.input.onDown.add(this.buildDragonFire, this);
            this.knightButton.tint = 0x0000ff;
            this.archerButton.tint = 0x0000ff;
            if(Main.currentLevel >= 3 || Main.defenseContract){
                this.dwarfButton.tint = 0x0000ff;
            }
        }
    },
    
    buildDragonFire: function(pointer){
        if(this.placingDragonFire && pointer.x > 310 && this.currentPointsThisRound >= Main.dragonFireBuildPoints && this.gameWasPaused == false){
            this.currentPointsThisRound -= Main.dragonFireBuildPoints;
            this.highlightPointer(pointer);
            var x = pointer.x;
            if(x > 600){
                x = 600;
            }
            var redDragon = this.redDragonGroup.getFirstDead(true, -50, pointer.y, 'redDragon', 'Fire1.png');
            this.physics.arcade.enable(redDragon, Phaser.Physics.ARCADE);
            redDragon.animations.add('flyEast', Phaser.ArrayUtils.numberArrayStep(12, 20));
            redDragon.animations.add('hover', Phaser.ArrayUtils.numberArrayStep(30, 38));
            redDragon.animations.add('flyWest', Phaser.ArrayUtils.numberArrayStep(21, 29));
            redDragon.animations.play('flyEast', 8, true);   
            redDragon.tint = 0xffccff;
            redDragon.events.onAnimationLoop.removeAll();
            redDragon.anchor.setTo(0.5, 0.5);
            redDragon.attack = 50;
            redDragon.hp = 10;
            redDragon.attackReady = false;
            redDragon.counter = 0;
            redDragon.fireCounter = 0;
            redDragon.body.immovable = true;
            redDragon.attackDragon = false;

            var tween = this.add.tween(redDragon);
            tween.to({ x: x }, 1000, 'Linear', true, 0);
            tween.onComplete.addOnce(this.dragonInFirePosition, this);
        }
    },
    
    dragonInFirePosition: function(redDragon){
        redDragon.events.onAnimationLoop.addOnce(this.dragonFire, this);
    },
    
    dragonFire:function(redDragon){
        redDragon.fireCounter = 0;
        redDragon.attackReady = true;
        redDragon.events.onAnimationLoop.add(this.dragonFireCounter, this);
        var fire = this.dragonFireGroup.getFirstDead(true, redDragon.x + redDragon.width / 2, redDragon.y, 'redDragon', 'Fire1.png');
        this.physics.arcade.enable(fire, Phaser.Physics.ARCADE);
        fire.animations.add('fire', [0,1,2,3,4,5,6,7,8,9,10,11,10,11,10,11,10,11,10,11,10,11,10,11,10,11,10,11,10,9,8,7,6,5,4,3,2,1,0]);
        fire.animations.play('fire', 8, true);
        fire.events.onAnimationLoop.removeAll();
        fire.anchor.setTo(0, 0.5);
        fire.alpha = 0.8;
        fire.fire = true;
        fire.attack = 300;
        fire.body.setSize(130, 70);
        fire.events.onAnimationLoop.addOnce(this.thingDied, this);
    
        if(Main.sound){
            this.flameSound.volume = 0.9;
            this.flameSound.play();
        }
    },
    
    dragonFireCounter: function(redDragon){
        redDragon.fireCounter++;
        if(redDragon.fireCounter > 10){
            redDragon.events.onAnimationLoop.removeAll();
            this.dragonFire(redDragon);
        }
    },
    
    buildSkeletons: function(){
        for(var i = 0; i < this.skeletonNumber; i++){
            var skeleton = this.skeletonGroup.getFirstDead(true, this.rnd.integerInRange(980, 1010), this.rnd.integerInRange(30, 510), 'skeleton', 'SkeletonAttackWest1');
            this.physics.arcade.enable(skeleton, Phaser.Physics.ARCADE);
            skeleton.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(19, 27));
            skeleton.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 9));
            skeleton.body.setSize(40, 50);
            skeleton.angle = 0;
            skeleton.atWall = false;
            skeleton.speed = game.rnd.integerInRange(this.skeletonSpeed - 10, this.skeletonSpeed + 10);
            skeleton.skeleton = true;
            skeleton.shadowKnight = false;
            skeleton.orc = false;
            skeleton.ogre = false;
            skeleton.skeletonDefender = false;
            skeleton.skeletonArcher = false;
            skeleton.body.immovable = false;
            skeleton.hp = this.skeletonHP;
            skeleton.attackSpeed = skeleton.speed / 2;
            skeleton.countDown;
            skeleton.attack = this.skeletonAttack;
            skeleton.animations.play('walk', game.rnd.integerInRange(12, 16), true);
            skeleton.body.bounce.setTo(0, 0);
            skeleton.anchor.setTo(0.5, 0.5);
            skeleton.body.velocity.x = skeleton.speed;
            skeleton.events.onAnimationLoop.removeAll();
        }
    },
    
    buildSkeletonArchers: function(){
        var skeletonArcher = this.skeletonGroup.getFirstDead(true, 1000, this.rnd.integerInRange(50,500), 'skeletonArcher', 'SkeletonArcherFallingWest1.png');
        this.physics.arcade.enable(skeletonArcher, Phaser.Physics.ARCADE);
        skeletonArcher.anchor.setTo(0.5, 0.5);
        skeletonArcher.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(22, 29));
        skeletonArcher.animations.add('fire', [15,16,17,18,19,20,21,9,10,11,12,13,14]);
        skeletonArcher.animations.play('walk', 14, true);
        skeletonArcher.body.velocity.x = 0;
        skeletonArcher.events.onAnimationLoop.removeAll();
        skeletonArcher.skeletonArcher = true;
        skeletonArcher.atWall = false;
        skeletonArcher.skeleton = false;
        skeletonArcher.ogre = false;
        skeletonArcher.orc = false;
        skeletonArcher.skeletonDefender = false;
        skeletonArcher.shadowKnight = false;
        skeletonArcher.body.immovable = false;
        skeletonArcher.hp = this.skeletonArcherHP;
        skeletonArcher.angle = 0;
        skeletonArcher.fireMarker = 0;
        skeletonArcher.waitMarker = 0;
        skeletonArcher.arrowAngle = 20;
        skeletonArcher.arrowDirection = -150;
        
        
        var tween = game.add.tween(skeletonArcher);
        tween.to({ x: skeletonArcher.x - this.rnd.integerInRange(100, 150)}, this.rnd.integerInRange(500, 800), 'Linear', true, 0);
        tween.onComplete.addOnce(this.skeletonArcherInPosition, this);
    },
    
    skeletonArcherInPosition(skeletonArcher){
        if(skeletonArcher.alive && skeletonArcher.skeletonArcher){
            skeletonArcher.animations.play('fire', game.rnd.integerInRange(11, 15), true);
            skeletonArcher.events.onAnimationLoop.add(this.skeletonArcherFire, this);
            var arrow = this.badArrowGroup.getFirstDead(true, skeletonArcher.x, skeletonArcher.y, 'arrow', 'arrow1.png');
            if(arrow.scale.x > 0){arrow.scale.x *= -1;}
            arrow.animations.add('go', [0]);
            arrow.animations.play('go', 20, true);
            this.physics.arcade.enable(arrow, Phaser.Physics.ARCADE);
            arrow.anchor.setTo(0.5, 0.5);
            arrow.body.velocity.x = -200;
            arrow.body.velocity.y = 0;
            arrow.angle = 0;
            arrow.attack = this.skeletonArcherAttack;
            arrow.countDown = 0;
            arrow.range = this.skeletonArcherRange;
            arrow.events.onAnimationLoop.add(this.arrowGo, this);
            if(Main.sound == true && this.levelOver == false){
                this.bowSound.volume = 0.1;
                this.bowSound.play();
            }
        }
    },
    
    skeletonArcherFire: function(skeletonArcher){
        if(skeletonArcher.fireMarker < 5) {
            
            var arrow = this.badArrowGroup.getFirstDead(true, skeletonArcher.x, skeletonArcher.y, 'arrow', 'arrow1.png');
            arrow.animations.add('go', [0]);
            arrow.animations.play('go', 20, true);
            this.physics.arcade.enable(arrow, Phaser.Physics.ARCADE);
            if(arrow.scale.x > 0){arrow.scale.x *= -1;}
            arrow.angle = skeletonArcher.arrowAngle;
            arrow.anchor.setTo(0.5, 0.5);
            arrow.body.velocity.x = -200;
            arrow.body.velocity.y = skeletonArcher.arrowDirection;
            arrow.attack = this.skeletonArcherAttack;
            skeletonArcher.arrowDirection += 75;
            skeletonArcher.arrowAngle -= 10;
            arrow.countDown = 0;
            arrow.range = this.skeletonArcherRange;
            
            arrow.events.onAnimationLoop.add(this.arrowGo, this);
            
            skeletonArcher.fireMarker++;
            skeletonArcher.angle = skeletonArcher.arrowAngle / 2;
            if(Main.sound == true && this.levelOver == false){
                this.bowSound.volume = 0.1;
                this.bowSound.play();
            }
        } else {
            skeletonArcher.events.onAnimationLoop.removeAll();
            skeletonArcher.arrowAngle = 20;
            skeletonArcher.arrowDirection = -150;
            skeletonArcher.waitMarker = 0;
            skeletonArcher.fireMarker = 0;
            skeletonArcher.angle = 0;
            skeletonArcher.animations.play('walk', 10, true);
            
            var tween = this.add.tween(skeletonArcher);
            tween.to({ x: skeletonArcher.x - this.rnd.integerInRange(100, 150)}, this.rnd.integerInRange(500, 900), 'Linear', true, 0);
            tween.onComplete.addOnce(this.skeletonArcherInPosition, this);
            
        } 
    },
    
    buildShadowKnights: function(){
        var shadowKnight = this.skeletonGroup.getFirstDead(true, game.rnd.integerInRange(980, 1010), game.rnd.integerInRange(30, 510), 'shadowKnight', 'ShadowKnightAttackWest1.png');
        this.physics.arcade.enable(shadowKnight, Phaser.Physics.ARCADE);
        shadowKnight.events.onAnimationLoop.removeAll();
        shadowKnight.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(22, 29));
        shadowKnight.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        shadowKnight.body.setSize(50, 70);
        shadowKnight.angle = 0;
        shadowKnight.atWall = false;
        shadowKnight.speed = game.rnd.integerInRange(this.shadowKnightSpeed - 10, this.shadowKnightSpeed + 10);
        shadowKnight.skeleton = false;
        shadowKnight.ogre = false;
        shadowKnight.orc = false;
        shadowKnight.skeletonDefender = false;
        shadowKnight.skeletonArcher = false;
        shadowKnight.shadowKnight = true;
        shadowKnight.body.immovable = false;
        shadowKnight.hp = this.shadowKnightHP;
        shadowKnight.attackSpeed = shadowKnight.speed / 2;
        shadowKnight.countDown;
        shadowKnight.attack = this.shadowKnightAttack;
        shadowKnight.animations.play('walk', game.rnd.integerInRange(11, 14), true);
        shadowKnight.body.bounce.setTo(0, 0);
        shadowKnight.anchor.setTo(0.5, 0.5);
        shadowKnight.body.velocity.x = shadowKnight.speed;
        
    }, 
    
    buildOgres: function(){
        var ogre = this.skeletonGroup.getFirstDead(true, this.rnd.integerInRange(980, 1010), this.rnd.integerInRange(30, 510), 'ogre', 'OgreAttackingWest1.png');
        this.physics.arcade.enable(ogre, Phaser.Physics.ARCADE);
        ogre.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(22, 29));
        ogre.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 10));
        ogre.body.setSize(50, 80);
        ogre.angle = 0;
        ogre.atWall = false;
        ogre.speed = this.rnd.integerInRange(this.ogreSpeed - 10, this.ogreSpeed + 10);
        ogre.skeleton = false;
        ogre.shadowKnight = false;
        ogre.ogre = true;
        ogre.orc = false;
        ogre.skeletonDefender = false;
        ogre.skeletonArcher = false;
        ogre.body.immovable = false;
        ogre.hp = this.ogreHP;
        ogre.attackSpeed = ogre.speed / 2;
        ogre.countDown;
        ogre.attack = this.ogreAttack;
        ogre.animations.play('walk', 10, true);
        ogre.body.bounce.setTo(0, 0);
        ogre.anchor.setTo(0.5, 0.5);
        ogre.body.velocity.x = ogre.speed;
        ogre.events.onAnimationLoop.removeAll();
        if(Main.sound == true && this.levelOver == false){
                this.trollSound.volume = 0.7;
                this.trollSound.play();
            }
    },
    
    buildOrcs: function(){
        var orc = this.skeletonGroup.getFirstDead(true, this.rnd.integerInRange(980, 1010), this.rnd.integerInRange(30, 510), 'orc', 'OrcAttackWest1.png');
        this.physics.arcade.enable(orc, Phaser.Physics.ARCADE);
        orc.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(26, 33));
        orc.animations.add('fight', Phaser.ArrayUtils.numberArrayStep(0, 12));
        orc.body.setSize(50, 70);
        orc.angle = 0;
        orc.atWall = false;
        orc.speed = this.rnd.integerInRange(this.orcSpeed - 10, this.orcSpeed + 10);
        orc.skeleton = false;
        orc.shadowKnight = false;
        orc.ogre = false;
        orc.orc = true;
        orc.skeletonDefender = false;
        orc.skeletonArcher = false;
        orc.body.immovable = false;
        orc.hp = this.orcHP;
        orc.attackSpeed = orc.speed / 2;
        orc.countDown;
        orc.attack = this.orcAttack;
        orc.animations.play('walk', 10, true);
        orc.body.bounce.setTo(0, 0);
        orc.anchor.setTo(0.5, 0.5);
        orc.body.velocity.x = orc.speed;
        orc.body.velocity.y = orc.speed;
        orc.events.onAnimationLoop.removeAll();
        orc.events.onAnimationLoop.add(this.moveOrc, this);
        
    },
    
    moveOrc: function(orc){
    
        orc.body.velocity.y *= -(this.rnd.integerInRange(3, 15)/10);
        if(orc.y < 0 || orc.y > 540){
            orc.kill();
        }
        
        
    },
    
    buildSpearWall: function(){
        for(var i = 0; i < this.spearWallNumber; i++){
            var x = this.rnd.integerInRange(480,750);
            var y = this.rnd.integerInRange(50,450);
            var yMax = y + 40;
            for(;y < yMax; y +=10){
                var spearWall = this.barrierGroup.getFirstDead(true, x, y, 'spear');
                spearWall.angle = -20;
                this.physics.arcade.enable(spearWall, Phaser.Physics.ARCADE);
                spearWall.body.immovable = true;
                spearWall.attack = this.spearWallAttack;
                spearWall.hp = this.spearWallHP;
                spearWall.barrier = true;
                spearWall.badBarrier = true;
                spearWall.anchor.setTo(0.5, 0.5);
            }
        }
    },
    
    buildIceWall: function(){
        for(var i = 0; i < this.iceWallNumber; i++){
            var x = this.rnd.integerInRange(480,750);
            var y = this.rnd.integerInRange(100,450);
                var iceWall = this.bottomBarrierGroup.getFirstDead(true, x, y, 'badMagic', 'IceSpell1.png');
                this.physics.arcade.enable(iceWall, Phaser.Physics.ARCADE);
                iceWall.body.immovable = true;
                iceWall.iceWall = true;
                iceWall.attack = this.iceWallAttack;
                iceWall.hp = this.iceWallHP;
                iceWall.barrier = true;
                iceWall.anchor.setTo(0.5, 0.5);
            
        }
    },
    
    launchSmokeScreen: function(){
        var y = this.rnd.integerInRange(50,500);
        var smoke = this.smokeGroup.getFirstDead(true, 850, y, 'smoke', 'blackSmoke00.png');
        smoke.animations.add('walk', Phaser.ArrayUtils.numberArrayStep(0, 14));
        smoke.animations.play('walk', game.rnd.integerInRange(12, 16), true);
        smoke.countDown = 0;
        smoke.range = this.rnd.integerInRange(5,15);
        smoke.events.onAnimationLoop.add(this.arrowGo, this);
        smoke.alpha = 0.5;
        smoke.width = this.rnd.integerInRange(400,900);
        smoke.height = this.rnd.integerInRange(200,300);
        smoke.anchor.setTo(0.5, 0.5);
        
        
    },
    
    buildWarpHole: function(){
        var x = this.rnd.integerInRange(500,800);
        var y = this.rnd.integerInRange(50,500);
        
        var hole = this.badMagicGroup.getFirstDead(true, x, y, 'badMagic', 'BadIn1.png');
        this.physics.arcade.enable(hole, Phaser.Physics.ARCADE);
        hole.events.onAnimationLoop.removeAll();
        hole.animations.add('warp', Phaser.ArrayUtils.numberArrayStep(34, 37));
        hole.animations.play('warp', this.rnd.integerInRange(10, 20), true);
        hole.countDown = -40;
        hole.attack = 300;
        hole.range = 20;
        hole.events.onAnimationLoop.add(this.arrowGo, this);
        hole.alpha = 0.7;
        var dimension = this.rnd.integerInRange(100,130);
        hole.width = dimension;
        hole.height = dimension;
        hole.body.setSize(dimension / 4, dimension / 4);
        hole.anchor.setTo(0.5, 0.5);
    },
    
    buildBadFireMagic: function(){
        
        var mage = this.mageGroup.getFirstDead(true, 930, 260, 'badMagic', 'BadIn1.png');
            mage.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(21, 33));
            mage.animations.play('spell', 8, true);
            mage.counter = 0;
            mage.events.onAnimationLoop.removeAll();
            mage.events.onAnimationLoop.add(this.moreBadFireMagic, this);            
            mage.anchor.setTo(0.5, 0.5);
        
        var mageIn = this.mageGroup.getFirstDead(true, mage.x, mage.y, 'badMagic', 'BadIn1.png');
            mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(0, 4));
            mageIn.animations.play('fire', 10, true);
            mageIn.events.onAnimationLoop.removeAll();
            mageIn.events.onAnimationLoop.add(this.thingDied, this);
            mageIn.alpha = 0.8;
            mageIn.anchor.setTo(0.6, 0.6);
        
            if(Main.sound){
                this.flameSound.volume = 0.9;
                this.flameSound.play();
                this.shadowMageSound.volume = 0.2;
                this.shadowMageSound.play();            
            }
        
        for(var n = 0; n < 5; n++){
            var x = this.rnd.integerInRange(500,800);
            var y = this.rnd.integerInRange(50,500);
            var fire = this.badMagicGroup.getFirstDead(true, x, y, 'badMagic', 'BadIn1.png');
            this.physics.arcade.enable(fire, Phaser.Physics.ARCADE);
            fire.animations.add('burn', Phaser.ArrayUtils.numberArrayStep(5, 16));
            fire.animations.play('burn', this.rnd.integerInRange(10, 20), true);
            fire.events.onAnimationLoop.add(this.thingDied, this);
            fire.fire = true;
            fire.attack = 400;

            fire.alpha = 0.7;
            var dimension = this.rnd.integerInRange(60,120);
            fire.width = dimension;
            fire.height = dimension;
            fire.body.setSize(dimension / 2, dimension / 2); 
            fire.anchor.setTo(0.5, 0.5);
        }
    },
    
    moreBadFireMagic: function(mage){
        mage.counter++;
        if(mage.counter > 3){
            var mageIn = this.mageGroup.getFirstDead(true, mage.x, mage.y, 'badMagic', 'BadIn1.png');
            mageIn.animations.add('fire', Phaser.ArrayUtils.numberArrayStep(0, 4));
            mageIn.animations.play('fire', 10, true);
            mageIn.events.onAnimationLoop.removeAll();
            mageIn.events.onAnimationLoop.add(this.thingDied, this);
            mageIn.alpha = 0.8;
            mageIn.anchor.setTo(0.6, 0.6);
            mage.kill();
        } else {
            if(Main.sound){
                        this.flameSound.volume = 0.9;
                        this.flameSound.play();
                    }
            for(var n = 0; n < 5; n++){
            var x = this.rnd.integerInRange(500,800);
            var y = this.rnd.integerInRange(50,500);
            var fire = this.badMagicGroup.getFirstDead(true, x, y, 'badMagic', 'BadIn1.png');
            this.physics.arcade.enable(fire, Phaser.Physics.ARCADE);
            fire.animations.add('burn', Phaser.ArrayUtils.numberArrayStep(5, 16));
            fire.animations.play('burn', this.rnd.integerInRange(10, 20), true);
            fire.events.onAnimationLoop.add(this.thingDied, this);
            fire.fire = true;
            fire.attack = 400;

            fire.alpha = 0.7;
            var dimension = this.rnd.integerInRange(60,100);
            fire.width = dimension;
            fire.height = dimension;
            fire.body.setSize(dimension / 2, dimension / 2); 
            fire.anchor.setTo(0.5, 0.5);
        }
        }
    },
    
    buildDragon: function(){
        for(var i = 480; i < 850; i += this.rnd.integerInRange(100, 200)){
                var dragon = this.dragonGroup.getFirstDead(true, i, this.rnd.integerInRange(600,700), 'dragon', 'DragonFlyingNorth01.png');
                this.physics.arcade.enable(dragon, Phaser.Physics.ARCADE);
                dragon.anchor.setTo(0.5, 0.5);
                dragon.animations.add('fly', Phaser.ArrayUtils.numberArrayStep(0, 7));
                dragon.animations.play('fly', 14, true);
                dragon.body.velocity.y = this.rnd.integerInRange(220,300) * -1;
                dragon.attack = 1000;
                dragon.events.onAnimationLoop.add(this.killDragon, this);  
            }
        if(Main.sound == true && this.levelOver == false){
                this.dragonSound.volume = 0.7;
                this.dragonSound.play();            
            }
    },
    
    killDragon: function(dragon){
        if(dragon.y < -60){
            dragon.kill();
        }
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
    
    bamItB: function(it) {
        var bam = this.explosionGroup.getFirstDead(true, it.x, it.y, 'goodMagic', 'FireSpell1.png');
        bam.anchor.setTo(0.5, 0.5);
        bam.animations.add('bam', Phaser.ArrayUtils.numberArrayStep(20, 25));
        bam.animations.play('bam', 8, true);
        bam.events.onAnimationLoop.add(this.thingDied, this); 
        bam.alpha = 0.7;
    },
    
    bleedItA: function(it){
        var blood = this.explosionGroup.getFirstDead(true, it.x, it.y, 'bloodA', 'blood1.png');
        blood.anchor.setTo(0.5, 0.5);
        blood.animations.add('bleed', Phaser.ArrayUtils.numberArrayStep(0, 4));
        blood.animations.play('bleed', 8, true);
        blood.events.onAnimationLoop.add(this.thingDied, this); 
        blood.alpha = 0.7;
    },
    
    highlightPointer: function(pointer){
        var pop = this.fallGroup.getFirstDead(true, pointer.x, pointer.y,'pop','goodIn01.png');
        pop.anchor.setTo(0.5,0.5);
        pop.animations.add('pop', [0,1,2,3]);
        pop.animations.play('pop', 12, true);
        pop.events.onAnimationLoop.add(this.thingDied, this); 
        pop.alpha = 1;
    },
    
    goToWorldMap: function(){
        if(Main.sound){
                this.battleMusicPart1.stop();
                this.battleMusicPart2.stop();
                this.battleMusicPart3.stop();
        }
        if(this.victory){
            Main.buildMenu = true;
        } else {
            Main.buildMenu = false;
        }
        this.state.start('World', true);
    },
    
    pauseGame: function(){
        
        if(this.skeletonsOn){
            this.skeletonHolder = this.skeletonLaunch - this.time.now;
        }
        if(this.skeletonArchersOn){
            this.skeletonArcherHolder = this.skeletonArcherLaunch - this.time.now;
        }
        if(this.shadowKnightsOn){
            this.shadowKnightHolder = this.skeletonArcherLaunch - this.time.now;
        }
        if(this.orcsOn){
            this.orcHolder = this.orcLaunch - this.time.now;
        }
        if(this.ogresOn){
            this.ogreHolder = this.ogreLaunch - this.time.now;
        }
        this.knightHolder = this.knightTimer - this.time.now;
        this.archerHolder = this.archerTimer - this.time.now;
        if(Main.currentLevel >= 3 || Main.defenseContract == true){
            this.dwarfHolder = this.dwarfTimer - this.time.now;
        }
        if(Main.currentLevel >= 5 || Main.defenseContract == true){
            this.cavalryHolder = this.cavalryTimer - this.time.now;
        }
        if(Main.currentLevel >= 7 || Main.defenseContract == true){
            this.goodMagicHolder = this.mageLaunch - this.time.now;
        }
        if(Main.smokeScreen){
            this.smokeHolder = this.smokeScreenLaunch - this.time.now;
        }
        if(Main.warpHole){
            this.warpHolder = this.warpHoleLaunch - this.time.now;
        }
        if(Main.badFireMagic){
            this.badMagicHolder = this.badFireMagicLaunch - this.time.now;
        }
        if(this.dragon){
            this.dragonHolder = this.dragonLaunch - this.time.now;
        }
        if(Main.defenseContract){
            this.victoryTimeHolder = this.victoryTime - this.time.now;
        }
        
        this.gameWasPaused = true;
        
        this.pauseGroup = this.add.group();
        
        var backing = this.pauseGroup.create(-30, -50, 'menuTile1');
        backing.width = 1050;
        backing.height = 600;
        backing.tint = 0x000000;
        backing.alpha = 0.7;
        
        var pauseText = this.add.bitmapText(this.world.centerX,this.world.centerY,'immortal', 'Tap to Continue', 110);
   //     pauseText.tint = 0x000000;
        pauseText.anchor.setTo(0.5,0.5);
        this.pauseGroup.add(pauseText);
        
        game.paused = true;
        this.input.onDown.addOnce(this.unpause, self);
    },

    unpause: function(){
        game.paused = false;
    },
    
    fixPause: function(){
        if(this.gameWasPaused){
            this.pauseGroup.destroy();
            if(this.skeletonsOn){
                this.skeletonLaunch = this.skeletonHolder + this.time.now;
            }
            if(this.skeletonArchersOn){
                this.skeletonArcherLaunch = this.skeletonArcherHolder + this.time.now;
            }
            if(this.shadowKnightsOn){
                this.shadowKnightLaunch = this.shadowKnightHolder + this.time.now;
            }
            if(this.orcsOn){
                this.orcLaunch = this.orcHolder + this.time.now;
            }
            if(this.ogresOn){
                this.ogreLaunch = this.ogreHolder + this.time.now;
            }

            this.knightTimer = this.knightHolder + this.time.now;
            this.archerTimer = this.archerHolder + this.time.now;

            if(Main.currentLevel >= 3 || Main.defenseContract == true){
                this.dwarfTimer = this.dwarfHolder + this.time.now;
            }
            if(Main.currentLevel >= 5 || Main.defenseContract == true){
                this.cavalryTimer = this.cavalryHolder + this.time.now;
            }
            if(Main.currentLevel >= 7 || Main.defenseContract == true){
                this.mageLaunch = this.goodMagicHolder + this.time.now;
            }
            if(Main.smokeScreen){    
                this.smokeScreenLaunch = this.smokeHolder + this.time.now;
            }
            if(Main.warpHole){
                this.warpHoleLaunch = this.warpHolder + this.time.now;
            }
            if(Main.badFireMagic){
                this.badFireMagicLaunch = this.badMagicHolder + this.time.now;
            }
            if(this.dragon){
                this.dragonLaunch = this.dragonHolder + this.time.now;
            }
            if(Main.defenseContract){
                this.victoryTime = this.victoryTimeHolder + this.time.now;
            }
            
            this.gameWasPaused = false;
        }
    },
    
    update: function(){
        this.fixPause();
        this.timerUpdates();
        this.knightGroup.forEachExists(this.walkItOut, this);
        this.skeletonGroup.forEachExists(this.walkItOut, this);
        this.redDragonGroup.forEachExists(this.walkItOut, this);
        
        this.physics.arcade.collide(this.knightGroup, this.skeletonGroup, this.knightHitSkeleton, null, this);
        
        this.physics.arcade.overlap(this.knightGroup, this.barrierGroup, this.itHitBarrier, null, this);
        this.physics.arcade.overlap(this.goodArrowGroup, this.barrierGroup, this.arrowHitIt, null, this);
        
        this.physics.arcade.overlap(this.knightGroup, this.bottomBarrierGroup, this.itHitBarrier, null, this);
        this.physics.arcade.overlap(this.goodArrowGroup, this.bottomBarrierGroup, this.arrowHitIt, null, this);
        
        this.physics.arcade.overlap(this.cavalryGroup, this.skeletonGroup, this.cavalryAttack, null, this);
        
        this.physics.arcade.overlap(this.goodArrowGroup, this.skeletonGroup, this.arrowHitIt, null, this);
        
        this.physics.arcade.overlap(this.badArrowGroup, this.knightGroup, this.arrowHitIt, null, this);
        this.physics.arcade.overlap(this.badArrowGroup, this.cavalryGroup, this.arrowHitIt, null, this);
        
        this.physics.arcade.overlap(this.goodMagicGroup, this.skeletonGroup, this.magicHitIt, null, this);
        this.physics.arcade.overlap(this.dragonFireGroup, this.skeletonGroup, this.magicHitIt, null, this);
        this.physics.arcade.overlap(this.badMagicGroup, this.knightGroup, this.magicHitIt, null, this);
        
        this.physics.arcade.overlap(this.dragonGroup, this.knightGroup, this.magicHitIt, null, this);
        this.physics.arcade.overlap(this.dragonGroup, this.cavalryGroup, this.magicHitIt, null, this);
		this.physics.arcade.overlap(this.badMagicGroup, this.cavalryGroup, this.magicHitIt, null, this);
        
        this.physics.arcade.overlap(this.dragonGroup, this.redDragonGroup, this.dragonHitDragon, null, this);
        this.physics.arcade.overlap(this.badMagicGroup, this.redDragonGroup, this.dragonHitDragon, null, this);
        this.physics.arcade.overlap(this.badMagicGroup, this.goodBarrierGroup, this.magicHitIt, null, this);
        this.physics.arcade.overlap(this.dragonGroup, this.goodBarrierGroup, this.magicHitIt, null, this);
        
        this.physics.arcade.overlap(this.skeletonGroup, this.wallGroup, this.itHitWall, null, this);
        this.physics.arcade.overlap(this.badArrowGroup, this.wallGroup, this.itHitWall, null, this);
        
        this.physics.arcade.overlap(this.skeletonGroup, this.goodBarrierGroup, this.itHitBarrier, null, this);
        this.physics.arcade.overlap(this.badArrowGroup, this.goodBarrierGroup, this.arrowHitIt, null, this);
        
        this.physics.arcade.overlap(this.redDragonGroup, this.skeletonGroup, this.dragonHitSkeleton, null, this);
        this.physics.arcade.overlap(this.badArrowGroup, this.redDragonGroup, this.arrowHitIt, null, this);
      
        if (this.knightKey.isDown){
            this.activateKnight();
        }
        if (this.archerKey.isDown){
            this.activateArcher();
        }
        if (this.dwarfKey.isDown && Main.currentLevel >= 3 || Main.defenseContract && this.dwarfKey.isDown){
            this.activateDwarf();
        }
        if (this.cavalryKey.isDown && Main.currentLevel >= 5 || Main.defenseContract && this.cavalryKey.isDown){
            this.buildCavalry();
        }
        if (this.mageKey.isDown && Main.currentLevel >= 7 || Main.defenseContract && this.mageKey.isDown){
            this.buildMage();
        }
        
        if(Main.defenseContract == false){
            if(this.levelOver == false){
                this.skeletonLineCounter = 0;
                this.skeletonGroup.forEachExists(this.lookForWin, this);
            }

            if(this.levelOver == false && this.skeletonLineCounter == 0){
                this.levelOver = true;
                this.buildWinScreen();
            }
            this.healthBar.width = this.warPanelBacking.hp / Main.warPanelHealth * 380;
        }
        
        if(Main.defenseContract){
            if(Main.wager == 1){
                var myWidth = 220;
            }
            if(Main.wager == 2){
                var myWidth = 400;
            }
            if(Main.wager == 3){
                var myWidth = 680;
            }
            this.victoryBar.width = (this.victoryTime - this.time.now) / myWidth;
        }
        
        this.knightGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        this.skeletonGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        this.badMagicGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        this.goodMagicGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        this.cavalryGroup.sort('x', Phaser.Group.SORT_ASCENDING);
        this.cavalryGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        this.goodBarrierGroup.sort('y', Phaser.Group.SORT_ASCENDING);
        this.redDragonGroup.sort('y', Phaser.Group.SORT_ASCENDING);
    },
    
    timerUpdates: function(){
        if(this.time.now > this.knightTimer){
            this.knightTimer = this.time.now + Main.knightBuildTime;
            if(this.knightReserves < Main.maxKnights){
                this.knightReserves++;
            }
        }
        this.knightText.text = this.knightReserves;
        
        if(this.time.now > this.archerTimer){
            this.archerTimer = this.time.now + Main.archerBuildTime;
            if(this.archerReserves < Main.maxArchers){
                this.archerReserves++;
            }
        }
        this.archerText.text = this.archerReserves;
        
        if(Main.currentLevel >= 3 || Main.defenseContract == true){
            if(this.time.now > this.dwarfTimer){
                this.dwarfTimer = this.time.now + Main.dwarfBuildTime;
                if(this.dwarfReserves < Main.maxDwarves){
                    this.dwarfReserves++;
                }
            }
            this.dwarfText.text = this.dwarfReserves;
        }
        if(Main.currentLevel >= 5 || Main.defenseContract == true){
            this.cavalryText.text = '';
            this.cavalryBar.width = 100 - ((this.cavalryTimer - this.time.now) / Main.cavalryBuildTime * 100);
            if(this.time.now > this.cavalryTimer){
                this.cavalryBar.width = 0;
                this.cavalryReady = true;
                this.cavalryText.text = 'Ready!';
                this.cavalryButton.tint = 0x0000ff;
            }
        }
        
        if(Main.currentLevel >= 7 || Main.defenseContract == true){
            this.mageText.text = '';
            this.mageBar.width = 100 - ((this.mageLaunch - this.time.now) / this.mageRate * 100);
            if(this.time.now > this.mageLaunch){
                this.mageBar.width = 0;
                this.mageReady = true;
                this.mageText.text = 'Ready!';
                this.mageButton.tint = 0x0000ff;
            }
        }
        
        if(Main.dragonTrapUnlocked){
            if(this.currentPointsThisRound >= Main.dragonTrapBuildPoints){
                this.dragonTrapButton.tint = 0x0000ff;
            }
            if(this.currentPointsThisRound < Main.dragonTrapBuildPoints){
                this.dragonTrapButton.tint = 0x404040;
            }
            if(this.currentPointsThisRound >= Main.dragonTrapBuildPoints && this.placingDragonTrap){
                this.dragonTrapButton.tint = 0x88ff88;
            }  
        }
        
        if(Main.dragonAttackUnlocked){
            if(this.currentPointsThisRound >= Main.dragonAttackBuildPoints){
                this.dragonAttackButton.tint = 0x0000ff;
            }
            if(this.currentPointsThisRound < Main.dragonAttackBuildPoints){
                this.dragonAttackButton.tint = 0x404040;
            }
            if(this.currentPointsThisRound >= Main.dragonAttackBuildPoints && this.placingDragonAttack){
                this.dragonAttackButton.tint = 0x88ff88;
            }  
        }
        
        if(Main.dragonFireUnlocked){
            if(this.currentPointsThisRound >= Main.dragonFireBuildPoints){
                this.dragonFireButton.tint = 0x0000ff;
            }
            if(this.currentPointsThisRound < Main.dragonFireBuildPoints){
                this.dragonFireButton.tint = 0x404040;
            }
            if(this.currentPointsThisRound >= Main.dragonFireBuildPoints && this.placingDragonFire){
                this.dragonFireButton.tint = 0x88ff88;
            }  
        }
        
        this.pointsCounter.text = 'Dragon Points: ' + this.currentPointsThisRound;
        
        
        
        if(this.time.now > this.skeletonLaunch && this.skeletonsOn){
            this.skeletonLaunch = this.skeletonRate + this.time.now;
            this.buildSkeletons();
        }
        if(this.time.now > this.skeletonArcherLaunch && this.skeletonArchersOn){
            this.skeletonArcherLaunch = this.skeletonArcherRate + this.time.now;
            this.buildSkeletonArchers();
        }
        if(this.time.now > this.shadowKnightLaunch && this.shadowKnightsOn){
            this.shadowKnightLaunch = this.shadowKnightRate + this.time.now;
            this.buildShadowKnights();
        }
        if(this.time.now > this.ogreLaunch && this.ogresOn){
            this.ogreLaunch = this.ogreRate + this.time.now;
            this.buildOgres();
        }
        if(this.time.now > this.orcLaunch && this.orcsOn){
            this.orcLaunch = this.orcRate + this.time.now;
            this.buildOrcs();
        }
        if(Main.smokeScreen){
            if(this.time.now > this.smokeScreenLaunch){
                this.smokeScreenLaunch = this.time.now + this.smokeScreenRate;
                this.smokeScreenRate = this.rnd.integerInRange(3000,7000);
                this.launchSmokeScreen();
            }
        }
        if(Main.warpHole){
            if(this.time.now > this.warpHoleLaunch){
                this.warpHoleLaunch = this.time.now + this.warpHoleRate;
                this.warpHoleRate = this.rnd.integerInRange(7000,15000);
                this.buildWarpHole();
            }
        }
        if(Main.badFireMagic){
            if(this.time.now > this.badFireMagicLaunch){
                this.badFireMagicLaunch = this.time.now + this.badFireMagicRate;
                this.badFireMagicRate = this.rnd.integerInRange(30000,50000);
                this.buildBadFireMagic();
            }
        }
        if(this.dragon){
            if(this.time.now > this.dragonLaunch){
                this.dragonLaunch = this.time.now + this.dragonRate;
                this.dragonRate = this.rnd.integerInRange(20000,25000);
                this.buildDragon();
            }
        }
        if(Main.sound){
            
            if(this.time.now > this.battleMusicLaunch){
                this.battleMusicLaunch = this.battleMusicRate + this.time.now;
                this.playBattleMusic();
            }
            
            if(this.levelOver == true){
                this.gong.stop();
                this.battleMusicPart1.stop();
                this.battleMusicPart2.stop();
                this.battleMusicPart3.stop();
            } 
        }
        
        if(Main.defenseContract){
            if(this.time.now > this.victoryTime && this.levelOver == false){
                this.levelOver = true;
                this.buildWinScreen();
            }
        }
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
        
        if(it.attackDragon){
            if(game.time.now > it.countDown + 500){
                it.animations.play('flyEast', 14, true);
                it.countDown = 1;
            }
        }
        
        if(it.y < -200 || it.y > 550 || it.x < -200 || it.x > 1900){
            it.kill();
        }
        if(it.archer && it.knight || it.archer && it.dwarf){
            it.kill();
        }
        if(it.skeletonArcher && it.skeleton || it.skeletonArcher && it.orc || it.skeletonArcher && it.shadowKnight || it.skeletonArcher && this.ogre){
            it.kill();
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
                if(blastIt > 49 && blastIt < 52 && Main.sound == true && this.levelOver == false){
                    this.shieldSound.volume = this.rnd.integerInRange(2,4) / 10;
                    this.shieldSound.play();
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
                if(knight.dwarf == true) {
                    this.killThisDwarf(knight);
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
                if(skeleton.shadowKnight == true){
                    this.killThisShadowKnight(skeleton);
                    skeleton.kill();
                }
                if(skeleton.ogre == true){
                    this.killThisOgre(skeleton);
                    skeleton.kill();
                }
                if(skeleton.orc == true) {
                    this.killThisOrc(skeleton);
                    skeleton.kill();
                }

                knight.animations.play('walk', 14, true);
                knight.body.velocity.x = Main.knightSpeed;
            }
        }
        
        if(knight.archer == true){
            this.killThisArcher(knight);
            knight.kill();
            if(Main.sound == true && this.levelOver == false){
                this.shieldSound.volume = this.rnd.integerInRange(1,3) / 10;
                this.shieldSound.play();
            }
            }
        
        if(skeleton.skeletonArcher == true){
            this.killThisSkeletonArcher(skeleton);
            skeleton.kill();
            if(Main.sound == true && this.levelOver == false){
                this.shieldSound.volume = this.rnd.integerInRange(1,3) / 10;
                this.shieldSound.play();
            }
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
                if(blastIt > 49 && blastIt < 52 && Main.sound == true && this.levelOver == false){
                    this.shieldSound.volume = this.rnd.integerInRange(2,4) / 10;
                    this.shieldSound.play();
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
                if(knight.dwarf == true) {
                    this.killThisDwarf(knight);
                    knight.kill();
                }
                skeleton.animations.play('wait', 14, true);
            }
            if(skeleton.hp <= 0){
                this.killThisSkeleton(skeleton);
                skeleton.kill();
                knight.animations.play('walk', 14, true);
                knight.body.velocity.x = knight.speed;
                this.skeletonLineCounter--;
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
                if(blastIt > 49 && blastIt < 52 && Main.sound == true && this.levelOver == false){
                    this.shieldSound.volume = this.rnd.integerInRange(2,4) / 10;
                    this.shieldSound.play();
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
                if(skeleton.shadowKnight == true){
                    this.killThisShadowKnight(skeleton);
                    skeleton.kill();
                }
                if(skeleton.ogre == true){
                    this.killThisOgre(skeleton);
                    skeleton.kill();
                }
                if(skeleton.orc == true) {
                    this.killThisOrc(skeleton);
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
        if(Main.sound == true && this.levelOver == false){
                this.explosionSound.volume = this.rnd.integerInRange(1,2) / 10;
                this.explosionSound.play();
            }

        if(it.knight == true && it.hp <= 0){
            this.killThisKnight(it);
            it.kill();
        }
        
        if(it.archer == true && it.hp <= 0){
            this.killThisArcher(it);
            it.kill();
        }
        
        if(it.dwarf == true && it.hp <= 0) {
            this.killThisDwarf(it);
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
        
        if(it.orc == true && it.hp <= 0) {
            this.killThisOrc(it);
            it.kill();
        }
        
        if(it.ogre == true && it.hp <= 0) {
            this.killThisOgre(it);
            it.kill();
        }
        
        if(it.shadowKnight == true && it.hp <= 0) {
            this.killThisShadowKnight(it);
            it.kill();
        }
        
        if(it.skeletonDefender && it.hp <= 0){
            this.killThisSkeleton(it);
            it.kill();
        }
        if(it.knightDefender && it.hp <= 0){
            this.killThisRedKnight(it);
            it.kill();
        }
        if(it.attackReady && it.hp <= 0){
            this.dragonFlyAway(it);
        }
        
		if(it.hp <= 0 && it.barrier){
                if(it.iceWall == true){
                    this.killThisIceWall(it);
                    this.makePoints('50Points.png', it);
                    this.pointsThisRound += 50;
                    this.currentPointsThisRound += 50;
                } 
                if(it.badBarrier){
                    this.makePoints('10Points.png', it);
                    this.pointsThisRound += 10;
                    this.currentPointsThisRound += 10;
                }
                this.bamItA(it);
                it.kill();
                
            }
        
    },
    
    cavalryAttack: function(cavalry, it){
        var blastIt = game.rnd.integerInRange(0, 100)
            if(blastIt < 2){
                this.bleedItA(it);
            }
        if(it.skeletonArcher == false){
            it.hp -= cavalry.attack / 10;
            if(it.hp <= 0) {
                if(it.skeleton == true) {
                    this.killThisSkeleton(it);
                    it.kill();
                }
                if(it.shadowKnight == true){
                    this.killThisShadowKnight(it);
                    it.kill();
                }
                if(it.ogre == true) {
                    this.killThisOgre(it);
                    it.kill();  
                }
                if(it.orc == true) {
                    this.killThisOrc(it);
                    it.kill();
                }
            }
        }
        if(it.skeletonArcher == true){
            this.killThisSkeletonArcher(it);
            it.kill();
        }
    },
    
    magicHitIt: function(magic, it){
        it.hp -= magic.attack;
        if(it.hp <= 0) {
            if(magic.fire){
                this.bamItA(it);
                if(Main.sound == true && this.levelOver == false){
                    this.flameSound.volume = 0.9;
                    this.flameSound.play();
                    this.explosionSound.volume = 0.2;
                    this.explosionSound.play();
                }
            }
            if(magic.water){
                this.bamItB(it);
            }
            if(magic.ice){
                if(Main.sound == true && this.levelOver == false){
                    this.iceSound.volume = this.rnd.integerInRange(2,3) / 10;
                    this.iceSound.play();
                }
            }
            if(it.skeleton == true){
                this.killThisSkeleton(it);
            }
            if(it.skeletonArcher == true){
                this.killThisSkeletonArcher(it);
            }
            if(it.shadowKnight == true){
                this.killThisShadowKnight(it);
            }
            if(it.orc == true){
                this.killThisOrc(it);
            }
            if(it.ogre == true){
                this.killThisOgre(it);
            }
            if(it.archer == true){
                this.killThisArcher(it);
            }
            if(it.knight == true){
                this.killThisKnight(it);
            }
            if(it.dwarf == true){
                this.killThisDwarf(it);
            }
            it.kill();
        }
        if(it.cavalry){
                it.animations.play('runAway', 14, true);
                it.body.velocity.y = -300;
            }
    },
    
    itHitWall: function(it, wall){
        if(this.levelOver == false){
            if(it.skeletonArcher == false){
                wall.hp -= it.hp;
            } else {
                wall.hp -= 100;
            }
            this.bamItA(it);
            if(Main.sound == true){
                this.explosionSound.volume = 0.4;
                this.explosionSound.play();
            }
            if(it.skeleton == true){
                    it.atWall = true;
                    this.killThisSkeleton(it);
                }
            if(it.skeletonArcher == true){
                it.atWall = true;
                this.killThisSkeletonArcher(it);
            }
            if(it.shadowKnight == true){
                it.atWall = true;
                this.killThisShadowKnight(it);
            }
            if(it.orc == true){
                it.atWall = true;
                this.killThisOrc(it);
            }
            if(it.ogre == true){
                it.atWall = true;
                this.killThisOgre(it);
            }
            if(it.archer == true){
                this.killThisArcher(it);
            }
            if(it.knight == true){
                this.killThisKnight(it);
            }
            if(it.dwarf == true){
                this.killThisDwarf(it);
            }
            it.kill();
            if(wall.hp <= 0){
                this.buildLoseScreen();
            }
        }
    },
    
    itHitBarrier: function(it, barrier){
        if(it.archer == false || it.skeletonArcher == false){
            if(it.hp > 0 && barrier.hp > 0){
                var blastIt = game.rnd.integerInRange(0, 100)
                if(blastIt < 2){
                    this.bleedItA(it);
                }
                if(blastIt > 98){
                    this.bamItA(barrier);
                }
                if(blastIt > 49 && blastIt < 52 && Main.sound == true && this.levelOver == false){
                    this.shieldSound.volume = this.rnd.integerInRange(1,3) / 10;
                    this.shieldSound.play();
                    this.axeSound.volume = this.rnd.integerInRange(10,20) / 100;
                    this.axeSound.play();
                }

                it.body.velocity.x = it.attackSpeed;
                
                it.animations.play('fight', 14, true);
                it.hp -= this.rnd.integerInRange(barrier.attack - 5, barrier.attack) / 10;
                barrier.hp -= this.rnd.integerInRange(it.attack - 5, it.attack) / 10;
                it.countDown = this.time.now;
            }
            if(it.hp <= 0) {
                if(it.knight == true) {
                    this.killThisKnight(it);
                    it.kill();
                }
                if(it.dwarf == true) {
                    this.killThisDwarf(it);
                    it.kill();
                }
                if(it.skeleton == true) {
                    this.killThisSkeleton(it);
                    it.kill();
                }
                if(it.shadowKnight == true){
                    this.killThisShadowKnight(it);
                    it.kill();
                }
                if(it.ogre == true){
                    this.killThisOgre(it);
                    it.kill();
                }
                if(it.orc == true) {
                    this.killThisOrc(it);
                    it.kill();
                }
            }
            if(barrier.hp <= 0){
                if(barrier.iceWall == true){
                    this.killThisIceWall(barrier);
                    this.makePoints('50Points.png', barrier);
                    this.pointsThisRound += 50;
                    this.currentPointsThisRound += 50;
                } 
                if(barrier.badBarrier){
                    this.makePoints('10Points.png', barrier);
                    this.pointsThisRound += 10;
                    this.currentPointsThisRound += 10;
                }
                this.bamItA(barrier);
                barrier.kill();
                
            }
        }
        if(it.archer == true || it.skeletonArcher){
            if(it.archer){
                this.killThisArcher(it);
            }
            if(it.skeletonArcher){
                this.killThisSkeletonArcher(it);
            }
            this.bleedItA(it);
            it.kill();
            if(Main.sound == true && this.levelOver == false){
                    this.axeSound.volume = this.rnd.integerInRange(1,3) / 10;
                    this.axeSound.play();
                }
            }
    },
    
    dragonHitSkeleton: function(dragon, skeleton){
        if(dragon.attackReady && skeleton.skeletonArcher == false){
            if(skeleton.hp > 0 && dragon.hp > 0){
                var blastIt = game.rnd.integerInRange(0, 100)
                if(blastIt < 2){
                    this.bleedItA(skeleton);
                }
                if(blastIt > 98){
                    this.bleedItA(dragon);
                }
                if(blastIt > 49 && blastIt < 52 && Main.sound == true && this.levelOver == false){
                    this.shieldSound.volume = this.rnd.integerInRange(2,4) / 10;
                    this.shieldSound.play();
                }
                skeleton.body.velocity.x = skeleton.attackSpeed;
                skeleton.animations.play('fight', 14, true);
                skeleton.hp -= game.rnd.integerInRange(dragon.attack - 5, dragon.attack) / 10;
                if(dragon.attackDragon){
                    dragon.animations.play('attack', 30, true);
                }
                dragon.hp -= game.rnd.integerInRange(skeleton.attack - 5, skeleton.attack) / 10;
                dragon.countDown = game.time.now;
                skeleton.countDown = game.time.now;
            }
            if(skeleton.hp <= 0){
                if(skeleton.skeleton == true){
                    this.killThisSkeleton(skeleton);
                    skeleton.kill();
                }
                if(skeleton.shadowKnight == true){
                    this.killThisShadowKnight(skeleton);
                    skeleton.kill();
                }
                if(skeleton.ogre == true){
                    this.killThisOgre(skeleton);
                    skeleton.kill();
                }
                if(skeleton.orc == true) {
                    this.killThisOrc(skeleton);
                    skeleton.kill();
                }
                
                dragon.animations.play('flyEast', 14, true);
            }
            if(dragon.hp <= 0){
                dragon.attackReady = false;
                this.dragonFlyAway(dragon);
                skeleton.animations.play('walk', 14, true);
                skeleton.body.velocity.x = skeleton.speed;
            }
        }
        if(dragon.attackReady && skeleton.skeletonArcher){
            this.killThisSkeletonArcher(skeleton);
            skeleton.kill();
        }   
    },
    
    dragonHitDragon: function(badDragon, goodDragon){
        goodDragon.attackReady = false;
        this.dragonFlyAway(goodDragon);
    },
    
    buildLoseScreen: function(){
        this.levelOver = true;
        Main.buildMenu = false;
        if(Main.sound){
            this.bellLow.volume = 0.5;
            this.bellLow.play();
        }
        
        
        var backing = this.add.image(-50,-30,'menuPanel');
        backing.height = 600;
        backing.width = 1100;
        var backing1 = this.add.image(480, 270,'menuTile1');
        backing1.width = 900;
        backing1.height = 500;
        backing1.anchor.setTo(0.5, 0.5);
        var gameOverText = this.add.bitmapText(this.world.centerX, 170, 'immortal', 'Battle', 160);
        var gameOverText1 = this.add.bitmapText(this.world.centerX, 340, 'immortal', 'Lost!', 160);
        gameOverText.anchor.setTo(0.5, 0.5);
        gameOverText1.anchor.setTo(0.5, 0.5);
        
        var exitBacking = this.add.image(180, 460, 'menuTile1');
        exitBacking.width = 600;
        exitBacking.height = 60;
        exitBacking.inputEnabled = true;
        exitBacking.events.onInputDown.add(this.goToWorldMap, this);
        var exitText = this.add.bitmapText(239, 464, 'immortal', 'Return to World Map', 45);
        
    },
    
    buildWinScreen: function(){
        this.levelOver = true;
        this.victory = true;
        
        if(Main.sound){
            this.bellHigh.volume = 0.5;
            this.bellHigh.play();
        }
        
        var backing = this.add.image(-50,-30,'menuPanel');
        backing.height = 600;
        backing.width = 1100;
        var backing1 = this.add.image(480, 270,'menuTile1');
        backing1.width = 900;
        backing1.height = 500;
        backing1.anchor.setTo(0.5, 0.5);
        
        var gameWonText = this.add.bitmapText(220, 70, 'immortal', 'Battle Won!', 90);
        if(Main.defenseContract == false){
			if(Main.currentLevel === 15){
				Main.totalDragonPoints += this.pointsThisRound;
				var basicCredits = Main.currentLevel * 1000;
				var extraCredits = Math.floor(this.warPanelBacking.hp) * 2;
				if(Main.currentLevel == Main.highLevel){
					extraCredits *= Main.highLevel;
				}
				var tallyUpCredits = extraCredits + basicCredits;
				Main.credits += tallyUpCredits;
				Main.currentLevel = 16;
				Main.highLevel = 16;

				if(Main.sound){
					this.battleMusicPart1.stop();
					this.battleMusicPart2.stop();
					this.battleMusicPart3.stop();
				}

				this.state.start('StoryScenes', true);
        	}
            if(Main.highLevel < 8 || Main.currentLevel == Main.highLevel && Main.currentLevel < 15){
                Main.totalDragonPoints += this.pointsThisRound;
                var creditsWonText = this.add.bitmapText(250, 190, 'immortal', 'Credits Won', 40);
                var basicCredits = Main.currentLevel * 1000;
                var creditsWon = this.add.bitmapText(560, 190, 'immortal', '$' + basicCredits, 40);
                var bonusCreditsText = this.add.bitmapText(250, 240, 'immortal', 'Bonus Credits', 40);
                var extraCredits = Math.floor(this.warPanelBacking.hp) * 2;
                if(Main.currentLevel == Main.highLevel){
                    extraCredits *= Main.highLevel;
                }
                var tallyUpCredits = extraCredits + basicCredits;
                Main.credits += tallyUpCredits;
                var bonusCredits = this.add.bitmapText(560, 240, 'immortal', '$' + extraCredits, 40);
                var totalCreditsText = this.add.bitmapText(this.world.centerX, 300, 'immortal', 'Total Credits Earned: $' + tallyUpCredits, 50);
                var totalPointsText = this.add.bitmapText(this.world.centerX, 370, 'immortal', 'Dragon Points Earned: ' + this.pointsThisRound, 50);
                totalCreditsText.anchor.setTo(0.5,0);
                totalPointsText.anchor.setTo(0.5,0);
                
            } else {
                var tooEasyText = this.add.bitmapText(170, 340, 'immortal', 'No money for completing a level this old...\nComplete defense contracts instead.', 30);
            }

            if(Main.highLevel == Main.currentLevel){
                Main.highLevel++;
            }
        }
        if(Main.defenseContract){
            Main.totalDragonPoints += this.pointsThisRound;
            
            if(Main.wager == 1){
                var tallyUpCredits = 5000;
            }
            if(Main.wager == 2){
                var tallyUpCredits = 10000;
            }
            if(Main.wager == 3){
                var tallyUpCredits = 20000;
            }
            Main.credits += tallyUpCredits;
            var totalCreditsText = this.add.bitmapText(this.world.centerX, 240, 'immortal', 'Credits Earned: $' + tallyUpCredits, 50);
            var totalCredits = this.add.bitmapText(this.world.centerX, 360, 'immortal', 'Dragon Points Earned: ' + this.pointsThisRound, 50);
            totalCredits.anchor.setTo(0.5, 0.5);
            totalCreditsText.anchor.setTo(0.5, 0.5);
        }
        
        var exitBacking = this.add.image(180, 460, 'menuTile1');
        exitBacking.width = 600;
        exitBacking.height = 60;
        exitBacking.inputEnabled = true;
        exitBacking.events.onInputDown.add(this.goToWorldMap, this);
        var exitText = this.add.bitmapText(239, 464, 'immortal', 'Return to World Map', 45);
		
		Main.buildMenu = true;
    },
    
    lookForWin: function(it){
        if(it.skeletonDefender == true){
            this.skeletonLineCounter++;
        }
    },
    
    
// /*******!!!!!!!!!!!!!!!!!! death annimation !!!!!!!!!!!!!!!!***/    
    
    
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
        }else if(!skeleton.atWall) {
            this.makePoints('10Points.png', skeleton);
            this.pointsThisRound += 10;
            this.currentPointsThisRound += 10;
        }
    },
    
    killThisArcher: function(archer){
        archer.events.onAnimationLoop.removeAll();
        var fall = this.fallGroup.getFirstDead(true, archer.x, archer.y, 'archer', 'ArcherFallingEast1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(0, 11));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
    },
    
    killThisSkeletonArcher: function(skeletonArcher){
        skeletonArcher.events.onAnimationLoop.removeAll();
        var fall = this.fallGroup.getFirstDead(true, skeletonArcher.x, skeletonArcher.y, 'skeletonArcher', 'SkeletonArcherFallingWest1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(0, 8));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
        if(!skeletonArcher.atWall){
            this.makePoints('10Points.png', skeletonArcher);
            this.pointsThisRound += 10;
            this.currentPointsThisRound += 10;
        }
    },
    
    killThisDwarf: function(dwarf){
        var fall = this.fallGroup.getFirstDead(true, dwarf.x, dwarf.y, 'dwarf', 'DwarfAttackEast01.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(13, 23));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
    },
    
    killThisShadowKnight: function(shadowKnight){
        var fall = this.fallGroup.getFirstDead(true, shadowKnight.x, shadowKnight.y, 'shadowKnight', 'ShadowKnightAttackWest1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(13, 21));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
        if(!shadowKnight.atWall){
            this.makePoints('30Points.png', shadowKnight);
            this.pointsThisRound += 30;
            this.currentPointsThisRound += 30;
        }
    },
    
    killThisOgre: function(ogre){
        var fall = this.fallGroup.getFirstDead(true, ogre.x, ogre.y, 'ogre', 'OgreAttackingWest1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(11, 21));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
        if(!ogre.atWall){
            this.makePoints('40Points.png', ogre);
            this.pointsThisRound += 40;
            this.currentPointsThisRound += 40;
        }
    },
    
    killThisOrc: function(orc){
        var fall = this.fallGroup.getFirstDead(true, orc.x, orc.y, 'orc', 'OrcAttackWest1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(13, 25));
            fall.animations.play('fall', 14, true);
            fall.events.onAnimationLoop.add(this.thingDied, this);
            orc.events.onAnimationLoop.removeAll();
        if(!orc.atWall){
            this.makePoints('20Points.png', orc);
            this.pointsThisRound += 20;
            this.currentPointsThisRound += 20;
        }
    },
    
    killThisIceWall: function(wall){
          var fall = this.fallGroup.getFirstDead(true, wall.x, wall.y, 'badMagic', 'BadIn1.png');
            fall.anchor.setTo(0.5, 0.5);
            fall.animations.add('fall', Phaser.ArrayUtils.numberArrayStep(17, 20));
            fall.animations.play('fall', 8, true);
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