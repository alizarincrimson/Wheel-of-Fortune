// import Player from "./Player";
// import Round from "./Round";
// import Puzzle from "./Puzzle";

let data;
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data')
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.log('error: try again'));


class Game {
  constructor() {
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
    Object.keys(data.puzzles).forEach(type => {
      data.puzzles[type].puzzle_bank.forEach(puzzle => {
        allPuzzles.push(puzzle);
      });
    });
    allPuzzles.sort(() => 0.5 - Math.random());
    return this.puzzleSet = allPuzzles.slice(0, 5);
  }

  createRound() {
    let wheel = new Wheel(data);
    wheel.getWheelValues();
    this.getRandomPuzzles();
    let puzzle = new Puzzle(this.puzzleSet.pop());
    let newRound = new Round(puzzle, this.players, wheel);
    this.round = newRound;
    console.log('puzzleSet:', this.puzzleSet);
    console.log('wheel:', wheel)
    this.numberOfRounds++;
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