class Turn {
  constructor(round, players, wheel, puzzle) {
    this.round = round;
    // this.game = game;
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
  }

  buyVowel(player, vowel) {
    if (this.currentPlayer.score >= 100) {
      this.currentPlayer.score = this.currentPlayer.score - 100
      evaluateGuess()
    } else {
      return `You have insufficient funds to buy a vowel.`
    }
    // the vowel is going to passed though this method as an argument when it is clicked on.
    // then the vowel will be passed through as an argument for the evaluateGuess method.
  }


  spinWheel() {
    // this will invoke the wheels method of getRandomValue.
    wheel.getRandomValue();
    // it will then wait for user to emter in a letter as a guess
    // that guess should be uppercased
    // that guess should be passed through evaluate guess as an argument
  }

  solvePuzzle() {
    // the user will enter in the whole puzzle WITH SPACES
    // it will then need to evaluate the guess of the player
    // if guess stricly equals the joined puzzle(in array form)
      // return true
    //  otherwise 
      // invoke getCurrentPlayer
      // and return false
  }

  evaluateLetterGuess(guess) {
    // takes in the guess from either spinWheel or buyVowel method
    // it evaluates if the the puzzle includes the guess value
    // if the puzzle does include the guess value
      // splice the value(s) of guess from the puzzle where it's included
      // and return true
    // otherwise
      // invoke getCurrentPlayer
      // and return false
    // 
  }
}

export default Turn;