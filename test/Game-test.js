import chai from "chai";
const expect = chai.expect;

import Game from "../src/Game";
import Wheel from "../src/Wheel";
import Puzzle from "../src/Puzzle";
import Round from "../src/Round";
import data from '../src/data';

describe('Game', function() {

  let game;
  beforeEach(function() {
    game = new Game(data);
  });

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should make an instance of Game', function () {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should take in values to make three Players', function() {
    expect(game.players).to.eql([]);
    game.createPlayers('Ralph', 'Ted', 'Dude');
    expect(game.players.length).to.equal(3);
  });

  it('should create a puzzleSet array of 5 random puzzles', function() {
    // console.log(game.data.puzzleSet);
    expect(game.puzzleSet).to.eql([]);
    game.getRandomPuzzles(data);
    expect(game.puzzleSet.length).to.equal(5);
  })

  it('should make a single Puzzle from the puzzleSet', function () {
    let puzzle = new Puzzle(game.getRandomPuzzles(data).pop());
    game.getSinglePuzzle();
    expect(puzzle).to.be.an.instanceOf(Puzzle);
  });

  it('should make a new Wheel for the Game', function() {
    let wheel = new Wheel(data);
    game.getWheel();
    expect(wheel).to.be.an.instanceOf(Wheel);
  })

  it('should make a new Round', function() {
    let wheel = new Wheel(data);
    let puzzle = new Puzzle(game.getRandomPuzzles(data).pop());
    let round = new Round(game, puzzle, ('Ralph', 'Ted', 'Dude'), wheel);
    game.createRound();
    expect(round).to.be.an.instanceOf(Round);
  })
});