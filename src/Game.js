import Player from "./Player";
import Round from "./Round";
import Puzzle from "./Puzzle";
import Wheel from "./Wheel";

class Game {
  constructor(data) {
    this.data = data;
    console.log("construct data: ", this.data)
    this.players = [];
    this.numberOfRounds = 0;
    this.puzzleSet = [];
    this.round;
  }

  createPlayers(name1, name2, name3) {
    let p1 = new Player(name1, 1);
    let p2 = new Player(name2, 2);
    let p3 = new Player(name3, 3);
    this.players.push(p1, p2, p3);
  }

  getRandomPuzzles(data) {
    let allPuzzles = [];
    Object.keys(this.data.puzzles).forEach(type => {
      this.data.puzzles[type].puzzle_bank.forEach(puzzle => {
        allPuzzles.push(puzzle);
      });
    });
    allPuzzles.sort(() => 0.5 - Math.random());
    return this.puzzleSet = allPuzzles.slice(0, 5);
  }

  createRound() {
    let wheel = new Wheel(this.data);
    console.log('game - wheelClass: ', wheel);
    // wheel.getWheelValues();
    // let shuffledWheelValues = wheel.wheelValues
    // console.log('game - wheelValues: ', wheel.wheelValues);
    this.getRandomPuzzles(this.data);
    console.log("game - randomVals: ", this.getRandomPuzzles(this.data))
    let puzzle = new Puzzle(this.puzzleSet.pop());
    console.log("game - newPuzz: ", puzzle)
    let newRound = new Round(this, puzzle, this.players, wheel);
    console.log("game - newRound: ", newRound)
    this.round = newRound;
    console.log("game - round: ", this.round = newRound);
    console.log('puzzleSet:', this.puzzleSet);
    console.log('wheel:', wheel)
    this.numberOfRounds++;
    console.log("game - numofRounds: ", this.numberOfRounds++)
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