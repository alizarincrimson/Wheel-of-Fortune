class Wheel {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
    this.wheelValues;
  }
  getWheelValues() {
    console.log(this.dataFilePath);
    const data = this.shuffleWheel(this.dataFilePath.wheel);
    this.wheelValues = data;
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