
// This is the JavaScript entry file - your code begins here

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './Scss/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import Game from './Game';
import domUpdates from './domUpdates';

let data;
fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data')
  .then(dataFile => dataFile.json())
  .then(dataFile => data = dataFile.data);

$(document).ready(() => {
  let game;
  let possiblePoints;

  $('#start-game').on('click', (e) => {
    e.preventDefault();
    const name1 = $('#input-name-1').val();
    const name2 = $('#input-name-2').val();
    const name3 = $('#input-name-3').val();
    game = new Game(data);
    game.createPlayers(name1, name2, name3);
    game.createRound();
    console.log('hey', game);
    hideForm();
    loadPlayerData(name1, name2, name3);
    loadPuzzleData();
  });

  $('#new-game').on('click', () => {
    location.reload(true);
  });

  function hideForm() {
    $('.gameboard').removeAttr('hidden')
    $('.name-inputs').hide()
  }

  function loadPlayerData(name1, name2, name3) {
    $('.player-name-1').text(name1);
    $('.player-name-2').text(name2);
    $('.player-name-3').text(name3);
    $('#player-1-score').text(`${game.players[0].totalScore}`);
    $('#player-2-score').text(`${game.players[1].totalScore}`);
    $('#player-3-score').text(`${game.players[2].totalScore}`);
  }

  function loadPuzzleData() {
    $('.puzzle-section').append(game.round.puzzle.formatPuzzle());
  }

  $('#buy-vowel').on('click', function(e) {
    e.preventDefault();
  })

  $('#spin-wheel').on('click', function(e) {
    e.preventDefault();
    possiblePoints = game.wheel.getRandomValue();
    $('#wheel-spin').text(possiblePoints);
    if (game.round.turn.evaluateSpin(possiblePoints) === true) {
      $('.guess-inputs').removeAttr('hidden')
    }
  });

  $('#submit-guess').on('click', function(e) {
    e.preventDefault();
    let guess = $('#guess-letter').val().toUpperCase();
    game.round.turn.evaluateLetterGuess(guess, possiblePoints);
    if (game.round.turn.evaluateLetterGuess(guess, possiblePoints)) {
      console.log("guess is in puzzle!")
        revealGuessLetters();
      }
    $('.incorrect-letters').text(`${game.round.incorrectGuesses}`)
    $('.guess-inputs').attr("hidden", "true")
    $('form').trigger("reset");
  })

  function revealGuessLetters() {
    let guess = $('#guess-letter').val().toUpperCase();
    // console.log("revealing guess letters!")
    // console.log("game.puzzle.splitAnswer: ", game.puzzle.splitAnswer)
    game.puzzle.splitAnswer.forEach(function(letter) {
      // console.log("guess: ", guess)
      // console.log("letter: ", letter)
      if (guess === letter) {
        //
        $('.puzzle-letter').removeClass("hidden");
      }
    })
    // let guess = $('#guess-letter').val().toUpperCase();
    // if (guess === splitPuzzle.includes(guess.toUpperCase()))
    // should reveal the letter === guess on the dom puzzle
  }

  $('#solve-puzzle').on('click', function(e) {
    e.preventDefault();
    $('.solve-game').removeAttr('hidden')
  });

  $('#submit-solve').on('click', function(e) {
    e.preventDefault();
    let guess = $('#solve-attempt').val().toUpperCase();
    possiblePoints = game.round.turn.currentPlayer.roundScore;
    game.round.turn.solvePuzzle(guess, possiblePoints)
    if (game.round.turn.solvePuzzle(guess, possiblePoints) === true) {
      $('.puzzle-letter').removeClass("hidden");
    }
    $('.solve-game').attr("hidden", "true")
    $('form').trigger("reset");
    //on click, get val of guess input
    //invoke solvepuzzle method
    // pass argument of input value
  })
});

    // possiblePoints = this.currentPlayer.roundScore;
    // game.round.turn.solvePuzzle(guess, possiblePoints)
    // if (game.round.turn.solvePuzzle(guess, possiblePoints) === true) {
    //   $('.puzzle-letter').removeClass("hidden");
  // }
  // let guess = $('#solve-attempt').val().toUpperCase();
  // game.round.turn.solvePuzzle(guess, possiblePoints);
  // if (game.round.turn.solvePuzzle(guess, possiblePoints)) {
  //   $('.puzzle-letter').removeClass("hidden");
  //   return `Congratulations`
  //     revealGuessLetters();
  //   }
  // $('.incorrect-letters').text(`${game.round.incorrectGuesses}`)
  // $('.guess-inputs').attr("hidden", "true")
  // $('form').trigger("reset");