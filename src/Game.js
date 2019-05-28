import domUpdates from './domUpdates';
import Player from "./Player";
import Round from "./Round";
import Puzzle from "./Puzzle";
import Wheel from "./Wheel";

class Game {
  constructor(data) {
    this.data = data;
    // console.log("construct data: ", this.data)
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
    this.getSinglePuzzle();
    this.getWheel();
    let newRound = new Round(this, this.puzzle, this.players, this.wheel);
    domUpdates.loadPuzzleData(this.puzzle);
    this.round = newRound;
    this.numberOfRounds++;
    // console.log("game.numofRounds: ", this.numberOfRounds++)
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
    // console.log("game - randomVals: ", this.getRandomPuzzles(this.data))
    let newPuzzle = new Puzzle(this.puzzleSet.pop());
    this.puzzle = newPuzzle;
    // console.log("game - newPuzz: ", puzzle)
  }

  getWheel() {
    let wheel = new Wheel(this.data);
    // console.log('game - wheelClass: ', wheel);
    wheel.getWheelValues();
    this.wheel = wheel;
    // let shuffledWheelValues = wheel.wheelValues
    // console.log('game - wheelValues: ', this.wheel);
  }

  determineWinner() {
    // Once and if this.round is greater than 4,
    // determine the winner by the highest score.
    // should return winner.
    // invokes bonus round.
  }

  createBonusRound(winner) {
    // this will be triggered by the determineWinner method.
    // It should instatiate a bonus round of some sort.
  }
}

export default Game;