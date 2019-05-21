class Wheel {
  constructor(dataFilePath) {
    this.dataFilePath = dataFilePath;
    this.wheelValues;
  }
  getWheelValues() {
    const data = this.shuffleWheel(this.dataFilePath.wheel);
    console.log(data);
    this.wheelValues = data;
  }
  shuffleWheel(values) {
    return values.sort((a, b) => 0.5 - Math.random());
  }
  spinWheel() {

  }
}

export default Wheel;