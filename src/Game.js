import Player from "./Player";
import Round from "./Round";

class Game {
  constructor(currentPuzzle) {
    this.players = [];
    this.round = 0;
    this.currentPuzzle = currentPuzzle;
  }
  createPlayers(name1, name2, name3) {
    // take inputs of p1, p2, and p3
    // pushing inputs into players array
    let p1 = new Player(name1, 1);
    let p2 = new Player(name2, 2);
    let p3 = new Player(name3, 3);
    this.players.push(p1, p2, p3);
  }

  createRound() {
    // NOTE: this method should be ran when the game is first insatiated.
    // instatiate new round, with Current puzzle.
    let round = new Round('CURRENT PUZZLE GOES HERE')
    // incriment this.round to add 1.
    this.round++
  }

  determineWinner() {
    // Once and if this.round is greater than 4,
    // determine the winner by the highest score
  }
}

export default Game;