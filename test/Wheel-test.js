import chai from 'chai';
const expect = chai.expect;

import Wheel from "../src/Wheel";
import data from "../src/data";

describe("Wheel", function() {

  let wheel;
  beforeEach(function() {
    wheel = new Wheel(data);
  });

  it('should be a function', function () {
    expect(Wheel).to.be.a('function');
  });

  it('should make an instance of Wheel', function () {
    expect(wheel).to.be.an.instanceOf(Wheel);
  });

  it('should return an array of values that represent the wheel', function() {
    wheel.getWheelValues();
    expect(wheel.wheelValues.length).to.equal(22);
  });

  // it('should shuffle the order of the wheel values', function() {
    
  // });

});