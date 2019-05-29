import domUpdates from './domUpdates';
import Player from "./Player";
import Round from "./Round";
import Puzzle from "./Puzzle";
import Wheel from "./Wheel";

class Game {
  constructor(data) {
    this.data = data;
    this.players = [];
    this.numberOfRounds = 0;
    this.puzzleSet = [];
    this.puzzle;
    this.round;
    this.wheel;
  }

  createPlayers(name1, name2, name3) {
    let p1 = new Player(name1, 1);
    let p2 = new Player(name2, 2);
    let p3 = new Player(name3, 3);
    this.players.push(p1, p2, p3);
  }

  createRound() {
    this.determineWinner();
    this.getSinglePuzzle();
    this.getWheel();
    let newRound = new Round(this, this.puzzle, this.players, this.wheel);
    domUpdates.loadPuzzleData(this.puzzle);
    this.round = newRound;
    this.numberOfRounds++;
  }

  getRandomPuzzles() {
    let allPuzzles = [];
    Object.keys(this.data.puzzles).forEach(type => {
      this.data.puzzles[type].puzzle_bank.forEach(puzzle => {
        allPuzzles.push(puzzle);
      });
    });
    allPuzzles.sort(() => 0.5 - Math.random());
    return this.puzzleSet = allPuzzles.slice(0, 5);
  }

  getSinglePuzzle() {
    this.getRandomPuzzles(this.data);
    let newPuzzle = new Puzzle(this.puzzleSet.pop());
    this.puzzle = newPuzzle;
  }

  getWheel() {
    let wheel = new Wheel(this.data);
    wheel.getWheelValues();
    this.wheel = wheel;
  }

  determineWinner() {
    if (this.numberOfRounds > 4) {
      let highScore = this.players.sort((a,b) => b.totalScore - a.totalScore);
      console.log("highscore", highScore);
      let winner = highScore[0];
    }
  }
}

export default Game;