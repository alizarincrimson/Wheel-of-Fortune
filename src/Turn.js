import Game from "./Game";
import domUpdates from './domUpdates';

class Turn {
  constructor(round, players, wheel, puzzle) {
    this.round = round;
    this.players = players;
    console.log("playersProp: ", this.players)
    this.wheel = wheel;
    console.log("wheelProp: ", this.wheel)
    this.puzzle = puzzle
    this.currentPlayer = players[0];
    // this.spin
  }
  
  getCurrentPlayer() {
    let playerIndex = this.players.indexOf(this.currentPlayer);
      this.currentPlayer = this.players[playerIndex + 1];
    if (this.currentPlayer === undefined) {
      this.currentPlayer = this.players[0];
    }
  }

  buyVowel(vowel) {
    if (this.currentPlayer.roundScore >= 100) {
      this.currentPlayer.roundScore -= 100;
      this.evaluateLetterGuess(vowel);
    } else {
      domUpdates.vowelError();
    }
  }

  evaluateSpin() {
    console.log("it evals Spin!");
    console.log("wheelResult pleaasseee: ", this.round.wheel.spinResult);
    if (typeof this.round.wheel.spinResult === "number") {
      return true;
    } else if (this.round.wheel.spinResult === 'BANKRUPT' || 'LOSE A TURN') {
      this.currentPlayer.roundScore = 0;
      return false;
    } else {
      getCurrentPlayer();
      return false;
    }
  }

  evaluateLetterGuess(guess) {
    let splitPuzzle = puzzle.splitAnswer;
    if (splitPuzzle.includes(guess)) {
      this.currentPlayer.roundScore += this.round.wheel.spinResult;
      return true;
    } else {
      domUpdates.wrongLetter();
      this.getCurrentPlayer();
    }
    // takes in the guess from either spinWheel or buyVowel method
    // it evaluates if the the puzzle includes the guess value
    // if the puzzle does include the guess value
      // splice the value(s) of guess from the puzzle where it's included
      // remove class hidden from letter
      // and return true
    // otherwise
      // domUpdates.wrongLetter();
      // invoke getCurrentPlayer
      // and return false
      /*
      - A random element will be chosen for my spin
    - If a bankrupt element is chosen, my score/account will be reset to 0
    - If a lose-a-turn element is chosen, my turn will end
    - If an element is chosen with a dollar amount, I will be prompted to choose a consonant
      */
    // 
  }

  solvePuzzle(guess, possiblePoints) {
    let puzzleAnswer = puzzle.correctAnswer;
    if (guess.toUpperCase() === puzzleAnswer) {
      this.currentPlayer.roundScore += possiblePoints 
      this.round.endRound()
    } else {
      domUpdates.wrongGuess();
      this.getCurrentPlayer();
    }

    // the user will enter in the whole puzzle WITH SPACES
    // it will then need to evaluate the guess of the player
    // if guess stricly equals the joined puzzle(in array form)
      // return true
    //  otherwise 
      // invoke getCurrentPlayer
      // and return false
  }
    
}

export default Turn;
