class Turn {
  constructor(players, wheel) {
    this.players = players;
    this.currentPlayer = players[0];
  }
  
  getCurrentPlayer() {
    let playerIndex = this.players.indexOf(this.currentPlayer);
    this.currentPlayer = this.players[playerIndex + 1];
    if (this.currentPlayer === undefined) {
      this.currentPlayer = this.players[0];
    }
  }

  buyVowel(vowel) {
    // when you buy a vowel
  }

  spinWheel() {

  }

  solvePuzzle() {
    
  }

  evaluateGuess(guess) {

  }
}

export default Turn;