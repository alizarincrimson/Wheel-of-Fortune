import domUpdates from './domUpdates';
import Puzzle from './Puzzle';
import Turn from './Turn';

class Round {
  constructor(game, puzzle, players, wheel) {
    this.game = game;
    this.vowels = ['A','E','I','O','U'];
    this.puzzle = puzzle;
    this.players = players;
    this.turn = new Turn(this, this.players, this.wheel, this.puzzle);
    this.wheel = wheel;
    this.incorrectGuesses = [];
  }


  roundEnd() {
    alert("You just solved the puzzle!")
    // domUpdates.showWinner();
    this.clearRoundScores();
    domUpdates.clearRound();
    let newRound = this.game.createRound();
    console.log("yo");
  }

  clearRoundScores() {
    return this.players.map(player => player.roundScore = 0);
  }


};

export default Round;
