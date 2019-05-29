import chai from "chai";
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from "../src/Game";
import Wheel from "../src/Wheel";
import Puzzle from "../src/Puzzle";
import Round from "../src/Round";
import Turn from "../src/Turn";
import data from '../src/data';
import domUpdates from "../src/domUpdates";

chai.spy.on(domUpdates, 'clearRound', () => true);

describe('Round', function () {

  let round;
  let game;
  let puzzle;
  let wheel;
  beforeEach(function() {
    puzzle = new Puzzle(Object.values(data.puzzles)[0].puzzle_bank[0]);
    wheel = new Wheel(data);
    game = new Game(data);
    game.createPlayers('Ralph', 'Gary', 'Ted');
    round = new Round(game, puzzle, game.players, wheel)
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should make an instance of Round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should end the round', function() {
    round.roundEnd();

    expect(round.players[0].roundScore).to.equal(0);
  });

  it('should clear all players round scores', function() {
    round.clearRoundScores();

    expect(round.players[0].roundScore).to.equal(0);
    expect(round.players[1].roundScore).to.equal(0);
    expect(round.players[2].roundScore).to.equal(0);
  });

});