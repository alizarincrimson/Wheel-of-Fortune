import Puzzle from './Puzzle';
import Turn from './Turn';

class Round {
  constructor(puzzle, players, wheel) {
    this.vowels = ['A','E','I','O','U'];
    this.puzzle = puzzle;
    this.players = players;
    this.turn = null;
    this.currentPlayer = null;
    this.wheel = wheel;
    this.p1Score = 0;
    this.p2Score = 0;
    this.p3Score = 0;
  }

  startTurn(currentPlayer) {
    // let newTurn = new Turn
    // passes the new turn a player
    // fires on start of new round and when a player's turn ends

    // switch statement? 
    // case: currentPlayer === null, get a random player
    // case: if current player is players index 2 (the last player)
    // then assign currentPlayer to index 0
    // case: assign currentPlayer to players[i] + 1
  }
  
  updateRoundScore(spinValue) {
  // check current player
  // if this.players[this.currentPlayer]
  // if (value of turn) exists
  // local round score += spinValue
  // I actually think this might live in Turn?
  }

  roundWinner(player) {
    // switch statement?
    // case: player is players[0]
    // pass this.p1Score to method for adding points players[0].score
    // case: player is players[1]
    // pass this.p2Score to method for players[1]
    // case: player is players[2]
    // pass this.p3Score to method for players[3]
    // tell Game to make a new Round, do we want a new wheel?
  }

  roundEnd() {
    
  }
}

export default Round;
