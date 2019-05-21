import Player from "./Player";

class Game {
  constructor() {
    this.players = [];
    this.round = 0;
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
    // instatiate new round.
    // incriment this.round to add 1.
    this.round++ 
  }

  determineWinner() {
    // Once and if this.round is greater than 4, 
    // determine the winner by the highest score
  }
}

export default Game;