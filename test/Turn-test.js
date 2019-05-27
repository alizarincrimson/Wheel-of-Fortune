import chai from 'chai';
const expect = chai.expect;

import data from "../src/data";
import Turn from "../src/Turn";
import Game from "../src/Game";
import Player from "../src/Player";
import Wheel from "../src/Wheel";
import Puzzle from "../src/Puzzle";
import Round from "../src/Round";

describe('Turn', function() {

  let game;
  let turn;
  let wheel;
  let puzzle;
  let round;
  beforeEach(function() {
    puzzle = new Puzzle(Object.values(data.puzzles)[0].puzzle_bank[0]);
    wheel = new Wheel(data);
    wheel.getWheelValues();
    game = new Game(data);
    game.createPlayers('Ralph', 'Gary', 'Ted');
    round = new Round(game, puzzle, game.players, wheel)
    turn = new Turn(round , game.players, wheel, puzzle);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should make an instance of Turn', function() {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should be able to get the current player', function() {
    expect(turn.currentPlayer).to.equal(turn.players[0]);
    turn.getCurrentPlayer();
    expect(turn.currentPlayer).to.equal(turn.players[1]);
    turn.getCurrentPlayer();
    expect(turn.currentPlayer).to.equal(turn.players[2]);
    turn.getCurrentPlayer();
    expect(turn.currentPlayer).to.equal(turn.players[0]);
  });

  it('should evaluate the spin to make sure it is a number', function() {
    expect(turn.evaluateSpin(100)).to.equal(true);
  });

  it('should evaluate guess to be true and give score to the player', function() {
    expect(turn.evaluateLetterGuess('A', 100)).to.equal(true);
    expect(turn.currentPlayer.roundScore).to.equal(100);
  });

  it('should return true if the player solves th puzzle correctly', function() {
    expect(turn.solvePuzzle('Armchair', 100)).to.equal(true);
    expect(turn.currentPlayer.roundScore).to.equal(100);
  });

});