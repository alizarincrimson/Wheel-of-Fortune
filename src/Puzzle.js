import domUpdates from './domUpdates';

class Puzzle {
  constructor(singlePuzzle) {
    // console.log(singlePuzzle)
    this.singlePuzzle = singlePuzzle;
    // console.log('singlePuzz: ', singlePuzzle)
    this.category = this.singlePuzzle.category;
    // console.log('puzzleCat: ', this.category)
    this.numLetters = this.singlePuzzle.total_number_of_letters;
    // console.log('numLet: ', this.numLetters)
    this.numWords = this.singlePuzzle.number_of_words;
    // console.log('numWords: ', this.numWords)
    this.correctAnswer = null || this.singlePuzzle.correct_answer.toUpperCase();
    // console.log('correctAns: ', this.correctAnswer)
    this.splitAnswer = this.correctAnswer.toUpperCase().split('');
    // console.log('splitAns: ', this.splitAnswer)
  }

  formatPuzzle() {
    let blockLetter = this.splitAnswer.map((letter) => {
      if (letter == " ") {
        return `<div class="space"></div>`
      } else {
        return `<div class="puzzle-letter hidden">${letter}</div>`
      }
    })
    domUpdates.displayCategory(this.singlePuzzle.category);
    return blockLetter;
  }

  setupRound() {
    // show this.puzzle.category on the DOM
    // count number of words, count letters
    // use this.splitAnswer to populate spots on board based on number of words and length of each word, avoid weird breaks and push entire word gets down to the next line when out of space
  }

  solvedPuzzle(guess) {
    return this.correctAnswer.toUpperCase() === guess.toUpperCase();
  }

}

export default Puzzle;