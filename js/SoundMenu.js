Main.SoundMenu = function(game) {
    this.screensGroup;
};

Main.SoundMenu.prototype = {
    
    create: function() {
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
        
        var titleText = this.add.bitmapText(130,60,'immortal','Enable Sound?',100);
        this.screensGroup.add(titleText);
        
        var enableButton = this.screensGroup.create(this.world.centerX - 200 , 395,'menuTile1');
        enableButton.width = 270;
        enableButton.height = 80;
        enableButton.anchor.setTo(0.5,0.5);
        enableButton.inputEnabled = true;
		enableButton.events.onInputDown.add(this.enableSound,  this);
        var enableText = this.add.bitmapText(165, 360,'immortal','Enable', 70);
        this.screensGroup.add(enableText);
        
        var disableButton = this.screensGroup.create(this.world.centerX + 200 , 395,'menuTile1');
        disableButton.width = 280;
        disableButton.height = 80;
        disableButton.anchor.setTo(0.5,0.5);
        disableButton.inputEnabled = true;
		disableButton.events.onInputDown.add(this.disableSound,  this);
        var disableText = this.add.bitmapText(555, 360,'immortal','Disable', 70);
        this.screensGroup.add(disableText);
    },
    
    enableSound: function(){
        this.screensGroup.destroy();
        
        Main.sound = true;
        
        this.screensGroup = this.add.group();
        var titleText = this.add.bitmapText(150,100,'immortal','Sound On',130);
        this.screensGroup.add(titleText);
        
        var exitButton = this.screensGroup.create(this.world.centerX , 495,'menuTile1');
        exitButton.width = 180;
        exitButton.height = 80;
        exitButton.anchor.setTo(0.5,0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exit,  this);
        var exitText = this.add.bitmapText(415, 460,'immortal','Exit', 70);
        this.screensGroup.add(exitText);
    },
    
    disableSound: function(){
        this.screensGroup.destroy();
        
        Main.sound = false;
        
        this.screensGroup = this.add.group();
        var titleText = this.add.bitmapText(130,100,'immortal','Sound Off',130);
        this.screensGroup.add(titleText);
        
        var exitButton = this.screensGroup.create(this.world.centerX , 495,'menuTile1');
        exitButton.width = 180;
        exitButton.height = 80;
        exitButton.anchor.setTo(0.5,0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exit,  this);
        var exitText = this.add.bitmapText(415, 460,'immortal','Exit', 70);
        this.screensGroup.add(exitText);
    },
    
    exit: function(){
        Main.buildMenu = false;
        this.state.start('World', true);
    },
    
    update: function(){
    
    }
};