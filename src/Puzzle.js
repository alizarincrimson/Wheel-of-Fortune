import domUpdates from './domUpdates';

class Puzzle {
  constructor(singlePuzzle) {
    console.log(singlePuzzle)
    this.singlePuzzle = singlePuzzle;
    this.category = null || singlePuzzle.category;
    this.numLetters = singlePuzzle.total_number_of_letters;
    this.numWords = null || singlePuzzle.number_of_words;
    this.correctAnswer = null || singlePuzzle.correct_answer.toUpperCase();
    this.splitAnswer = singlePuzzle.correct_answer.toUpperCase().split('');
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