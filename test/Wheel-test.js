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

  it('should shuffle the order of the wheel values', function() {
    wheel.getWheelValues();
    const shuffle1 = wheel.wheelValues;
    wheel.getWheelValues();
    const shuffle2 = wheel.wheelValues;
    expect(shuffle1 !== shuffle2);
  });

  it('should return a random value of the wheel', function() {
    wheel.getWheelValues();
    expect(wheel.wheelValues).to.include(wheel.getRandomValue());
  });

});