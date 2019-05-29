import domUpdates from './domUpdates';

class Puzzle {
  constructor(singlePuzzle) {
    this.singlePuzzle = singlePuzzle;
    this.category = this.singlePuzzle.category;
    this.numLetters = this.singlePuzzle.total_number_of_letters;
    this.numWords = this.singlePuzzle.number_of_words;
    this.correctAnswer = null || this.singlePuzzle.correct_answer.toUpperCase();
    this.splitAnswer = this.correctAnswer.toUpperCase().split('');
  }

  formatPuzzle() {
    let blockLetter = this.splitAnswer.map((letter) => {
      if (letter == " ") {
        return `<div class="space"></div>`
      } else if (letter == "-") {
        return `<div class="puzzle-letter">-</div>`
      } else {
        return `<div class="puzzle-letter"><p class="${letter}" hidden>${letter}</p></div>`
      }
    })
    domUpdates.displayCategory(this.singlePuzzle.category);
    return blockLetter;
  }

  solvedPuzzle(guess) {
    return this.correctAnswer.toUpperCase() === guess.toUpperCase();
  }

}

export default Puzzle;