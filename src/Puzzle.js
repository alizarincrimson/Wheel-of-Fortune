import domUpdates from './domUpdates';

class Puzzle {
  constructor(singlePuzzle) {
    console.log(singlePuzzle)
    this.singlePuzzle = singlePuzzle;
    console.log('singlePuzz: ', singlePuzzle)
    this.category = this.singlePuzzle.category;
    console.log('puzzleCat: ', this.category)
    this.numLetters = this.singlePuzzle.total_number_of_letters;
    console.log('numLet: ', this.numLetters)
    this.numWords = this.singlePuzzle.number_of_words;
    console.log('numWords: ', this.numWords)
    this.correctAnswer = null || this.singlePuzzle.correct_answer.toUpperCase();
    console.log('correctAns: ', this.correctAnswer)
    this.splitAnswer = this.correctAnswer.toUpperCase().split('');
    console.log('splitAns: ', this.splitAnswer)
  }

  formatPuzzle() {
    let blockLetter = this.splitAnswer.map((letter)=> {
      return `<div class="puzzle-letter">${letter}</div>`
    })
    return blockLetter;
    //get the splitAnswer, iterate through each element
    //forEach element, do a template literal, wrap each element w/in a div

  }

  setupRound() {
    // show this.puzzle.category on the DOM
    // count number of words, count letters
    // use this.splitAnswer to populate spots on board based on number of words and length of each word, avoid weird breaks and push entire word gets down to the next line when out of space
  }

  solvePuzzle(guess) {
    // if the current player's turn input.toUpperCase() === this.correctAnswer
    // fire method on Turn to pass winner back to Round?
  }

}

export default Puzzle;