Main.Preloader = function (game) {
    this.preloadBar = null;
    this.ready = false;
    this.mapBackground = null;
};

Main.Preloader.prototype = {
    preload: function () {
        this.mapBackground = this.add.image(0, 0, 'map');
        this.preloadBar = this.add.sprite(this.world.centerX/2, this.world.centerY, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

/* !!!!!!!!!!!!!!!!!!!!!!!! LOAD GAME BOARD PIECES !!!!!!!!!!!!!!!!!!!!!!!*/
        
        
        this.load.atlasXML('tileSet', 'images/spritesheets/tileSet.png', 'images/spritesheets/tileSet.xml');
        this.load.image('menuPanel','images/menusBackground.png');
        this.load.image('menuTile1','images/MenuTile1.png')
        this.load.image('redCircle','images/redCircle.png');
        this.load.image('blueCircle','images/blueCircle.png');
        
        
        
// !!!!!!!!!!!!!!!!!  Load Character Images !!!!!!!!!!!!!!!!!!
        this.load.atlasXML('knight', 'images/spritesheets/knight.png', 'images/spritesheets/knight.xml');
        this.load.atlasXML('redKnight', 'images/spritesheets/RedKnight2.png', 'images/spritesheets/RedKnight2.xml');
        this.load.atlasXML('archer', 'images/spritesheets/archer.png', 'images/spritesheets/archer.xml');
        this.load.atlasXML('dwarf', 'images/spritesheets/dwarf.png', 'images/spritesheets/dwarf.xml');
        this.load.atlasXML('mage', 'images/spritesheets/mage.png', 'images/spritesheets/mage.xml');
        this.load.atlasXML('arrow', 'images/spritesheets/arrow.png', 'images/spritesheets/arrow.xml');
        this.load.atlasXML('skeleton', 'images/spritesheets/skeleton.png', 'images/spritesheets/skeleton.xml');
        this.load.atlasXML('skeletonArcher', 'images/spritesheets/skeletonArcher.png', 'images/spritesheets/skeletonArcher.xml');
        this.load.atlasXML('cavalry', 'images/spritesheets/cavalry.png', 'images/spritesheets/cavalry.xml');
        this.load.atlasXML('shadowKnight', 'images/spritesheets/shadowKnight.png', 'images/spritesheets/shadowKnight.xml');
        this.load.atlasXML('ogre', 'images/spritesheets/ogre.png', 'images/spritesheets/ogre.xml');
        this.load.atlasXML('orc', 'images/spritesheets/orc.png', 'images/spritesheets/orc.xml');
        this.load.atlasXML('dragon', 'images/spritesheets/DragonFlyingNorth.png', 'images/spritesheets/DragonFlyingNorth.xml');
        this.load.atlasXML('civilians', 'images/spritesheets/civilians.png', 'images/spritesheets/civilians.xml');
        this.load.atlasXML('goodCharacters', 'images/spritesheets/goodCharacters.png', 'images/spritesheets/goodCharacters.xml');
        this.load.atlasXML('redDragon', 'images/spritesheets/RedDragon.png', 'images/spritesheets/RedDragon.xml');
        this.load.atlasXML('blueDragon', 'images/spritesheets/BlueDragon.png', 'images/spritesheets/BlueDragon.xml');
        this.load.atlasXML('goldDragon', 'images/spritesheets/GoldDragon.png', 'images/spritesheets/GoldDragon.xml');
        
// !!!!!!!!!!!!!!!!!!!! Load other assets !!!!!!!!!!!!!!!!!!!!!!!!
        this.load.bitmapFont('eightbitwonder', 'fonts/eightbitwonder.png', 'fonts/eightbitwonder.fnt');
        this.load.bitmapFont('immortal', 'fonts/font.png', 'fonts/font.fnt');
        this.load.atlasXML('explosionA', 'images/spritesheets/explosionA.png', 'images/spritesheets/explosionA.xml');
        this.load.atlasXML('bloodA', 'images/spritesheets/bloodA.png', 'images/spritesheets/bloodA.xml');
        this.load.atlasXML('goodMagic', 'images/spritesheets/goodMagic.png', 'images/spritesheets/goodMagic.xml');
        this.load.atlasXML('badMagic', 'images/spritesheets/badMagic.png', 'images/spritesheets/badMagic.xml');
        this.load.atlasXML('smoke', 'images/spritesheets/smoke.png', 'images/spritesheets/smoke.xml');
        this.load.atlasXML('buildings', 'images/spritesheets/buildings.png', 'images/spritesheets/buildings.xml');
        this.load.atlasXML('pop', 'images/spritesheets/goodIn.png', 'images/spritesheets/goodIn.xml');
        this.load.atlasXML('points', 'images/spritesheets/Points.png', 'images/spritesheets/Points.xml');
        this.load.image('lock','images/lock.png');
        this.load.image('spear','images/spear2.png');
		this.load.image('redKnightStand','images/redknightstand.png');
      //  this.load.image('speechBubble','images/speechBubble.png');
        this.load.image('speechBubble','images/speechGrey.png');
        this.load.image('talkBox','images/speechGrey.png');
        this.load.image('pointer','images/pointer.png');
        
// !!!!!!!!!!!!!!!!!!!!!!!!!!!! Load Audio !!!!!!!!!!!!!!!!!!!!!1
        
        this.load.audio('shield', 'audio/shield.mp3');
        this.load.audio('axe', 'audio/axe.mp3');
        this.load.audio('bow', 'audio/bow.mp3');
        this.load.audio('explosion', 'audio/explosion.mp3');
        this.load.audio('ice', 'audio/ice.mp3');
        this.load.audio('flame', 'audio/flame.mp3');
        this.load.audio('troll', 'audio/troll.mp3');
        this.load.audio('cavalry', 'audio/cavalry.mp3');
        this.load.audio('mageIn', 'audio/mageIn.mp3');
        this.load.audio('bellHigh', 'audio/BellHigh.mp3');
        this.load.audio('bellLow', 'audio/BellLow.mp3');
        this.load.audio('gong', 'audio/Gong.mp3');
        this.load.audio('dragon', 'audio/dragon.mp3');
        this.load.audio('shadowMageSound', 'audio/shadowMage.mp3');
        this.load.audio('grunt1', 'audio/grunt1.mp3');
        this.load.audio('grunt2', 'audio/grunt2.mp3');
        
        this.load.audio('battleMusic2Part1', 'audio/music/BattleMusic2-1.mp3');
        this.load.audio('battleMusic2Part2', 'audio/music/BattleMusic2-2.mp3');
        this.load.audio('battleMusic2Part3', 'audio/music/BattleMusic2-3.mp3');
        
        this.load.audio('battleMusic3Part1', 'audio/music/BattleMusic3-1.mp3');
        this.load.audio('battleMusic3Part2', 'audio/music/BattleMusic3-2.mp3');
        this.load.audio('battleMusic3Part3', 'audio/music/BattleMusic3-3.mp3');
        
        this.load.audio('battleMusic5Part1', 'audio/music/BattleMusic5-1.mp3');
        this.load.audio('battleMusic5Part2', 'audio/music/BattleMusic5-2.mp3');
        this.load.audio('battleMusic5Part3', 'audio/music/BattleMusic5-3.mp3');
        
        this.load.audio('battleMusic6Part1', 'audio/music/BattleMusic6-1.mp3');
        this.load.audio('battleMusic6Part2', 'audio/music/BattleMusic6-2.mp3');
        this.load.audio('battleMusic6Part3', 'audio/music/BattleMusic6-3.mp3');
        
        this.load.audio('battleMusic7Part1', 'audio/music/BattleMusic7-1.mp3');
        this.load.audio('battleMusic7Part2', 'audio/music/BattleMusic7-2.mp3');
        this.load.audio('battleMusic7Part3', 'audio/music/BattleMusic7-3.mp3');
        
        this.load.audio('worldMusic', 'audio/music/WorldMusic.mp3');
    },
    
    create: function () {
        
        },
    
    update: function () {
        
        if(this.cache.isSoundDecoded('worldMusic') && this.ready == false){
            this.preloadBar.cropEnabled = false;
            this.ready = true;
            this.state.start('World', true);
        }
    }    
};