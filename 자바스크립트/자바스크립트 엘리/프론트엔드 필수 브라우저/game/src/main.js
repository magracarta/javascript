'use strict';
import Popup from "./Popup.js";
import GameBuilder from "./game.js";


const gameFinishBanner = new Popup();
const game = new GameBuilder()
.withGameDuration(5)
.withCarrotCount(3)
.withBugCount(3)
.withBuild();

gameFinishBanner.setClickListener(()=>{
  game.start();
});



game.setGameStopListener((reason)=>{
  console.log(reason);
  let message;

  switch(reason){
    case 'cancel':
      message = 'Replay❓';
      break;
    case 'win':
      message = 'you won🎉';
      break;
    case 'lose':
      message = 'you Lost💩';
      break;
    default:
      throw new Error('not valid reason');   
  }

  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=>{
  game.start();
});




