class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this.minV = min;
    this.maxV = max;
  }
  guess() {
    return Math.round((this.maxV - this.minV) / 2 + this.minV);
  }

  lower() {
    this.maxV = Math.round((this.maxV - this.minV) / 2 + this.minV);
  }

  greater() {
    this.minV = Math.round((this.maxV - this.minV) / 2 + this.minV);
  }
}

module.exports = GuessingGame;
