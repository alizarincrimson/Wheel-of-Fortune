import $ from 'jquery';
import './Scss/base.scss';
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
    const name1 = $('#input-name-1').val() || "Charmander";
    const name2 = $('#input-name-2').val() || "Bulbasaur";
    const name3 = $('#input-name-3').val() || "Squirtle";
    game = new Game(data);
    game.createPlayers(name1, name2, name3);
    game.createRound();
    console.log('Game', game);
    domUpdates.hideForm();
    loadPlayerData(name1, name2, name3);
    $('.player-1-backview').removeAttr("hidden")
  });

  $('#new-game').on('click', () => {
    location.reload(true);
  });

  function loadPlayerData(name1, name2, name3) {
    $('.player-name-1').text(name1);
    $('.player-name-2').text(name2);
    $('.player-name-3').text(name3);
    $('#player-1-total-score').text(`${game.players[0].totalScore}`);
    $('#player-2-total-score').text(`${game.players[1].totalScore}`);
    $('#player-3-total-score').text(`${game.players[2].totalScore}`);
    $('#player-1-round-score').text(`${game.players[0].roundScore}`);
    $('#player-2-round-score').text(`${game.players[1].roundScore}`);
    $('#player-3-round-score').text(`${game.players[2].roundScore}`);
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
    if (game.round.turn.evaluateLetterGuess(guess, possiblePoints)) {
        domUpdates.revealGuessLetters();
      }
    $('.incorrect-letters').text(`${game.round.incorrectGuesses}`)
    domUpdates.updatePlayerRoundScore(game.round.turn.currentPlayer);
    $('.guess-inputs').attr("hidden", "true")
    $('form').trigger("reset");
  })

  $('#solve-puzzle').on('click', function(e) {
    e.preventDefault();
    $('.solve-game').removeAttr('hidden')
  });

  $('#submit-solve').on('click', function(e) {
    e.preventDefault();
    let guess = $('#solve-attempt').val().toUpperCase();
    if (game.round.turn.solvePuzzle(guess) === true) {
      $('.puzzle-letter').removeClass("hidden");
    }
    domUpdates.updatePlayerTotalScore(game.round.turn.currentPlayer);
    $('.solve-game').attr("hidden", "true")
    $('form').trigger("reset");
  })
});
