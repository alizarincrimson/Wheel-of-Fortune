import Player from "./Player";
import Round from "./Round";
import data from "./data";
import Puzzle from "./Puzzle";

class Game {
  constructor() {
    this.players = [];
    this.round = 0;
    this.puzzleSet = [];
  }

  createPlayers(name1, name2, name3) {
    let p1 = new Player(name1, 1);
    let p2 = new Player(name2, 2);
    let p3 = new Player(name3, 3);
    this.players.push(p1, p2, p3);
  }

  getPuzzles() {
    let allPuzzles = [];
    Object.keys(data.puzzles).forEach(type => {
      data.puzzles[type].puzzle_bank.forEach(puzzle => {
        allPuzzles.push(puzzle);
      });
    });
    shufflePuzzles(allPuzzles);
  }

  shufflePuzzles(puzzles) {
    puzzles.sort() => .5 - Math.random();
    this.puzzleSet = puzzles.slice(0, 4);
  }
  
  createRound() {
    let wheel = new Wheel();
    let puzzle = new Puzzle(this.puzzleSet.pop());
    let newRound = new Round(puzzle, this.players, wheel);
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