Main.MageUpgradeScreen = function (game) {
    this.mapBackground;
};

Main.MageUpgradeScreen.prototype = {
    
    create: function(){
        
    },

    buildMageUpgradeMenu: function() {
        
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
		exitButton.events.onInputDown.add(this.exitMenu,  this);
        var exitText = this.add.bitmapText(445, 493, 'immortal', 'Exit', 40);
        
        
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
        }
        if(Main.iceMagicUnlocked == true && Main.iceMagicActive == false){
            var iceText2 = this.add.bitmapText(105, 420, 'immortal', 'Activate', 40);
        }
        this.upgradeGroup.add(iceText2);
        
        var icePic = this.upgradeGroup.create(180, 360, 'goodMagic','FireSpell1.png');
        icePic.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(4, 8));
        icePic.animations.play('spell', 4, true);
        icePic.anchor.setTo(0.5, 0.5);
        icePic.alpha = 0.8;
        if(Main.iceMagicActive){
            iceButton.tint = 0x0000ff;
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
            if(Main.credits < 10000){
                waterSpellButton.tint = 0xff0000;
            }
            if(Main.credits >= 10000){
                waterSpellButton.tint = 0x00ff00;
            }
        }
        if(Main.waterMagicUnlocked == true && Main.waterMagicActive == false){
            var waterText2 = this.add.bitmapText(400, 420, 'immortal', 'Activate', 40);
        }
        this.upgradeGroup.add(waterText2);
        
        var waterPic = this.upgradeGroup.create(470, 360, 'goodMagic','FireSpell1.png');
        waterPic.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(26, 35));
        waterPic.animations.play('spell', 4, true);
        waterPic.anchor.setTo(0.5, 0.5);
        waterPic.alpha = 0.8;
        if(Main.waterMagicActive){
            waterSpellButton.tint = 0x0000ff;
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
            if(Main.credits < 20000){
                fireSpellButton.tint = 0xff0000;
            }
            if(Main.credits >= 20000){
                fireSpellButton.tint = 0x00ff00;
            }
        }
        if(Main.fireMagicUnlocked == true && Main.fireMagicActive == false){
            var fireText2 = this.add.bitmapText(700, 420, 'immortal', 'Activate', 40);
        }
        this.upgradeGroup.add(fireText2);
        
        var firePic = this.upgradeGroup.create(760, 360, 'goodMagic','FireSpell1.png');
        firePic.animations.add('spell', Phaser.ArrayUtils.numberArrayStep(0, 3));
        firePic.animations.play('spell', 12, true);
        firePic.anchor.setTo(0.5, 0.5);
        firePic.scale.x *= 1.5;
        firePic.scale.y *= 1.5;
        firePic.alpha = 0.7;
        if(Main.fireMagicActive){
            fireSpellButton.tint = 0x0000ff;
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
    
    exitMenu: function(){
        Main.buildMenu = true;
        this.state.start('World', true);
    },

    update: function(){
        
    }
};