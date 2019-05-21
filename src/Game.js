import Player from "./Player";
import Round from "./Round";

class Game {
  constructor() {
    this.players = [];
    this.round = 0;
    this.puzzleSet = [];
  }
  createPlayers(name1, name2, name3) {
    // take inputs of p1, p2, and p3
    // pushing inputs into players array
    let p1 = new Player(name1, 1);
    let p2 = new Player(name2, 2);
    let p3 = new Player(name3, 3);
    this.players.push(p1, p2, p3);
  }

  getPuzzleSet() {
    // get into data filter, obj puzzles, each obj of puzzles, key of puzzle_bank
    // randomly grab 5
    // push 5 into this.puzzleSet

    // data drill maybe data.puzzles[numAnswers].filter
  }
  
  createRound() {
    let wheel = new Wheel();
    let newRound = new Round(this.puzzleSet.pop(), this.players, wheel);
    this.round++;
  }

  determineWinner() {
    // Once and if this.round is greater than 4,
    // determine the winner by the highest score.
    // should return winner.
  }

  createBonusRound(winner) {
    // this will be triggered by the determineWinner method.
    // It should instatiate a bonus round of some sort.
  }
}

export default Game;