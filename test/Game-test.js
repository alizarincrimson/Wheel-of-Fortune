import chai from "chai";
const expect = chai.expect;

import Game from "../src/Game";

describe('Game', function() {

  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should make an instance of Game', function () {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should take in three players', function() {
    expect(game.players).to.eql([]);
    game.createPlayers('Ralph', 'Ted', 'Dude');
    expect(game.players.length).to.equal(3);
  });

  it('creates a new round in method', function() {
    
  });
});