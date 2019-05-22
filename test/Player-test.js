import chai from 'chai';
const expect = chai.expect;

import Player from "../src/Player";

describe('Player', function() {

  let player;
  beforeEach(function() {
    player = new Player('Ralph');
  });

  it('should be a function', function() {
    expect(Player).to.be.a('function');
  });

  it('should make an instance of Player', function () {
    expect(player).to.be.an.instanceOf(Player);
  });

  it('should have a name', function() {
    expect(player.name).to.equal('Ralph');
  });

  it('should start with an initial score of 0', function() {
    expect(player.totalScore).to.equal(0);
  });

});