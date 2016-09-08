var game;

game = new Phaser.Game(960, 540, Phaser.AUTO, '');


game.state.add('Boot', Main.Boot);
game.state.add('Preloader', Main.Preloader);
game.state.add('World', Main.World);
game.state.add('HowToPlay', Main.HowToPlay);
game.state.add('GameInfo', Main.GameInfo);
game.state.add('SaveGame', Main.SaveGame);
game.state.add('LoadGame', Main.LoadGame);
game.state.add('SoundMenu', Main.SoundMenu);
game.state.add('Level1Scene', Main.Level1Scene);
game.state.add('Level2Scene', Main.Level2Scene);
game.state.add('Level3Scene', Main.Level3Scene);
game.state.add('Level4Scene', Main.Level4Scene);
game.state.add('Level5Scene', Main.Level5Scene);
game.state.add('Level6Scene', Main.Level6Scene);
game.state.add('Level7Scene', Main.Level7Scene);
game.state.add('StoryScenes', Main.StoryScenes);
game.state.add('LevelGo', Main.LevelGo);



