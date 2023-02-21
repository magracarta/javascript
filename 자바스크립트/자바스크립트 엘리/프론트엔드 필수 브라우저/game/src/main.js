'use strict';
import Popup from "./Popup.js";
import GameBuilder, { Reason } from "./game.js";
import * as sound from './sound.js';

const gameFinishBanner = new Popup();
const game = new GameBuilder()
.withGameDuration(5)
.withCarrotCount(3)
.withBugCount(3)
.withBuild();

gameFinishBanner.setClickListener(()=>{
  game.start();
});



game.setGameStopListener(reason =>{
  console.log(reason);
  let message;

  switch(reason){
    case Reason.cancel:
      message = 'Replay❓';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'you won🎉';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'you Lost💩';
      sound.playBug();
      break;
    default:
      throw new Error('not valid reason');   
  }

  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(()=>{
  game.start();
});




