class Wheel {
  constructor(data) {
    this.data = data;
    this.wheelValues;
  }
  getWheelValues() {
    const wheelData = this.shuffleWheel(this.data.wheel);
    this.wheelValues = wheelData;
  }
  shuffleWheel(values) {
    return values.sort((a, b) => 0.5 - Math.random());
  }
  getRandomValue() {
    const value = this.wheelValues[Math.floor(Math.random() * this.wheelValues.length)];
    return value;
  }
}

export default Wheel;