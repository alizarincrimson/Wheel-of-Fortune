import chai from 'chai';
const expect = chai.expect;

import data from "../src/data";
import Turn from "../src/Turn";
import Game from "../src/Game";
import Player from "../src/Player";
import Wheel from "../src/Wheel";

describe('Turn', function() {

  let game;
  let turn;
  let wheel;
  beforeEach(function() {
    wheel = new Wheel(data);
    wheel.getWheelValues();
    game = new Game();
    game.createPlayers('Ralph', 'Gary', 'Ted');
    turn = new Turn('round' ,game.players, wheel, 'puzzle');
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
});