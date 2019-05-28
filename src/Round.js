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
    // domUpdates.roundWinner();
    domUpdates.clearPuzzle();
    let newRound = this.game.createRound();
    console.log("yo");
    // loadPuzzleData();
  }
};

export default Round;
