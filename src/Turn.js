import Game from "./Game";



class Turn {
  constructor(round, players, wheel, puzzle) {
    this.round = round;
    // this.game = game;
    this.players = players;
    this.wheel = wheel;
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
    // (this.currentPlayer.roundScore >= 100) {
    //   this.currentPlayer.roundScore -= 100
    //     evaluateGuess(vowel);
    // } else {
    //     domUpdates.vowelError();
    // }

    // how are we reaching the current players round score?
  }

  evaluateSpin(possiblePoints) {
    if (typeof possiblePoints === "number") {
      return true
    } else if (possiblePoints === "BANKRUPT") {
      this.currentPlayer.roundScore = 0;
      return false
    } else {
      getCurrentPlayer()
      return false
  }
    
  spinWheel() {
    wheel.getRandomValue();
    // it will then wait for user to emter in a letter as a guess
    // that guess should be uppercased
    // that guess should be passed through evaluate guess as an argument
  }

  evaluateLetterGuess(guess, possiblePoints) {
    let splitPuzzle = puzzle.splitAnswer;
    if (splitPuzzle.includes(guess)) {
      this.currentPlayer.roundScore += possiblePoints;
      return true
    } else {
      getCurrentPlayer()
      return false
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
      this.getCurrentPlayer()
      return `You've guessed incorrectly.`
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
