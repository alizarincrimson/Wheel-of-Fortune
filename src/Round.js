import Puzzle from './Puzzle';
import Turn from './Turn';

class Round {
  constructor(puzzle, players, wheel) {
    this.vowels = ['A','E','I','O','U'];
    this.puzzle = puzzle;
    this.players = players;
    this.turn = new Turn(this.players);
    this.wheel = wheel;
    // this.p1Score = 0;
    // this.p2Score = 0;
    // this.p3Score = 0;
  }

    // case: if current player is players index 2 (the last player)
    // then assign currentPlayer to index 0
    // case: assign currentPlayer to players[i] + 1
  }
  
  updateRoundScore(spinValue) {
  // if (value of turn) exists
  // local round score += spinValue
  }

  roundWinner(player) {
  }

  roundEnd() {
    let newRound = game.createRound();
  }
}

export default Round;
