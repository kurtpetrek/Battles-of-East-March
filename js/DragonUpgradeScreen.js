Main.DragonUpgradeScreen = function (game) {
    this.mapBackground;
};

Main.DragonUpgradeScreen.prototype = {
    create: function(){
        this.mapBackground = this.add.image(0, 0, 'map');
        this.buildDragonMenu();
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
    
    buildDragonMenu: function(){
        
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
            var lockPic2 = this.add.image(700, 200, 'lock');
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
    
    exitArcherMenu:function(){
        
    },
    
    exitMenu: function(){
        Main.buildMenu = true;
        this.state.start('World', true);
    },
    
    update: function(){
        
    }
};