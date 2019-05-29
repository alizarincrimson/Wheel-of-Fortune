import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import data from "../src/data";
import Puzzle from "../src/Puzzle";
import Round from "../src/Round";
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, 'displayCategory', () => true);
chai.spy.on(Round, "alert", () => true);

describe('Puzzle', function() {

  let puzzle;
  beforeEach(function() {
    puzzle = new Puzzle(Object.values(data.puzzles)[0].puzzle_bank[0]);
  });

  it('should be a function', function() {
    expect(Puzzle).to.be.a('function');
  });

  it('should make an instance of Puzzle', function() {
    expect(puzzle).to.be.an.instanceOf(Puzzle);
  });

  it('should return a div for each letter in the puzzle', function() {
    expect(puzzle.formatPuzzle()).to.be.an('array');
  });
});