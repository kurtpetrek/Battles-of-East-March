Main.GameInfo = function(game) {
    this.screensGroup;
};

Main.GameInfo.prototype = {
    create: function () {
        var mapBackground = this.add.image(0, 0, 'map');
        var background = this.add.image(-10, 0, 'menuPanel');
        background.width = 960;
        background.height = 540;
        background.alpha = 0.9;
        var backing = this.add.image(-10, 0, 'menuTile1');
        backing.width = 960;
        backing.height = 540;
        backing.alpha = 0.9;
        
        this.screensGroup = this.add.group();
        
        var titleText = this.add.bitmapText(290,30,'immortal','Information',70);
        titleText.tint = 0x4433cc;
        this.screensGroup.add(titleText);
        
        var infoText = this.add.bitmapText(50, 110, 'immortal', "This game is part of the Echoes of Ethos storyline.\nEchoes of Ethos is an online animated narrative and\nchoose your own adventure. For more information visit", 32)
        var webText = this.add.bitmapText(50,230,'immortal',"echoesofethos.com");
        webText.tint = 0xaaaaaa;
        webText.inputEnabled = true;
		webText.events.onInputDown.add(this.goToWebsite,  this);
        
        var creditText1 = this.add.bitmapText(50,280, 'immortal', "Game design, idea,\ncoding, story, graphic\ndesign, sound design,\nand music by:\nKurt Petrek",18);
        var creditText2 = this.add.bitmapText(250,280, 'immortal', "Thank you to\nReiner 'Tiles' Porkein\nfor images used\nin this game.",18);
        var creditText3 = this.add.bitmapText(445,280, 'immortal', "Thank you to\nByron 'B' Bagsby\nfor music production\nassistance.",18);
        var creditText4 = this.add.bitmapText(645,280, 'immortal', "Thank you to\nspritefx.blogspot.com and\nfantasynamegenerators.com\nfor images used\nin this game.",18);
        var creditText5 = this.add.bitmapText(250,380, 'immortal', "This game uses sounds from freesound.org",18);
        var creditText6 = this.add.bitmapText(90,410, 'immortal', "Explosion_001 by cydon\nfreesound.org/people/cydon",18);
        var creditText6 = this.add.bitmapText(90,470, 'immortal', "Shield Hit 1 by CTCollab\nfreesound.org/people/ctcollab",18);
        var creditText7 = this.add.bitmapText(610,410, 'immortal', "Bow by Hanbaal\nfreesound.org/people/hanbaal",18);
        var creditText8 = this.add.bitmapText(610,470, 'immortal', "Ice00 by punpcklbw\nfreesound.org/people/punpcklbw",18);
        
        var exitButton = this.screensGroup.create(this.world.centerX , 495,'menuTile1');
        exitButton.width = 180;
        exitButton.height = 80;
        exitButton.anchor.setTo(0.5,0.5);
        exitButton.inputEnabled = true;
		exitButton.events.onInputDown.add(this.exit,  this);
        var exitText = this.add.bitmapText(415, 460,'immortal','Exit', 70);
        this.screensGroup.add(exitText);
    },
    
    goToWebsite: function(){
        window.open('http://www.echoesofethos.com', '_blank');
    },
    
    exit: function(){
        Main.buildMenu = false;
        this.state.start('World', true);
    },
    
    update: function () {
        
    }
};