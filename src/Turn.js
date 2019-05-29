import Game from "./Game";
import domUpdates from './domUpdates';

class Turn {
  constructor(round, players, wheel, puzzle) {
    this.round = round;
    this.players = players;
    this.wheel = wheel;
    this.puzzle = puzzle
    this.currentPlayer = players[0];
  }
  
  getCurrentPlayer() {
    let playerIndex = this.players.indexOf(this.currentPlayer);
      this.currentPlayer = this.players[playerIndex + 1];
    if (this.currentPlayer === undefined) {
      this.currentPlayer = this.players[0];
    }
    domUpdates.switchPlayerPokemon(this.currentPlayer);
  }

  buyVowel(vowel) {
    if (this.currentPlayer.roundScore >= 100) {
      this.currentPlayer.roundScore -= 100;
      this.evaluateLetterGuess(vowel);
    } else {
      domUpdates.vowelError();
    }
  }

  evaluateSpin(possiblePoints) {
    if (typeof possiblePoints === "number") {
      return true
    } else if (possiblePoints === 'BANKRUPT') {
      this.currentPlayer.roundScore = 0;
      this.getCurrentPlayer();
      // domUpdates.switchPlayerPokemon(this.currentPlayer);
      return false;
    } else {
      this.getCurrentPlayer();
      // domUpdates.switchPlayerPokemon(this.currentPlayer);
      return false;
    }
  }

  evaluateLetterGuess(guess, possiblePoints) {
    let splitPuzzle = this.puzzle.splitAnswer;
    if (splitPuzzle.includes(guess.toUpperCase())) {
      this.currentPlayer.roundScore += possiblePoints;
      console.log(this.currentPlayer.roundScore)
      return true
    } else {
      this.round.incorrectGuesses.push(guess);
      domUpdates.wrongLetter();
      this.getCurrentPlayer();
      // domUpdates.switchPlayerPokemon(this.currentPlayer);
      return false
    }
  }

  solvePuzzle(guess) {
    let puzzleAnswer = this.puzzle.correctAnswer;
    if (guess.toUpperCase() === puzzleAnswer) {
      this.currentPlayer.totalScore += this.currentPlayer.roundScore;
      domUpdates.updatePlayerTotalScore(this.currentPlayer);
      this.round.roundEnd();
      console.log("3", this.players)
      return true;
    } else {
      domUpdates.wrongGuess();
      this.getCurrentPlayer();
      domUpdates.switchPlayerPokemon(this.currentPlayer);
      return false
    }
  }
    
}

export default Turn;
