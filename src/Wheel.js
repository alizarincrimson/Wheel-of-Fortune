class Wheel {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
    this.wheelValues;
  }
  getWheelValues() {
    const data = this.shuffleWheel(this.dataFilePath.wheel);
    this.wheelValues = data;
  }
  shuffleWheel(values) {
    return values.sort((a, b) => 0.5 - Math.random());
  }
  spinWheel() {
    const value = this.wheelValues[Math.floor(Math.random() * this.wheelValues.length)];
    return value;
  }
}

export default Wheel;