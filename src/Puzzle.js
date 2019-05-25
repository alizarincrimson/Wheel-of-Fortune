import domUpdates from './domUpdates';

class Puzzle {
  constructor(singlePuzzle) {
    this.singlePuzzle = singlePuzzle;
    console.log('singlePuzz: ', singlePuzzle)
    this.category = null || this.singlePuzzle.category;
    console.log('puzzleCat: ', this.category)
    this.numLetters = this.singlePuzzle.total_number_of_letters;
    console.log('numLet: ', this.singlePuzzle.total_number_of_letters)
    this.numWords = null || this.singlePuzzle.number_of_words;
    console.log('numWord: ', this.singlePuzzle.number_of_words)
    this.correctAnswer = null || this.singlePuzzle.correct_answer.toUpperCase();
    console.log('correctAns: ', this.singlePuzzle.correct_answer.toUpperCase())
    this.splitAnswer = this.correctAnswer.toUpperCase().split('');
    console.log('splitAns: ', this.correctAnswer.toUpperCase().split(''))
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